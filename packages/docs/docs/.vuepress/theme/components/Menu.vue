<template>
  <div class="menuBox" :style="{ top: scrollTop < 64 ? '64px' : 0 }">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item
        :route="item.regularPath"
        :index="index"
        v-for="(item, index) in menuList"
        :key="item.key"
      >
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:"MyMenu",
  props: {
    menuList: {
      type: Array,
    },
    scrollTop:{
      type:Number
    }
  },
  methods:{
        handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>

<style scoped>
.menuBox {
  position: fixed;
  width: 220px;
}
</style>