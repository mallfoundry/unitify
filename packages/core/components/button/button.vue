<template>
  <view :class="['unitify-button--'+type,'unitify-button--'+size]" class="unitify-button unitify-button--contained">
    u-button
  </view>
</template>

<script lang="ts">
import { defineComponent,PropType } from "vue";
type ButtonTypes = "primary"|"success"|"warning"|"danger"|"default"
export default defineComponent({
  name: "u-button",
  props:{
    type:{
      type:String as PropType<ButtonTypes>
    },
    size:{
      type:String,
      default:"medium"
    }
  },
  setup(props){
   
    
    
    return {
      
    }
  }
});
</script>
<style lang="scss" scoped>
  @import "./button.scss";
</style>