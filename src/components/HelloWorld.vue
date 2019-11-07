<template>
  <div>{{ msg }}</div>
  <!--<div class="hello">
    <el-button @click="changText">
      hello
    </el-button>
  </div>-->
</template>

<script>
// import commonServices from "@/services/commonServices";
// import eventBus from "../utils/eventBus";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  /*created() {
    console.log("##child");
  },
  beforeMount() {
    console.log("##child beforeMount");
  },
  mounted() {
    console.log("##child mounted");
    this.$storage.set("test1", "test1");
    this.$storage.set("test2", "test2");
    this.$storage.set("test3", "test3");
    this.$storage.session.set("test3", "test3");
    this.$storage.session.set("test3", "test3");

    this.getData();
  },
  methods: {
    changText() {
      eventBus.$emit("eventBus", Math.floor(Math.random() * 10));
    },
    getData() {
      let params = {
        "page":1,
        "size":5,
        "comtyId":"5c1aef3cbe077700081f96c2",
        "communityId":"5c1aef3cbe077700081f96c2"
      };

      commonServices.getArticleSet(params).then( res => {
        console.log(res);
      });
    }
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
