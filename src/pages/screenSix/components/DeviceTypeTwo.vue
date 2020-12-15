<!--2个工位的设备-->
<template>
  <Poptip trigger="hover">
    <div class="device-type-two">
      <div class="worker" :class="getBgColor(device.worker2.status)">{{device.worker2.name}}</div>
      <div class="tb">{{device.deviceName}}</div>
      <div class="worker" :class="getBgColor(device.worker1.status)">{{device.worker1.name}}</div>
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
.device-type-two {
  width: 90px;
  cursor: pointer;
}
.worker {
  height: 17px;
  line-height: 15px;
  text-align: center;
  color: #fff;
  border: 1px solid #0267c5;
  font-size: 12px;
}
.tb {
  height: 23px;
  width: 80px;
  margin: 0 auto;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 23px;
  border-left: 1px solid #0262bd;
  border-right: 1px solid #0262bd;
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
