<!--3个工位的设备：梯形形状-->
<template>
  <Poptip trigger="hover">
    <div class="device-type-three" :class="{'flip':flip,'tx-bottom':textPos == 'bottom'}">
      <template v-if="textPos=='left'">
        <div class="text-left">{{device.deviceName}}</div>
      </template>
      <div class="blocks" :class="{'blocks-flip':flip}">
        <div class="blocks-left" :class="getBgImg(device.worker1.status)">
          <span>{{device.worker1.name}}</span>
        </div>
        <div class="blocks-ct" :class="getBgImg(device.worker2.status)">
          <span>{{device.worker2.name}}</span>
        </div>
        <div class="blocks-right" :class="getBgImg(device.worker3.status)">
          <span>{{device.worker3.name}}</span>
        </div>
      </div>
      <template v-if="textPos=='right'">
        <div class="text-right">{{device.deviceName}}</div>
      </template>
      <template v-if="textPos=='bottom'">
        <div class="text-bottom">{{device.deviceName}}</div>
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
      //文字位置
      type: String,
      default: "left"
    },
    flip: {
      //是否翻转
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    getBgImg(status) {
      let cls = "";
      switch (status) {
        case "run":
          cls = "run-img";
          break;
        case "idle":
          cls = "idle-img";
          break;
        case "pause":
          cls = "pause-img";
          break;
        case "error":
          cls = "error-img";
          break;
      }
      return cls;
    }
  }
};
</script>

<style lang="scss" scoped>
.device-type-three {
  display: flex;
  align-items: center;
  cursor: pointer;
  .text-left,
  .text-right {
    color: #fff;
    font-size: 14px;
    position: relative;
    top: 3px;
  }
  .text-left {
    margin-right: 10px;
  }
  .text-right {
    margin-left: 10px;
  }
  .blocks {
    position: relative;
    display: flex;
    top: 8px;
    span {
      display: inline-block;
    }
    .blocks-left,
    .blocks-right {
      width: 24px;
      height: 29px;
      position: relative;
      color: #fff;
      text-align: center;
    }
    .blocks-left {
      left: 9px;
    }
    .blocks-right {
      transform: rotateY(180deg);
      right: 9px;
    }
    .blocks-left span {
      transform: translate(-12px, -6px);
    }
    .blocks-right span {
      transform: rotateY(180deg) translate(12px, -6px);
    }
    .blocks-ct {
      width: 32px;
      height: 14px;
      color: #fff;
      text-align: center;
    }
    .blocks-ct span {
      transform: translate(0, -18px);
    }
  }
  .blocks-flip {
    top: 0;
    transform: rotateX(180deg) rotateY(180deg);
    .blocks-left span {
      transform: rotateX(180deg) rotateY(180deg) translate(14px, 0);
    }
    .blocks-right span {
      transform: rotateX(180deg) translate(-14px, 0);
    }
    .blocks-ct span {
      transform: rotateX(180deg) rotateY(180deg) translate(0, 18px);
    }
  }
  .blocks-left.run-img,
  .blocks-right.run-img {
    background: url(../../../assets/imgs/t11.png) 0 0 no-repeat;
  }
  .blocks-ct.run-img {
    background: url(../../../assets/imgs/t1.png) 0 0 no-repeat;
  }
  .blocks-left.idle-img,
  .blocks-right.idle-img {
    background: url(../../../assets/imgs/t22.png) 0 0 no-repeat;
  }
  .blocks-ct.idle-img {
    background: url(../../../assets/imgs/t2.png) 0 0 no-repeat;
  }
  .blocks-left.pause-img,
  .blocks-right.pause-img {
    background: url(../../../assets/imgs/t33.png) 0 0 no-repeat;
  }
  .blocks-ct.pause-img {
    background: url(../../../assets/imgs/t3.png) 0 0 no-repeat;
  }
  .blocks-left.error-img,
  .blocks-right.error-img {
    background: url(../../../assets/imgs/t44.png) 0 0 no-repeat;
  }
  .blocks-ct.error-img {
    background: url(../../../assets/imgs/t4.png) 0 0 no-repeat;
  }
}
.device-type-three.tx-bottom {
  flex-direction: column;
  .text-bottom {
    color: #fff;
    font-size: 14px;
    position: relative;
    top: 4px;
  }
}
.flip {
  .text-left,
  .text-right {
    top: -4px;
  }
}
</style>
