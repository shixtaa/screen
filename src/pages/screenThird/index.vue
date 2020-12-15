<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <div class="screen-third">
        <div>
          <card title="生产派工单" :height-number="50">
            <rank :list="producelist"></rank>
          </card>
          <card title="专业调模单" :height-number="50">
            <rank :list="moldlist"></rank>
          </card>
        </div>
        <div>
          <card title="设备生产任务" :height-number="100">
            <rank :list="machinelist"></rank>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/card";
import rank from "./rank";
import axios from "axios";
import qs from "qs";
import headerTitle from "../layout/header";
var domain = "http://mes.ironmanapi.com:8010/api/";
export default {
  data() {
    return {
      machinelist: [],
      moldlist: [],
      producelist: [],
    };
  },
  methods: {
    //设备生产任务
    getmachinelist(mode, type) {
      axios
        .post(
          domain + "/IronMan/returnTaskOrderList",
          qs.stringify({ ordertype: mode, types: type })
        )
        .then((response) => {
          //成功回调
          var usageData = [];
          var usageObj = {};
          for (var i = 0; i < response.data.Data.length; i++) {
            usageObj = {};
            usageObj.taskcode = response.data.Data[i].taskcode;
            usageObj.staffname = response.data.Data[i].staffname;
            usageObj.componentno = response.data.Data[i].componentno;
            usageObj.workno = response.data.Data[i].workno;
            usageObj.device = response.data.Data[i].device;

            var str = "";
            switch (response.data.Data[i].status) {
              case 0:
                str = "待确认";
                break;
              case 1:
                str = "未发送";
                break;
              case 2:
                str = "已发送";
                break;
              case 3:
                str = "已接单";
                break;
              case 4:
                str = "部分报工";
                break;
              case 6:
                str = "待交接";
                break;
            }
            usageObj.status = str;
            usageData.push(usageObj);
          }
          this.machinelist = usageData;
        })
        .catch((err) => {
          //错误回调
          console.log(err);
        });
    },
    //专业调模单
    getmoldlist(mode, type) {
      axios
        .post(
          domain + "/IronMan/returnTaskOrderList",
          qs.stringify({ ordertype: mode, types: type })
        )
        .then((response) => {
          //成功回调
          var usageData = [];
          var usageObj = {};
          for (var i = 0; i < response.data.Data.length; i++) {
            usageObj = {};
            usageObj.taskcode = response.data.Data[i].taskcode;
            usageObj.staffname = response.data.Data[i].staffname;
            usageObj.componentno = response.data.Data[i].componentno;
            usageObj.workno = response.data.Data[i].workno;
            usageObj.device = response.data.Data[i].device;

            var str = "";
            switch (response.data.Data[i].status) {
              case 0:
                str = "待确认";
                break;
              case 1:
                str = "未发送";
                break;
              case 2:
                str = "已发送";
                break;
              case 3:
                str = "已接单";
                break;
              case 4:
                str = "部分报工";
                break;
              case 6:
                str = "待交接";
                break;
            }
            usageObj.status = str;
            usageData.push(usageObj);
          }
          this.moldlist = usageData;
        })
        .catch((err) => {
          //错误回调
          console.log(err);
        });
    },
    //生产派工单
    getproducelist(mode, type) {
      axios
        .post(
          domain + "/IronMan/returnTaskOrderList",
          qs.stringify({ ordertype: mode, types: type })
        )
        .then((response) => {
          //成功回调
          var usageData = [];
          var usageObj = {};
          for (var i = 0; i < response.data.Data.length; i++) {
            usageObj = {};
            usageObj.taskcode = response.data.Data[i].taskcode;
            usageObj.staffname = response.data.Data[i].staffname;
            usageObj.componentno = response.data.Data[i].componentno;
            usageObj.workno = response.data.Data[i].workno;
            usageObj.device = response.data.Data[i].device;

            var str = "";
            switch (response.data.Data[i].status) {
              case 0:
                str = "待确认";
                break;
              case 1:
                str = "未发送";
                break;
              case 2:
                str = "已发送";
                break;
              case 3:
                str = "已接单";
                break;
              case 4:
                str = "部分报工";
                break;
              case 6:
                str = "待交接";
                break;
            }
            usageObj.status = str;
            usageData.push(usageObj);
          }
          this.producelist = usageData;
        })
        .catch((err) => {
          //错误回调
          console.log(err);
        });
    },
  },
  created() {
    this.getmachinelist("2", "1");
    this.getmoldlist("1", "1");
    this.getproducelist("2", "100");
  },

  mounted() {
    setInterval(() => {
      this.getmachinelist("2", "1");
      this.getmoldlist("1", "1");
      this.getproducelist("2", "100");
    }, 5000);
  },
  components: {
    Card,
    rank,
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
.screen-third {
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