<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <div class="screen-seven">
        <!-- <DeviceTypeOne :device="devices.find(function(value,index,arr){return value.mark =='D-505'}) || {mark:'D-505',usestatus:'scz'}"></DeviceTypeOne> -->
        <div class="left-panel">
          <div class="col1">
            <div class="r1">
              <div class="r1-t">
                <div>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'D-515';
                      }) || { mark: 'D-515', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'D-503';
                      }) || { mark: 'D-503', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'J-076';
                      }) || { mark: 'J-076', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'D-505';
                      }) || { mark: 'D-505', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'D-502';
                      }) || { mark: 'D-502', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                </div>
                <div>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'J-039';
                      }) || { mark: 'J-039', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'J-063';
                      }) || { mark: 'J-063', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'J-038';
                      }) || { mark: 'J-038', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'D-037';
                      }) || { mark: 'D-037', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                  <DeviceTypeOne
                    :device="
                      devices.find(function (value, index, arr) {
                        return value.mark == 'D-036';
                      }) || { mark: 'D-036', usestatus: 'kx' }
                    "
                  ></DeviceTypeOne>
                </div>
                <p>
                  <span>抛光区</span>
                </p>
              </div>
              <div class="r1-b">
                <span>物料暂放区</span>
              </div>
            </div>
            <div class="r2">
              <span>物料暂放区</span>
            </div>
            <div class="r3">
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-901';
                    }) || { mark: 'J-901', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
              <p>物料暂放区</p>
            </div>
          </div>
          <div class="col2">
            <span class="sp1">主</span>
            <span class="sp2">通</span>
            <span class="sp3">道</span>
          </div>
          <div class="col3">
            <div class="r1">
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-007';
                  }) || { mark: 'J-007', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-013';
                  }) || { mark: 'J-013', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-014';
                  }) || { mark: 'J-014', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-015';
                  }) || { mark: 'J-015', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-016';
                  }) || { mark: 'J-016', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
            </div>
            <div class="r2">
              <span class="lb-text1">道</span>
              <span class="lb-text2">通</span>
            </div>
            <div class="r3">
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-509';
                    }) || { mark: 'J-509', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-508';
                    }) || { mark: 'J-508', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-092';
                    }) || { mark: 'J-092', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-093';
                    }) || { mark: 'J-093', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-004';
                    }) || { mark: 'J-004', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-005';
                    }) || { mark: 'J-005', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-068';
                    }) || { mark: 'J-068', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-069';
                    }) || { mark: 'J-069', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
            </div>
            <div class="r4">
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-018';
                    }) || { mark: 'J-018', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-019';
                    }) || { mark: 'J-019', usestatus: 'kx' }
                  "
                  style="margin-right: 250px"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-404';
                    }) || { mark: 'J-404', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-025';
                    }) || { mark: 'J-025', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-026';
                    }) || { mark: 'J-026', usestatus: 'kx' }
                  "
                  style="margin-right: 145px"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'Z-017';
                    }) || { mark: 'Z-017', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
            </div>
            <div class="r5">
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-083';
                    }) || { mark: 'J-083', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-082';
                    }) || { mark: 'J-082', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-079';
                    }) || { mark: 'J-079', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-078';
                    }) || { mark: 'J-078', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-044';
                    }) || { mark: 'J-044', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'Z-037';
                    }) || { mark: 'Z-037', usestatus: 'kx' }
                  "
                  style="margin-left: 420px"
                ></DeviceTypeOne>
              </div>
            </div>
            <div class="r6">
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-037';
                    }) || { mark: 'J-037', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-024';
                    }) || { mark: 'J-024', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-507';
                    }) || { mark: 'J-507', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-041';
                    }) || { mark: 'J-041', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-021';
                    }) || { mark: 'J-021', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-022';
                    }) || { mark: 'J-022', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-020';
                    }) || { mark: 'J-020', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-506';
                    }) || { mark: 'J-506', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-703';
                    }) || { mark: 'J-703', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-403';
                    }) || { mark: 'J-403', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
            </div>
            <div class="r7">
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-902';
                    }) || { mark: 'J-902', usestatus: 'kx' }
                  "
                  style="margin-right: 140px"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-073';
                    }) || { mark: 'J-073', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-082';
                    }) || { mark: 'J-082', usestatus: 'kx' }
                  "
                  style="margin-right: 140px"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-701';
                    }) || { mark: 'J-701', usestatus: 'kx' }
                  "
                  style="margin-right: 140px"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-402';
                    }) || { mark: 'J-402', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
            </div>
            <div class="r8">
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-302';
                    }) || { mark: 'J-302', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-003';
                    }) || { mark: 'J-003', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-002';
                    }) || { mark: 'J-002', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-001';
                    }) || { mark: 'J-001', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
              <div>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-311';
                    }) || { mark: 'J-311', usestatus: 'kx' }
                  "
                  style="margin-left: 210px"
                ></DeviceTypeOne>
                <DeviceTypeOne
                  :device="
                    devices.find(function (value, index, arr) {
                      return value.mark == 'J-017';
                    }) || { mark: 'J-017', usestatus: 'kx' }
                  "
                ></DeviceTypeOne>
              </div>
            </div>
            <div class="r9">
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-047';
                  }) || { mark: 'J-047', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-077';
                  }) || { mark: 'J-077', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-053';
                  }) || { mark: 'J-053', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-043';
                  }) || { mark: 'J-043', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-081';
                  }) || { mark: 'J-081', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
            </div>
          </div>
          <div class="col4">
            <span class="sp1">通</span>
            <span class="sp2">道</span>
          </div>
          <div class="col5">
            <div class="r1">
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-322';
                  }) || { mark: 'J-322', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-031';
                  }) || { mark: 'J-031', usestatus: 'kx' }
                "
                style="margin-bottom: 24px"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-032';
                  }) || { mark: 'J-032', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-030';
                  }) || { mark: 'J-030', usestatus: 'kx' }
                "
                style="margin-bottom: 24px"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-701';
                  }) || { mark: 'J-701', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-089';
                  }) || { mark: 'J-089', usestatus: 'kx' }
                "
                style="margin-bottom: 24px"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-704';
                  }) || { mark: 'J-704', usestatus: 'kx' }
                "
                style="margin-bottom: 24px"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-057';
                  }) || { mark: 'J-057', usestatus: 'kx' }
                "
                style="margin-bottom: 24px"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-056';
                  }) || { mark: 'J-056', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
            </div>
            <div class="r2">
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-504';
                  }) || { mark: 'J-504', usestatus: 'kx' }
                "
                size="big"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-705';
                  }) || { mark: 'J-705', usestatus: 'kx' }
                "
                size="big"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-706';
                  }) || { mark: 'J-706', usestatus: 'kx' }
                "
                size="big"
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-510';
                  }) || { mark: 'J-510', usestatus: 'kx' }
                "
                size="big"
              ></DeviceTypeOne>
            </div>
            <div class="r3">
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-707';
                  }) || { mark: 'J-707', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-505';
                  }) || { mark: 'J-505', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-059';
                  }) || { mark: 'J-059', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-502';
                  }) || { mark: 'J-502', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-601';
                  }) || { mark: 'J-601', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-033';
                  }) || { mark: 'J-033', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
              <DeviceTypeOne
                :device="
                  devices.find(function (value, index, arr) {
                    return value.mark == 'J-060';
                  }) || { mark: 'J-060', usestatus: 'kx' }
                "
              ></DeviceTypeOne>
            </div>
          </div>
        </div>
        <div class="right-panel">
          <div class="rp-l1">
            <h3>设备状态统计</h3>
            <div class="chart">
              <div class="chart-wrapper">
                <PieChart :devices="devices"></PieChart>
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
            <div class="btn btn-run">空闲</div>
            <div class="btn btn-idle">生产中</div>
            <div class="btn btn-pause">调模</div>
            <div class="btn btn-error">故障</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceTypeOne from "./components/DeviceTypeOne";
import headerTitle from "../layout/header";
import EventStat from "./components/EventStat";
import PieChart from "./components/PieChart";
import axios from "axios";
import mqtt from "mqtt";
let domain = "http://mes.ironmanapi.com:8010/api/";
export default {
  data() {
    return {
      devices: [],
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
      timer: null,
    };
  },
  components: {
    DeviceTypeOne,
    EventStat,
    PieChart,
    headerTitle
  },
  mounted() {
    let vm = this;
    this.getAllDevice();
    this.timer = setInterval(() => {
      vm.getAllDevice();
    }, 60 * 1000);
  },
  methods: {
    getAllDevice() {
      let vm = this;
      axios
        .get(domain + "ironman/GetDeviceStatus?orgname=金工车间")
        .then(function (res) {
          vm.devices = res.data.Data;
        });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
.screen-seven {
  display: flex;
  height: 100%;
  padding-bottom: 20px;
}
.left-panel {
  width: 1142px;
  margin-right: 60px;
  display: flex;
  .col1 {
    width: 220px;
    display: flex;
    flex-direction: column;
    .r1 {
      height: 428px;
      border: 1px solid #3e6fde;
      display: flex;
      flex-direction: column;
      p {
        color: #fff;
        margin-bottom: 16px;
        text-align: center;
      }
      .r1-b {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-top: 1px solid #3e6fde;
      }
      .r1-t > div {
        display: flex;
        flex-wrap: wrap;
        padding: 17px 28px 0;
        justify-content: space-between;
        > div {
          margin-bottom: 18px;
        }
      }
      .r1-t > div:last-of-type {
        padding-top: 7px;
      }
    }
    .r2 {
      flex: 1;
      margin-top: 27px;
      margin-bottom: 24px;
      border: 1px solid #3e6fde;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .r3 {
      height: 310px;
      border: 1px solid #3e6fde;
      position: relative;
      > div {
        padding-top: 52px;
        text-align: center;
      }
      p {
        color: #fff;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        transform: translate(0, -50%);
        text-align: center;
      }
    }
  }
  .col2 {
    width: 70px;
    position: relative;
    span {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      color: #fff;
      font-size: 24px;
    }
    .sp1 {
      top: 108px;
    }
    .sp2 {
      top: 472px;
    }
    .sp3 {
      bottom: 94px;
    }
  }
  .col3 {
    display: flex;
    flex-direction: column;
    flex: 1;
    .r1,
    .r9 {
      height: 58px;
      border: 1px solid #3e6fde;
      padding-left: 50px;
      display: flex;
      align-items: center;
      > div {
        margin-right: 40px;
      }
    }
    .r2 {
      height: 25px;
      position: relative;
      span {
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 20px;
      }
      .lb-text1 {
        left: 338px;
      }
      .lb-text2 {
        left: 126px;
      }
    }
    .r3,
    .r4,
    .r5,
    .r7,
    .r8 {
      height: 98px;
      border: 1px solid #3e6fde;
      display: flex;
      padding-left: 50px;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 25px;
      > div:first-child {
        margin-bottom: 14px;
      }
      > div {
        > div {
          margin-right: 40px;
        }
      }
    }
    .r6 {
      flex: 1;
      border: 1px solid #3e6fde;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 50px;
      margin-bottom: 25px;
      > div:last-child {
        margin-bottom: 0;
      }
      > div {
        margin-bottom: 14px;
        > div {
          margin-right: 40px;
        }
      }
    }
  }
  .col4 {
    width: 70px;
    position: relative;
    span {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      color: #fff;
      font-size: 24px;
    }
    .sp1 {
      top: 108px;
    }
    .sp2 {
      top: 540px;
    }
  }
  .col5 {
    width: 190px;
    display: flex;
    flex-direction: column;
    .r1 {
      border: 1px solid #3e6fde;
      height: 426px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      > div {
        text-align: center;
        margin-bottom: 11px;
      }
    }
    .r2 {
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      > div {
        text-align: center;
        margin-bottom: 14px;
      }
      > div:last-of-type {
        margin-bottom: 0;
      }
    }
    .r3 {
      height: 310px;
      border: 1px solid #3e6fde;
      display: flex;
      justify-content: center;
      flex-direction: column;
      > div {
        text-align: center;
        margin-bottom: 16px;
      }
      > div:last-of-type {
        margin-bottom: 0;
      }
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
</style>
