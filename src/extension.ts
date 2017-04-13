import * as FS from 'fs';
import * as Path from 'path';

import {
    window as Window,
    commands as Commands,
    workspace as Workspace,
    Range,
    TextEditor
} from 'vscode';

import {
    StringType,
    findActiveStringTargetInEditor,
    findActiveStringTargetsInEditor
} from './quotes';

import {
    transform
} from './transform';

export function activate() {
    let config = Workspace.getConfiguration();

    Commands.registerTextEditorCommand('quotes.toggleBetweenSingleAndDoubleQuotes', (editor, edit) => {
        let result = findActiveStringTargetInEditor(editor);
        let activeTarget = result.target;

        if (!activeTarget) {
            return;
        }

        let type = activeTarget.type === StringType.doubleQuoted ?
            StringType.singleQuoted :
            StringType.doubleQuoted;

        let value = transform(activeTarget.body, activeTarget.type, type);

        edit.replace(activeTarget.range, value);
    });
}
