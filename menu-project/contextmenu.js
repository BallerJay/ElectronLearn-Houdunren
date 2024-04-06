const { ipcMain, app, BrowserWindow, Menu, shell } = require('electron');

ipcMain.on('mainPopMenu', event => {
  const template = [
    {
      label: '退出',
      click: () => app.quit(),
    },
    {
      label: '访问官网',
      click: () => {
        shell.openExternal('https://www.electronjs.org');
      },
    },
  ];
  const menu = Menu.buildFromTemplate(template);

  menu.popup(BrowserWindow.fromWebContents(event.sender));
});
