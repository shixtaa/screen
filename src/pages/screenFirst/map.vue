<template>
  <div id="china" style="height: 100%"></div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china";
var data = [
  { name: "郑州", value: 100 },
  { name: "北京", value: 100 },
  { name: "香港", value: 100 },
  { name: "上海", value: 100 },
  { name: "黑龙江", value: 100 },
  { name: "内蒙古", value: 100 },
  { name: "辽宁", value: 100 },
];
var geoCoordMap = {
  郑州: [113.649638, 34.75659],
  北京: [116.395645, 39.92998],
  香港: [114.186133, 22.29343],
  上海: [121.487884, 31.2491],
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  辽宁: [123.1238, 42.1216],
};
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({ name: data[i].name, value: geoCoord.concat(data[i].value) });
    }
  }
  return res;
};
var myData = [
  { name: "海门", value: [121.15, 31.89, 90] },
  { name: "鄂尔多斯", value: [109.781327, 39.608266, 120] },
  { name: "招远", value: [120.38, 37.35, 142] },
  { name: "舟山", value: [122.207216, 29.985295, 123] },
];
export default {
  props: {
    series: Array,
  },
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
        },
        //左侧小导航图标
        visualMap: {
          show: true,
          x: "left",
          y: "bottom",
          splitList: [
            { start: 500 },
            { start: 200, end: 499 },
            { start: 50, end: 199 },
            { start: 0, end: 50 },
          ],
          seriesIndex: 0,
          color: ["#db2727", "#dbb727", "#db6a27", "#353f4a"],
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          map: "china",
        },
        //配置属性
        series: [
          {
            name: "数据",
            type: "map",
            mapType: "china",
            itemStyle: {
              areaColor: "#353f4a",
              borderWidth: 2,
              borderColor: "#0d1d4d",
            },
            emphasis: {
              itemStyle: {
                areaColor: "#33cde6",
              },
              label: {
                color: "#fff",
                align: "center",
                position: ["50%", "50%"],
              },
            },
            data: [], //数据
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              data
                .sort(function (a, b) {
                  return b.value - a.value;
                })
                .slice(0, 7)
            ),
            symbolSize: function (val) {
              return 12;
            },
            showEffectOn: "render",
            zlevel: 2,
            rippleEffect: {
              period: 4, //波纹秒数
              brushType: "fill", //stroke(涟漪)和fill(扩散)，两种效果
              scale: 4, //波纹范围
            },
            itemStyle: {
              borderWidth: 10,
              color: "#338ae6",
            },
            emphasis: {
              itemStyle: {
              },
            },
            hoverAnimation: true,
            tooltip:{
                formatter:function(params){
                    return params.name + ":" + params.value[2]
                }
            }
          },
        ],
      },
    };
  },
  methods: {
    init(newSeries) {
      let myChart = echarts.init(document.getElementById("china"));
      this.option.series[0].data = newSeries;
      myChart.setOption(this.option);
    },
  },
  mounted() {
    this.init(this.series);
  },
  watch: {
    series(newSeries) {
      this.init(newSeries);
    },
  },
};
</script>

<style scoped>
</style>
