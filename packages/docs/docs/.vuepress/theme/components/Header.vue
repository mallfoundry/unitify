<template>
  <div class="header-layout">
    <header>
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
</style>
