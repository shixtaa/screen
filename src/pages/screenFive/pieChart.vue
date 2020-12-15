<template>
  <div style="height: 100%;" id="pie"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    series: Array
  },
  data() {
    return {
      option: {
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        color: ["#00cccd", "#407fff", "#a682e6", "#e15d68", "#f29961"],
        series: []
      }
    };
  },
  methods: {
    init(data) {
      let myChart = echarts.init(document.getElementById("pie"));
      this.option.series = [
        {
          type: "pie",
          radius: ["30%", "70%"],
          label: {
            show: true,
            fontSize: 18,
            formatter: "{b}:{d}%"
          },
          data
        }
      ];

      myChart.setOption(this.option);
    }
  },

  mounted() {
    this.init(this.series);
  },
  watch: {
    series(newSeries) {
      this.init(newSeries);
    }
  }
};
</script>

<style scoped>
</style>
