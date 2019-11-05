<template>
  <div class="iwen-video-overly">
    2333s
  </div>
</template>

<script>
export default {
  name: "VideoOverly",
  inject: ["liveVideo"],
  mounted() {
    console.log("### videoOverly");
    console.log(this);
    console.log(this.liveVideo);
  },
  methods: {

  }
};
</script>

<style scoped>
  .iwen-video-overly {

  }
</style>
