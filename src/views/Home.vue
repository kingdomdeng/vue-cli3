<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >

    <testSlot>
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <div>233</div>
    </testSlot>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import testSlot from '@/components/testSlot.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    testSlot
  },
  created() {
    console.log("##parent");
  },
  beforeMount() {
    console.log("##parent beforeMount");
  },
  mounted() {
    console.log("##parent mounted");
  }
}
</script>
