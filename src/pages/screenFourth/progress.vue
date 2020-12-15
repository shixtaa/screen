<template>
  <div class="progress" v-show="title.length" :class="[theme]" :style="style">
    <div>
      <div class="title">
        {{title}}
        <span>{{percent}}%</span>
      </div>
      <div class="percent">
        <div class="num" :style="{width: `${percent}%`}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    percent: {
      type: Number,
      default: 0
    },
    height: Number
  },
  computed: {
    style() {
      return {
        height: `${this.height}%`
      };
    },
    theme() {
      let percent = this.percent;
      if (percent > 0 && percent <= 25) {
        return "";
      } else if (percent > 25 && percent <= 50) {
        return "type1";
      } else if (percent > 50 && percent <= 80) {
        return "type2";
      } else if (percent > 80 && percent <100) {
        return "type3";
      } else if (percent == 100) {
        return "type4";
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes animate {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 600px;
  }
}
.progress {
  display: flex;
  align-items: center;
  & > div {
    flex: 1;
  }

  & + .progress {
    margin-top: 1%;
  }

  .title {
    font-size: 16px;
    color: #fff;
    line-height: 30px;
    height: 30px;

    span {
      float: right;
    }
  }

  .percent {
    height: 14px;
    background: #fff;
    border-radius: 7px;

    .num {
      height: 100%;
      border-radius: 7px;
      background-color: #f05d59;
      transition: all 0.3s linear;
      transition-delay: 0.2s;
      background-image: repeating-linear-gradient(
        45deg,
       #fe948c,
       #f05d59 15px,
        transparent 0,
        transparent 20px
      );
      animation: animate 20s infinite linear;
    }
  }

  &.type1 .percent .num {
    background-color: #dd9821;
     background-image: repeating-linear-gradient(
        45deg,
       #f5bc6c,
       #dd9821 15px,
        transparent 0,
        transparent 20px
      );
      animation: animate 20s infinite linear;
  }
  &.type2 .percent .num {
    background-color: #1b89d3;
     background-image: repeating-linear-gradient(
        45deg,
       #3ac5fe,
       #1b89d3 15px,
        transparent 0,
        transparent 20px
      );
      animation: animate 20s infinite linear;
  }
  &.type3 .percent .num {
    background-color: #15c197;
     background-image: repeating-linear-gradient(
        45deg,
       #88e5b6 ,
       #15c197 15px,
        transparent 0,
        transparent 20px
      );
      animation: animate 20s infinite linear;
  }
  &.type4 .percent .num {
    background-color: #009688;
     background-image: repeating-linear-gradient(
        45deg,
       #43cab2,
       #009688 15px,
        transparent 0,
        transparent 20px
      );
      animation: animate 20s infinite linear;
  }
}
@media (max-width: 1366px) {
  .progress {
    .title {
      font-size: 12px;
      line-height: 20px;
      height: 20px;
    }
    .percent {
      height: 10px;
    }
  }
}
</style>
