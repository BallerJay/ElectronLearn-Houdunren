const { Menu } = require('electron');

const createMenu = windowInstance => {
  const menu = [
    {
      label: '菜单',
      submenu: [
        {
          label: '增加',
          click: () => {
            // windowInstance.webContents.send('test');
            windowInstance.webContents.send('counter', 1);
          },
        },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
};
module.exports = {
  createMenu,
};
