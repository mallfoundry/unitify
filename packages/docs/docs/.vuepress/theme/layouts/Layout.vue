<template>
  <div>
    <Header />
    <div class="content-box">
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
      <Content />
      <iframe
        src="http://localhost:3000/#/"
        width="400px"
        height="700px"
        style="border: 1px soild #ccc"
        frameborder="0"
      />
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
.content-box {
  display: flex;
  /* justify-content: space-around; */
}
</style>