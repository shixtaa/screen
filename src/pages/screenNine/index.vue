<template>
  <div class="layout">
    <header-title></header-title>
    <Sider @openSearch="openSearchModal" @openSider="openSiderModal"></Sider>
    <div class="warehouse-body col-flex">
      <!-- 上半部分 -->
      <div class="warehouse-top row-flex">
        <div class="warehouse-title col-center-flex">
          <span>6</span>
          <span>#</span>
          <span>2F</span>
          <span>备</span>
          <span>件</span>
          <span>仓</span>
          <span>库</span>
        </div>
        <div class="warehouse-top-left row-flex">
          <div class="warehouse-box col-flex" v-for="(item,index) in whlList" :key="index">
            <div class="peritem border" v-for="(item1,index1) in item" :key="index1">
              <div class="warehouse-item row-center-flex" v-for="perItem in item1" :key="perItem.codes">
                货架{{perItem.codes}}-{{perItem.codel}}
              </div>
            </div>
          </div>
        </div>
        <!-- 通道 -->
        <div class="pass col-flex">
          <span>通</span>
          <span>道</span>
        </div>
        <div class="warehouse-top-middle col-flex">
          <div class="warehouse-large-box row-flex " v-for="(item,index) in whrList" :key="index">
            <div class="warehouse-item row-center-flex" v-for="item1 in item" :key="item1.code">{{item1.code}}</div>
          </div>
        </div>
                <!-- 通道 -->
        <div class="pass col-flex">
          <span>通</span>
          <span>道</span>
        </div>
        <div class="warehouse-top-right border col-flex">
          <div>办公室</div>
          <div>电梯</div>
          <div>楼梯</div>
        </div>
      </div>
      <!-- 下半部分 -->
      <div class="warehouse-bottom row-flex">
        <div class="warehouse-title col-center-flex">
          <span>仓</span>
          <span>库</span>
          <span>布</span>
          <span>局</span>
          <span>图</span>
        </div>
        <div class="warehouse-bt-left col-flex">
          <div class="warehouse-large-box row-flex " v-for="(item,index) in whblList" :key="index">
            <div class="warehouse-item row-center-flex" v-for="item1 in item" :key="item1.code">{{item1.code}}</div>
          </div>
          <div class="warehouse-large-box row-center-flex border" :style="{height:'40px'}">
            {{otherList[0].code +' '+ otherList[0].name}}
          </div>
          <div class="warehouse-large-box row-center-flex border" :style="{height:'40px'}">
            {{otherList[1].code +' '+ otherList[1].name}}
          </div>
        </div>
        <div class="pass col-flex">
          <span>通</span>
          <span>道</span>
        </div>
        <div class="warehouse-bt-middle col-flex">
          <div class="middle-box1 row-flex">
            <div class="middle-content col-flex" v-for="(item,index) in whbmList" :key="index">
              <div class="middle-item row-center-flex " v-for="perItem in item" :key="perItem.codes">
                货架{{perItem.codes}}-{{perItem.codel}}
              </div>
            </div>
          </div>
          <div class="middle-box row-flex" v-for="(item,index) in whbmList1" :key="item[index].codes">
            <div class="middle-item row-center-flex " v-for="perItem in item" :key="perItem.codes">
              货架{{perItem.codes}}-{{perItem.codel}}
            </div>
          </div>
          <div class="middle-box row-flex">
            <div class="middle-item row-center-flex ">
              {{otherList[4].code +' '+ otherList[4].name}}
            </div>
            <div class="middle-item row-center-flex ">
              {{otherList[5].code}}
            </div>
          </div>
        </div>
        <div class="warehouse-bt-right">
          <div class="bt-title row-center-flex">模具组</div>
          <div class="bt-right-content row-flex">
            <div class="left col col-center-flex">
              <span>{{otherList[2].code}}</span>
              <span>{{otherList[2].name}}</span>
            </div>
            <div class="pass col-flex " :style="{width:'12%'}">
              <span>通</span>
              <span>道</span>
            </div>
            <div class="right col col-center-flex">
              <span>{{otherList[3].code}}</span>
              <span>{{otherList[3].name}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./nine.scss"
import headerTitle from "../layout/header";
import Sider from '../layout/sider'

export default {
  components:{
    headerTitle,
    Sider
  },
  data(){
    return{
      searchIsOpen:false,
      siderIsOpen:false,
      // warehouse-left-list
      whlList:{
        whlCol1:[
          [{
            codes:'13S010101',
            codel:'13S01312',
          },{
            codes:'13S020101',
            codel:'13S02312',
          }],
          [{
            codes:'13S030101',
            codel:'13S03312',
          },{
            codes:'13S040101',
            codel:'13S04312',
          }],
          [{
            codes:'13S050101',
            codel:'13S05312',
          }],
          [{
            codes:'13S060101',
            codel:'13S06748',
          },{
            codes:'13S070101',
            codel:'13S07748',
          }]
        ],
        whlCol2:[
          [{
            codes:'13S080101',
            codel:'13S08748',
          },{
            codes:'13S090101',
            codel:'13S09748',
          }],
          [{
            codes:'13S100101',
            codel:'13S10748',
          },{
            codes:'13S110101',
            codel:'13S11748',
          }],
          [{
            codes:'13S120101',
            codel:'13S12748',
          },{
            codes:'13S130101',
            codel:'13S13748',
          }]
        ],
        whlCol3:[
          [{
            codes:'13S140101',
            codel:'13S14748',
          },{
            codes:'13S150101',
            codel:'13S15748',
          }],
          [{
            codes:'13S160101',
            codel:'13S16748',
          },{
            codes:'13S170101',
            codel:'13S17748',
          }],
          [{
            codes:'13S180101',
            codel:'13S18412',
          }],
          [{
            codes:'13S190101',
            codel:'13S19312',
          }]
        ],
        whlCol4:[
          [{
            codes:'13N010101',
            codel:'13N01114',
          },{
            codes:'13N020101',
            codel:'13N02114',
          }],
          [{
            codes:'13N030101',
            codel:'13N03114',
          }],
          [{
            codes:'13N040101',
            codel:'13N04756',
          },{
            codes:'13N050101',
            codel:'13N05756',
          }]
        ],
        whlCol5:[
          [{
            codes:'13N060101',
            codel:'13N06542',
          },{
            codes:'13N070101',
            codel:'13N07542',
          }],
          [{
            codes:'13N080101',
            codel:'13N08756',
          },{
            codes:'13N090101',
            codel:'13N09756',
          }],
          [{
            codes:'13N10101',
            codel:'13N10314',
          },{
            codes:'13N11101',
            codel:'13N11314',
          }],
          [{
            codes:'13N12101',
            codel:'13N12312',
          }]
        ],
      },
      // warehouse-right-list
      whrList:[
        [{
          code:'13PLE001'
        },{
          code:'13PLE002'
        },{
          code:'13PLE003'
        },{
          code:'13PLE004'
        },{
          code:'13PLE005'
        },{
          code:'13PLE006'
        },{
          code:'13PLE007'
        },{
          code:'13PLE008'
        },{
          code:'13PLE009'
        },{
          code:'13PLE010'
        },{
          code:'13PLE011'
        },{
          code:'13PLE012'
        }],
        [{
          code:'13PLE013'
        },{
          code:'13PLE014'
        },{
          code:'13PLE015'
        },{
          code:'13PLE016'
        },{
          code:'13PLE017'
        },{
          code:'13PLE018'
        },{
          code:'13PLE019'
        },{
          code:'13PLE020'
        },{
          code:'13PLE021'
        },{
          code:'13PLE022'
        },{
          code:'13PLE023'
        },{
          code:'13PLE024'
        }],
        [{
          code:'13PLE025'
        },{
          code:'13PLE026'
        },{
          code:'13PLE027'
        },{
          code:'13PLE028'
        },{
          code:'13PLE029'
        },{
          code:'13PLE030'
        },{
          code:'13PLE031'
        },{
          code:'13PLE032'
        },{
          code:'13PLE033'
        },{
          code:'13PLE034'
        },{
          code:'13PLE035'
        },{
          code:'13PLE036'
        }],
        [{
          code:'13PLE037'
        },{
          code:'13PLE038'
        },{
          code:'13PLE039'
        },{
          code:'13PLE040'
        },{
          code:'13PLE041'
        },{
          code:'13PLE042'
        },{
          code:'13PLE043'
        },{
          code:'13PLE044'
        },{
          code:'13PLE045'
        },{
          code:'13PLE046'
        },{
          code:'13PLE047'
        },{
          code:'13PLE048'
        }]
      ],
      // warehouse-bt-left-list
      whblList:[
        [{
          code:'04PLB001'
        },{
          code:'04PLB002'
        },{
          code:'04PLB003'
        },{
          code:'04PLB004'
        },{
          code:'04PLB005'
        },{
          code:'04PLB006'
          },{
          code:'04PLB012'
        },{
          code:'04PLB011'
        },{
          code:'04PLB010'
        },{
          code:'04PLB009'
        },{
          code:'04PLB008'
        },{
          code:'04PLB007'
        }],
        [{
          code:'04PLB013'
        },{
          code:'04PLB014'
        },{
          code:'04PLB015'
        },{
          code:'04PLB016'
        },{
          code:'04PLB017'
        },{
          code:'04PLB018'
          },{
          code:'04PLB024'
        },{
          code:'04PLB023'
        },{
          code:'04PLB022'
        },{
          code:'04PLB021'
        },{
          code:'04PLB020'
        },{
          code:'04PLB019'
        }],
        [{
          code:'04PLC006'
        },{
          code:'04PLC005'
        },{
          code:'04PLC004'
        },{
          code:'04PLC003'
        },{
          code:'04PLC002'
        },{
          code:'04PLC001'
        },{
          code:'04PLC007'
        },{
          code:'04PLC008'
        },{
          code:'04PLC009'
        },{
          code:'04PLC010'
        },{
          code:'04PLC011'
        },{
          code:'04PLC012'
        }],
        [{
          code:'04PLC018'
        },{
          code:'04PLC017'
        },{
          code:'04PLC016'
        },{
          code:'04PLC015'
        },{
          code:'04PLC014'
        },{
          code:'04PLC013'
        },{
          code:'04PLC019'
        },{
          code:'04PLC020'
        },{
          code:'04PLC021'
        },{
          code:'04PLC022'
        },{
          code:'04PLC023'
        },{
          code:'04PLC024'
        }]
      ],
      // warehouse-bt-middle-list
      whbmList:[
        [{
          codes:'U117',
          codel:'U532' 
        },
        {
          codes:'U101',
          codel:'U516' 
        }],
        [{
          codes:'V117',
          codel:'V532' 
        },
        {
          codes:'V101',
          codel:'V516' 
        }],
        [{
          codes:'T117',
          codel:'T532' 
        },
        {
          codes:'T101',
          codel:'T516' 
        }],
        [{
          codes:'0400M101',
          codel:'0400M532' 
        }]
      ],
      whbmList1:[
        [{
          codes:'0400F101',
          codel:'0400F624' 
        },{
          codes:'0400N101',
          codel:'0400N532' 
        },{
          codes:'0400E101',
          codel:'0400E624' 
        },{
          codes:'0400O101',
          codel:'0400O532' 
        }],
        [{
          codes:'0400D101',
          codel:'0400D624' 
        },{
          codes:'0400P101',
          codel:'0400P532' 
        },{
          codes:'0400C101',
          codel:'0400C624' 
        },{
          codes:'0400Q101',
          codel:'0400Q532' 
        }],
        [{
          codes:'0400B101',
          codel:'0400B624' 
        },{
          codes:'0400R101',
          codel:'0400R532' 
        },{
          codes:'0400A101',
          codel:'0400A624' 
        },{
          codes:'0400S101',
          codel:'0400S532' 
        }],
      ],
      otherList:[
        {
          code:'040LS002',
          name:'铭牌存放处'
        },
        {
          code:'09GJK',
          name:'喷粉库'
        },
        {
          code:'13BCQ001',
          name:'纸箱纸板类区'
        },
        {
          code:'241LSZGQ',
          name:'成品周转区'
        },
        {
          code:'09GJK',
          name:'工具库存放区'
        },
        {
          code:'040PLE001'
        }
      ]
    }
  },
  methods:{
        // 打开搜索框
    openSearchModal(data){
      this.searchIsOpen=data;
    },
    // 关闭搜索框
    closeSearchModal(data){
      this.searchIsOpen=data;
    },
    // 打开侧边栏
    openSiderModal(data){
      this.siderIsOpen=data;
    },
    // 关闭侧边栏
    closeSiderModal(data){
      this.siderIsOpen=data;
    },
  }
}
</script>