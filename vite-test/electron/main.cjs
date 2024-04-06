const { BrowserWindow, app, ipcMain, dialog } = require('electron');
const { createMenu } = require('./menu.cjs');
const path = require('path');
const fs = require('fs');

const handleCreateWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    // alwaysOnTop: true, // 置顶窗口
    x: 1500,
    y: 100,
    // frame: false,
    // transparent: true, // 窗口透明
    webPreferences: {
      // 预加载脚本
      preload: path.resolve(__dirname, './reload.cjs'),
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL('http://localhost:5173');
  mainWindow.webContents.openDevTools();
  createMenu(mainWindow);
};

app.whenReady().then(() => {
  handleCreateWindow();
});

ipcMain.on('saveFile', () => {
  console.log('saveFile');
  const content = fs.readFileSync('package.json', 'utf-8');
  console.log(content, '---');
});

ipcMain.on('saveFile2', event => {
  BrowserWindow.fromWebContents(event.sender).send('msg', '已经收到通知');
});

ipcMain.handle('selectFile', async event => {
  const { filePaths } = await dialog.showOpenDialog({});
  return filePaths[0];
});

ipcMain.on('changeTitle', (event, value) => {
  BrowserWindow.fromWebContents(event.sender).title = value;
});
