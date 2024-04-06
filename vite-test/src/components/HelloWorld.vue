<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);

// console.log((window as any).api.hd(), '---');
(window as any).api.counter((value: number) => {
  const ele = document.querySelector('#counter');
  ele!.innerHTML = String(Number(ele!.textContent) + value);
});

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn');
  btn?.addEventListener('click', () => {
    (window as any).api.hd();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#uploadFileBtn');
  btn?.addEventListener('click', () => {
    (window as any).api.upload((file: any) => {
      console.log(file, 'render');
      document.querySelector('input')!.value = file;
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#setTitle');
  btn?.addEventListener('click', () => {
    const titleValue = (document.querySelector('#inputTitle') as HTMLInputElement)!.value;
    (window as any).api.changeTitle(titleValue);
  });
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out3
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div id="chrome"></div>
  <div id="electron"></div>
  <div id="node"></div>
  <div id="counter">22</div>
  <div id="btn">向主进程发送</div>
  <div id="uploadFileBtn">上传文件</div>
  <input type="text" />

  <div id="setTitle">设置标题</div>
  <input type="text" id="inputTitle" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
