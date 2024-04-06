const { ipcRenderer, contextBridge } = require('electron');

// ipcRenderer.send('saveFile'); // 使用主进程中提供的方法

// contextBridge.exposeInMainWorld('api', {
//   hd: () => {
//     ipcRenderer.send('saveFile');
//   },
// }); // 向渲染进程全局的window中暴露一个api的属性

window.addEventListener('DOMContentLoaded', () => {
  for (const app of ['chrome', 'electron', 'node']) {
    const ele = document.querySelector(`#${app}`);
  }
});
ipcRenderer.on('test', () => {
  // 预加载文件可以操作dom
  const ele = document.querySelector('#counter');
  ele.innerHTML = Number(ele.textContent) + 1;
});

contextBridge.exposeInMainWorld('api', {
  counter: cb => {
    ipcRenderer.on('counter', (event, value) => {
      cb(value);
    });
  },
  hd: () => {
    ipcRenderer.send('saveFile2');
  },
  upload: async cb => {
    const file = await ipcRenderer.invoke('selectFile');
    cb(file);
  },
  changeTitle: newTitle => {
    console.log(newTitle, 'newTitle');
    ipcRenderer.send('changeTitle', newTitle);
  },
});

ipcRenderer.on('msg', (event, message) => {
  console.log(message);
});
