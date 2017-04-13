import {
    StringType
} from './quotes';

interface Transformer {
    (body: string): string;
}

function transformSingleToDouble(body: string): string {
    let factorsRegex = /* /$single-to-double-factors/ */ /(\\')|(")|\\[^]/g;

    return body.replace(factorsRegex, /* /$single-to-double-factors/ */ (
        text: string,
        escapedQuote: string,
        unescapedQuote: string
    ) => {
        if (escapedQuote) {
            return "'";
        } else if (unescapedQuote) {
            return '\\"';
        } else {
            return text;
        }
    });
}

function transformDoubleToSingle(body: string): string {
    let factorsRegex = /* /$double-to-single-factors/ */ /(\\")|(')|\\[^]/g;

    return body.replace(factorsRegex, /* /$double-to-single-factors/ */ (
        text: string,
        escapedQuote: string,
        unescapedQuote: string
    ) => {
        if (escapedQuote) {
            return '"';
        } else if (unescapedQuote) {
            return "\\'";
        } else {
            return text;
        }
    });
}

export function transform(
    body: string,
    fromType: StringType,
    toType: StringType,
    first = true,
    last = true
): string {
    if (fromType === toType) {
        // do nothing.
    } else if (fromType === StringType.doubleQuoted) {
        // double to single.
        body = transformDoubleToSingle(body);
    } else {
        // single to double.
        body = transformSingleToDouble(body);
    }

    return wrapLiteral(body, toType, first, last);
}

export function wrapLiteral(
    body: string,
    type: StringType,
    first = true,
    last = true
): string {
    switch (type) {
        case StringType.singleQuoted:
            return `'${body}'`;
        case StringType.doubleQuoted:
            return `"${body}"`;
    }
}
