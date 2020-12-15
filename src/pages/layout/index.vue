<template>
  <div class="layout">
    <header-title></header-title>
    <div class="body">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import headerTitle from "./header";

export default {
  components: {
    headerTitle,
  },
  data() {
    return {
      transitionName: "right",
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        console.log("left");
        this.transitionName = "left";
      } else {
        console.log("right");
        this.transitionName = "right";
      }
    },
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
.body > * {
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
</style>
