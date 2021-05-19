<template>
  <el-col :span="8" class="wrapper">
    <div v-if="!opened" @click="open">
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
            width="50"
            trigger="hover"
            ><Colors />
            <el-button slot="reference">Color</el-button>
          </el-popover>
          <el-button @click="save">Save</el-button>
        </div>
      </el-card>
    </div>
  </el-col>
</template>
<script>
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
    };
  },
  methods: {
    open() {
      this.opened = true;
    },
    save() {
      let note = {
        title: this.title,
        content: this.content,
      };
      if (this.title !== "" && this.content !== "") {
        this.$store.commit("addNote", note);
      } else {
        return;
      }
      this.title = "";
      this.content = "";

      this.opened = false;
    },
  },
  mounted() {
    //   // ture  ---> false
    // document.addEventListener("click", () => {
    //     console.log("click");
    //   if (this.open === false) {
    //     this.open = true;
    //   }
    //   //   console.log(this.open);
    // });
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
