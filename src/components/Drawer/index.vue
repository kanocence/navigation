<template>
  <el-icon @click="drawer = true"><setting /></el-icon>

  <el-drawer
    v-model="drawer"
    direction="rtl"
    :show-close="true"
    :size="width"
    custom-class="setting-custom"
  >
    <div class="setting">
      <colorPicker></colorPicker>
      <backgroundImage></backgroundImage>
      <el-divider></el-divider>
      <engine></engine>
      <toggle></toggle>
      <el-divider></el-divider>
      <div>about</div>
      <div>{{ width }}px</div>
    </div>
  </el-drawer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Setting } from "@element-plus/icons";
import { useCounterStore } from "@/stores/counter";
import colorPicker from "./components/color-picker.vue";
import backgroundImage from "./components/background-image.vue";
import engine from "./components/engine.vue";
import toggle from "./components/toggle.vue";

export default defineComponent({
  components: {
    Setting,
    colorPicker,
    backgroundImage,
    engine,
    toggle,
  },
  setup() {
    const counter = useCounterStore();

    const drawer = ref(false);
    const screen = counter.screen;

    // compute drawer width
    let width = computed(() =>
      // max width in pc = 412px
      screen?.mobile
        ? screen.width
        : screen?.width ?? 0 * 0.35 > 412
        ? 412
        : "35%"
    );

    return {
      drawer,
      width,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-icon {
  font-size: 28px;
}
.setting::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.setting {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}
.setting {
  height: calc(100vh - 82.5px);
  .setting-item {
    margin-top: 24px;
  }
}
</style>
<style>
.setting-custom .el-drawer__header {
  margin-bottom: 0;
}
</style>
