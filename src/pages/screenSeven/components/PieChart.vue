<template>
  <div style="height: 100%;" id="pie-chart"></div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  props: ["devices"],
  components: {},
  watch: {
    devices: function(val) {
      if (val.length) {
        this.createPieChart();
      }
    }
  },
  mounted() {
    if (this.devices.length) {
      this.createPieChart();
    }
  },
  methods: {
    createPieChart() {
      let scz=0,kx=0,dm=0,jx=0;
      for(let i = 0;i<this.devices.length;i++){
        if(this.devices[i].usestatus === 'scz'){
          scz++;
        }else if(this.devices[i].usestatus === 'kx'){
          kx++;
        }else if(this.devices[i].usestatus === 'dm'){
          dm++;
        }else if(this.devices[i].usestatus === 'jx'){
          jx++;
        }
      }
      let myChart = echarts.init(document.getElementById("pie-chart"));
      let option = {
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        color: ["#1b69a4", "#00999e", "#aa7a1b", "#983434"],
        legend: {
          orient: "vertical",
          right: 110,
          top: "middle",
          textStyle: {
            color: "#fff",
            fontSize: 16
          },
          selectedMode: false,
          data: ["生产中", "空闲", "调模", "故障"],
          formatter: function(name) {
            if (name === "生产中") {
              return name + ":" + option.series[0].data[0].value + "台";
            } else if (name === "空闲") {
              return name + ":" + option.series[0].data[1].value + "台";
            } else if (name === "调模") {
              return name + ":" + option.series[0].data[2].value + "台";
            } else if (name === "故障") {
              return name + ":" + option.series[0].data[3].value + "台";
            }
          },
          itemWidth: 20,
          itemHeight: 10,
          itemGap: 20
        },
        series: [
          {
            name: "设备状态统计",
            hoverAnimation: false,
            type: "pie",
            center: [185, "50%"],
            radius: ["20%", "35%"],
            label: {
              show: false
            },
            data: [
              { value: scz, name: "生产中" },
              { value: kx, name: "空闲" },
              { value: dm, name: "调模" },
              { value: jx, name: "故障" }
            ]
          },
          {
            name: "设备状态统计",
            hoverAnimation: false,
            type: "pie",
            left: 0,
            center: [185, "50%"],
            radius: ["35%", "55%"],
            label: {
              formatter: "{c}台",
              fontSize: 20
            },
            labelLine: {
              lineStyle: {
                width: 2
              }
            },
            data: [
              {
                value: scz,
                name: "生产中",
                itemStyle: {
                  color: "#289df5"
                }
              },
              {
                value: kx,
                name: "空闲",
                itemStyle: {
                  color: "#00e4ec"
                }
              },
              {
                value: dm,
                name: "调模",
                itemStyle: {
                  color: "#fdb628"
                }
              },
              {
                value: jx,
                name: "故障",
                itemStyle: {
                  color: "#e34d4d"
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.onresize = function() {
        myChart.resize();
      };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
