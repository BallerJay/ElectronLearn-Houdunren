const { Menu, app, dialog, shell } = require('electron');

const templateMenu = [
  {
    label: app.name,
    submenu: [
      {
        label: '访问官网 ',
        click: async () => {
          const res = await dialog.showMessageBox({
            title: '提示',
            detail: '是否打开官网',
            buttons: ['取消', '确认'],
            checkboxLabel: '确定访问吗？',
            // checkboxChecked: false,
          });
          if (!res.checkboxChecked) return dialog.showErrorBox('温馨提示', '请先勾选复选框');
          if (res.response === 1) shell.openExternal('https://www.baidu.com');
        },
      },
      {
        label: '退出',
        click: () => {
          dialog
            .showMessageBox({
              type: 'info',
              title: '提示',
              message: '是否确认退出',
              buttons: ['取消', '确认'],
              // cancelId: 0,  对应的esc快捷键
            })
            .then(index => {
              if (index.response === 1) {
                app.quit();
              }
            });
        },
      },
    ],
  },
];
Menu.setApplicationMenu(Menu.buildFromTemplate(templateMenu));
