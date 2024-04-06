// window.addEventListener('DOMContentLoaded', () => {
//   const btnEle = document.querySelector('button');
//   btnEle.addEventListener('click', () => {
//     // window.api.toMain();
//     // console.log(window.hd);
//     window.toMain();
//   });
// });

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#edit');
  btn.addEventListener('click', () => {
    const width = Number(document.querySelector('[name="width"]').value);
    const height = Number(document.querySelector('[name="height"]').value);
    window.api.changeWindowSize(width, height);
  });
});
