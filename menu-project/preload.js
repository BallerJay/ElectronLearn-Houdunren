const { ipcRenderer, contextBridge } = require('electron');
contextBridge.exposeInMainWorld('api', {
  menuEvent: callback => {
    ipcRenderer.on('toPreload', (event, value) => {
      callback(value);
    });
  },
});
