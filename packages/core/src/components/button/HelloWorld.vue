<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello Jest',
    };
  },
};
</script>
