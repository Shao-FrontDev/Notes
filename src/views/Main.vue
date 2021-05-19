<template>
  <el-container>
    <el-header><h1>Notes</h1></el-header>
    <el-main>
      <el-row type="flex" justify="center" align="center">
        <Create />
      </el-row>
      <Notes />
    </el-main>
  </el-container>
</template>

<script>
import Notes from "../components/Notes.vue";
import Create from "../components/Create.vue";
export default {
  components: {
    Create,
    Notes,
  },
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: rgb(85, 85, 85);
  text-align: center;
  line-height: 60px;
}
</style>
