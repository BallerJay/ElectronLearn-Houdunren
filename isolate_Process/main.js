const { app, ipcMain, BrowserWindow, screen } = require('electron');
const { createWindow } = require('./window');
app.whenReady().then(createWindow);
ipcMain.on('mainEvent', (event, value) => {
  console.log('333333');
});

ipcMain.on('setWindowPosition', (event, value) => {
  const { width, height } = value;
  const win = BrowserWindow.fromWebContents(event.sender);
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
  win.title = 'abc';
  // win.setSize(width, height);
  win.setBounds(
    { width, height, x: screenWidth / 2 - width / 2, y: screenHeight / 2 - screenHeight / 2 },
    true
  );
});
