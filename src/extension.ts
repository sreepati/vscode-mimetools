'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Mime } from './main';
import { createHash } from 'crypto';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


    let encode64 = vscode.commands.registerCommand('extension.encode64', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.e64(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let decode64 = vscode.commands.registerCommand('extension.decode64', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.d64(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let encodemd5 = vscode.commands.registerCommand('extension.encodemd5', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = createHash('md5').update(text).digest('hex');

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let encodeutf8 = vscode.commands.registerCommand('extension.encodeutf8', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.utf8e(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let decodeutf8 = vscode.commands.registerCommand('extension.decodeutf8', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.utf8d(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let encodeurl = vscode.commands.registerCommand('extension.encodeurl', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.eurl(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let decodeurl = vscode.commands.registerCommand('extension.decodeurl', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.durl(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let fullencodeurl = vscode.commands.registerCommand('extension.fullencodeurl', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.eurlf(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let lcase = vscode.commands.registerCommand('extension.lcase', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.lcase(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let ucase = vscode.commands.registerCommand('extension.ucase', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.ucase(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let ccase = vscode.commands.registerCommand('extension.ccase', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.ccase(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });

    let s2c = vscode.commands.registerCommand('extension.s2c', () => {

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);
        let response = Mime.s2c(text);

        editor.edit(function (editBuilder) {
            editBuilder.replace(selection, response);
        });

    });


    context.subscriptions.push(encodemd5);
    context.subscriptions.push(encode64);
    context.subscriptions.push(decode64);
    context.subscriptions.push(encodeutf8);
    context.subscriptions.push(decodeutf8);
    context.subscriptions.push(encodeurl);
    context.subscriptions.push(decodeurl);
    context.subscriptions.push(fullencodeurl);
    context.subscriptions.push(lcase);
    context.subscriptions.push(ucase);
    context.subscriptions.push(ccase);
    context.subscriptions.push(s2c);
}

// this method is called when your extension is deactivated
export function deactivate() {
}