<template>
    <div class="little-card"
         :style="compStyle"
         v-show="title.length" :class="{type1: type===1,type2: type===2,type3: type===3}">
        <div>
            <p class="title">{{title}}</p>
            <p class="sub-title">{{subTitle}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: Number,
                default: 1
            },
            title: {
                type: String,
                default: '',
            },
            subTitle: {
                type: [String, Number],
                default: '',
            },
            height: Number
        },
        computed: {
            compStyle() {
                return {
                    ...Object,
                    height: `${this.height}%`
                }
            }
        },
        data() {
            return {}
        }
    };
</script>

<style lang="scss" scoped>
    .little-card {
        width: 100%;
        background: url("../../assets/imgs/little-card_1.png") no-repeat;
        background-size: 100% 100%;
        text-align: center;
        line-height: 30px;
        display: flex;
        align-items: center;
        overflow: hidden;
        &>div{
            flex: 1;
        }
        p {
            width: 90%;
            margin: 0 auto;
           
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 18px;
        }

        .sub-title{
            font-size:22px;
        }


        &.type2 {
            background-image: url("../../assets/imgs/little-card_2.png");

            .sub-title {
                color: #53e3ff;
            }
        }

        &.type3 {
            background-image: url("../../assets/imgs/little-card_3.png");

            .sub-title {
                color: #53e3ff;
            }
        }
    }
    @media (max-width: 1366px){
        .little-card{
            p{
                height: 22px;
                line-height: 22px;
            }
            .title{
                font-size: 14px;
            }
            .sub-title{
                font-size: 20px
            }
        }
    }
</style>
