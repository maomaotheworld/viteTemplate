<template>
  <div class="SideMenu" ref="SideMenu">
    <!-- <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">-</el-radio-button>
      <el-radio-button :label="true">+</el-radio-button>
    </el-radio-group> -->

    <el-menu
      default-active="2"
      class="elMenu"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 測試 -->
      <template v-for="(it, index) in MyMenu" :key="index + 'menu'">
        <template v-if="!it.NotInMenu">
          <el-sub-menu v-if="it.children" :index="index.toString()">
            <template #title>
              <i class="fa-regular" :class="it.meta.icon"></i>
              <span>{{ it.meta.label }}</span>
            </template>
            <template v-for="(it2, index2) in it.children">
              <el-menu-item v-if="!it2.NotInMenu" :index="`${index}-${index2}`">
                <i class="fa-regular fa-wand-magic-sparkles"></i>
                <span> {{ it2.meta.label }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
          <div class="line" v-if="index == MyMenu.length - 1"></div>
          <!-- no children -->

          <el-menu-item v-if="!it.children" :index="index.toString()">
            <template #title>
              <i class="fa-regular" :class="it.meta.icon"></i>
              <span>{{ it.meta.label }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref, reactive, watchEffect, nextTick } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import MyMenu from "./Menu";
const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss">
.SideMenu {
  .line {
    height: 1px;
    width: 90%;
    background-color: #bfbfbf;
    text-align: center;
    margin: 0 auto;
  }
  .elMenu:not(.el-menu--collapse) {
    min-height: 400px;
  }
  .elMenu .el-menu-item,
  .el-sub-menu__title span,
  .el-sub-menu__title svg {
    // 定義原先的顏色
    color: #727676;
  }

  .el-sub-menu__title:hover {
    background-color: unset;
  }

  .el-menu-item:hover {
    background-color: #dedede !important;
  }

  .elMenu .is-opened,
  .elMenu .is-active {
    color: rgb(77 125 193);
    // color: wheat;
    font-weight: 600;
  }

  .elMenu .is-active:after {
    //鎖定時的border
    content: "";
    background: rgb(77, 125, 193);
    position: absolute;
    top: 35%;
    left: 0;
    height: 18px;
    width: 3px;
  }
  .elMenu .is-opened:after {
    //去除多餘active border
    height: 0px;
  }
  .el-menu-item:after {
    //去除多餘active border
    height: 0px;
  }

  .el-sub-menu__title svg,
  .el-menu-item svg {
    font-size: 15px;
    width: 30px;
  }
  .el-radio-group {
    align-items: unset;
    flex-wrap: unset;
    font-size: unset;
  }
}
</style>
