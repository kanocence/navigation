<template>
  <Navigation></Navigation>
  <Tools></Tools>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";
import Tools from "./components/Tools.vue";
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  components: {
    Navigation,
    Tools,
  },
  setup() {
    const counter = useCounterStore();

    counter.setScreen({
      mobile: navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
        ? true
        : false,
      width: window.screen.width,
      height: window.screen.height,
    });

    // el primary color
    counter.setPrimaryColor();
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url("./assets/webp/bg.webp");
  background-size: cover;
  background-attachment: fixed;
  background-color: var(--el-color-primary);
}
</style>
