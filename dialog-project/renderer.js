window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#selectBtn');
  const container = document.querySelector('#container');
  btn.addEventListener('click', async () => {
    const res = await window.api.selectFilePreload();
    for (const file of res) {
      const inputEle = document.createElement('input');
      inputEle.setAttribute('value', file);
      container.appendChild(inputEle);
    }
  });
});

// 保存文件
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#saveBtn');
  btn.addEventListener('click', async () => {
    const textarea = document.querySelector('[name="content"]');
    window.api.saveToFile(textarea.value);
  });
});
