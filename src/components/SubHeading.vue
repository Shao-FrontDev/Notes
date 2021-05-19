<template>
  <el-row class="tac">
    <el-col :span="24">
      <h5>小计划</h5>
      <el-menu
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="daily">
          <i
            class="el-icon-location"
            style="color:white"
          ></i>
          <span slot="title" style="color:white"
            >日计划</span
          >
        </el-menu-item>
        <el-menu-item index="monthly">
          <i class="el-icon-menu" style="color:white"></i>
          <span slot="title" style="color:white"
            >周计划</span
          >
        </el-menu-item>
        <el-menu-item index="yearly">
          <i
            class="el-icon-document"
            style="color:white"
          ></i>
          <span slot="title" style="color:white"
            >月计划</span
          >
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  background: #536fdf;
}
</style>
