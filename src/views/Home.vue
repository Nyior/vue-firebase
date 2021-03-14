<template>
  <div class="container-fluid hero-container text-center">
      <div class="row px-3 text-center mb-5" v-if="isLoading">
        <div class="col-md-6 ml-md-auto mr-md-auto col-12">
            <Loader />
        </div>
     </div>

      <Chart 
            v-if="!isLoading" 
            :ageLessFiftyData="ageLessFiftyData"
            :agePassFiftyData="agePassFiftyData"
      />

  </div>
</template>

<script>
import { apiService } from "@/utils/apiService.js";
import Chart from "@/components/home/Chart.vue";
import Loader from "@/components/utils/Loader.vue";

export default {
  name: "home",

  components: {
    Chart,
    Loader
  },

  data() {
    return {
      response: null,
      isLoading: false,
      ageLessFiftyData: [0, 0, 0, 0],
      agePassFiftyData: [0, 0, 0, 0],
    };
  },

  methods: {
    extractAgeData(usersData){
        
        for (const key in usersData) {
            let age = usersData[key].age;
            let bloodGroup = usersData[key]["blood group"];

            if ( age <= 50  && bloodGroup === "A") {
                  this.ageLessFiftyData[0] += 1;
                  
            }

            if ( age <= 50  && bloodGroup === "B") {
                  this.ageLessFiftyData[1] += 1;
                  
            }

            if ( age <= 50  && bloodGroup === "AB") {
                  this.ageLessFiftyData[2] += 1;
                  
            }

            if ( age <= 50  && bloodGroup === "O") {
                  this.ageLessFiftyData[3] += 1;
                  
            }


            if ( age > 50  && bloodGroup === "A") {
                  this.agePassFiftyData[0] += 1;
                  
            }

            if ( age > 50  && bloodGroup === "B") {
                  this.agePassFiftyData[1] += 1;
                  
            }

            if ( age > 50  && bloodGroup === "AB") {
                  this.agePassFiftyData[2] += 1;
                  
            }

            if ( age > 50  && bloodGroup === "O") {
                  this.agePassFiftyData[3] += 1;
                  
            }
          }

    },

    loadUsers(){
      this.isLoading = true;
      let method = "GET";

      apiService(method)
        .then(data => {
          this.extractAgeData(data)
          //save response data to browser storage
          window.localStorage.setItem("users", data);

          this.isLoading = false;
        })
        .catch(error => {
          this.isLoading = false;
        });
    }
  },

  mounted: function() {
    document.title = "vue-firebase | Home";
    this.loadUsers();
  }
};
</script>

<style scoped>

</style>
