const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');

// contextBridge.exposeInMainWorld('api', {
//   toMain: value => {
//     ipcRenderer.send('mainEvent', value);
//   },
// });

// window.toMain = value => {
//   ipcRenderer.send('mainEvent', value);
// };

contextBridge.exposeInMainWorld('api', {
  changeWindowSize: (width, height) => {
    ipcRenderer.send('setWindowPosition', { width, height });
  },
});
// 写一个排序函数
