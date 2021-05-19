<template>
  <el-row :gutter="20">
    <div v-for="note in notes" :key="note.id">
      <el-col :xs="24" :sm="12" :md="8" :lg="6"
        ><div class="grid-content">
          <Note :note="note" /></div
      ></el-col>
    </div>
  </el-row>
</template>

<script>
import Note from "./Note.vue";
export default {
  components: {
    Note,
  },

  computed: {
    notes() {
      return this.$store.getters.notes;
    },
  },
};
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.grid-content {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 0 0;
  background-color: #f9fafc;
}
</style>
