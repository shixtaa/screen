<!--无工位的设备-->
<template>
  <div style="display:inline-block;">
    <el-popover trigger="hover" @show="getInfo" :disabled="isEmptyData" popper-class="tb-popover" width="960">
      <div
        class="device-type-one"
        slot="reference"
        :class="{[bg]:bg,'big':size=='big'}"
      >{{device.mark}}</div>
      <div>
        <p style="padding:10px 20px;">
          设备号：{{this.device.mark}}
        </p>
        <Table :columns="columns1" :data="data1" height=400></Table>
      </div>
    </el-popover>
  </div>
</template>

<script>
import axios from "axios";
let domain = "http://mes.ironmanapi.com:8010/api/";
export default {
  data() {
    return {
      isEmptyData: false,
      columns1: [
        {
          title: "任务号",
          align: "center",
          width: 130,
          key: "taskcode"
        },
        {
          title: "零件图号",
          align: "center",
          key: "componentno"
        },
        {
          title: "状态",
          align: "center",
          key: "status",
          render: (h, params) => {
            let status = params.row.status;
            let s,color;
            switch (status) {
              case 0:
                s = "待确认";
                color="#448ef1";
                break;
              case 1:
                s = "已确认未发送";
                color="#3acacc";
                break;
              case 2:
                s = "已发送未接单";
                color="#e32f2f";
                break;
              case 3:
                s = "已接单";
                color="#14c1a3";
                break;
              case 4:
                s = "部分报工";
                color="#ffa66b";
                break;
              case 6:
                s = "待交接";
                color="#d1f3db";
                break;
            }
            return h("span",{
              style:{
                color:color
              }
            }, s);
          }
        },
        {
          title: "工序",
          align: "center",
          key: "workno"
        },
        {
          title: "工序内容",
          align: "center",
          key: "workcontent"
        },
        {
          title: "数量",
          width: 80,
          align: "center",
          key: "amount"
        },
        {
          title: "生产人员",
          width: 100,
          align: "center",
          key: "staffname"
        }
      ],
      data1: []
    };
  },
  props: {
    device: {
      required: true
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  watch: {
    device: function(val) {
      this.isEmptyData = Object.keys(this.device).length == 2;
    }
  },
  mounted() {
    this.isEmptyData = Object.keys(this.device).length == 2;
  },
  computed: {
    bg() {
      let cls = "";
      switch (this.device.usestatus) {
        case "scz":
          cls = "idle-color";
          break;
        case "kx":
          cls = "run-color";
          break;
        case "dm":
          cls = "pause-color";
          break;
        case "jx":
          cls = "error-color";
          break;
      }
      return cls;
    }
  },
  methods: {
    getInfo() {
      let vm = this;
      axios
        .get(domain + "ironman/GetDeviceTask?mark=" + this.device.mark)
        .then(function(res) {
          vm.data1 = res.data.Data;
        });
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.device-type-one {
  width: 65px;
  height: 25px;
  display: inline-block;
  box-sizing: border-box;
  color: #fff;
  border: 1px solid #0267c5;
  text-align: center;
  line-height: 23px;
  cursor: pointer;
}
.device-type-one.big {
  width: 106px;
}
.run-color {
  background-color: #18348c;
}
.idle-color {
  background-color: #00bad0;
}
.pause-color {
  background-color: #e39b00;
  animation: fade 600ms infinite;
}
.error-color {
  background-color: #b90000;
}
@keyframes fade {
    from {
        opacity: 1.0;
    }
    50% {
        opacity: 0.4;
    }
    to {
        opacity: 1.0;
    }
}
</style>
<style lang="scss">
.tb-popover{
  padding:0;
}
</style>
