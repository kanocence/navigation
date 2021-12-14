<template>
  <div class="tools">
    <Drawer></Drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Drawer from "./Drawer/index.vue";

export default defineComponent({
  components: {
    Drawer,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.tools {
  position: absolute;
  right: 0;
  padding: 1rem;

  /deep/.el-icon {
    color: rebeccapurple;
  }
}

@media screen and (max-width: 400px) {
  .tools {
    bottom: 0;
  }
}

@media screen and (min-width: 400px) {
  .tools {
    top: 0;
  }
}
</style>
