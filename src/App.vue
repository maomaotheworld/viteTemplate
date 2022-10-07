<template>
  <div id="app"></div>

  <router-view v-loading="loading" />
  <!-- <div @click="goRoute('Layout')">LAYOUT</div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from "./components/HelloWorld.vue";

import { useRouter } from "vue-router";
import { useStore } from "./store/main";
const store = useStore();

const router = useRouter();
const loading = store.isLoading;

// let goRoute = (string: string) => {
//   router.push({ name: string });
// };
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
