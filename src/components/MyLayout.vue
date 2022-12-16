<template>
  <div class="MyLayout" ref="MyLayout">
    <div class="hello">早安，約翰，一起喝杯咖啡</div>

    <el-icon class="arrow" @click="scollRight"><Right /></el-icon>
    <div class="DashWrapper" ref="DashWrapperRef">
      <div class="dashBox" v-for="(it, index) in 11" :key="index">
        <div class="uppertext">商品</div>
        <div class="lowertext">20</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  PropType,
  ref,
  reactive,
  watchEffect,
  nextTick,
  mounted,
} from "vue";

let MyCarousel = reactive([
  {
    name: "一號",
    status: 0,
    img: "https://picsum.photos/100/100",
  },
  {
    name: "二號",
    status: 1,
    img: "https://picsum.photos/100/100",
  },
  {
    name: "三號",
    status: 1,
    img: "https://picsum.photos/100/100",
  },
  {
    name: "四號",
    status: 3,
    img: "https://picsum.photos/100/100",
  },
]);

const DashWrapperRef = ref<any>(null);
const scollRight = () => {
  DashWrapperRef.value.scrollLeft += 10;
};
</script>

<style lang="scss">
.MyLayout {
  display: flex;
  flex-direction: column;

  height: 100%;
  .hello {
    width: 100%;
  }
  .arrow {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 30%;
    right: 3%;
    height: 1.5em;
    width: 1.5em;
    background-color: antiquewhite;
    border-radius: 50%;
    z-index: 2;
  }
  .DashWrapper {
    display: -webkit-inline-box;
    width: 100%;
    overflow: hidden;

    .dashBox {
      width: 80px;
      height: 80px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #9ac9c9bd;
      .uppertext {
      }
      .lowertext {
      }
    }
  }
}
</style>
