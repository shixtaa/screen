<template>
    <div style="height: 100%;" id="agebarChart">

    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props:{
            series: Array
        },
        data() {
            return {
                option: {
                    grid: {
                        x: 50,
                        y: 40,
                        x2: 10,
                        y2: 30
                    },
                    color: ['#2b80ff', '#04bed5'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['男性', '女性'],
                        top: 0,
                        right: 10,
                        orient: 'vertical',
                        itemHeight: 10,
                        itemGap: 5,
                        textStyle: {
                            color: '#fff',
                            fontSize: 10
                        }
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['18岁以下', '18-24','25-44','45-60','60以上', '未知'],

                            axisLabel: {
                                color: '#fff'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1f3f6c'
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 3000,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                color: '#fff',

                                formatter: '{value}人'
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    color: '#1f3f6c'
                                }
                            },

                        }
                    ],
                    series: []
                }
            }
        },
        methods: {
            init(newSeries){
                let myChart = echarts.init(document.getElementById('agebarChart'));
                let series = [...newSeries]
                series[0] = {
                    ...series[0],
                    name: '男性',
                    type: 'bar',
                    barWidth: 20,
                    symbol: 'circle'
                }
                series[1] = {
                    ...series[1],
                    name: '女性',
                    type: 'bar',
                    barWidth: 20,
                    symbol: 'circle'
                }
                this.option.series = series
                myChart.setOption(this.option)
            }
        },

        mounted() {
            this.init(this.series)
        },
        watch: {
            series(newSeries){
                this.init(newSeries)
            }
        }
    }
</script>

<style scoped>

</style>
