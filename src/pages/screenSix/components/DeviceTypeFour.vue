<!--4个工位的设备：表格形状-->
<template>
  <Poptip trigger="hover">
    <div class="device-type-four">
      <template v-if="textPos=='left'">
        <div class="text-left">{{device.deviceName}}</div>
      </template>

      <div class="tb">
        <table>
          <tr>
            <td :class="getBgColor(device.worker1.status)">{{device.worker1.name}}</td>
            <td></td>
            <td :class="getBgColor(device.worker3.status)">{{device.worker3.name}}</td>
          </tr>
          <tr>
            <td></td>
            <td :class="getBgColor(device.worker2.status)">{{device.worker2.name}}</td>
            <td></td>
          </tr>
        </table>
      </div>

      <template v-if="textPos=='right'">
        <div class="text-right">{{device.deviceName}}</div>
      </template>
    </div>
    <div slot="content">
      <div>
        <span>工单号：</span>
        <span>11111111</span>
      </div>
      <div>
        <span>执行工艺：</span>
        <span>RAB67888889</span>
      </div>
      <div>
        <span>操作人：</span>
        <span>张三</span>
      </div>
    </div>
  </Poptip>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    device: {
      type: Object,
      required: true
    },
    textPos: {
      type: String,
      default: "left"
    }
  },
  components: {},
  methods: {
    getBgColor(status) {
      let cls = "";
      switch (status) {
        case "run":
          cls = "run-color";
          break;
        case "idle":
          cls = "idle-color";
          break;
        case "pause":
          cls = "pause-color";
          break;
        case "error":
          cls = "error-color";
          break;
      }
      return cls;
    }
  }
};
</script>

<style lang="scss" scoped>
.device-type-four {
  display: flex;
  width: 115px;
  align-items: center;
  cursor: pointer;
  .text-left,
  .text-right {
    color: #fff;
    font-size: 14px;
    line-height:1;
  }
  .text-left {
    margin-right: 10px;
  }
  .text-right {
    margin-left: 10px;
  }
  table {
    table-layout: fixed;
    td {
      border: 1px solid #0267c5;
      width: 20px;
      height: 15px;
      box-sizing: content-box;
      color: #fff;
      line-height: 1;
      text-align: center;
      vertical-align: middle;
      font-size: 12px;
    }
  }
}
.run-color {
  background-color: #18348c;
}
.idle-color {
  background-color: #00bad0;
}
.pause-color {
  background-color: #e39b00;
}
.error-color {
  background-color: #b90000;
}
</style>
