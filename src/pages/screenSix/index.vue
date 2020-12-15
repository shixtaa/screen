<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <div class="screen-six">
        <div class="left-panel">
          <div class="left-area">
            <div class="la-l1">
              <DeviceTypeOne
                :device="{ deviceName: 'H33', status: 'run' }"
                style="margin-left: 70px"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="{ deviceName: 'H32', status: 'run' }"
                style="margin-left: 70px"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="{ deviceName: 'H31', status: 'run' }"
                style="margin-left: 70px"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="{ deviceName: 'H30', status: 'run' }"
                style="margin-left: 70px"
              ></DeviceTypeOne>
            </div>
            <div class="la-branch">
              <span class="lb-text1">通</span>
              <span class="lb-text2">道</span>
            </div>
            <div class="la-l2">
              <div class="la-l2-left">
                <span>校</span>
                <span>正</span>
                <span>区</span>
              </div>
              <div class="la-l2-right">
                <div class="blocks mb11">
                  <DeviceTypeOne
                    :device="{ deviceName: 'H29', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H28', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H27', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H26', status: 'run' }"
                  ></DeviceTypeOne>
                </div>
                <div class="blocks mb11">
                  <DeviceTypeOne
                    :device="{ deviceName: 'H25', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H24', status: 'error' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H23', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H22', status: 'run' }"
                  ></DeviceTypeOne>
                </div>
                <div class="blocks">
                  <DeviceTypeOne
                    :device="{ deviceName: 'H21', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H20', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H19', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'H18', status: 'pause' }"
                  ></DeviceTypeOne>
                </div>
                <div class="la-l2-right-ft">
                  <div class="blocks">
                    <DeviceTypeTwo
                      :device="{
                        deviceName: 'JH31',
                        worker1: { name: 'G1(2m)', status: 'run' },
                        worker2: { name: 'G2', status: 'run' },
                      }"
                    ></DeviceTypeTwo>
                    <DeviceTypeTwo
                      :device="{
                        deviceName: 'JH30',
                        worker1: { name: 'G1(2m)', status: 'run' },
                        worker2: { name: 'G2', status: 'run' },
                      }"
                    ></DeviceTypeTwo>
                  </div>
                </div>
              </div>
            </div>
            <div class="la-l3">
              <div class="la-l3-left">
                <div class="ll-left-row">
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM02', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM04', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM06', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM08', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM10', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM12', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM14', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM16', status: 'run' }"
                  ></DeviceTypeOne>
                </div>
                <div class="ll-left-row">
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM01', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM03', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM05', status: 'idle' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM07', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM09', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM11', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM13', status: 'run' }"
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="{ deviceName: 'DM15', status: 'run' }"
                  ></DeviceTypeOne>
                </div>
              </div>
              <div class="la-l3-right">
                <div class="ll-right-row1">
                  <DeviceTypeOne
                    :device="{ deviceName: 'H34', status: 'run' }"
                  ></DeviceTypeOne>
                </div>
                <div class="ll-right-row2">
                  <div>
                    <DeviceTypeTwo
                      :device="{
                        deviceName: 'JH19',
                        worker1: { name: 'G1(3m)', status: 'run' },
                        worker2: { name: 'G2', status: 'run' },
                      }"
                    ></DeviceTypeTwo>
                    <DeviceTypeTwo
                      :device="{
                        deviceName: 'JH17',
                        worker1: { name: 'G1(3m)', status: 'run' },
                        worker2: { name: 'G2', status: 'run' },
                      }"
                    ></DeviceTypeTwo>
                    <DeviceTypeTwo
                      :device="{
                        deviceName: 'JH15',
                        worker1: { name: 'G1(3.4m)', status: 'run' },
                        worker2: { name: 'G2', status: 'run' },
                      }"
                    ></DeviceTypeTwo>
                  </div>
                  <div>
                    <DeviceTypeTwo
                      :device="{
                        deviceName: 'JH18',
                        worker1: { name: 'G1(3m)', status: 'run' },
                        worker2: { name: 'G2', status: 'run' },
                      }"
                    ></DeviceTypeTwo>
                    <DeviceTypeTwo
                      :device="{
                        deviceName: 'JH16',
                        worker1: { name: 'G1(3.5m)', status: 'run' },
                        worker2: { name: 'G2', status: 'run' },
                      }"
                    ></DeviceTypeTwo>
                  </div>
                </div>
              </div>
            </div>
            <div class="la-l4">
              <div class="la-l4-blocks">
                <DeviceTypeOne
                  :device="{ deviceName: 'H16', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H13', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H12', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H11', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H10', status: 'run' }"
                ></DeviceTypeOne>
              </div>
              <div class="la-l4-blocks">
                <DeviceTypeOne
                  :device="{ deviceName: 'H17', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H14', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H09', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H08', status: 'idle' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H07', status: 'idle' }"
                ></DeviceTypeOne>
              </div>
              <div class="la-l4-blocks">
                <DeviceTypeOne
                  :device="{ deviceName: 'H15', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H06', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H05', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H04', status: 'run' }"
                ></DeviceTypeOne>
              </div>
            </div>
            <div class="la-l5">
              <div class="la-l5-blocks">
                <DeviceTypeOne
                  :device="{ deviceName: 'H03', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H02', status: 'run' }"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="{ deviceName: 'H01', status: 'run' }"
                ></DeviceTypeOne>
              </div>
            </div>
          </div>
          <div class="main-road">
            <span class="mr-text1">主</span>
            <span class="mr-text2">通</span>
            <span class="mr-text3">道</span>
          </div>
          <div class="right-area">
            <div class="ra-l1">
              <DeviceTypeFour
                :device="{
                  deviceName: 'JH29',
                  worker1: { name: '1', status: 'run' },
                  worker2: { name: '2', status: 'run' },
                  worker3: { name: '3', status: 'run' },
                }"
                textPos="left"
              ></DeviceTypeFour>
              <DeviceTypeFour
                :device="{
                  deviceName: 'JH24',
                  worker1: { name: '1', status: 'run' },
                  worker2: { name: '2', status: 'run' },
                  worker3: { name: '3', status: 'run' },
                }"
                textPos="right"
              ></DeviceTypeFour>
            </div>
            <div class="ra-branch">
              <span class="rb-text1">通</span>
              <span class="rb-text2">道</span>
            </div>
            <div class="ra-l2 mb14">
              <div class="ra-l2-row">
                <DeviceTypeThree
                  :device="{
                    deviceName: 'JH28',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'pause' },
                    worker3: { name: '3', status: 'run' },
                  }"
                  textPos="left"
                  :flip="false"
                ></DeviceTypeThree>
                <DeviceTypeFour
                  :device="{
                    deviceName: 'JH23',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'idle' },
                    worker3: { name: '3', status: 'run' },
                  }"
                  textPos="right"
                ></DeviceTypeFour>
              </div>
              <div class="ra-l2-row">
                <DeviceTypeThree
                  :device="{
                    deviceName: 'JH27',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'pause' },
                    worker3: { name: '3', status: 'idle' },
                  }"
                  textPos="left"
                  :flip="true"
                ></DeviceTypeThree>
                <DeviceTypeFour
                  :device="{
                    deviceName: 'JH22',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'pause' },
                    worker3: { name: '3', status: 'idle' },
                  }"
                  textPos="right"
                ></DeviceTypeFour>
              </div>
            </div>
            <div class="ra-l3">
              <div class="ra-l3-row">
                <DeviceTypeThree
                  :device="{
                    deviceName: 'JH26',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'pause' },
                    worker3: { name: '3', status: 'run' },
                  }"
                  textPos="left"
                  :flip="false"
                ></DeviceTypeThree>
                <DeviceTypeFour
                  :device="{
                    deviceName: 'JH21',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'idle' },
                    worker3: { name: '3', status: 'run' },
                  }"
                  textPos="right"
                ></DeviceTypeFour>
              </div>
              <div class="ra-l3-row">
                <DeviceTypeThree
                  :device="{
                    deviceName: 'JH25',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'pause' },
                    worker3: { name: '3', status: 'idle' },
                  }"
                  textPos="left"
                  :flip="true"
                ></DeviceTypeThree>
                <DeviceTypeFour
                  :device="{
                    deviceName: 'JH20',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'run' },
                    worker3: { name: '3', status: 'run' },
                  }"
                  textPos="right"
                ></DeviceTypeFour>
              </div>
            </div>
            <div class="ra-l4">
              <div>
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH14',
                    worker1: { name: 'G1(3m)', status: 'run' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH12',
                    worker1: { name: 'G1(3m)', status: 'idle' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH10',
                    worker1: { name: 'G1(3m)', status: 'idle' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
              </div>
              <div>
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH13',
                    worker1: { name: 'G1(3m)', status: 'idle' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH11',
                    worker1: { name: 'G1(3m)', status: 'idle' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
              </div>
            </div>
            <div class="ra-l5">
              <div class="ra-l5-left">
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH09',
                    worker1: { name: 'G1(2m)', status: 'pause' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH08',
                    worker1: { name: 'G1(2m)', status: 'run' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH07',
                    worker1: { name: 'G1(2m)', status: 'run' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
                <DeviceTypeTwo
                  :device="{
                    deviceName: 'JH06',
                    worker1: { name: 'G1(2m)', status: 'run' },
                    worker2: { name: 'G2', status: 'run' },
                  }"
                ></DeviceTypeTwo>
              </div>
              <div class="ra-l5-right">
                <DeviceTypeThree
                  :device="{
                    deviceName: 'JH05',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'error' },
                    worker3: { name: '3', status: 'run' },
                  }"
                  textPos="right"
                ></DeviceTypeThree>
                <DeviceTypeThree
                  :device="{
                    deviceName: 'JH04',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'pause' },
                    worker3: { name: '3', status: 'run' },
                  }"
                  textPos="right"
                ></DeviceTypeThree>
                <DeviceTypeThree
                  :device="{
                    deviceName: 'JH03',
                    worker1: { name: '1', status: 'run' },
                    worker2: { name: '2', status: 'run' },
                    worker3: { name: '3', status: 'pause' },
                  }"
                  textPos="right"
                ></DeviceTypeThree>
              </div>
            </div>
            <div class="ra-l6">
              <DeviceTypeThree
                :device="{
                  deviceName: 'JH02',
                  worker1: { name: '1', status: 'run' },
                  worker2: { name: '2', status: 'pause' },
                  worker3: { name: '3', status: 'run' },
                }"
                textPos="bottom"
              ></DeviceTypeThree>
              <DeviceTypeThree
                :device="{
                  deviceName: 'JH01',
                  worker1: { name: '1', status: 'error' },
                  worker2: { name: '2', status: 'pause' },
                  worker3: { name: '3', status: 'run' },
                }"
                textPos="bottom"
              ></DeviceTypeThree>
            </div>
          </div>
        </div>
        <div class="right-panel">
          <div class="rp-l1">
            <h3>设备状态统计</h3>
            <div class="chart">
              <div class="chart-wrapper">
                <PieChart></PieChart>
              </div>
            </div>
          </div>
          <div class="rp-l2">
            <h3>异常事件统计</h3>
            <div class="list">
              <EventStat :list="list"></EventStat>
            </div>
          </div>
          <div class="rp-l3">
            <div class="btn btn-run">正在运行</div>
            <div class="btn btn-idle">空闲状态</div>
            <div class="btn btn-pause">暂未生产</div>
            <div class="btn btn-error">故障设备</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceTypeOne from "./components/DeviceTypeOne";
import DeviceTypeTwo from "./components/DeviceTypeTwo";
import DeviceTypeThree from "./components/DeviceTypeThree";
import DeviceTypeFour from "./components/DeviceTypeFour";
import EventStat from "./components/EventStat";
import StatusStat from "./components/StatusStat";
import PieChart from "./components/PieChart";
import headerTitle from "../layout/header";
export default {
  data() {
    return {
      list: [
        {
          name: "JH13",
          type: "机",
          desc: "机械故障",
          time: "20h",
        },
        {
          name: "JH14",
          type: "料",
          desc: "停机待料",
          time: "20h",
        },
        {
          name: "JH15",
          type: "机",
          desc: "气压不闻",
          time: "20h",
        },
        {
          name: "JH16",
          type: "机",
          desc: "机械故障",
          time: "20h",
        },
        {
          name: "JH17",
          type: "机",
          desc: "气压不闻",
          time: "20h",
        },
        {
          name: "JH18",
          type: "料",
          desc: "停机待料",
          time: "20h",
        },
        {
          name: "JH19",
          type: "机",
          desc: "气压不闻",
          time: "20h",
        },
        {
          name: "JH20",
          type: "机",
          desc: "机械故障",
          time: "20h",
        },
      ],
    };
  },
  components: {
    DeviceTypeOne,
    DeviceTypeTwo,
    DeviceTypeThree,
    DeviceTypeFour,
    EventStat,
    StatusStat,
    PieChart,
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
.screen-six {
  display: flex;
  height: 100%;
  padding-bottom: 20px;
}
.left-panel {
  width: 1165px;
  margin-right: 30px;
  display: flex;
  .left-area {
    width: 610px;
    display: flex;
    flex-direction: column;
    .la-l1 {
      height: 63px;
      padding-right: 50px;
      display: flex;
      align-items: center;
      text-align: right;
      border: 1px solid #3e6fde;
    }
    .la-branch {
      height: 35px;
      position: relative;
      .lb-text1,
      .lb-text2 {
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 20px;
      }
      .lb-text1 {
        right: 75px;
      }
      .lb-text2 {
        left: 230px;
      }
    }
    .la-l2 {
      height: 226px;
      border: 1px solid #3e6fde;
      padding-right: 50px;
      display: flex;
      .la-l2-left {
        width: 174px;
        border-right: 1px #037ddb dashed;
        padding-right: 38px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        span {
          color: #fff;
          display: inline-block;
          margin-bottom: 24px;
          font-size: 20px;
        }
        span:last-child {
          margin-bottom: 0;
        }
      }
      .la-l2-right {
        padding: 26px 0 15px 35px;
        flex: 1;
        .la-l2-right-ft {
          margin-top: 30px;
          padding: 0 33px;
        }
      }
    }
    .la-l3 {
      border: 1px solid #3e6fde;
      padding-right: 50px;
      display: flex;
      margin: 32px 0;
      height: 302px;
      .la-l3-left {
        width: 234px;
        border-right: 1px #037ddb dashed;
        display: flex;
        justify-content: space-between;
        padding: 13px 37px 13px 30px;
        .ll-left-row {
          width: 65px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      }
      .la-l3-right {
        flex: 1;
        padding: 13px 0;
        display: flex;
        .ll-right-row1 {
          margin: 0 22px 0 14px;
          width: 65px;
        }
        .ll-right-row2 {
          flex: 1;
          display: flex;
          justify-content: space-between;
          > div {
            > div {
              margin-bottom: 38px;
            }
          }
        }
      }
    }
    .la-l4 {
      flex: 1;
      border: 1px solid #3e6fde;
      padding-right: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;
      .la-l4-blocks {
        > div {
          margin-left: 40px;
        }
      }
    }
    .la-l5 {
      border: 1px solid #3e6fde;
      padding-right: 50px;
      height: 69px;
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .la-l5-blocks {
        > div {
          margin-left: 40px;
        }
      }
    }
  }
  .main-road {
    flex: 1;
    position: relative;
    .mr-text1,
    .mr-text2,
    .mr-text3 {
      position: absolute;
      left: 50%;
      color: #fff;
      font-size: 24px;
      transform: translate(-50%, 0);
    }
    .mr-text1 {
      top: 103px;
    }
    .mr-text2 {
      top: 468px;
    }
    .mr-text3 {
      bottom: 110px;
    }
  }
  .right-area {
    width: 490px;
    display: flex;
    flex-direction: column;
    .ra-l1 {
      height: 63px;
      border: 1px solid #3e6fde;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .ra-branch {
      height: 35px;
      position: relative;
      .rb-text1,
      .rb-text2 {
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 20px;
      }
      .rb-text1 {
        right: 133px;
      }
      .rb-text2 {
        left: 54px;
      }
    }
    .ra-l2 {
      height: 106px;
      border: 1px solid #3e6fde;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .ra-l2-row {
        display: flex;
        width: 100%;
        justify-content: space-around;
      }
    }
    .ra-l3 {
      height: 106px;
      border: 1px solid #3e6fde;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .ra-l3-row {
        display: flex;
        width: 100%;
        justify-content: space-around;
      }
    }
    .ra-l4 {
      border: 1px solid #3e6fde;
      display: flex;
      margin: 32px 0;
      height: 302px;
      justify-content: space-around;
      > div {
        width: 90px;
        padding-top: 37px;
        > div {
          margin-bottom: 28px;
        }
      }
    }
    .ra-l5 {
      flex: 1;
      display: flex;
      justify-content: space-between;
      .ra-l5-left {
        width: 260px;
        border: 1px solid #3e6fde;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
      }
      .ra-l5-right {
        width: 200px;
        border: 1px solid #3e6fde;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
      }
    }
    .ra-l6 {
      border: 1px solid #3e6fde;
      height: 69px;
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  .rp-l1 {
    border: 1px solid #3e6fde;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 12px 12px;
    h3 {
      height: 70px;
      line-height: 70px;
      font-size: 22px;
      color: #fff;
      font-weight: normal;
    }
    .chart {
      flex: 1;
      overflow: hidden;
      position: relative;
      .chart-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }
  .rp-l2 {
    border: 1px solid #3e6fde;
    height: 449px;
    margin-top: 32px;
    padding: 0 12px 12px;
    display: flex;
    flex-direction: column;
    h3 {
      height: 70px;
      line-height: 70px;
      font-size: 22px;
      color: #fff;
      font-weight: normal;
    }
    .list {
      flex: 1;
      overflow: hidden;
      padding-bottom: 15px;
    }
  }
  .rp-l3 {
    height: 69px;
    margin-top: 8px;
    display: flex;
    align-items: center;
    .btn {
      color: #fff;
      width: 76px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border: 1px solid #0267c5;
      margin-right: 28px;
    }
    .btn-run {
      background-color: #18348c;
    }
    .btn-idle {
      background-color: #00bad0;
    }
    .btn-pause {
      background-color: #e39b00;
    }
    .btn-error {
      background-color: #b90000;
    }
  }
}
.blocks {
  display: flex;
  justify-content: space-between;
}
.mb11 {
  margin-bottom: 11px;
}
.mb14 {
  margin-bottom: 14px;
}
</style>
