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
  box-sizing: border-box;
}

#app {
  min-width: 680px;
  max-width: 1500px;
}
</style>
