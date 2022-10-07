<template>
  <div class="about">
    <h1>This is an about page</h1>

    {{ count }}

    <input v-model="count" />

    <!-- <button @click="increment()"></button> -->
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref, reactive, watchEffect, nextTick } from "vue";

const count = ref(123);
let MyResData = reactive([
  {
    name: "一號",
    status: 0,
  },
  {
    name: "二號",
    status: 1,
  },
  {
    name: "三號",
    status: 1,
  },
]);

const increment = computed(() => {
  return MyResData.filter((it) => {
    return it.status == 0;
  });
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
