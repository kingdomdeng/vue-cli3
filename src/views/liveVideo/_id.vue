<template>
  <section class="container">
    <m-header title="直播"></m-header>

    <div class="liveVideo">
      <no-ssr placeholder="Loading...">
        <video-player
          id="live-video"
          class="video-player-box"
          ref="videoPlayer"
          :options="playerOptions"
          @ready="setVideo"
        >
        </video-player>
      </no-ssr>
    </div>

  </section>
</template>

<script>
  import Vue from "Vue";
  import { commonMixin } from "~/mixins";
  import header from "~/components/header.vue";
  import articleService from "~/services/articleService.js";
  import VideoOverly from "./components/videoOverly";

  export default {
    mixins: [commonMixin],
    provide() {
      return {
        liveVideo: this
      };
    },
    components: {
      mHeader: header,
    },
    async asyncData({ route, redirect, store, query}) {
      // 获取视频详情
      let articleInfo = {};
      let res = await articleService.findVideoById({ id: route.params.id });

      if (res.status == 200 && res.data) {
        articleInfo = res.data;
      }

      return {
        articleInfo,
      };
    },
    data() {
      return {
        videoPlayer: null,
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: {
            type: "video/mp4",
            src: ""
          },
          poster: "", // 封面图
        },
      };
    },
    computed: {

    },
    watch: {

    },
    created() {
      this.pid = this.$route.params.id;
      this.playerOptions.sources.src = this.articleInfo.url;
      this.playerOptions.poster = this.articleInfo.cover;

      this.$nextTick( () => {
        this.videoPlayer = this.$refs.videoPlayer;
      });
    },
    mounted() {
      this.$nextTick( () => {
        this.setComponent("vjs_video_3");
      });
    },
    methods: {
      setVideo() {

      },
      setComponent(el) {
        let video = document.getElementById(el);
        let content = document.createElement("div");

        content.id = "live-video-content";
        video.appendChild(content);

        const videoOverly = Vue.extend(VideoOverly);
        console.log( new videoOverly());
        new videoOverly().$mount("#live-video-content");// 创建并挂载到 #live-video-content (会替换 #live-video-content)
      }
    },
    head() {
      return {
        title: "直播"
      };
    }
  };

</script>

<style lang="less" scoped>

  .liveVideo {
    position: relative;
    padding-top: 56.25%;
    width: 100%;
    /deep/ .video-player {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      .video-js {
        width: 100%;
        height: 100%;
        .vjs-big-play-button {
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          border: none;
          width: 50px;
          height: 50px;
          background: url(../../assets/images/common_btn_play_big@2x.png) no-repeat;
          background-size: 100%;
          span {
            display: none;
          }
        }
      }
    }
  }

</style>
