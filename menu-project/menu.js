const { app, Menu, shell, BrowserWindow } = require('electron');

const isMac = process.platform === 'darwin';
const createMenu = win => {
  console.log(win, '---');
  const config = [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              {
                label: '访问网站',
                click: () => {
                  shell.openExternal('https://www.electronjs.org');
                },
              },
              {
                label: '渲染进程事件',
                click: () => {
                  win.webContents.send('toPreload', 'The weather is fine today');
                },
              },
              {
                type: 'separator',
              },
              {
                role: isMac ? 'hide' : 'quit',
              },
              // {
              //   label: '退出',
              //   click: () => {
              //     app.quit();
              //   },
              // },
            ],
          },
          {
            label: '操作',
            submenu: [
              {
                label: '打开窗口',
                // 定义热键
                accelerator: 'CommandOrControl+A',
                click: () => {
                  new BrowserWindow({
                    width: 300,
                    height: 300,
                  });
                },
              },
            ],
          },
        ]
      : []),
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(config));
};

module.exports = {
  createMenu,
};
