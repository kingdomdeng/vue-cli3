<template>
  <canvas id="canvas" />
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      canvas: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //粒子集合
      let triangles = [];
      let canvas = {};
      let params = {};
      let mouse = {};
      // let flag = false;
      // let url = '';
      // let testSpeed = 10;
      let num = 90; // 三角形角度，由此计算三角形的数量，角度越大，数量越少
      // let speed = [0, 3]; // 速度: num(匀速) 或[ num ](随机)
      let speed = 1;

      canvas.obj = document.getElementById('canvas');
      canvas.w = canvas.obj.width = document.body.clientWidth;
      canvas.h = canvas.obj.height = document.body.clientHeight;
      canvas.ctx = null;

      //起始坐标
      params.x = canvas.w / 2;
      params.y = canvas.h / 2;
      params.r = 40;//半径
      console.log("### center");
      console.log(params);


      //鼠标位置
      mouse.x = 0;
      mouse.y = 0;

      if (canvas.obj.getContext) {
        canvas.ctx = canvas.obj.getContext('2d');

        //画三角形
        for (let i = 0; i < 180 / num; i++) {
          let rotate = 0;

          if (Object.prototype.toString.call(speed).indexOf("Array") > -1) {
            rotate = Math.random() * Math.max(...speed)
          } else {
            rotate = speed;
          }

          let obj = {
            posAngle: num * i,
            angle: num,
            count: 1,
            rotate: rotate,
          }

          triangles.push(obj);
        }

        animate();
      }

      /*
                    * 动画
                    * */
      function animate() {
        let diretion = 1;//正负方向

        canvas.ctx.clearRect(0, 0, canvas.w, canvas.h)

        // 画三角形

        canvas.ctx.strokeStyle = "#bbb";
        for (let i = 1; i < triangles.length; i++) {
          let angle = 0;

          triangles[i].count = triangles[i].count + triangles[i].rotate;
          angle = triangles[i].count + triangles[i].posAngle;
          diretion = i % 2 == 0 ? -1 : 1;

          drawMove(params.x, params.y, params.r, angle * diretion, diretion);
        }

        //画圆
        // canvas.ctx.strokeStyle = "#eaeaea";
        // canvas.ctx.fillStyle = "rgba(0,0,0,0)";
        drawCircle(params.x, params.y, 1)
        drawCircle(params.x, params.y, params.r)
        drawCircle(params.x, params.y, 2 * params.r)

        // 定时动画
        // requestAnimationFrame(animate);
      }

      /*
                    * 画圆
                    * */
      function drawCircle(x, y, r) {
        canvas.ctx.beginPath();
        canvas.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        canvas.ctx.stroke();
      }

      function calculateCenter(p1, p2, [x = 0, y = 0]) {
        return [(p1[0] + p2[0]) / 2 + x, (p1[1] + p2[1]) / 2 + y];
      }

      /*
                    * 画等边三角形
                    * @x:横坐标
                    * @y:纵坐标
                    * @r:圆心
                    * @angle:三角形旋转角度
                    * */
      function drawMove(x, y, r, angle, diretion) {
        canvas.ctx.beginPath();
        //圆心到三角形的顶点距离
        // let len = parseInt( r / Math.sin(30*(2*Math.PI/360)) );
        //三角形的边1/2
        // let triangle = parseInt( len * Math.cos(30*(2*Math.PI/360)) ) ;

        let offset = 10;
        offset *= diretion;

        //三角形三个顶点坐标
        let p1 = dealAngle(angle),
          p2 = dealAngle(angle + 120),
          p3 = dealAngle(angle - 120);

        // console.log(dealAngle(angle));
        let point1 = [x + Math.sin(p1) * r * 2, y - Math.cos(p1) * r * 2],
          point2 = [x + Math.sin(p2) * r * 2, y - Math.cos(p2) * r * 2],
          point3 = [x + Math.sin(p3) * r * 2, y - Math.cos(p3) * r * 2];

        let center12 = calculateCenter(point1, point2, []),
          center23 = calculateCenter(point2, point3, []),
          center31 = calculateCenter(point3, point1, []);

        // 中心点
        let pc12 = calculateCenter(point1, center12, [offset, offset]),
          cp12 = calculateCenter(center12, point2, [offset, offset]),
          pc23 = calculateCenter(point2, center23, [-offset, offset]),
          cp23 = calculateCenter(center23, point3, [-offset, offset]),
          pc31 = calculateCenter(point3, center31, [offset, -offset]),
          cp31 = calculateCenter(center31, point1, [offset, -offset]);


        canvas.ctx.moveTo(...point1);

        canvas.ctx.quadraticCurveTo(...pc12, ...center12);
        canvas.ctx.quadraticCurveTo(...cp12, ...point2);

        canvas.ctx.quadraticCurveTo(...pc23, ...center23);
        canvas.ctx.quadraticCurveTo(...cp23, ...point3);

        canvas.ctx.quadraticCurveTo(...pc31, ...center31);
        canvas.ctx.quadraticCurveTo(...cp31, ...point1);
        // canvas.ctx.lineTo(...point2);
        // canvas.ctx.lineTo(...point3);
        // canvas.ctx.closePath();
        canvas.ctx.stroke();
      }

      //计算坐标点度数
      function dealAngle(num) {
        if (num < 0) {
          return (num + 360) * (2 * Math.PI / 360)
        } else if (num > 360) {
          return (num % 360) * (2 * Math.PI / 360)
        } else {
          return num * (2 * Math.PI / 360)
        }
      }
    },
  }
}
</script>

<style scoped>
  .canvas {
    width: 100%;
    height: 100%;
  }
</style>
