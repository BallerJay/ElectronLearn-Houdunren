const { BrowserWindow } = require('electron');
const path = require('path');
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    x: 1500,
    y: 100,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
      // contextIsolation: false, // 默认预加载脚本和渲染进程之间是隔离的
      // nodeIntegration: true,
      sandbox: false,
    },
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
};

module.exports = {
  createWindow,
};
