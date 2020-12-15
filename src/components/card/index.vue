<template>
  <div class="card" :style="{ height: height }">
    <div class="card-line" v-if="type === 1"></div>
    <div class="horn-left-top" :class="{ type2: type === 2 }"></div>
    <div class="horn-left-bottom"></div>
    <div class="horn-right-top"></div>
    <div class="horn-right-bottom"></div>
    <div class="card-wrap" style="height: 100%">
      <div class="card-title" v-if="type === 1">{{ title }}</div>
      <div class="card-title2" v-if="type === 2">
        工单号：{{ title }}
        <span>流水号: {{ subTitle }}</span>
      </div>
      <div class="view-area">
        <slot></slot>
      </div>
      <div class="line-left-top"></div>
      <div class="line-left-bottom"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  props: {
    title: {
      type: String,
    },
    heightNumber: Number,
    divider: {
      type: Number,
      default: 0,
    },
    type: {
      type: Number,
      default: 1,
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
  data(){
      return {
          height:"auto"
      }
  },
//   watch:{
//       heightNumber(){
//           this.heightStyle();
//       }
//   },
  computed: {},
  created(){
      this.heightStyle();
  },
  mounted() {
    $(window).resize((e) => {
      console.log("resize");
      this.heightStyle();
    });
  },
  methods: {
    heightStyle() {
      if (this.heightNumber) {
        let hPercent = this.heightNumber;
        let hBody = document.body.clientHeight - 70;
        this.height =  (hBody * hPercent) / 100 - 20 - this.divider + "px";
      } else {
        this.height = "auto";
      }
      console.log(this.height);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 7px 0 6px 3px;
  position: relative;
  min-width: 450px;

  .card-line {
    width: 134px;
    height: 3px;
    background: url("../../assets/imgs/card-line.png") no-repeat;
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
  }

  .card-wrap {
    background: #0d1d4d;
    border: 1px solid #2773e6;
    position: relative;
    padding: 22px;
    padding-top: 50px;
    position: relative;

    .card-title {
      position: absolute;
      width: 265px;
      height: 40px;
      background: url("../../assets/imgs/card-title.png") no-repeat;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      padding: 1px;
      line-height: 38px;
      color: #fff;
      text-align: center;
    }
    .card-title2 {
      position: absolute;
      top: 0;
      height: 45px;
      line-height: 45px;
      left: 0;
      right: 0;
      background: #0f2463;
      font-size: 20px;
      color: #fff;
      padding: 0 15px;
      span {
        float: right;
      }
    }

    .line-left-top,
    .line-left-bottom {
      position: absolute;
      width: 2px;
      height: 29px;
      background: #0d1d4d;
      position: absolute;
      left: -1px;
      top: 0px;
    }

    .line-left-bottom {
      top: auto;
      bottom: 0px;
    }
  }

  .horn-left-top {
    width: 75px;
    height: 57px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    background: url("../../assets/imgs/horn-left-bottom.png") no-repeat;
    transform: rotateX(180deg);
    &.type2 {
      background: url("../../assets/imgs/horn-top-left.png") no-repeat;
      transform: rotateX(0deg);
    }
  }

  .horn-left-bottom {
    position: absolute;
    width: 76px;
    height: 56px;
    left: 0;
    bottom: 0;
    background: url("../../assets/imgs/horn-left-bottom.png") no-repeat;
  }

  .horn-right-bottom {
    position: absolute;
    width: 22px;
    height: 22px;
    background: url("../../assets/imgs/horn-right-bottom.png");
    right: 0;
    bottom: 6px;
    z-index: 1;
  }

  .horn-right-top {
    position: absolute;
    width: 7px;
    height: 7px;
    top: 7px;
    right: 0;
    background: url("../../assets/imgs/horn-right-top.png");
    z-index: 1;
  }
  .view-area {
    overflow: hidden;
    position: absolute;
    top: 50px;
    left: 10px;
    right: 10px;
    bottom: 2px;
    & > div {
      height: 100%;
    }
  }
}
</style>
