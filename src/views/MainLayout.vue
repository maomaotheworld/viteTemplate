<template>
  <div class="mainLayout" ref="mainLayout">
    <div class="mainContainer">
      <div class="top">Edgenta</div>
      <div class="bottom">
        <SideMenu class="SideMenu" /> <MyLayout class="MyLayout" />
      </div>
    </div>
    <!-- //左 -->

    <!-- content -->
  </div>
</template>

<script setup lang="ts">
import SideMenu from "../components/SideMenu.vue";
import MyLayout from "../components/MyLayout.vue";
import { computed, PropType, ref, reactive, watchEffect, nextTick } from "vue";
</script>

<style lang="scss" scoped>
.mainLayout {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #fafafa;

  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  .mainContainer {
    box-shadow: 3px 4px 15px 0px #ccc6c6;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .top {
      height: 80px;
    }
    .bottom {
      display: flex;
      width: 100%;
      height: 100%;
      padding-right: 10px;
      padding-left: 10px;
      .SideMenu {
        margin-left: 1.7%;

        height: 100%;
        width: 14%;
        box-shadow: 0px 4px 8px 4px #eee7e7;
        min-width: 200px;
      }
      .MyLayout {
        margin-left: 1.11%;
        margin-right: 0.88%;
        flex-grow: 1;
      }
    }
  }
}
</style>
