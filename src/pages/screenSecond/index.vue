<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <div class="screen-second">
        <div>
          <card title="设备使用记录" :height-number="50">
            <rank :list="rankList"></rank>
          </card>
          <card title="各段时间设备使用次数" :height-number="50">
            <device-bar-chart :series="deviceBarList"></device-bar-chart>
          </card>
        </div>
        <div>
          <card title="门店基本信息" :height-number="50">
            <div>
              <div style="height: 50%">
                <rose-sex :series="roseSexList"></rose-sex>
              </div>
              <div style="height: 50%">
                <rose-device :series="roseDeviceList"></rose-device>
              </div>
            </div>
          </card>
          <card title="门店流量统计" :height-number="50">
            <customer-line-chart
              :series="customerList"
              :x-axis="customerXAxis"
            ></customer-line-chart>
          </card>
        </div>
        <div>
          <card title="设备使用排行榜" :height-number="50">
            <device-rank :list="deviceRankList"></device-rank>
          </card>
          <card title="流量统计" :height-number="50">
            <inout-line-chart
              :series="inoutList"
              @change="handleDateChange"
              :type.sync="dateType"
            ></inout-line-chart>
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
import deviceBarChart from "./deviceBarChart";
import roseSex from "./roseSex";
import roseDevice from "./roseDevice";
import customerLineChart from "./customerLineChart";
import deviceRank from "./deviceRank";
import inoutLineChart from "./inoutLineChart";

export default {
  data() {
    return {
      rankList: [
        {
          avatar: require("../../assets/imgs/one.jpg"),
          name: "某某某",
          deviceName: "健身车",
          time: "18:15",
        },
        {
          avatar: require("../../assets/imgs/one.jpg"),
          name: "某某某",
          deviceName: "健身车",
          time: "18:15",
        },
        {
          avatar: require("../../assets/imgs/one.jpg"),
          name: "某某某",
          deviceName: "健身车",
          time: "18:15",
        },
        {
          avatar: require("../../assets/imgs/one.jpg"),
          name: "某某某",
          deviceName: "健身车",
          time: "18:15",
        },
        {
          avatar: require("../../assets/imgs/one.jpg"),
          name: "某某某",
          deviceName: "健身车",
          time: "18:15",
        },
        {
          avatar: require("../../assets/imgs/one.jpg"),
          name: "某某某",
          deviceName: "健身车",
          time: "18:15",
        },
        {
          avatar: require("../../assets/imgs/one.jpg"),
          name: "某某某",
          deviceName: "健身车",
          time: "18:15",
        },
      ],
      deviceBarList: [
        {
          data: [40, 32, 50, 28, 48, 35, 40],
        },
        {
          data: [38, 30, 48, 26, 47, 33, 40],
        },
      ],
      roseSexList: [
        {
          data: [30, 20],
        },
      ],
      roseDeviceList: [
        {
          data: [10, 20, 30, 10],
        },
      ],
      customerList: [
        {
          data: [],
        },
      ],
      customerXAxis: [],
      deviceRankList: [
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
        {
          name: "健身车",
          id: "SH-03060Z",
          time: "11时45分",
        },
      ],
      inoutList: [
        {
          data: [0, 300, 400, 200, 500, 700, 600, 800],
        },
        {
          data: [0, 400, 200, 300, 500, 600, 800, 700],
        },
      ],
      dateType: 1,
    };
  },
  methods: {
    generaterCustomers() {
      let base = new Date(2016, 1, 1).getTime();
      let oneDay = 24 * 3600 * 1000;
      let date = [];
      let arr = [];
      for (let i = 0; i < 1000; i++) {
        let now = new Date((base += oneDay));
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
        );
        arr.push(Math.ceil(Math.random() * 8000));
      }
      this.customerXAxis = date;
      this.customerList[0].data = arr;
    },
    handleDateChange(type) {
      if (type === 1) {
        //今日
        this.inoutList = this.inoutList.reverse();
      } else if (type === 2) {
        //昨日
      } else if (type === 3) {
        //本周
      } else if (type === 4) {
        //本月
      }
    },
  },
  created() {
    this.generaterCustomers();
  },
  components: {
    card,
    rank,
    deviceBarChart,
    roseSex,
    roseDevice,
    customerLineChart,
    deviceRank,
    inoutLineChart,
    headerTitle
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
.screen-second {
  display: flex;
  font-size: 14px;

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
