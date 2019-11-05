<template>
  <div class="container">
    <div class="select">
      <button class="button">
        选择文件
      </button>
      <input
        type="file"
        id="uploadedFile"
        @change="inputChange"
      >
    </div>

    <canvas id="canvas" />
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      audioContext: null,
      canvas: null,
      file: null,
      fileName: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initWindow();
      this.audioContext = new AudioContext(); // 实例化音频
    },
    initWindow() {
      window.AudioContext = window.AudioContext
          || window.webkitAudioContext
          || window.mozAudioContext
          || window.msAudioContext;

      window.requestAnimationFrame = window.requestAnimationFrame
          || window.webkitRequestAnimationFrame
          || window.mozRequestAnimationFrame
          || window.msRequestAnimationFrame;
    },
    inputChange(e) {
      console.log(e)
      let files = e.target.files;

      if (files && files.length > 0) {
        this.file = files[0];
        this.fileName = this.file.name;
        this.start();
      }
    },
    start() {
      let fr = new FileReader(); // 实例化一个FileReader用于读取文件

      fr.onload = (e) => {
        let fileResult = e.target.result;
        this.audioContext.decodeAudioData(fileResult, (buffer) => {
          this.canvasInit(this.audioContext, buffer);
        }, function () {
          console.log("文件解码失败");
        });
      };

      fr.readAsArrayBuffer(this.file);
    },
    canvasInit(audioContext, buffer) {
      let audioBufferSouceNode = audioContext.createBufferSource(),
        analyser = audioContext.createAnalyser();

      audioBufferSouceNode.connect(analyser);
      audioBufferSouceNode.connect(audioContext.destination);
      audioBufferSouceNode.buffer = buffer;
      audioBufferSouceNode.start(2);

      this.draw(analyser);
    },
    draw(analyser) {
      let canvas = document.getElementById('canvas'),
        cwidth = canvas.width,
        cheight = canvas.height - 2,
        meterWidth = 10, //能量条的宽度
        capHeight = 2, //能量条间的间距
        meterNum = 800 / (10 + 2), //计算当前画布上能画多少条
        ctx = canvas.getContext('2d');

      //定义一个渐变样式用于画图
      let gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(1, '#0f0');
      gradient.addColorStop(0.5, '#ff0');
      gradient.addColorStop(0.1, '#f00');
      ctx.fillStyle = gradient;

      let drawMeter = function () {
        let array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);

        let step = Math.round(array.length / meterNum); //计算采样步长
        ctx.clearRect(0, 0, cwidth, cheight); //清理画布准备画画

        for (var i = 0; i < meterNum; i++) {
          var value = array[i * step];
          ctx.fillRect(
            i * 12 /*频谱条的宽度+条间间距*/,
            cheight - value + capHeight,
            meterWidth,
            cheight
          );
        }
        requestAnimationFrame(drawMeter);
      }

      requestAnimationFrame(drawMeter);
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .select {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 30px;
      .button {
        color: #333;
        border: none;
        background-color: inherit;
      }
      input[type = "file"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        opacity: 0;
      }
    }
  }

  #musicCanvas {
    width: 800px;
    height: 500px;
  }
</style>
