<template>
  <div class="header-layout">
    <header>
      <span>Unitify UI</span>
      <SearchBox />
    </header>
    <main></main>
  </div>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
  components: { SearchBox },
};
</script>
<style scoped>
.header-layout {
  height: 64px;
  background-color: #001938;
}
.header-layout header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 42px;
  line-height: 64px;
}
.header-layout header span {
  color: #fff;
  font-size: 22px;
}
</style>
