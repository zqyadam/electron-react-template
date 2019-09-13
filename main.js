const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

let mainWindow;
const path = require("path");

app.on("ready", () => {
  // add React Developer Tools
  BrowserWindow.addDevToolsExtension(path.join(__dirname, "/plugin/4.0.6_0"));
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 768,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const urlLocation = isDev ? "http://localhost:3000" : "";
  mainWindow.loadURL(urlLocation);
});
