<script>
import Footer from "./pages/Footer.vue";
import Navbar from "./pages/Navbar.vue";
export default {
  components: {
    Footer,
    Navbar,
  },
  setup() {},
};
</script>

<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
