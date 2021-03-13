<template>
  <div class="container-fluid hero-container">

    <div class="row text-center">
        <div class="col-12">
            <h1>
                Bar chart goes here
            </h1>
        </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "home",

  data() {
    return {
      response: null,
      isLoading: false
    };
  },

  methods: {

    loadUsers(){

    }
  },

  mounted: function() {
    document.title = "vue-firebase | Home";
  }
};
</script>

<style scoped>
</style>
