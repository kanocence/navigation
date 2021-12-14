<template>
  <settingItem title="主题色" type="content" item-class="setting-header">
    <template #content>
      <el-color-picker
        v-model="color"
        show-alpha
        color-format="hex"
        @change="pickColorChange"
        @active-change="pickColor"
        :predefine="predefineColors" /></template
  ></settingItem>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useCssVar } from "@vueuse/core";
import { useCounterStore } from "@/stores/counter";
import settingItem from "./setting-item.vue";

export default defineComponent({
  components: {
    settingItem,
  },
  setup() {
    const counter = useCounterStore();

    // color picker
    const predefineColors = ref([
      "#ff4500",
      "#ff8c00",
      "#ffd700",
      "#90ee90",
      "#00ced1",
      "#d9ecff",
      "#1e90ff",
      "#c71585",
      "#2E3338FF",
      "rgba(255, 69, 0, 0.68)",
      "rgb(255, 120, 0)",
      "hsv(51, 100, 98)",
      "hsva(120, 40, 94, 0.5)",
      "hsl(181, 100%, 37%)",
      "hsla(209, 100%, 56%, 0.73)",
      "#c7158577",
    ]);
    const el = ref(document.documentElement);
    const primary = useCssVar("--el-color-primary", el);
    const color = ref(primary.value);
    const pickColor = (curr: string) => {
      counter.setPrimaryColor(curr);
    };
    const pickColorChange = (change: string) => {
      change === null && (color.value = primary.value);
    };

    return {
      color,
      predefineColors,
      pickColor,
      pickColorChange,
    };
  },
});
</script>
