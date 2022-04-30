<template>
  <view class="icon">
    <Tabs v-model:active="active">
      <Tab title="基础" :value="0">
        <view class="basecard">
          <Block title="基础用法">
            <Icon name="chat-o" size="60rpx" style="margin-right:60rpx"/>
            <Icon name="chat-o" size="60rpx" />
          </Block>
          <Block title="颜色用法">
            <Icon name="cart-o" color="#1989fa" style="margin-right:60rpx" size="60rpx"/>
            <Icon name="fire-o" color="#ee0a24" size="60rpx"/>
          </Block>
          <Block title="图标大小">
            <Icon name="star-o" size="40px" style="margin-right:60rpx" />
            <Icon name="star-o" size="3rem" />
          </Block>
        </view>
      </Tab>
      <Tab title="基础" :value="1">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.basic"
            @click="copyRight(item)"
          >
            <Icon :name="item" />
            <text>{{ item }}</text>
          </view>
        </view>
      </Tab>
      <Tab title="线框风格" :value="2">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.outline"
            @click="copyRight(item)"
          >
            <Icon :name="item" />
            <text>{{ item }}</text>
          </view>
        </view>
      </Tab>
      <Tab title="实底风格" :value="3">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.filled"
            @click="copyRight(item)"
          >
            <Icon :name="item" />
            <text>{{ item }}</text>
          </view>
        </view>
      </Tab>
    </Tabs>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from "vue";

import Block from "../../../components/block/block.vue";

const icons = ref( { name: "unitify-icon",
  basic: [
    "arrow",
    "arrow-left",
    "arrow-up",
    "arrow-down",
    "success",
    "cross",
    "plus",
    "minus",
    "fail",
    "circle",
  ],
  outline: [
    // has corresponding filled icon
    "location-o",
    "like-o",
    "star-o",
    "phone-o",
    "setting-o",
    "fire-o",
    "coupon-o",
    "cart-o",
    "shopping-cart-o",
    "cart-circle-o",
    "friends-o",
    "comment-o",
    "gem-o",
    "gift-o",
    "point-gift-o",
    "send-gift-o",
    "service-o",
    "bag-o",
    "todo-list-o",
    "balance-list-o",
    "close",
    "clock-o",
    "question-o",
    "passed",
    "add-o",
    "gold-coin-o",
    "info-o",
    "play-circle-o",
    "pause-circle-o",
    "stop-circle-o",
    "warning-o",
    "phone-circle-o",
    "music-o",
    "smile-o",
    "thumb-circle-o",
    "comment-circle-o",
    "browsing-history-o",
    "underway-o",
    "more-o",
    "video-o",
    "shop-o",
    "shop-collect-o",
    "share-o",
    "chat-o",
    "smile-comment-o",
    "vip-card-o",
    "award-o",
    "diamond-o",
    "volume-o",
    "cluster-o",
    "wap-home-o",
    "photo-o",
    "gift-card-o",
    "expand-o",
    "medal-o",
    "good-job-o",
    "manager-o",
    "label-o",
    "bookmark-o",
    "bill-o",
    "hot-o",
    "hot-sale-o",
    "new-o",
    "new-arrival-o",
    "goods-collect-o",
    "eye-o",
    "delete-o",
    "font-o",
    // without corresponding filled icon
    "balance-o",
    "refund-o",
    "birthday-cake-o",
    "user-o",
    "orders-o",
    "tv-o",
    "envelop-o",
    "flag-o",
    "flower-o",
    "filter-o",
    "bar-chart-o",
    "chart-trending-o",
    "brush-o",
    "bullhorn-o",
    "hotel-o",
    "cashier-o",
    "newspaper-o",
    "warn-o",
    "notes-o",
    "calendar-o",
    "bulb-o",
    "user-circle-o",
    "desktop-o",
    "apps-o",
    "home-o",
    "back-top",
    "search",
    "points",
    "edit",
    "qr",
    "qr-invalid",
    "closed-eye",
    "down",
    "scan",
    "revoke",
    "free-postage",
    "certificate",
    "logistics",
    "contact",
    "cash-back-record",
    "after-sale",
    "exchange",
    "upgrade",
    "ellipsis",
    "description",
    "records",
    "sign",
    "completed",
    "failure",
    "ecard-pay",
    "peer-pay",
    "balance-pay",
    "credit-pay",
    "debit-pay",
    "cash-on-deliver",
    "other-pay",
    "tosend",
    "pending-payment",
    "paid",
    "aim",
    "discount",
    "idcard",
    "replay",
    "shrink",
    "shield-o",
    "guide-o",
    "cash-o",
  ],
  filled: [
    // has corresponding outline icon
    "location",
    "like",
    "star",
    "phone",
    "setting",
    "fire",
    "coupon",
    "cart",
    "shopping-cart",
    "cart-circle",
    "friends",
    "comment",
    "gem",
    "gift",
    "point-gift",
    "send-gift",
    "service",
    "bag",
    "todo-list",
    "balance-list",
    "clear",
    "clock",
    "question",
    "checked",
    "add",
    "gold-coin",
    "info",
    "play-circle",
    "pause-circle",
    "stop-circle",
    "warning",
    "phone-circle",
    "music",
    "smile",
    "thumb-circle",
    "comment-circle",
    "browsing-history",
    "underway",
    "more",
    "video",
    "shop",
    "shop-collect",
    "share",
    "chat",
    "smile-comment",
    "vip-card",
    "award",
    "diamond",
    "volume",
    "cluster",
    "wap-home",
    "photo",
    "gift-card",
    "expand",
    "medal",
    "good-job",
    "manager",
    "label",
    "bookmark",
    "bill",
    "hot",
    "hot-sale",
    "new",
    "new-arrival",
    "goods-collect",
    "eye",
    "delete",
    "font",
    // without corresponding outline icon
    "wechat",
    "wechat-pay",
    "alipay",
    "photograph",
    "youzan-shield",
    "umbrella-circle",
    "bell",
    "printer",
    "map-marked",
    "card",
    "add-square",
    "live",
    "lock",
    "audio",
    "graphic",
    "column",
    "invitation",
    "play",
    "pause",
    "stop",
    "weapp-nav",
    "ascending",
    "descending",
    "bars",
    "wap-nav",
    "enlarge",
    "photo-fail",
    "sort",
  ]});
const active = ref(0);
const copyRight = (text: string) => {
  uni.setClipboardData({
    data: text,
  });
};
</script>

<style lang="scss" scoped>
.icon {
  background: #f7f8fa;
  padding: 30rpx;
  .basecard {
    background: #fff;
    border-radius: 10rpx;
    margin-top: 20rpx;
    padding: 30rpx;
  }
  .card {
    background: #fff;
    border-radius: 10rpx;
    margin-top: 20rpx;
    display: flex;
    flex-wrap: wrap;

    &-item {
      border-radius: 5rpx;
      &:active {
        background: #999;
      }
      .unitify-icon {
        font-size: 40rpx;
        margin-bottom: 20rpx;
      }

      width: 25%;
      height: 170rpx;
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 20rpx;
      box-sizing: border-box;
      text {
        font-size: 24rpx;
      }
    }
  }
}
</style>