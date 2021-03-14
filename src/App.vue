<template>
  <div id="app">
    <NavbarComponent />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import NavbarComponent from "@/components/navigation/Navbar.vue";
import Footer from "@/components/navigation/Footer.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
    Footer
  },

  data() {}
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
