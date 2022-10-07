<template>
  <div class="layout" ref="Layout">
    {{ userStore.name }}

    <!-- //左 -->
    <!-- <div v-loading="loading">LOADING測試</div> -->
    <!-- tabs -->
    <div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            全部
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            進行中
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            已完成
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          {{
            MyResData.map((it) => {
              return it.name;
            })
              .toString()
              .replace(/,/g, "、")
          }}
        </div>
        <div
          class="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          進行中 {{ MyResWorking }}
        </div>
        <div
          class="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          已完成{{ MyResDone }}
        </div>
      </div>
    </div>

    <!-- content -->
  </div>
</template>

<script setup lang="ts">
import { MyUerName } from "@/store/user";

import { computed, PropType, ref, reactive, watchEffect, nextTick } from "vue";

console.log(import.meta.env.VITE_SOME_KEY);
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

const MyResWorking = computed(() => {
  return MyResData.filter((it) => {
    return it.status == 0;
  });
});

const MyResDone = computed(() => {
  return MyResData.filter((it) => {
    return it.status == 1;
  });
});

const userStore = MyUerName();
userStore.updateName("I am Albee In Layout");
</script>

<!-- ref是 單純Number 單純string >> let xxxx = ref('xxxx') -->

<!-- 
<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
  methods: {},
};
</script> -->

<style lang="scss">
.layout {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: aquamarine;
}
</style>
