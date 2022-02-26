import { defineComponent } from "vue";
import Button from "../../components/Button";
export default defineComponent({
  setup() {
    return () => (
      <view class="test">
        <Button>11</Button>
      </view>
    );
  },
});
