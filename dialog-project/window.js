const { BrowserWindow, shell } = require('electron');
const path = require('path');
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1500,
    y: 100,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
  // 默认用浏览器打开第三方URL链接
  mainWindow.webContents.setWindowOpenHandler(details => {
    shell.openExternal(details.url);
    return {
      action: 'deny',
    };
  });
  return mainWindow;
};

module.exports = {
  createWindow,
};
