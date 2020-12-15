<template>
    <div class="rank">
        <div class="header">
            <ul class="clearfix">
                <li>用户</li>
                <li>器材名称</li>
                <li>使用时长</li>
            </ul>
        </div>
        <div class="body" ref="scrollBody">
            <div class="scroll-wrap" ref="scrollWrap" :style="{marginTop: `${wrapMt}px`,transitionDuration: duration}">
                <template v-for="(item,index) in listLoop" >
                    <ul v-if="index<len" class="clearfix" :key="index" >
                        <li>
                            <div class="avatar">
                                <img :src="item.avatar" alt="">
                            </div>
                            {{item.name}}
                        </li>
                        <li>{{item.deviceName}}</li>
                        <li>{{item.time}}</li>
                    </ul>
                    <ul v-else class="clearfix" :key="index" :style="{background: (index-len)%2===0?'#0d1d4d':'#162654'}">
                        <li>
                            <div class="avatar">
                                <img :src="item.avatar" alt="">
                            </div>
                            {{item.name}}
                        </li>
                        <li>{{item.deviceName}}</li>
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
                return this.list.length * 45
            }
        },
        data() {
            return {
                cap_1: require("../../assets/imgs/cap_1.png"),
                cap_2: require("../../assets/imgs/cap_2.png"),
                cap_3: require("../../assets/imgs/cap_3.png"),
                wrapMt: 0,
                duration: '.3s',
                len: 0,
                listLoop: []
            }
        },
        methods: {
          init(){
              this.len = this.list.length
              const step = 55
              let bodyHeight = this.$refs.scrollBody.clientHeight
              if (bodyHeight < this.totalH) {
                  this.listLoop = [...this.list, ...this.list]
                  setInterval(() => {
                      this.wrapMt -= step
                      if (this.wrapMt < -this.totalH / 2) {
                          this.duration = '0s'
                          this.wrapMt = 0
                          setTimeout(() => {
                              this.duration = '0.3s'
                          },300)
                      }
                  }, 2000)
              }else{
                  this.listLoop = this.list
              }
          }
        },
        mounted() {
           this.init()
        },
        watch: {
            list(){
                this.init()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .rank {
        height: 100%;
        padding-top: 30px;
        position: relative;

        .header {
            position: absolute;
            width: 100%;
            top: 0;
        }

        .body {
            height: 100%;
            overflow: hidden;

            ul {
                background: #0d1d4d;

                &:nth-child(2n) {
                    background: #162654;
                }
            }

            li {
                height: 55px;
                line-height: 55px;
                &:first-child{
                    padding-left: 65px;
                    position: relative;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: left;
                }
                .avatar{
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    overflow: hidden;
                    position: absolute;
                    left: 5px;
                    top: 5px;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }

        ul {
            background: #0f2463;

            li {
                float: left;
                width: 30%;
                color: #fff;
                text-align: center;
                height: 30px;
                line-height: 30px;

                &:first-child {
                    width: 40%;

                }
            }
        }

        .scroll-wrap {
            transition-property: all;
            transition-timing-function: linear;
        }
    }
</style>