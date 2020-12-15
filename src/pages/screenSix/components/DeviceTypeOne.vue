<!--无工位的设备-->
<template>
  <Poptip trigger="hover">
    <div class="device-type-one" :class="bg">{{device.deviceName}}</div>
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
  computed: {
    bg() {
      let cls = "";
      switch (this.device.status) {
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
