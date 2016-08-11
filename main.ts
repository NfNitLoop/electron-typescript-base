import {BrowserWindow, app} from "electron";


let win : Electron.BrowserWindow;

function createMain() {
    if (win != null) {
        return; // already have a main!
    }
    
    win = new BrowserWindow();
    win.on("close", () => { win = null; });
    win.loadURL(`file://${__dirname}/../index.html`);
    win.show();
}

app.on("ready", createMain);

app.on('window-all-closed', () => { app.quit(); });