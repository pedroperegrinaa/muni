const { app, BrowserWindow } = require('electron');
const path = require('path');

require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
});


const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        frame: false,
        // titleBarStyle: 'hidden',
        // titleBarOverlay: {
        //     color: '#2f3241',
        //     symbolColor: '#8DD32D'
        // },
        // transparent: true,
        // backgroundColor: '#FFF',
        // webPreferences: {
        //     nodeIntegration: true
        // }
    })

    win.loadFile('index.html');
    win.setWindowButtonVisibility(true);
}

app.whenReady().then(() => {
    createWindow()
})