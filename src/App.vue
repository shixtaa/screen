<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import $ from "jquery";
let ANIMATION = ['one','two','three','four','five','six'];
export default {
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      if (!from.name) return;
      let index = Math.floor(ANIMATION.length * Math.random());
      this.transitionName = ANIMATION[index];
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      // if (to.meta.index > from.meta.index) {
      //   //设置动画名称
      //   console.log("left");
      //   this.transitionName = "left";
      // } else {
      //   console.log("right");
      //   this.transitionName = "right";
      // }
    },
  },
  mounted() {
    console.log("app");
    $(document).on("keyup", (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 37:
          this.$router.push({
            name: this.$route.meta.prev,
          });
          break;
        case 39:
          this.$router.push({
            name: this.$route.meta.next,
          });
          break;
        // case 49:
        // case 97:
        //   this.$router.push({
        //     name: "screenFirst",
        //   });
        //   break;
        // case 50:
        // case 98:
        //   this.$router.push({
        //     name: "screenSecond",
        //   });
        //   break;
        // case 51:
        // case 99:
        //   this.$router.push({
        //     name: "screenThird",
        //   });
        //   break;
        // case 52:
        // case 100:
        //   this.$router.push({
        //     name: "screenFourth",
        //   });
        //   break;
        // case 53:
        // case 101:
        //   this.$router.push({
        //     name: "screenFive",
        //   });
        //   break;
        // case 54:
        // case 102:
        //   this.$router.push({
        //     name: "screenSix",
        //   });
        //   break;
        // case 55:
        // case 103:
        //   this.$router.push({
        //     name: "screenSeven",
        //   });
        //   break;
        // case 56:
        // case 104:
        //   this.$router.push({
        //     name: "screenEight",
        //   });
        //   break;
      }
    });
  },
};
</script>
<style lang="scss">
#app {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
#app > * {
  position: absolute;
  width: 100%;
}
</style>
<style>
.left-enter {
  transform: translateX(100%);
  /* opacity: 0; */
}
.left-enter-to {
  transform: translateX(0);
  /* opacity: 1; */
}

.left-enter-active {
  transition: 1s;
}
.left-leave {
  transform: translateX(0);
  /* opacity: 1; */
}
.left-leave-to {
  transform: translateX(-100%);
  /* opacity: 0; */
}
.left-leave-active {
  transition: 1s;
}
.right-enter {
  transform: translateX(-100%);
  /* opacity: 0; */
}
/* .right-enter-to{
    opacity: 1;
} */
.right-enter-active {
  transition: 1s;
}
.right-leave-to {
  transform: translateX(100%);
  /* opacity: 0; */
}
.right-leave-active {
  transition: 1s;
}

.one-enter-active {
  animation: one_amd 1.5s ease-out;
}
.one-leave{
  opacity: 0;
}
.one-leave-active {
  animation: fadeout 2s ease-out;
}
.two-enter-active {
  animation: two_amd 1.5s ease-out;
}
.two-leave-active {
  animation: two_amd 1.5s reverse;
}
.three-enter-active{
   animation: three_amd 1.5s ease-out;
}
.three-leave-active{
   animation: four_amd 1.5s ease-out reverse;
}
.four-enter-active{
   animation: four_amd 1.5s ease-out;
}
.four-leave-active{
   animation: three_amd 1.5s ease-out reverse;
}
.five-enter-active{
   animation: five_amd 1.5s ease-out;
}
.five-leave-active{
   animation: six_amd 1.5s ease-out reverse;
}
.six-enter-active{
   animation: six_amd 1.5s ease-out;
}
.six-leave-active{
   animation: five_amd 1.5s ease-out reverse;
}
@keyframes one_amd {
  0% {
    transform:scale(1.5) rotateX(-90deg);
  }
  100% {
    transform:scale(1) rotateX(0);
  }
}
@keyframes two_amd {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes three_amd {
  0% {
    scale: (0);
    transform: translate(-100%);
  }
  100% {
    scale: (1);
    transform: translate(0);
  }
}
@keyframes four_amd {
  0% {
    scale: (0);
    transform: translate(100%);
  }
  100% {
    scale: (1);
    transform: translate(0);
  }
}
@keyframes five_amd {
  0% {
    scale: (0);
    transform: translateY(100%);
  }
  100% {
    scale: (1);
    transform: translateY(0);
  }
}
@keyframes six_amd {
  0% {
    scale: (0);
    transform: translateY(-100%);
  }
  100% {
    scale: (1);
    transform: translateY(0);
  }
}
@keyframes fadeout{
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(0);
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<style lang="scss">
//table样式
  .el-table .single{
    background-color: #001d3d;
    color:#fff;
  }
  .el-table .double{
    background-color: #082443;
    color:#fff;
  }

  .el-table::before {
    height:0 !important;
  }
  
  .el-table tbody tr:hover>td { 
    background-color:rgba(255,255,255,0.3)!important;
  }
  .el-table td,.el-table th {
    text-align: center !important;
    color: #fff;
    border: none !important;
  }
  //暂无数据
  .el-table__empty-block{
    background-color: #001d3d;
    .el-table__empty-text{
      color: #fff;
    }
  }
  //table 滚动条样式
  .el-table__body-wrapper{
    background-color: #001d3d;
  }
  .el-table__body-wrapper::-webkit-scrollbar {
    width: 10px !important;
  }

  .el-table__body-wrapper::-webkit-scrollbar-thumb{
      border-radius: 3px;
      background-color: rgba(255,255,255,0.2);
  }
</style>