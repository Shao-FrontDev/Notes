<template>
  <div class="colors" @click="changeColor">
    <div class="default" data-color="default"></div>
    <div class="default red" data-color="red"></div>
    <div class="default orange" data-color="orange"></div>
    <div class="default blue" data-color="blue"></div>
    <div class="default green" data-color="green"></div>
    <div class="default blue-1" data-color="blue-1"></div>
    <div class="default purple" data-color="purple"></div>
    <div class="default yellow" data-color="yellow"></div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number },
  },
  data() {
    return {};
  },
  name: "Colors",
  methods: {
    changeColor(e) {
      let curColor = e.target.dataset.color;
      this.$emit("getColor", curColor);
    },
    // changeColor(e) {
    //   let current = e.target;
    //   let currentColor = current.dataset.color;
    //   this.$store.commit("editColor", {
    //     id: this.id,
    //     color: currentColor,
    //   });
    // },
  },

  created() {
    // console.log(this.id);
  },
};
</script>
<style lang="scss" scoped>
.colors {
  display: flex;
  flex-wrap: wrap;
}

.colors > div {
  cursor: pointer;
}

.default {
  border: 1px solid rgba(128, 128, 128, 0.303);
  margin: 5px 8px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: white;
}
.red {
  border: none;
  background: #f44336;
}
.orange {
  border: none;
  background: #ff9800;
}
.blue {
  border: none;
  background: #2196f3;
}
.green {
  border: none;
  background: #4caf50;
}

.blue-1 {
  border: none;
  background: #a8e0ff;
}

.purple {
  border: none;
  background: #e1bee7;
}

.yellow {
  border: none;
  background: #ffff8d;
}
</style>
