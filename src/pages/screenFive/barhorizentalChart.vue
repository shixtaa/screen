<template>
  <div style="height: 100%;" id="barHChart"></div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "barhChart",
  props: {
    series: Array,
    yAxis: Array
  },
  data() {
    return {
      option: {
        label: {
          normal: {
            show: true,
            position: "inside"
          },
          fontSize: 18
        },
        grid: {
          x: 80,
          y: 40,
          x2: 30,
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
            type: "value",
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
           splitLine:{
              show:true,
              lineStyle:{
                 color:"#1f3f6c"
                  }
            }
          }
        ],
        yAxis: [
          {
            type: "category",
            data: [],
            axisLabel: {
              color: "#fff",
              fontSize: 20,
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
        series: []
      }
    };
  },
  methods: {
    init(newSeries) {
      
      let myChart = echarts.init(document.getElementById("barHChart"));
      let series = JSON.parse(JSON.stringify(newSeries));
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
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#01d1ff"
            },
            {
              offset: 1,
              color: "#2772ea"
            }
          ])
        }
      };
      this.option.series = series.map((v,i) => {
        v.name =i===0?"管材成套":"管材未成套" ;
        v.type = "bar";
        v.stack = "总量";
        v.label = {
          show: false,
          position: "insideRight"
        };
        v.itemStyle =  {
            color: i===0?'#05b977':'#407fff'
        }
        return v;
      });
      this.option.yAxis[0].data = this.yAxis;
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
