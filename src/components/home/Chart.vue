<template>
  <div>

    <div class="row text-center px-5">
        <div class="col-12">
            <highcharts  :options="chartOptions"></highcharts>
        </div>
    </div>

  </div>
</template>

<script>
import { apiService } from "@/utils/apiService.js";
import {Chart} from 'highcharts-vue'

export default {
  name: "chart",

  components: {
    highcharts: Chart 
  },

  props: {
      ageLessFiftyData: {
          type: Array,
          required: true,
      },

      agePassFiftyData: {
          type: Array,
          required: true,
      }
  },

  data() {
    return {
      chartOptions: {
        chart: {
                type: 'bar'
        },

        title: {
                text: 'Chart Showing Number of Persons Within a Specified Blood Group Based on Age Groups'
        },

        xAxis: {
            categories: ["A", "B", "AB", "O"],
            title: {
                text: 'Blood Group'
            }
        },

        yAxis: {
            title: {
                text: 'number of people within a specified blood group'
            }
        },

        series: [
            {
                name: "less than or equal to 50years",
                data: this.ageLessFiftyData
            }, 
            {
                name: "older than 50 years",
                data: this.agePassFiftyData
            }
        ]
      }
    }
  }
};
</script>

<style scoped>
</style>
