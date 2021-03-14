<template>
  <nav class="navbar navbar-expand-lg py-3 fixed px-5">
    <router-link :to="{ name: 'home' }" class="dynamic-brand navbar-brand">
      EhealthTest
    </router-link>

    <button class="btn btn-lg shadow ml-auto py-2">
        <i class="fa fa-github m-0 p-0" aria-hidden="true">
            git repo
        </i>
    </button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 2.5rem;
  color: #1ca9c9;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
}
</style>
