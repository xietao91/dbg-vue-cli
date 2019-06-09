<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Header></Header>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "layout",
  components: {
    Header,
    Footer
  }
};
</script>
