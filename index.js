const { connectToFirebird } = require('./conbd/conclass.js');

connectToFirebird();

const { app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow= new BrowserWindow({
        width: 600,
        heiht: 400,
        resizable: false,
        icon: __dirname + '/logo-2-300x59edit.png',
    }),

    mainWindow.loadURL(`File://${__dirname}/index.html`)

});