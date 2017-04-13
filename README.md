# Quotes for Visual Studio Code

A (very) simple quotes helper for VSCode.

Place a cursor inside one or more strings, and toggle between single and double quotes.

This extension currently does not support multi-line strings, ES6 JS template strings, Python `docstrings`, or Ruby `heredoc` strings, but pull requests are welcome!

Also it currently uses the fastest (and dumbest) possible algorithm, so it
will probably do bad things if you run it while the cursor is not
inside a string.
E.g. If there are two strings on either side of the cursor, it will replace the last
quote of the previous string, and the first quote of the next string.

If this happens to you, I would recommend pressing "Ctrl+Z",
and placing the cursor in the correct position.

If you feel strongly about fixing this case so that it parses all strings properly,
then pull requests are welcome!


## Example

#### Before:

```js
"Here's a \"string\"!"
```

#### After running `quotes.toggleBetweenSingleAndDoubleQuotes`:

```js
'Here\'s a "string"!'
```


## Install

`Ctrl/Cmd + P` in Visual Studio Code, then:

```sh
ext install quotes
```

## Commands

- `quotes.toggleBetweenSingleAndDoubleQuotes`
  Toggle between single and double quotes.


## License

MIT License.
