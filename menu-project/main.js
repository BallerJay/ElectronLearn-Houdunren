const { app, ipcMain, BrowserWindow, screen } = require('electron');
const { createWindow } = require('./window');
const { createMenu } = require('./menu');
require('./contextmenu');
app.whenReady().then(() => {
  const win = createWindow();
  createMenu(win);
});
