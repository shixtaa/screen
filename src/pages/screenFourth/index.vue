<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <div class="fourth-screen">
        <div
          class="wrap clearfix"
          :style="{
            width: wrapWidth,
            marginLeft: marginLeft + 'px',
            transitionDuration: duration,
          }"
        >
          <div
            v-for="(item, index) in listSlice"
            :key="index"
            :style="{ width: width + 'px' }"
          >
            <template v-for="(it, idx) in item">
              <card
                :key="idx"
                :title="it.workorderno"
                :subTitle="it.lasttimeloc"
                :height-number="50"
                :type="2"
              >
                <div class="item">
                  <div>
                    <little-card
                      title="执行工艺"
                      :sub-title="it.crafts"
                      :type="1"
                      :height="28"
                    ></little-card>
                    <little-card
                      title="产品数量"
                      :sub-title="it.total"
                      :type="1"
                      :height="28"
                    ></little-card>
                    <prog
                      title="工序完成度"
                      :percent="it.worksorts"
                      :height="19"
                    ></prog>
                    <prog
                      title="零件完成度"
                      :percent="it.completion"
                      :height="19"
                    ></prog>
                  </div>
                  <div style="padding-top: 5px">
                    <little-card
                      :type="2"
                      title="最小派工时间"
                      :height="28"
                      :sub-title="it.starttime1"
                    ></little-card>
                    <little-card
                      :type="2"
                      title="最大报工时间"
                      :height="28"
                      :sub-title="it.endtime1"
                      :style="{ marginTop: '5%' }"
                    ></little-card>
                    <little-card
                      :type="2"
                      title="时间差（天）"
                      :height="28"
                      :sub-title="it.duration"
                      :style="{ marginTop: '5%' }"
                    ></little-card>
                  </div>
                  <div>
                    <little-card
                      :type="3"
                      title="管材最近到货日期"
                      :height="28"
                      :sub-title="it.daohuodate"
                    ></little-card>
                    <prog
                      title="管材成套度"
                      :percent="it.chengtao > 100 ? 100 : it.chengtao"
                      :height="20"
                    ></prog>
                    <little-card
                      :type="3"
                      title="焊接计划日期"
                      :height="28"
                      :sub-title="it.hanjiesplan"
                    ></little-card>
                    <prog
                      title="焊接件成套度"
                      :percent="it.hanjies > 100 ? 100 : it.hanjies"
                      :height="20"
                    ></prog>
                  </div>
                </div>
              </card>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../../components/card";
import headerTitle from "../layout/header";
import prog from "./progress";
import LittleCard from "./littleCard";
import axios from "axios";
import $ from "jquery";

var domain = "http://mes.ironmanapi.com:8010/api/";
export default {
  computed: {
    listSlice() {
      let sliceArr = [];
      for (let i = 0; i < this.list.length; i += 2) {
        sliceArr.push(this.list.slice(i, i + 2));
      }
      if (sliceArr.length >= 2) {
        sliceArr = [...sliceArr, sliceArr[0], sliceArr[1]];
      }
      return sliceArr;
    },
    wrapWidth() {
      return this.listSlice.length * 950 + "px";
    },
  },
  data() {
    return {
      list: [],
      marginLeft: 0,
      duration: ".8s",
      timer: null,
      width: 0,
    };
  },
  methods: {
    //生产任务
    getlist() {
      axios
        .post(domain + "/IronMan/getproducedata", "")
        .then((response) => {
          this.list = response.data.Data;
          this.animate();
        })
        .catch((err) => {
          //错误回调
          console.log(err);
        });
    },

    animate() {
      this.$nextTick(() => {
        let i = 0;
        if (this.timer) {
          this.marginLeft = 0;
          clearInterval(this.timer);
        }
        this.timer = setInterval(() => {
          i++;
          this.marginLeft -=this.width + 50;
          if (i === this.listSlice.length - 1) {
            i = 0;
            this.duration = "0s";
            this.marginLeft = 0;
            setTimeout(() => {
              this.duration = "0.8s";
            }, 800);
          }
        }, 30000);
      });
    },
  },
  created() {
    this.getlist();
  },
  mounted() {
    var w = $(".fourth-screen").width();
    this.width = (w - 50) / 2;
    setInterval(() => {
      this.getlist();
    }, 5000 * 60);
  },
  components: {
    card,
    prog,
    LittleCard,
    headerTitle,
  },
};
</script>

<style lang="scss" >
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
.fourth-screen {
  overflow: hidden;
  .item {
    display: flex;
    & > div {
      height: 100%;
      margin-left: 25px;
      &:first-child {
        flex: 1;
      }
      &:nth-child(2) {
        flex: 1.2;
      }
      &:last-child {
        flex: 1;
        margin-right: 25px;
      }
    }
  }

  .card {
    margin-bottom: 18px;
  }

  .little-card {
    & + .little-card {
      margin-top: 1%;
    }

    & + .progress {
      margin-top: 1%;
    }
  }

  .progress {
    & + .little-card {
      margin-top: 1%;
    }
    & + .progress {
      margin-top: 1%;
    }
  }
  .wrap {
    height: 100%;
    transition-property: all;
    transition-timing-function: linear;

    & > div {
      float: left;
      // width: 900px;
      margin-right: 50px;
    }
  }
}
</style>
