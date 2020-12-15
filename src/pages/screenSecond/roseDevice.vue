<template>
    <div style="height: 100%;" id="rose2">

    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props: {
            colors: Array,
            series: Array
        },
        data() {
            return {
                option: {

                    title: {
                        text: '机械状态',
                        top: 20,
                        right: 160,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                            fontWeight:'normal'

                        }
                    },
                    grid: {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    color: ['#00bf7e', '#11d4f3', '#ffa154', '#1654f5'],
                    legend: {
                        orient: 'horizontal',
                        width: 150,
                        right: 60,
                        top: 60,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                        itemWidth: 20,
                        itemHeight: 10,
                        itemGap: 30,
                        data: ['空闲', '断网', '无效', '使用中']
                    },
                    series: []
                }
            }
        },
        methods: {
            init(newSeries) {
                let myChart = echarts.init(document.getElementById('rose2'));
                let data = newSeries[0].data.map((v, i) => {
                    if (i === 0) {
                        return {name: '空闲', value: v}
                    }
                    if (i === 1) {
                        return {name: '断网', value: v}
                    }
                    if (i === 2) {
                        return {name: '使用中', value: v}
                    }
                    if (i === 3) {
                        return {name: '无效', value: v}
                    }
                })
                this.option.series = [{
                    type: 'pie',
                    roseType: 'radius',
                    radius: ['50%', '70%'],
                    label: {
                        show: false
                    },
                    center: ['40%','50%'],
                    labelLine: {
                        show: false
                    },
                    data: data
                }]

                myChart.setOption(this.option)
            }
        },

        mounted() {
            this.init(this.series)
        },
        watch: {
            series(newSeries) {
                this.init(newSeries)
            }
        }
    }
</script>

<style scoped>

</style>
