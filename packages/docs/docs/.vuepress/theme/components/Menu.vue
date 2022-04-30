<template>
  <div class="menuBox" :style="{ top: scrollTop < 64 ? '64px' : 0 }">
    <el-menu
      default-active="0"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item
        v-for="(item, index) in menuList"
        :key="item.key"
        :default-active="0"
        :route="item.regularPath"
        :index="index"
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
    handleOpen() {
      console.log("开始")
    },
    handleClose() {
      console.log("结束")
    }
  }
};
</script>

<style lang="scss" scoped>
@import './styles/menu.scss'
</style>