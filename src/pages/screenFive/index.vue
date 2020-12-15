<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <div class="fifth-screen">
        <div class="left">
          <div class="top">
            <div class="title">
              <span class="text">每日定额产出</span>
              <div class="button">历史最佳：{{ max }}</div>
              <span class="float-right">
                <span class="label" @click="handleRefresh">
                  <img src="../../assets/imgs/refresh.png" /> 数据更新至{{
                    refreshDate
                  }}
                </span>
              </span>
            </div>
            <div class="content">
              <div class="content-wrap">
                <bar-chart
                  :series="list"
                  :x-axis="xAxis"
                  :current-date="currentDate"
                ></bar-chart>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="title">
              <span class="text">未完成任务定额汇总</span>
              <div class="button">管材成套：{{ totalCT }} h</div>
              <div class="button">未成套：{{ totalWCT }} h</div>
              <div class="float-right">
                <span class="legend"> <span></span>管材成套 </span>
                <span class="legend active"> <span></span>未成套 </span>
              </div>
            </div>
            <div class="content">
              <div class="content-wrap">
                <h-chart :series="hListSlice" :y-axis="yAxisSlice"></h-chart>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="title">
              <span class="text">{{ currentDate }}工序定额产出</span>
            </div>
            <div class="content">
              <div class="content-wrap">
                <pie-chart :series="pieList"></pie-chart>
              </div>
            </div>
          </div>
          <div class="bottom" ref="bottom">
            <div class="content-wrap">
              <table>
                <thead>
                  <th>工序名称</th>
                  <th>产出</th>
                  <th>工序名称</th>
                  <th>产出</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in tableData" :key="index">
                    <td>{{ item.label }}</td>
                    <td>{{ item.value }}</td>
                    <td>{{ item.label2 }}</td>
                    <td>{{ item.value2 }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./barChart";
import HChart from "./barhorizentalChart";
import headerTitle from "../layout/header";
import PieChart from "./pieChart";
import axios from "axios";
import qs from "qs";
var domain = "http://mes.ironmanapi.com:8010/api/";
export default {
  computed: {
    tableData() {
      let res = [];
      for (let i = 0; i < this.tabelList.length; i += 2) {
        if (i + 1 < this.tabelList.length) {
          res.push({
            label: this.tabelList[i].label,
            value: this.tabelList[i].value,
            label2: this.tabelList[i + 1].label,
            value2: this.tabelList[i + 1].value,
          });
        }
      }
      return res;
    },
  },
  data() {
    return {
      xAxis: [],
      list: [
        {
          data: [],
        },
      ],
      hListSlice: [],
      hList: [
        //第一个是管材成套
        {
          data: [],
        },
        //第二个是未成套
        {
          data: [],
        },
      ],
      yAxisSlice: [],
      yAxis: [],
      pieList: [],
      tabelList: [],
      piedate: [],
      h: "55px",
      currentDate: "",
      step: 10,
      refreshDate: "",
      currentIndex: 0,
      xIndex: 0,
      //这个是用柱状图与饼图作每隔多少米去切换一次
      pieDivider: 200000,
      totalCT: 0,
      totalWCT: 0,
      max: "",
    };
  },
  methods: {
    dateFormat(time) {
      var date = new Date(time);
      var year = date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
       * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
       * */
      var month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // 拼接
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    getTaskDaily() {
      let _this = this;
      axios
        .post(domain + "ironman/getReportTask_Api", qs.stringify({}))
        .then((response) => {
          //成功回调
          var x = [];
          var pdate = [];
          var y = [];
          for (var i = 0; i < eval(response.data.Data).length; i++) {
            pdate.push(eval(response.data.Data)[i].date);
            x.push(eval(response.data.Data)[i].date.slice(5));
            y.push(Number(eval(response.data.Data)[i].hours));
          }
          _this.piedate = pdate;
          _this.xAxis = x;
          _this.list = [{ data: y }];
          _this.xIndex = 0;
          _this.currentDate = _this.xAxis[_this.xIndex];

          _this.getTaskDailyPer(_this.piedate[_this.xIndex]);
        })
        .catch((err) => {
          //错误回调
          console.log(err);
        });
    },
    getunFinishTaskDaily() {
      let _this = this;
      axios
        .post(domain + "ironman/gethasmaterial_Api", qs.stringify({}))
        .then((response) => {
          //成功回调
          var x = [];
          var data1 = [];
          var data2 = [];
          _this.totalCT = 0;
          _this.totalWCT = 0;
          for (var i = 0; i < eval(response.data.Data).length; i++) {
            x.push(
              eval(response.data.Data)[i].worksort.length >= 4
                ? eval(response.data.Data)[i].worksort.slice(2)
                : eval(response.data.Data)[i].worksort
            );
            data1.push(Number(eval(response.data.Data)[i].hasliluntime));
            data2.push(Number(eval(response.data.Data)[i].unhasliluntime));
            _this.totalCT =
              _this.totalCT +
              Math.round(Number(eval(response.data.Data)[i].hasliluntime));
            _this.totalWCT =
              _this.totalWCT +
              Math.round(Number(eval(response.data.Data)[i].unhasliluntime));
          }

          _this.yAxis = x;
          _this.hList = [{ data: data1 }, { data: data2 }];
        })
        .catch((err) => {});
    },
    getMax() {
      let _this = this;
      axios
        .post(domain + "ironman/returnMax", qs.stringify({}))
        .then((response) => {
          _this.max = eval(response.data.Data);
        })
        .catch((err) => {
          _this.max = "";
        });
    },
    getTaskDailyPer(pdate) {
      let _this = this;
      axios
        .post(
          domain + "ironman/getReprtoWork_Api",
          qs.stringify({ time: pdate ? pdate : new Date() })
        )
        .then((response) => {
          //成功回调
          var usageObj = {};
          var usageData = [];
          var table = {};
          var tabelList = [];
          var other = 0;
          for (var i = 0; i < eval(response.data.Data).length; i++) {
            usageObj = {};
            table = {};
            if (i <= 3) {
              other =
                other +
                Math.round(Number(eval(response.data.Data)[i].percent) * 100);
              usageObj.name = eval(response.data.Data)[i].workno;
              usageObj.value = Math.round(
                Number(eval(response.data.Data)[i].percent) * 100
              );
              usageData.push(usageObj);
            }
            table.label = eval(response.data.Data)[i].workno;
            table.value = Number(eval(response.data.Data)[i].sorttime);
            tabelList.push(table);
          }
          usageObj = {};
          usageObj.name = "其它";
          usageObj.value = 100 - other;
          usageData.push(usageObj);
          _this.pieList = usageData;
          _this.tabelList = tabelList;
        })
        .catch((err) => {
          //错误回调
          _this.pieList = [];
          _this.tabelList = [];
        });
    },
    initTableHeight() {
      this.$nextTick(() => {
        let i = Math.ceil(this.tabelList.length / 2);
        this.h = Math.floor(this.$refs.bottom.clientHeight / i) + "px";
      });
    },
    handleRefresh() {
      //调用方法
      alert("调用刷新数据方法");
    },
    _formatHBarData() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.yAxisSlice = this.yAxis.slice(
        this.currentIndex,
        this.step + this.currentIndex
      );
      this.hListSlice = this.hList.map((v) => {
        let data = JSON.parse(JSON.stringify(v.data));
        data = data.slice(this.currentIndex, this.step + this.currentIndex);
        return { data };
      });
      this.timer = setInterval(() => {
        if (this.currentIndex + this.step === this.yAxis.length) {
          this.currentIndex = 0;
        }
        this.yAxisSlice = this.yAxis.slice(
          this.currentIndex,
          this.step + this.currentIndex
        );
        this.hListSlice = this.hList.map((v) => {
          let data = JSON.parse(JSON.stringify(v.data));
          data = data.slice(this.currentIndex, this.step + this.currentIndex);
          return { data };
        });
        this.currentIndex++;
      }, 10000);
    },

    _formatPieData() {
      //写个定时器去获取饼图数据
      setInterval(() => {
        if (this.xAxis) {
          if (this.xIndex === this.xAxis.length) {
            this.xIndex = 0;
          }

          this.currentDate = this.xAxis[this.xIndex];
          //去请求饼图数据并赋值即可
          this.getTaskDailyPer(this.piedate[this.xIndex]);
          this.xIndex++;
        }
      }, this.pieDivider);
    },
  },
  created() {},
  mounted() {
    this.getTaskDaily();
    this.getunFinishTaskDaily();
    this.getMax();
    this.refreshDate = this.dateFormat(new Date());
    setInterval(() => {
      this.getTaskDaily();
      this.getunFinishTaskDaily();
      this.refreshDate = this.dateFormat(new Date());
    }, 1000 * 60 * 60);
    this.initTableHeight();
    this._formatPieData();
    this._formatHBarData();
  },
  components: {
    BarChart,
    HChart,
    PieChart,
    headerTitle
  },
};
</script>


<style lang="scss">
.layout {
  padding-top: 70px;
  height: 100%;
  background: radial-gradient(#010e34, #001454);
}

.body {
  padding: 0 20px;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.fifth-screen {
  height: 100%;
  display: flex;
  padding-bottom: 20px;
  .left {
    flex: 2;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    .top {
      flex: 2;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    .bottom {
      flex: 3;
      overflow: hidden;
      flex-direction: column;
      margin-top: 10px;
      position: relative;
      display: flex;
      .content-wrap {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
  .right {
    flex: 1;
    border-left: 1px solid #2a3b52;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .top {
      flex: 2;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      .title {
        text-align: center;
      }
    }
    .bottom {
      flex: 3;
      margin-top: 10px;
      overflow: hidden;
      margin-left: 20px;
      position: relative;
      .content-wrap {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
}
.title {
  line-height: 1;
  .text {
    font-size: 30px;
    color: #7efafc;
    margin-right: 30px;
    vertical-align: middle;
  }
  .button {
    display: inline-block;
    border: 1px solid #4197c9;
    background: #202f65;
    padding: 0 10px;
    color: #fff;
    font-size: 22px;
    line-height: 28px;
    & + .button {
      margin-left: 30px;
    }
  }
  .float-right {
    float: right;
    font-size: 14px;
  }
  .label {
    color: #fff;
    font-size: 14px;
    line-height: 30px;
    vertical-align: middle;
    cursor: pointer;
    font-size: 18px;
    img {
      width: 14px;
      height: 14px;
      vertical-align: middle;
    }
  }
  .legend {
    line-height: 30px;
    color: #fff;
    vertical-align: middle;
    font-size: 18px;
    & + .legend {
      margin-left: 30px;
    }
    & > span {
      width: 14px;
      height: 14px;
      display: inline-block;
      background: #04b675;
      margin-right: 10px;
    }
    &.active {
      & > span {
        background: #289df5;
      }
    }
  }
}
.content {
  padding: 10px;
  flex: 1;
  overflow: hidden;
  position: relative;
  .content-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
table {
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  border: 1px solid #172763;
  td,
  th {
    font-size: 18px;
  }
  thead {
    background: #172763;
    th {
      padding: 5px;
    }
  }
  tr {
    background: #010f3c;
    &:nth-child(2n) {
      background: #172763;
    }
  }
}
</style>