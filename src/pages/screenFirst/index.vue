<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <div class="first-screen">
        <div class="">
          <card title="卡路里消耗排名" :height-number="33">
            <rank :list="kcalList"></rank>
          </card>
          <card title="运动时长排名" :height-number="33">
            <rank :list="timeList"></rank>
          </card>
          <card title="用户时间段运动情况" :height-number="33">
            <line-chart :series="exerciseTime"></line-chart>
          </card>
        </div>
        <div class="">
          <card title="设备全国分布情况" :height-number="66" :divider="20">
            <china-map :series="mapData"></china-map>
          </card>
          <card title="设备使用全国前十排名" :height-number="33">
            <bar-chart :series="deviceList" :x-axis="deviceXAxis"></bar-chart>
          </card>
        </div>
        <div class="">
          <card title="用户分析" :height-number="33">
            <div style="height: 100%; display: flex">
              <div style="flex: 1; height: 100%">
                <rose-analysis :series="roseList"></rose-analysis>
              </div>
              <div style="flex: 1; height: 100%">
                <pie-analysis :series="pieList"></pie-analysis>
              </div>
            </div>
          </card>
          <card title="卡路里消耗排名" :height-number="33">
            <div style="height: 100%; display: flex">
              <div style="flex: 1; height: 100%">
                <radar
                  title="男性用户"
                  color="#70eefc"
                  canvas-id="radar1"
                  id="radar1"
                  :series="manList"
                ></radar>
              </div>
              <div style="flex: 1; height: 100%">
                <radar
                  title="女性用户"
                  color="#b544d9"
                  canvas-id="radar2"
                  id="radar2"
                  :series="womanList"
                ></radar>
              </div>
            </div>
          </card>
          <card title="用户年龄分布" :height-number="33">
            <age-bar-chart :series="ageList"></age-bar-chart>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../../components/card";
import headerTitle from "../layout/header";
import rank from "./rank";
import lineChart from "./line-chart";
import chinaMap from "./map";
import barChart from "./barChart";
import ageBarChart from "./ageBarChart";
import roseAnalysis from "./roseAnalysis";
import pieAnalysis from "./pieAnalysis";
import radar from "./radar";

export default {
  data() {
    return {
      kcalList: [
        {
          name: "张毅",
          label: "980大卡",
          avatar: require("../../assets/imgs/avatar/a1.jpg"),
        },
        {
          name: "刘凯",
          label: "888大卡",
          avatar: require("../../assets/imgs/avatar/a2.jpg"),
        },
        {
          name: "朱海燕",
          label: "755大卡",
          avatar: require("../../assets/imgs/avatar/a3.jpg"),
        },
        {
          name: "袁绍东",
          label: "632大卡",
          avatar: require("../../assets/imgs/avatar/a4.jpg"),
        },
        {
          name: "伦伟华",
          label: "550大卡",
          avatar: require("../../assets/imgs/avatar/a5.jpg"),
        },
        {
          name: "梅林宇",
          label: "480大卡",
          avatar: require("../../assets/imgs/avatar/a6.jpg"),
        },
      ],
      timeList: [
        {
          name: "张毅",
          label: "02时20分",
          avatar: require("../../assets/imgs/avatar/a1.jpg"),
        },
        {
          name: "刘凯",
          label: "02时00分",
          avatar: require("../../assets/imgs/avatar/a2.jpg"),
        },
        {
          name: "朱海燕",
          label: "01时50分",
          avatar: require("../../assets/imgs/avatar/a3.jpg"),
        },
        {
          name: "袁绍东",
          label: "01时20分",
          avatar: require("../../assets/imgs/avatar/a4.jpg"),
        },
        {
          name: "伦伟华",
          label: "01时10分",
          avatar: require("../../assets/imgs/avatar/a5.jpg"),
        },
        {
          name: "梅林宇",
          label: "01时00分",
          avatar: require("../../assets/imgs/avatar/a6.jpg"),
        },
      ],
      exerciseTime: [
        {
          data: [300, 550, 600, 700, 1000, 1200, 1300, 1500, 1700, 1750], //男性
        },
        {
          data: [100, 400, 500, 600, 900, 1100, 1200, 1400, 1600, 1650], //女性
        },
      ],
      mapData: [],
      deviceXAxis: [
        "上海",
        "广州",
        "天津",
        "北京",
        "江苏",
        "浙江",
        "福建",
        "山东",
        "湖北",
        "江西",
      ],
      deviceList: [
        {
          data: [7000, 3000, 4500, 2200, 1800, 5000, 2800, 2500, 4000, 3500], //男性
        },
      ],
      ageList: [
        {
          data: [2000, 3000, 1800, 2800, 1500, 1300], //男性
        },
        {
          data: [1300, 1300, 1300, 1300, 1300, 1300], //女性
        },
      ],
      roseList: [
        {
          data: [30, 20, 10],
        },
      ],
      pieList: [
        {
          data: [30, 20, 10],
        },
      ],
      manList: [2000, 3000, 2000, 4000, 5000, 4000, 6000],
      womanList: [2000, 3000, 2000, 4000, 5000, 4000, 6000],
    };
  },
  methods: {
    randowmData() {
      return Math.round(Math.random() * 500);
    },
  },
  mounted() {
    this.mapData = [
      { name: "北京", value: "100" },
      { name: "天津", value: this.randowmData() },
      { name: "上海", value: this.randowmData() },
      { name: "重庆", value: this.randowmData() },
      { name: "河北", value: this.randowmData() },
      { name: "河南", value: this.randowmData() },
      { name: "云南", value: this.randowmData() },
      { name: "辽宁", value: this.randowmData() },
      { name: "黑龙江", value: this.randowmData() },
      { name: "湖南", value: this.randowmData() },
      { name: "安徽", value: this.randowmData() },
      { name: "山东", value: this.randowmData() },
      { name: "新疆", value: this.randowmData() },
      { name: "江苏", value: this.randowmData() },
      { name: "浙江", value: this.randowmData() },
      { name: "江西", value: this.randowmData() },
      { name: "湖北", value: this.randowmData() },
      { name: "广西", value: this.randowmData() },
      { name: "甘肃", value: this.randowmData() },
      { name: "山西", value: this.randowmData() },
      { name: "内蒙古", value: this.randowmData() },
      { name: "陕西", value: this.randowmData() },
      { name: "吉林", value: this.randowmData() },
      { name: "福建", value: this.randowmData() },
      { name: "贵州", value: this.randowmData() },
      { name: "广东", value: this.randowmData() },
      { name: "青海", value: this.randowmData() },
      { name: "西藏", value: this.randowmData() },
      { name: "四川", value: this.randowmData() },
      { name: "宁夏", value: this.randowmData() },
      { name: "海南", value: this.randowmData() },
      { name: "台湾", value: this.randowmData() },
      { name: "香港", value: this.randowmData() },
      { name: "澳门", value: this.randowmData() },
    ];
  },
  components: {
    card,
    rank,
    lineChart,
    chinaMap,
    barChart,
    ageBarChart,
    roseAnalysis,
    pieAnalysis,
    radar,
    headerTitle,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  padding-top: 70px;
  height: 100%;
  background: radial-gradient(#010e34, #001454);
}

.body {
  padding: 0 20px;
  height: 100%;
  position: relative;
}
.first-screen {
  display: flex;

  & > div {
    flex: 1;
    margin-right: 20px;

    &:first-child {
      margin-top: -15px;
    }

    &:last-child {
      margin-top: -15px;
      margin-right: 0;
    }
  }

  .card {
    margin-bottom: 20px;
  }
}
</style>
