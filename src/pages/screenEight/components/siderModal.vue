<template>
  <div class="sider-modal">
    <div class="left-sider">
      <div class="sider-header">
        <img class="cursor" src="../../../assets/imgs/shrink.png" alt="shrink" @click="shrink">
      </div>
      <div class="sider-table">
        <div class="per-table sider-table-in">
          <el-table
            :data="tableDataIn"
            style="width: 100%"
            :header-cell-style="{backgroundColor:'#3760a4 ',color:'#fff',border:'none'}"
            :row-class-name="tableRowClassName"
            class="customer-table"
            max-height="100%"
            height="100%"
            >
            <el-table-column
              type="index"
              label="序号">
              <template slot-scope="scope">
                <span >{{ scope.$index + 1}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="createtime"
              label="IN时间"
              width="180px">
            </el-table-column>
            <el-table-column
              prop="workorderno"
              label="工单号">
            </el-table-column>
            <el-table-column
              prop="erp"
              label="ERP编码">
            </el-table-column>
            <el-table-column
              prop="name"
              label="物料名称">
            </el-table-column>
            <el-table-column
              prop="qty"
              label="数量">
            </el-table-column>
            <el-table-column
              prop="venname"
              label="供应商">
            </el-table-column>
            <el-table-column
              prop="position"
              label="IN库位">
            </el-table-column>
            <el-table-column
              label="质检状态">
              <template slot-scope="scope">
                <span>{{scope.row.checkstatus | statusFilter}}</span>
              </template>
            </el-table-column>

          </el-table>
        </div>
        <div class="per-table sider-table-out">
          <el-table
            :data="tableDataOut"
            style="width: 100%"
            :header-cell-style="{backgroundColor:'#3760a4 ',color:'#fff',border:'none'}"
            :row-class-name="tableRowClassName"
            class="customer-table"
            height="100%"
            max-height="100%"
            >
            <el-table-column
              type="index"
              label="序号">
              <template slot-scope="scope">
                <span >{{ scope.$index + 1}}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="createtime"
              label="OUT时间"
              width="180px">
            </el-table-column>
            <el-table-column
              prop="position"
              label="OUT库位">
            </el-table-column>
            <el-table-column
              prop="fposition"
              label="IN库位">
            </el-table-column>
            <el-table-column
              prop="workorderno"
              label="工单号">
            </el-table-column>
            <el-table-column
              prop="erp"
              label="ERP编码">
            </el-table-column>
            <el-table-column
              prop="name"
              label="物料名称">
            </el-table-column>
            <el-table-column
              prop="qty"
              label="数量">
            </el-table-column>
            <el-table-column
              prop="venname"
              label="供应商">
            </el-table-column>

          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
let path="http://172.16.8.55:49866/";

export default {
  props:{
    siderIsOpen:{
      type:Boolean,
      required:true
    }
  },
  filters:{
    statusFilter(value){
      let statusObj = {
          "0":"未报检",
          "1":"已报检",
          "2":"合格"
      }
      return statusObj[value];
    }
  },
  data() {
    return {
      isOpen:false,
      tableDataIn:[],
      tableDataOut:[],
    //   tableDataIn: [{
    //     NO: '1',
    //     IN_Time: '12.03 08:00:00',
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某',
    //     IN_Location:"13BLP001",
    //     quality:'11'
    //   }, {
    //     NO: '2',
    //     IN_Time: '12.03 08:00:00',
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某',
    //     IN_Location:"13BLP001",
    //     quality:'11'
    //   }, {
    //     NO: '3',
    //     IN_Time: '12.03 08:00:00',
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某',
    //     IN_Location:"13BLP001",
    //     quality:'11'
    //   }, {
    //     NO: '4',
    //     IN_Time: '12.03 08:00:00',
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某',
    //     IN_Location:"13BLP001",
    //     quality:'11'
    //   }, {
    //     NO: '5',
    //     IN_Time: '12.03 08:00:00',
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某',
    //     IN_Location:"13BLP001",
    //     quality:'11'
    //   }, {
    //     NO: '6',
    //     IN_Time: '12.03 08:00:00',
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某',
    //     IN_Location:"13BLP001",
    //     quality:'11'
    //   }],
    //   tableDataOut: [{
    //     NO: '1',
    //     OUT_Time: '12.03 08:00:00',
    //     OUT_Location:"13BLP001",
    //     IN_Location:"13BLP001",
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某'
    //   }, {
    //     NO: '2',
    //     OUT_Time: '12.03 08:00:00',
    //     OUT_Location:"13BLP001",
    //     IN_Location:"13BLP001",
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某'
    //   }, {
    //     NO: '3',
    //     OUT_Time: '12.03 08:00:00',
    //     OUT_Location:"13BLP001",
    //     IN_Location:"13BLP001",
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某'
    //   }, {
    //     NO: '4',
    //     OUT_Time: '12.03 08:00:00',
    //     OUT_Location:"13BLP001",
    //     IN_Location:"13BLP001",
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某'
    //   }, {
    //     NO: '5',
    //     OUT_Time: '12.03 08:00:00',
    //     OUT_Location:"13BLP001",
    //     IN_Location:"13BLP001",
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某'
    //   }, {
    //     NO: '6',
    //     OUT_Time: '12.03 08:00:00',
    //     OUT_Location:"13BLP001",
    //     IN_Location:"13BLP001",
    //     MO_NO: '20202014512',
    //     ERP_NO:'20202014512',
    //     name:"某某某",
    //     count:11,
    //     supplier:'某某某'
    //   }],
    }
  },
  created(){
    this.isOpen=this.siderIsOpen;
  },
  mounted(){
    this.getPositionLogIN();
    this.getPositionLogOUT();
    this.timer=setInterval(() => {
      this.getPositionLogIN();
      this.getPositionLogOUT();
    }, 60*1000);
  },
  methods:{
    //获取入库信息
    getPositionLogIN(){
      axios.get(path+'api/warehouse/positionLog?optype=1')
      .then((res)=>{
        // console.log("in-res",res)
        this.tableDataIn=res.data.Data.data
      })
    },
    //获取出库信息
    getPositionLogOUT(){
      axios.get(path+'api/warehouse/positionLog?optype=2')
      .then((res)=>{
        // console.log("out-res",res)
        this.tableDataOut=res.data.Data.data
      })
    },
    // 修改table的背景颜色
    tableRowClassName({row, rowIndex}) {
      if(rowIndex%2===0){
        return 'single';
      }else if(rowIndex%2!==0){
        return 'double';
      }
      return '' 
    },
    shrink(){
      this.isOpen=false;
      this.$emit('closeSider',false)
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" >
  .sider-modal{
    position:fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .left-sider{
    width: 60vw;
    max-width: 1000px;
    height: 100%;
    background-color: #001d3d;
  }
  .sider-header{
    height: 60px;
    width: 100%;
    position: relative;
    img{
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .sider-table{
    height: calc(100vh - 60px);
    .per-table{
      height: 50%;
    }
  }
  .gutter{
    background-color: #3760a4 !important;
  }
  .customer-table{
    background-color: #001d3d;
  }
  .cursor{
    cursor: pointer;
  }
</style>