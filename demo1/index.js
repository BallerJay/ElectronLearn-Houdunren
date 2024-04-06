const { BrowserWindow, app } = require('electron');
const path = require('path');

const handleCreateWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
    alwaysOnTop: true, // 置顶窗口
    x: 1500,
    y: 100,
    frame: false,
    transparent: true, // 窗口透明
  });

  // mainWindow.loadURL('https://www.houdunren.com');
  // mainWindow.webContents.toggleDevTools(); // 默认开启开发者调试器
  mainWindow.setAspectRatio(1); // 窗口比例
  mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
};

app.whenReady().then(() => {
  handleCreateWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  handleCreateWindow();
});
