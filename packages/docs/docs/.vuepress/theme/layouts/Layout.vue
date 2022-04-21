<template>
  <div id="layout">
    <Header />
    <div class="content-box">
      <el-row :gutter="20">
        <el-col :span="4">
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
          </el-menu></el-col
        >
        <el-col :span="12"><Content /></el-col>
        <el-col :span="8">
          <iframe
            src="http://localhost:3000/#/"
            width="400px"
            height="700px"
            style="border: 1px soild #ccc"
            frameborder="0"
          />
        </el-col>
      </el-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  data() {
    return {
      menuList: [],
    };
  },
  mounted() {
    this.menuList = this.$site.pages;
    console.log(this.menuList);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped>
#layout{
  overflow: hidden;
}
</style>