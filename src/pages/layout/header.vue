<template>
    <div class="header">
        <div class="logo">
            <img src="../../assets/imgs/logo.png" alt="">
        </div>
        <h1>{{title[$route.meta.type]}}</h1>
        <div class="current-time">{{time}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                time: '',
                title: [
                    '铁人智造-金工实时工单',
                    '铁人智造-金工工单进度',
                    '铁人智造-金工产出汇总',
                    '铁人智造-焊接设备看板',
                    '铁人智造-金工设备看板'
                ]
            }
        },
        created(){
            console.log(this.$route)
        },
        methods: {
            currentTime() {
                let date = new Date()
                let y = date.getFullYear()
                let m = date.getMonth() + 1
                let d = date.getDate()
                let h = date.getHours()
                let min = date.getMinutes()
                let s = date.getSeconds()
                d = d < 10 ? '0' + d : d
                m = m < 10 ? '0' + m : m
                h = h < 10 ? '0' + h : h
                min = min < 10 ? '0' + min : min
                s = s < 10 ? '0' + s : s
                this.time = `${y}-${m}-${d} ${h}:${min}:${s}`
            }
        },
        mounted() {
            setInterval(() => {
                this.currentTime()
            }, 1000)
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        height: 70px;
        background: url("../../assets/imgs/header.gif") no-repeat;
        background-position: bottom;
        background-size: cover;
        overflow: hidden;
        position: fixed;
        width: 100%;
        top: 0;
        .logo{
            width: 110px;
            height: 40px;
           position: absolute;
            margin-left: 30px;
            img{
                width: 100%;
            }
        }
        h1 {
            text-align: center;
            font-size: 24px;
            color: #7efafc;
            font-weight: 500;
            margin-top: 10px;
        }

        .current-time {
            position: absolute;
            right: 70px;
            top: 10px;
            color: #7efafc;
        }
    }
</style>
