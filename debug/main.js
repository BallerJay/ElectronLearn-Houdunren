const { BrowserWindow, app } = require('electron');
const path = require('path');

const handleCreateWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 300,
  });

  mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
};

app.whenReady().then(() => {
  handleCreateWindow();
});
