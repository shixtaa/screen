<template>
  <div class="event-state">
    <div class="header">
      <ul class="clearfix">
        <li>设备</li>
        <li>类型</li>
        <li>异常描述</li>
        <li>时长</li>
      </ul>
    </div>
    <div class="body" ref="scrollBody">
      <div
        class="scroll-wrap"
        ref="scrollWrap"
        :style="{marginTop: `${wrapMt}px`,transitionDuration: duration}"
      >
        <template v-for="(item,index) in listLoop">
          <ul class="clearfix" :key="index">
            <li>{{item.name}}</li>
            <li>{{item.type}}</li>
            <li>{{item.desc}}</li>
            <li>{{item.time}}</li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  computed: {
    totalH() {
      return this.list.length * 50;
    }
  },
  data() {
    return {
      wrapMt: 0,
      duration: ".3s",
      len: 0,
      listLoop: [],
      timer: null
    };
  },
  methods: {
    init() {
      let that = this;
      this.len = this.list.length;
      const step = 50;
      let bodyHeight = this.$refs.scrollBody.clientHeight;
      if (bodyHeight < this.totalH) {
        this.listLoop = [...this.list, ...this.list];
        this.timer = setInterval(() => {
          this.wrapMt -= step;
        }, 2000);
      } else {
        this.listLoop = this.list;
      }
      let el = that.$refs.scrollBody;
      function whichTransitionEvent() {
        let t,
          transitions = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
          };

        for (t in transitions) {
          if (el.style[t] !== undefined) {
            return transitions[t];
          }
        }
      }

      let transitionEvent = whichTransitionEvent();
      transitionEvent &&
        el.addEventListener(transitionEvent, function() {
          if (that.wrapMt <= -that.totalH) {
            // clearInterval(that.timer);
            that.duration = "0s";
            that.wrapMt = 0;
            setTimeout(() => {
              that.duration = "0.3s";
            }, 300);
          }
        });
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    list() {
      this.init();
    }
  }
};
</script>

<style lang="scss" scoped>
.event-state {
  height: 100%;
  padding-top: 50px;
  position: relative;

  .header {
    position: absolute;
    width: 100%;
    top: 0;
    li {
      border-bottom: 1px solid #032d69;
    }
  }

  .body {
    height: 100%;
    overflow: hidden;
    ul {
      background: #0a2062;
      &:nth-child(2n) {
        background: transparent;
      }
    }

    li {
      height: 50px;
      line-height: 50px;
    }
  }

  ul {
    li {
      float: left;
      width: 25%;
      color: #fff;
      text-align: center;
      height: 50px;
      line-height: 50px;
      &:nth-child(3) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .scroll-wrap {
    transition-property: all;
    transition-timing-function: linear;
  }
}
</style>