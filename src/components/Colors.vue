<template>
  <div class="colorWrapper">
    <div
      v-for="(item, index) in colors"
      :key="index"
      class="colors"
      :class="item"
      @click="changeColor(item)"
      :data-color="item"
    >
      {{ item === (selectedColor || "white") ? hook : "" }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String },
  },
  data() {
    return {
      colors: [
        "white",
        "red",
        "orange",
        "blue",
        "green",
        "skyblue",
        "purple",
        "yellow",
      ],
      hook: "✔️",
      selectedColor: null,
    };
  },
  name: "Colors",
  methods: {
    changeColor(color) {
      this.selectedColor = color;
      console.log("color change");
      this.$emit("getColor", color);
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
.colorWrapper {
  display: flex;
  flex-wrap: wrap;
}

.colors {
  margin: 5px;
  cursor: pointer;
}

.white {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid gray;
  background: white;
}

.red {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background: #f44336;
}
.orange {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background: #ff9800;
}
.blue {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background: #2196f3;
}
.green {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background: #4caf50;
}

.skyblue {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background: #a8e0ff;
}

.purple {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background: #e1bee7;
}

.yellow {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: none;
  background: #ffff8d;
}
</style>
