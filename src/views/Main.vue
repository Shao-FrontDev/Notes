<template>
  <el-container>
    
    <el-aside width="200px" 
      ><Subheading
    /></el-aside>
    <el-container>
      <el-header><h1>Notes</h1></el-header>
      <el-main>
        <el-row type="flex" justify="center" align="center">
          <Create />
        </el-row>
        <Notes />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Subheading from "../components/SubHeading.vue";
import Notes from "../components/Notes.vue";
import Create from "../components/Create.vue";
export default {
  components: {
    Create,
    Notes,
    Subheading,
  },
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  color: rgb(85, 85, 85);
  text-align: center;
  line-height: 60px;
}

h1 {
  font-size: 36px;
  color: #506ad4;
}

.el-aside {
  background-color: #536fdf;
  color: white;
  text-align: center;
  line-height: 200px;
}

.el-container {
  min-height: 100vh;
}
</style>
