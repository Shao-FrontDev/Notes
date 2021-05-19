<template>
  <el-col :span="8" class="wrapper">
    <div v-if="!opened">
      <el-card :body-style="{ padding: '40px' }"
        ><h4>Take a note...</h4>
        <span>0/100</span></el-card
      >
    </div>

    <div v-else>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-input
            placeholder="title"
            type="text"
            v-model="title"
          ></el-input>
        </div>
        <div>
          <el-input
            placeholder="请输入内容"
            type="textarea"
            rows="8"
            v-model="content"
          ></el-input>
        </div>

        <div class="box-footer">
          <el-popover
            placement="top-start"
            trigger="hover"
            width="50"
            ><Colors v-on:getColor="getColor" />
            <el-button slot="reference">Color</el-button>
          </el-popover>
          <el-button @click="save">Save</el-button>
        </div>
      </el-card>
    </div>
  </el-col>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import Colors from "./Colors.vue";
export default {
  components: {
    Colors,
  },
  data() {
    return {
      todos: [],
      opened: false,
      title: "",
      content: "",
      color: "",
      id: "",
    };
  },
  methods: {
    getColor(color) {
      this.color = color;
    },
    save() {
      let note = {
        title: this.title,
        content: this.content,
        color: this.color,
        id: uuidv4(),
      };
      if (this.title !== "" && this.content !== "") {
        this.$store.commit("addNote", note);
      } else {
        this.$message({
          showClose: true,
          message: "请输入标题和内容",
          type: "error",
        });
        return;
      }
      this.title = "";
      this.content = "";

      this.opened = false;
    },
  },
  mounted() {
    //   // ture  ---> false
    document.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.opened = false;
      } else {
        this.opened = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.box-footer {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.wrapper {
  min-width: 350px;
}

.input-title {
  border: none;
}
</style>
