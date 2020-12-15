<template>
    <div class="rank">
        <div class="header">
            <ul class="clearfix">
                <li>排名</li>
                <li>器材名称</li>
                <li>器材型号</li>
                <li>使用时长</li>
            </ul>
        </div>
        <div class="body" ref="scrollBody">
            <div class="scroll-wrap" ref="scrollWrap" :style="{marginTop: `${wrapMt}px`,transitionDuration: duration}">
                <template v-for="(item,index) in listLoop" >
                    <ul v-if="index<len" class="clearfix" :key="index" >
                        <li>
                            <template v-if="index<len">
                                <template v-if="index === 0">
                                    <img :src="cap_1" alt="">
                                </template>
                                <template v-else-if="index === 1">
                                    <img :src="cap_2" alt="">
                                </template>
                                <template v-else-if="index === 2">
                                    <img :src="cap_3" alt="">
                                </template>
                                <template v-else>
                                    {{index+1}}
                                </template>
                            </template>
                            <template v-else>
                                <template v-if="index-len === 0">
                                    <img :src="cap_1" alt="">
                                </template>
                                <template v-else-if="index-len === 1">
                                    <img :src="cap_2" alt="">
                                </template>
                                <template v-else-if="index-len === 2">
                                    <img :src="cap_3" alt="">
                                </template>
                                <template v-else>
                                    {{index+1-len}}
                                </template>
                            </template>
                        </li>
                        <li>{{item.name}}</li>
                        <li>{{item.id}}</li>
                        <li>{{item.time}}</li>
                    </ul>
                    <ul v-else class="clearfix" :key="index" :style="{background: (index-len)%2===0?'#0d1d4d':'#162654'}">
                        <li>
                            <template v-if="index<len">
                                <template v-if="index === 0">
                                    <img :src="cap_1" alt="">
                                </template>
                                <template v-else-if="index === 1">
                                    <img :src="cap_2" alt="">
                                </template>
                                <template v-else-if="index === 2">
                                    <img :src="cap_3" alt="">
                                </template>
                                <template v-else>
                                    {{index+1}}
                                </template>
                            </template>
                            <template v-else>
                                <template v-if="index-len === 0">
                                    <img :src="cap_1" alt="">
                                </template>
                                <template v-else-if="index-len === 1">
                                    <img :src="cap_2" alt="">
                                </template>
                                <template v-else-if="index-len === 2">
                                    <img :src="cap_3" alt="">
                                </template>
                                <template v-else>
                                    {{index+1-len}}
                                </template>
                            </template>
                        </li>
                        <li>{{item.name}}</li>
                        <li>{{item.id}}</li>
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
              const step = 45
              let bodyHeight = this.$refs.scrollBody.clientHeight
              if (bodyHeight < this.totalH) {
                  this.listLoop = [...this.list, ...this.list]
                  this.timer = setInterval(() => {
                      this.wrapMt -= step
                      if (this.wrapMt < -this.totalH ) {
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
                height: 45px;
                line-height: 45px;

                img {
                    vertical-align: middle;
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
                &:nth-child(2){
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                &:first-child {
                    width: 10%;
                }
            }
        }

        .scroll-wrap {
            transition-property: all;
            transition-timing-function: linear;
        }
    }
</style>