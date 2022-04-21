<template>
  <div id="layout">
    <Header />
    <div class="contentBox">
      <el-row :gutter="20">
        <el-col :span="4">
          &nbsp;<MyMenu :scrollTop="scrollTop" :menuList="menuList" />
        </el-col>
        <el-col :span="14"><Content /></el-col>
        <el-col :span="6">
          <div class="iframeBox">
            <iframe
              src="http://localhost:3000/#/"
              width="360px"
              height="600px"
              style="border: 1px soild #ccc"
              frameborder="0"
            />
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyMenu from "../components/Menu";
import { debounce } from "../utils";
export default {
  data() {
    return {
      menuList: [],
      scrollTop: 0,
    };
  },
  mounted() {
    this.menuList = this.$site.pages;
    window.addEventListener("scroll", this.handlerScroll);
  },
  methods: {
    handlerScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(this.scrollTop);
    },
    debounceFn: debounce,
  },
  destroyed() {
    window.removeEventListener("scroll", this.handlerScroll);
  },
  components: {
    Header,
    Footer,
    MyMenu,
  },
};
</script>
<style scoped>
#layout {
  overflow: hidden;
}
.iframeBox {
  border: 1px solid red;
  position: fixed;
  top: 100px;
}
</style>