<template>
  <div class="MyLayout" ref="MyLayout">MyLayout</div>
</template>

<script setup lang="ts">
import { computed, PropType, ref, reactive, watchEffect, nextTick } from "vue";
</script>

<style lang="scss" scoped>
.MyLayout {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(215, 180, 116);
}
</style>
