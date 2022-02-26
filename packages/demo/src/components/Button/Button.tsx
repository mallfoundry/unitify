import { defineComponent } from "vue";

export default defineComponent({
  setup(props, { slots }) {
    return () => <button class="test">{slots.default?.()}</button>;
  },
});
