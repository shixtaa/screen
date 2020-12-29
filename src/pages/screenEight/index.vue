<template>
  <div class="layout">
    <header-title></header-title>
    <Sider @openSearch="openSearchModal" @openSider="openSiderModal"></Sider>
    <div class="body">
      <div class="panel-content row-flex">
        <div class="left-content col-flex">
          <div class="left-content-top row-flex">
            <div class="left-panel row-flex">
              <div class="lp-col1 col-flex">
                <div class="c1-top col-flex">
                  <div class="c1-top-box"  v-for="(item,index) in col1List" :key="index">
                    <div class="save-box row-center-flex">
                      <span>物料车存放区</span>
                    </div>
                    <div class="row-pass row-center-flex"  v-if="index!==5">
                      <span class="pass">过</span>
                      <span class="pass">道</span>
                    </div>
                  </div>
                  
                </div>
                <div class="c1-ft">
                  <div :class="['c1-ft-box', 'col-center-flex', 'cursor',item.code,'position'] "  v-for="item in positionData.lpFtPosition" :key="item.code" @click="()=>{openProModal(item.code)}">
                    <div>{{item.code}}</div>
                    <p>
                      <span>{{item.name}}</span><br>
                      <span>{{item.remark}}</span>
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-pass width6">
              <span>通</span>
              <span>道</span>
            </div>
            <div class="center-panel col-flex ">
                <div class="cp-top row-flex">
                  <div class="cp-top-col1 col-flex">
                    <div :class="['cp-top-col1-box']"   v-for="(item,index) in positionData.cpTopCol1" :key="item.code" @click="()=>{openProModal(item.code)}">
                      <div :class="['row-center-flex','turnover-box','position', 'cursor',item.code]"  >
                        <span>{{item.code}}</span>
                        <span>{{item.name}}</span>
                      </div>
                      <div class="row-pass "  v-if="index!==5">
                        <span class="pass">过</span>
                        <span class="pass">道</span>
                      </div>
                    </div>
                  </div>
                  <div class="cp-top-col2">
                    <div :class="['cp-top-box','col-center-flex', 'position','cursor',item.code]"  v-for="item in positionData.cpTopCol2" :key="item.code" @click="()=>{openProModal(item.code)}">
                      <div>{{item.code}}</div>
                      <p>
                        <span>{{item.name}}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="large-row-pass cp-content-pass " >
                  <span class="pass">通</span>
                  <span class="pass">道</span>
                </div>
                <div class="cp-bd row-flex">
                  <div class="cp-bd-col1 col-flex">
                    <div class="row"  v-for="(v,k) in positionData.cpBdPosition" :key="k">
                      <div  :class="['item','position',item.code,item.code=='储物柜'||!item.code?'special-item':'']" v-for="item in v" :key="item.code" 
                      :style="{borderTopWidth:item.code?'1px':'0'}"  
                      @click="()=>{openProModal(item.code)}">{{item.code}}</div>
                    </div>
                  </div>
                  <div class="cp-bd-col2">
                    <div class="card" v-for="(value,key) in positionData.tableList" :key="key">
                      <div :class="['position','card-item','item',item.code]" v-for="item in value" :key="item.code"  @click="()=>{openProModal(item.code)}" 
                        >
                        {{item.code}}
                      </div>
                    </div>

                  </div>
                </div>
            </div>
            <div class="col-pass width6">
              <span>通</span>
              <span>道</span>
            </div>
          </div>
          <div class="large-row-pass lp-pass row-center-flex" >
            <span class="pass">通</span>
            <span class="pass">道</span>
          </div>
          <div class="left-content-bt">
            <span>剪袋子</span>
            <span>IQC办公室</span>
            <span>仓库办公室</span>
          </div>
        </div>
        <div class="right-panel col-flex">
          <div class="rp-content-top col-flex">
            <div class="rp-box col-flex">
              <div class="rp-row rp-row1 col-center-flex position 04MJZ001 cursor"  @click="()=>{openProModal('04MJZ001')}">
                <span>{{positionData.rpTopList.rpTopRow1[0].code}}</span><br>
                <span>{{positionData.rpTopList.rpTopRow1[0].name}}</span>
              </div>
              <div class="rp-row rp-row2 col-flex ">
                <div :class="['position','row-center-flex','cursor',item.code]" 
                v-for="item in positionData.rpTopList.rpTopRow2" :key="item.code"
                @click="()=>{openProModal(item.code)}" >
                  <span>{{item.code}}</span><br>
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <div class="large-row-pass rp-content-pass " >
            </div>
            <div class="rp-item-content col-flex">
              <div class="item-box" v-for="(v,k) in positionData.rpList" :key="k" >
                <div :class="['row-center-flex','item',item.code,'position']" 
                v-for="item in v" :key="item.code" 
                @click="()=>{openProModal(item.code)}">
                  {{item.code}}
                </div>
              </div>
            </div>
            <div class="rp-saveBox">
              <div  :class="[item.code, 'cursor','position','row-center-flex']" v-for="item in  positionData.rpBottom" :key="item.code"  
              @click="()=>{openProModal(item.code)}">
                {{item.code}} {{item.name}}
              </div>
            </div>  
          </div>
          <div class="large-row-pass rp-pass" >
          </div>
          <div class="rp-content-bt row-center-flex position 04WXJ001">
            外协件周转区 04WXJ001
          </div>
        </div>
      </div>
    </div>
    <searchModal v-if="searchIsOpen" :searchIsOpen="searchIsOpen" @closeSearch="closeSearchModal"></searchModal>
    <siderModal v-if="siderIsOpen" :siderIsOpen="siderIsOpen" @closeSider="closeSiderModal"></siderModal>
    <productModal v-if="productIsOpen" :productCode="productCode" :proInfo="proInfo" :productIsOpen="productIsOpen" @closePro="closeProModal"></productModal>
  </div>
</template>
<script>
import "./screenEight.scss"
import headerTitle from "../layout/header";
import Sider from '../layout/sider'
import searchModal from './components/searchModal';
import siderModal from "./components/siderModal";
import productModal from "./components/productModal";
import axios from 'axios'
import _ from 'lodash'
let path = "http://172.16.8.55:49866/";

export default {
  created(){
    this.searchIsOpen=false;
    this.siderIsOpen=false;
    this.productIsOpen=false;
  },
  data(){
    return {
      searchIsOpen:false,
      siderIsOpen:false,
      productIsOpen:false,
      productCode:'',
      //货位列表
      positionList:{},
      //货位明细
      proInfo:[],
      col1List:[0,1,2,3,4,5],
      positionData:{
        //临时周转 配装物料【0】
        lpFtPosition:[
          {
            code:"13PLQ068",
            name:"临时周转区",
            remark:"(导杆顶块木箱类)"
          },{
            code:"13ZPL001",
            name:"装配物料分拣区"
          }
        ],
        //塑料件周转区【1】
        cpTopCol1:[
          {
            code:"13PLQ067",
            name:"塑料件周转区"
          },{
            code:"13PLQ066",
            name:"塑料件周转区"
          },{
            code:"13PLQ065",
            name:"塑料件周转区"
          },{
            code:"13PLQ064",
            name:"塑料件周转区"
          },{
            code:"13PLQ063",
            name:"塑料件周转区"
          },{
            code:"13PLQ062",
            name:"塑料件周转区"
          }
        ],
        //不良品区 电镀件区【2】
        cpTopCol2:[
          {
            code:"13BLP001",
            name:"不良品区"
          },{
            code:"13DDQ001",
            name:"电镀件区"
          }
        ],
        //中间货位【3】
        cpBdPosition:{
          cpRow1:[
            {
              code:"13PLQ053",
              
            },{
              code:"13PLQ054",
              
            },{
              code:"13PLQ055"
            },{
              code:"13PLQ056",  
            },{
              code:"13PLQ057",              
            },{
              code:"13PLQ058",
              
            },{
              code:"13PLQ059",
              
            },{
              code:"13PLQ060",
              
            },{
              code:"13PLQ061",
              
            },{
              code:"13PLQ044",
              
            },{
              code:"13PLQ045",
              
            },{
              code:"13PLQ046",
              
            },{
              code:"13PLQ047",
              
            },{
              code:"13PLQ048",
              
            },{
              code:"13PLQ049",
              
            },{
              code:"13PLQ050",
              
            },{
              code:"13PLQ051",
              
            },{
              code:"13PLQ052",
              
            }
          ],
          cpRow2:[
            {
              code:"13PLQ035",
              
            },
            {
              code:"13PLQ036",
              
            },
            {
              code:"13PLQ037",
              color:"defalut"
            },
            {
              code:"13PLQ038",
              color:"defalut"
            },
            {
              code:"13PLQ039",
              
            },
            {
              code:"13PLQ040",
              
            },{
              code:"13PLQ041",
              
            },
            {
              code:"13PLQ042",
              
            },
            {
              code:"13PLQ043",
              
            }
          ],
          cpRow3:[
              {
                code:"13PLQ026"
              },
              {
                code:"13PLQ027"
              },
              {
                code:"13PLQ028"
              },
              {
                code:"13PLQ029",
                
              },
              {
                code:"13PLQ030",
                
              },
              {
                code:"13PLQ031",
                
              },{
                code:"13PLQ032",
                
              },
              {
                code:"13PLQ033",
                
              },
              {
                code:"13PLQ034",
                
              },{
                code:"13PLQ017",
                
              },
              {
                code:"13PLQ018",
                
              },
              {
                code:"13PLQ019",
                
              },{
                code:"13PLQ020",
                
              },
              {
                code:"13PLQ021",
                
              },
              {
                code:"13PLQ022",
                
              },{
                code:"13PLQ023",
                
              },
              {
                code:"13PLQ024",
                
              },
              {
                code:"13PLQ025",
                
              }
          ],  
          cpRow4:[
              {
                code:"13PLQ009",
                
              },
              {
                code:"13PLQ010",
                
              },
              {
                code:"13PLQ011",
                color:"#ffab03"
              },
              {
                code:"13PLQ012",
                
              },
              {
                code:"13PLQ013",
                
              },
              {
                code:"13PLQ014",
                
              },{
                code:"13PLQ015",
                
              },
              {
                code:"13PLQ016",
                
              },
              {
                code:"储物柜",
                color:""
              },
              {
                code:"13PLQ001",
                
              },{
                code:"13PLQ002",
                
              },
              {
                code:"13PLQ003",
                
              },
              {
                code:"13PLQ004",
                
              },{
                code:"13PLQ005",
                
              },
              {
                code:"13PLQ006",
                
              },
              {
                code:"13PLQ007",
                
              },{
                code:"13PLQ008",
                
              },
              {
                code:"",
                color:""
              },
              {
                code:"13PLQ065",
                
              },
              {
                code:"13PLQ064",
                
              },{
                code:"13PLQ063",
                
              },
              {
                code:"13PLQ062",
                
              },
              {
                code:"13PLQ061",
                
              },{
                code:"13PLQ060",
                
              },
              {
                code:"13PLQ059",
                
              },
              {
                code:"13PLQ058",
                
              },{
                code:"13PLQ057",
                
              },
          ],
        },
        //右侧顶部货位
        rpTopList:{
          rpTopRow1:[
            {
              code:'04MJZ001',
              name:'车加工半成品'
            }
          ],
          rpTopRow2:[
            {
              code:'09GJK',
              name:'焊丝存放区'
            },{
              code:'04DHL001',
              name:'电焊物料分拣存放区'
            }
          ]
        },
        //DJQ货位 【4】
        tableList:{
          card1:[
            {
              code:"13DJQ020"
            },
            {
              code:"13DJQ019"
            },
            {
              code:"13DJQ018"
            },
            {
              code:"13DJQ017"
            }
          ],
          card2:[
            {
              code:"13DJQ016"
            },
            {
              code:"13DJQ015"
            },
            {
              code:"13DJQ014"
            },
            {
              code:"13DJQ013"
            }
          ],
          card3:[
            {
              code:"13DJQ012"
            },
            {
              code:"13DJQ011"
            },
            {
              code:"13DJQ010"
            },
            {
              code:"13DJQ009"
            }
          ],
          card4:[
            {
              code:"13DJQ008"
            },
            {
              code:"13DJQ007"
            },
            {
              code:"13DJQ006"
            },
            {
              code:"13DJQ005"
            }
          ],
          card5:[
            {
              code:"13DJQ004"
            },
            {
              code:"13DJQ003"
            },
            {
              code:"13DJQ002"
            },
            {
              code:"13DJQ001"
            },
            {
              code:"13DJQ056"
            },
            {
              code:"13DJQ055"
            }
          ]
        },
        //PLQ货位【5】
        rpList:{
          rpListRow1:[
            {
              // code:"13A01001"
              code:"13PLQ021"
            },
            {
              code:"13PLQ022"
            },{
              code:"13PLQ023"
            },{
              code:"13PLQ024"
            },{
              code:"13PLQ025"
            },{
              code:"13PLQ026"
            },
          ],
          rpListRow2:[
            {
              code:"13PLQ027"
            },
            {
              code:"13PLQ028"
            },{
              code:"13PLQ029"
            },{
              code:"13PLQ030"
            },{
              code:"13PLQ031"
            },{
              code:"13PLQ032"
            },
          ],
          rpListRow3:[
            {
              code:"13PLQ033"
            },
            {
              code:"13PLQ034"
            },{
              code:"13PLQ035"
            },{
              code:"13PLQ036"
            },{
              code:"13PLQ037"
            },{
              code:"13PLQ038"
            },
          ],
          rpListRow4:[
            {
              code:"13PLQ039"
            },
            {
              code:"13PLQ040"
            },{
              code:"13PLQ041"
            },{
              code:"13PLQ042"
            },{
              code:"13PLQ043"
            },{
              code:"13PLQ044"
            }
          ],
          rpListRow5:[
            {
              code:"13PLQ045"
            },
            {
              code:"13PLQ046"
            },{
              code:"13PLQ047"
            },{
              code:"13PLQ048"
            },{
              code:"13PLQ049"
            },{
              code:"13PLQ050"
            }
          ]
        },
        //待检塑料件存放区【6】
        rpBottom:[
          {
            code:"13DJQ051",
            name:"待检塑料件存放区",
          },{
            code:"13DJQ052",
            name:"待检塑料件存放区",
          },{
            code:"13DJQ053",
            name:"待检塑料件存放区",
          },{
            code:"13DJQ054",
            name:"待检塑料件存放区",
          },
        ]
      }
    }   
  },
  components:{
    headerTitle,
    Sider,
    searchModal,
    siderModal,
    productModal
  },
  mounted(){
    this.getPositionList()     
  },
  methods:{
    setColor(value){
      let colorObj={
        0:'nullColor',
        1:'notNullColor',
        2:'strangeColor'
      }
      return colorObj[value];
    },
    //获取货物明细
    getPositionInfo(code){
      // axios.get(path+"api/warehouse/positionInfo?position=13N07128")
      axios.get(path+"api/warehouse/positionInfo?position="+code)
      .then((res)=>{
          this.proInfo=_.cloneDeep(res.data.Data.data)
      })
      .then(()=>{
        this.productCode=code
        this.productIsOpen=true;
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    //获取货位
    getPositionList(){
      axios.get(path+"api/warehouse/positionList?workorderno&erp&componentno&venname&aorderno&status")
      .then((res)=>{
          this.positionList=_.cloneDeep(res.data.Data.data)
          console.log('获取货位==>',this.positionList)
          this.updatePosition()
        //每1min更新一次货位
        this.timer=setInterval(()=>{
          this.updatePosition()
        },60*1000)
        })
      .catch((err)=>{
        console.log(err)
      })
    },
    //更新货位状态
    updatePosition(){
      let test={}
      _.map(this.positionData,(item,key)=>{           
        if(Object.prototype.toString.call(item)=='[object Array]'){
          this.setStatus(item)
        }else{
          _.map(item,(i)=>{
            this.setStatus(i)
          })
        }
        test[key]=item
      })
      this.positionData=test;
    },
    //设置货位状态
    setStatus(item){
      _.forEach(item,(i)=>{
        let status= this.checkStatus(i.code) 
        i.status=status;
        //货位状态
        let ele=document.getElementsByClassName(i.code)
        let colorClass=this.setColor(status)
        _.forEach(ele,(dom)=>{
          dom.classList.add(colorClass)
        })
      })
    },
    //检查现有货位与后台返回的货位是否一致
    checkStatus(code){
      //默认为空
      let result=0;
      for(let k in this.positionList){
        if(k==code){
          result= this.positionList[k].status
        }
      }
      return result
    },
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
    //打开货物明细
    openProModal(code){
      if(code!=='储物柜'&&code){
        this.proInfo=[]
        this.getPositionInfo(code)
      }

    },
    //关闭货物明细
    closeProModal(data){
      this.productIsOpen=data;
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>
