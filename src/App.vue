<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./views/Main.vue";
export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
