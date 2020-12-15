<template>
  <div style="height: 100%;" id="pie-chart"></div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
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
        selectedMode:false,
        data: ["正在运行", "空闲设备","暂未生产","故障设备"],
        formatter: function(name) {
          if (name === "正在运行") {
            return name + ":" + option.series[0].data[0].value+"台";
          }else if(name === "空闲设备") {
            return name + ":" + option.series[0].data[1].value+"台";
          }else if(name === "暂未生产") {
            return name + ":" + option.series[0].data[2].value+"台";
          }else if(name === "故障设备") {
            return name + ":" + option.series[0].data[3].value+"台";
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
            { value: 50, name: "正在运行" },
            { value: 20, name: "空闲设备" },
            { value: 20, name: "暂未生产" },
            { value: 10, name: "故障设备" }
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
              value: 50,
              name: "正在运行",
              itemStyle: {
                color: "#289df5"
              }
            },
            {
              value: 20,
              name: "空闲设备",
              itemStyle: {
                color: "#00e4ec"
              }
            },
            {
              value: 20,
              name: "暂未生产",
              itemStyle: {
                color: "#fdb628"
              }
            },
            {
              value: 10,
              name: "故障设备",
              itemStyle: {
                color: "#e34d4d"
              }
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
    window.onresize = function(){
      myChart.resize();
     // myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
