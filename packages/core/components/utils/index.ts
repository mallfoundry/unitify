import {ref} from "vue"
export const useSelectorQuery = (className: any) => {
  let navRes = ref();
  uni
    .createSelectorQuery()
    .select(".unitify-tabs--nav")
    .boundingClientRect(function (data: any) {
      navRes.value = data;
    })
    .exec();
  return navRes.value;
};