<template>
  <div style="height: 100%;" id="barChart"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    series: Array,
    xAxis: Array,
    CurrentDate: String
  },
  data() {
    return {
      option: {
        label: {
          normal: {
            show: true,
            position: "inside"
          }
        },
        grid: {
          x: 60,
          y: 40,
          x2: 10,
          y2: 30
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: [
          {
            type: "category",
            data: [],
            axisLabel: {
              color: "#fff",
              fontSize: 20
            },
            axisLine: {
              lineStyle: {
                color: "#1f3f6c"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              fontSize: 20,
              formatter: "{value}h"
            },
            axisLine: {
              lineStyle: {
                color: "#1f3f6c"
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: []
      }
    };
  },
  methods: {
    init(newSeries) {
      let myChart = echarts.init(document.getElementById("barChart"));
      let series = [...newSeries];
      const _this = this;
      series[0] = {
        ...series[0],
        name: "产出",
        type: "bar",
        smooth: true,
        barWidth: 20,
        symbol: "circle",
        label: {
          show: true,
          position: "outside",
          color: "#fff"
        },
        itemStyle: {
          normal: {
            color: function(param) {
              if (param.name !== _this.CurrentDate) {
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#48d3d0"
                  },
                  {
                    offset: 1,
                    color: "#149fca"
                  }
                ]);
              } else {
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#e15d68"
                  },
                  {
                    offset: 1,
                    color: "#d37179"
                  }
                ]);
              }
            }
          }
        }
      };
      this.option.series = series;
      this.option.xAxis[0].data = this.xAxis;
      // this.$set(this.option.xAxis.data, this.xAxis)
      myChart.setOption(this.option);
    }
  },

  mounted() {
    this.init(this.series);
  },
  watch: {
    series(newSeries) {
      this.init(newSeries);
    },
    CurrentDate(){
      this.init(this.series)
    }
  }
};
</script>

<style scoped>
</style>
