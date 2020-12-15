<template>
    <div class="rank">
        <div>
            <ul>
                <template v-for="(item,index) in list">
                    <li :key="index" v-if="index<list.length/2">
                        <div class="cap">
                            <template v-if="index===0">
                                <img :src="cap_1" alt="">
                            </template>
                            <template v-if="index===1">
                                <img :src="cap_2" alt="">
                            </template>
                            <template v-if="index===2">
                                <img :src="cap_3" alt="">
                            </template>
                        </div>
                        <div class="avatar">
                            <img :src="item.avatar" alt="">
                        </div>
                        {{item.name}}
                        <span>{{item.label}}</span>
                    </li>
                </template>
            </ul>
        </div>
        <div>
            <ul>
                <template v-for="(item,index) in list">
                    <li :key="index" v-if="index>=list.length/2">
                        <div class="cap-text">
                            {{index+1}}
                        </div>
                        <div class="avatar">
                            <img :src="item.avatar" alt="">
                        </div>
                        {{item.name}}
                        <span>{{item.label}}</span>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            list: Array
        },
        data() {
            return {
                cap_1: require("../../assets/imgs/cap_1.png"),
                cap_2: require("../../assets/imgs/cap_2.png"),
                cap_3: require("../../assets/imgs/cap_3.png")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .rank {
        display: flex;
        overflow: hidden;
        height: 175px !important;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        & > div {
            height: 100%;
            flex: 1;

            &:first-child {
                border-right: 1px solid #404d73;
                padding-right: 10px;
            }
        }

        li {
            height: 45px;
            margin-bottom: 18px;
            line-height: 45px;
            padding-left: 100px;
            position: relative;
            font-size: 16px;
            color: #fff;
            overflow: hidden;

            & > span {
                float: right;
            }

            .cap {
                width: 30px;
                height: 27px;
                position: absolute;
                left: 0;
                top: 9px;
            }

            .cap-text {
                width: 30px;
                height: 30px;
                line-height: 30px;
                position: absolute;
                left: 0;
                top: 7px;
                text-align: center;
            }

            .avatar {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                position: absolute;
                left: 40px;
                top: 0;
                background: #f7f8f9;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

        }
    }
</style>
