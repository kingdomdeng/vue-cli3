<template>
  <div class="d-dialog" v-show="isShow" @click="close">
    <div class="container" @click.stop>
      <div class="title">{{ title }}</div>
      <div class="content">{{ content }}</div>
      <div class="bottom">
        <span @click="close">{{ cancelBtn }}</span>
        <span class="primary" @click="confirm">{{ confirmBtn }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { commonMixin } from "~/mixins";

  export default {
    mixins: [commonMixin],
    props: {
      cancelBtn: {
        type: String,
        default: "取消"
      },
      confirmBtn: {
        type: String,
        default: "确定"
      },
      title: {
        type: String,
        default: ""
      },
      option: Object,
    },
    data() {
      return {
        isShow: false,
        content: ""
      };
    },
    methods: {
      open(params) {
        if (typeof params == "string") {
          this.content = params;
        }

        if (typeof params == "object") {
          this.content = params.content;
        }

        this.isShow = true;
        this.$emit("open");
      },
      close() {
        this.isShow = false;
        this.$emit("close");
        Object.assign(this.$data, this.$options.data());// 重置数据
      },
      confirm() {
        this.$emit("confirm");
      },
      cancel() {
        this.$emit("cancel");
      }
    }
  };

</script>

<style lang="less" scoped>
  .d-dialog {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    max-width: 760px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .3);
    z-index: 999;
    .container {
      width: 80%;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      font-size: 15px;
      text-align: center;
      .title {

      }
      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100px;
        padding: 25px 10px;
        font-weight: bold;
      }
      .bottom {
        display: flex;
        border-top: 1px solid #E7E7E7;
        span {
          flex: 1;
          padding: 15px;
          color: #999;
          + span {
            border-left: 1px solid #E7E7E7;
          }
          &.primary {
            color: #007AFF;
          }
        }
      }
    }
  }
</style>
