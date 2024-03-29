const vscode = require('vscode');
const blamer = require('./blamer');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let start = vscode.commands.registerCommand('svn-blame.show', () => {
        blamer.init();
    });

    let clear = vscode.commands.registerCommand('svn-blame.clear', () => {
        blamer.destroy();
    });

    context.subscriptions.push(start);
    context.subscriptions.push(clear);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}

exports.deactivate = deactivate;