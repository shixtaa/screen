<template>
    <div class="rank">
        <div class="header">
            <ul class="clearfix">
 <li style=" width:15%">设备编号</li>
              
                <li style=" width:15%">主人员</li>
                <li style=" width:40%">零件图号</li>
                <li style=" width:15%">工序</li>
               
                <li style=" width:15%">状态</li>
            </ul>
        </div>
        <div class="body" ref="scrollBody">
            <div class="scroll-wrap" ref="scrollWrap" :style="{marginTop: `${wrapMt}px`,transitionDuration: duration}">
                <template v-for="(item,index) in listLoop" >
                <ul v-if="index<len" class="clearfix" :key="index" >
 <li  style=" width:15%">{{item.device}}</li>
                   
                    <li  style=" width:15%">{{item.staffname}}</li>
                    <li  style=" width:40%">{{item.componentno}}</li>
                    <li  style=" width:15%">{{item.workno}}</li>
                   
                     <li  style=" width:15%">{{item.status}}</li>

                </ul>
                <ul v-else class="clearfix" :key="index" :style="{background: (index-len)%2===0?'#0d1d4d':'#162654'}">
  <li  style=" width:15%">{{item.device}}</li>
                  
                    <li  style=" width:15%">{{item.staffname}}</li>
                    <li  style=" width:40%">{{item.componentno}}</li>
                    <li  style=" width:15%">{{item.workno}}</li>
                  
                     <li  style=" width:15%">{{item.status}}</li>

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

                wrapMt: 0,
                duration: '.3s',
                len: 0,
                listLoop: [],
                timer: null
            }
        },
        methods: {
            init(){
                this.len = this.list.length
                const step = 45
                let bodyHeight = this.$refs.scrollBody.clientHeight
                if (bodyHeight < this.totalH) {
                    this.listLoop = [...this.list, ...this.list]
                    if(this.timer){
                        clearInterval(this.timer)
                    }
                    this.timer = setInterval(() => {
                        this.wrapMt -= step
                        if (this.wrapMt < -this.totalH ) {
                            this.duration = '0s'
                            this.wrapMt = 0
                            setTimeout(() => {
                                this.duration = '0.3s'
                            },300)
                        }
                    }, 5000)
                }else{
                    this.listLoop = this.list
                }
            }
        },
        mounted() {
           this.init()
        },
        watch:{
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
                height: 30px;
                line-height: 30px;

                img {
                    vertical-align: middle;
                }
            }
        }

        ul {
            background: #0f2463;

            li {
                float: left;
                width: 18%;
                color: #fff;
                text-align: center;
                height: 20px;
                line-height: 20px;
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
