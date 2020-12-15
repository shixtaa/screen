<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <div class="sider">
        <img src="../../assets/imgs/sider.png" alt="">
      </div>
      <div class="panel-content">
        <div class="left-panel">
          <div class="lp-col1">
            <div class="c1-top">
              <div class="c1-top-box"  v-for="(item,index) in col1List" :key="index">
                <div class="save-box">
                  <span>物料车存放区</span>
                </div>
                <p class="row-pass"  v-if="index!==5">
                  <span class="pass">过</span>
                  <span class="pass">道</span>
                </p>
              </div>
              
            </div>
            <div class="c1-ft">
              <div class="c1-ft-box">
                <div>13PLQ068</div>
                <p>
                  <span>临时周转区</span><br>
                  <span>(导杆顶块木箱类)</span>
                </p>
              </div>
              <div class="c1-ft-box">
                <div>13ZPL001</div>
                <p>
                  <span>装配物料分拣区</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div class="col-pass">
          <span>通</span>
          <span>道</span>
        </div>
        <div class="center-panel">
            <div class="cp-top">
              <div class="cp-top-col1">
                <div class="cp-top-col1-box"  v-for="(item,index) in cpColumn1" :key="item.code">
                  <div class="turnover-box">
                    <span>{{item.code}}</span>
                    <span>{{item.name}}</span>
                  </div>
                  <p class="row-pass"  v-if="index!==5">
                    <span class="pass">过</span>
                    <span class="pass">道</span>
                  </p>
                  </div>
              </div>
              <div class="cp-top-col2">
                <div class=" cp-top-box cp-top-box1">
                  <div>13BLP001</div>
                  <p>
                    <span>不良品区</span>
                  </p>
                </div>
                <div class="cp-top-box">
                  <div>13DDQ001</div>
                  <p>
                    <span>电镀件区</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="large-row-pass ">
              <span class="pass">通</span>
              <span class="pass">道</span>
            </div>
            <div class="cp-bd">
              <div class="cp-bd-col1">
                <div class="row bd-row1" >
                  <div   class="item" v-for="item in cpRow1" :key="item.code" :style="{backgroundColor:item.color}">{{item.code}}</div>
                </div>
                <div class="row bd-row2" >
                  <div  class="item" v-for="item in cpRow2" :key="item.code" :style="{backgroundColor:item.color}">{{item.code}}</div>
                </div>
                <div class="row bd-row3" >
                  <div class="item"  v-for="item in cpRow3" :key="item.code" :style="{backgroundColor:item.color}">{{item.code}}</div>
                </div>
                <div class="row bd-row4" >
                  <div class="item"  v-for="item in cpRow4" :key="item.code" :style="{backgroundColor:item.color,borderTopWidth:item.code?'1px':'0',borderBottomWidth:item.color?'1px':'0'}">{{item.code}}</div>
                </div>
              </div>
              <div class="cp-bd-col2">
                <div class="card" v-for="(value,key) in tableList" :key="key">
                  <div class="card-item item" v-for="item in value" :key="item.code">
                    {{item.code}}
                  </div>
                </div>

              </div>
            </div>
            <div class="large-row-pass ">
              <span class="pass">通</span>
              <span class="pass">道</span>
            </div>
        </div>
        <div class="col-pass">
          <span>通</span>
          <span>道</span>
        </div>
        <div class="right-panel">
          <div class="rp-box">
            <div class="rp-row rp-row1">
              <span>04MJZ001</span><br>
              <span>车加工半成品</span>
            </div>
            <div class="rp-row rp-row2">
              <div class="rp-row2-top">
                <span>09GJK</span><br>
                <span>焊丝存放区</span>
              </div>
              <div class="rp-row2-bt">
                <span>04DHL001</span><br>
                <span>电焊物料分拣存放区</span>
              </div>
            </div>
          </div>
          <div class="item-box" v-for="(item,index) in [1,2,3,4,5]" :key="index">
            <div class="item" v-for="item in rpList" :key="item.code">{{item.code}}</div>
          </div>
          <div class="rp-saveBox">
            <div>13DJQ051 待检塑料件存放区</div>
            <div>13DJQ052 待检塑料件存放区</div>
            <div>13DJQ053 待检塑料件存放区</div>
            <div :style="{borderBottomWidth:'0'}">13DJQ054 待检塑料件存放区</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="ft-left">
        <span>剪袋子</span>
        <span>IQC办公室</span>
        <span>仓库办公室</span>
      </div>
      <div class="ft-right">
        外协件周转区04WXJ001
      </div>
    </div>
  </div>
</template>
<script>
import headerTitle from "../layout/header";
export default {
  data(){
    return {
      col1List:[0,1,2,3,4,5],
      cpColumn1:[
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
      cpRow1:[
          {
            code:"13PLQ053",
            color:"default"
          },
          {
            code:"13PLQ054",
            color:"default"
          },
          {
            code:"13PLQ055",
            color:"#f71f4d"
          },
          {
            code:"13PLQ056",
            color:"#18348c"
          },
          {
            code:"13PLQ057",
            color:"default"
          },
          {
            code:"13PLQ058",
            color:"default"
          },
          {
            code:"13PLQ059",
            color:"default"
          },
          {
            code:"13PLQ060",
            color:"default"
          },
          {
            code:"13PLQ061",
            color:"default"
          },{
            code:"13PLQ044",
            color:"default"
          },
          {
            code:"13PLQ045",
            color:"default"
          },
          {
            code:"13PLQ046",
            color:"default"
          },{
            code:"13PLQ047",
            color:"default"
          },
          {
            code:"13PLQ048",
            color:"default"
          },
          {
            code:"13PLQ049",
            color:"default"
          },{
            code:"13PLQ050",
            color:"default"
          },
          {
            code:"13PLQ051",
            color:"default"
          },
          {
            code:"13PLQ052",
            color:"default"
          }
        ],
      cpRow2:[
          {
            code:"13PLQ035",
            color:"default"
          },
          {
            code:"13PLQ036",
            color:"default"
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
            color:"default"
          },
          {
            code:"13PLQ040",
            color:"default"
          },{
            code:"13PLQ041",
            color:"default"
          },
          {
            code:"13PLQ042",
            color:"default"
          },
          {
            code:"13PLQ043",
            color:"default"
          }
        ],
        cpRow3:[
          {
            code:"13PLQ026",
            color:"default"
          },
          {
            code:"13PLQ027",
            color:"default"
          },
          {
            code:"13PLQ028",
            color:"#03dab9"
          },
          {
            code:"13PLQ029",
            color:"default"
          },
          {
            code:"13PLQ030",
            color:"default"
          },
          {
            code:"13PLQ031",
            color:"default"
          },{
            code:"13PLQ032",
            color:"default"
          },
          {
            code:"13PLQ033",
            color:"default"
          },
          {
            code:"13PLQ034",
            color:"default"
          },{
            code:"13PLQ017",
            color:"default"
          },
          {
            code:"13PLQ018",
            color:"default"
          },
          {
            code:"13PLQ019",
            color:"default"
          },{
            code:"13PLQ020",
            color:"default"
          },
          {
            code:"13PLQ021",
            color:"default"
          },
          {
            code:"13PLQ022",
            color:"default"
          },{
            code:"13PLQ023",
            color:"default"
          },
          {
            code:"13PLQ024",
            color:"default"
          },
          {
            code:"13PLQ025",
            color:"default"
          }
        ],  
        cpRow4:[
          {
            code:"13PLQ009",
            color:"default"
          },
          {
            code:"13PLQ010",
            color:"default"
          },
          {
            code:"13PLQ011",
            color:"#ffab03"
          },
          {
            code:"13PLQ012",
            color:"default"
          },
          {
            code:"13PLQ013",
            color:"default"
          },
          {
            code:"13PLQ014",
            color:"default"
          },{
            code:"13PLQ015",
            color:"default"
          },
          {
            code:"13PLQ016",
            color:"default"
          },
          {
            code:"储物柜",
            color:""
          },
          {
            code:"13PLQ001",
            color:"default"
          },{
            code:"13PLQ002",
            color:"default"
          },
          {
            code:"13PLQ003",
            color:"default"
          },
          {
            code:"13PLQ004",
            color:"default"
          },{
            code:"13PLQ005",
            color:"default"
          },
          {
            code:"13PLQ006",
            color:"default"
          },
          {
            code:"13PLQ007",
            color:"default"
          },{
            code:"13PLQ008",
            color:"default"
          },
          {
            code:"",
            color:""
          },
          {
            code:"13PLQ065",
            color:"default"
          },
          {
            code:"13PLQ064",
            color:"default"
          },{
            code:"13PLQ063",
            color:"default"
          },
          {
            code:"13PLQ062",
            color:"default"
          },
          {
            code:"13PLQ061",
            color:"default"
          },{
            code:"13PLQ060",
            color:"default"
          },
          {
            code:"13PLQ059",
            color:"default"
          },
          {
            code:"13PLQ058",
            color:"default"
          },{
            code:"13PLQ057",
            color:"default"
          },
        ],
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
      rpList:[
        {
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
      ]
    }
  },
  components:{
    headerTitle
  }
}
</script>
<style lang="scss">
$border:1px solid #0267c5;
.layout {
  padding-top: 70px;
  height: 100%;
  background: radial-gradient(#010e34, #001454);
}

.body {
  padding: 0 20px;
  position: relative;
  height: calc(100vh - 160px);
}
.sider{
  height: 30px;
  margin-bottom: 10px;
}
.panel-content{
  display: flex;
  text-align: center;
  color: #fff;
  // height: 100%;
  justify-content: space-between;
}
.left-panel{
  display: flex;
  height: calc(100vh - 200px);

  .lp-col1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .c1-top{
      .save-box{
        width: 180px;
        height: 55px;
        line-height: 55px;
        border:$border;
      }     
    }
    .c1-ft{
      margin:20px 0;
      .c1-ft-box{
        border:$border;
        width: 180px;
        padding:40px 0;
        min-height: 160px;
        div{
          margin-bottom:8px;
        }
      }
    }
  }
}
.center-panel{
  height: calc(100vh - 200px);
  .cp-top{
    display: flex;
    .cp-top-col1{
      width: 810px;
      .turnover-box{
        border:$border;
        height: 38px;
        line-height: 40px;
        span{
          margin-right: 10px;
        }          
      } 
    }
    .cp-top-col2{
        margin-left: 10px;
        border:$border;
        width: 180px;
        .cp-top-box{
          display: flex;
          height: 50%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .cp-top-box1{
          border-bottom: $border;
        }
    }
  }
  .cp-bd{
      display: flex;
  }
  .cp-bd-col1{
      width: 810px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    .row{
      display: flex;
      flex-wrap: wrap;
      }
    }
  }
  .cp-bd-col2{
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;

    .card{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }

.right-panel{
  height: calc(100vh - 200px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.rp-box{
  height: 333px;
  margin-bottom: 30px;
}
.rp-row{
  border: $border;
  width: 540px;

}
.rp-row1{
  height: 35%;
  margin-bottom: 16px;
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.rp-row2{
  height: 60%;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
}
.item-box{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;

}
.rp-saveBox{
  border:$border;
  div{
    border-bottom: $border;
    line-height: 24px;
  }
}
.ft-right{
    width: 540px;
    height: 50px;
    border: $border;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.footer{
  padding: 0 20px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin-top: 20px;
  .ft-left{
    width: 1260px;

    height: 50px;
    border: $border;
    display:flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
  }
  
}
.col-pass{
  width: 50px;
  height:calc(100vh - 200px);
  text-align: center;
  display: flex;
  flex-direction: column;
  span{
    // flex:1;
    padding-top: 150px;
    color: #fff;
    font-size: 20px;
  }
}

.row-pass{
  .pass{
    margin: 0 10px;
    font-size: 14px;
  }
}
.large-row-pass{
  width: 1000px;
  display: flex;
  justify-content: space-around;
  .pass{
    height: 30px;
    line-height: 30px;
    font-size: 20px;
  }
}

.item{
  box-sizing: border-box;
  border:$border;
  width: 90px;
  height: 38px;
  line-height: 38px;
  text-align: center;
}
</style>