<template>
    <div style="height: 100%;" id="agebarChart">

    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props: {
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
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['有氧设备', '无氧设备'],
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
                            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],

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
                            max: 50,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                color: '#fff',

                                formatter: '{value}次'
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
            init(newSeries) {
                let myChart = echarts.init(document.getElementById('agebarChart'));
                let series = [...newSeries]
                series[0] = {
                    ...series[0],
                    name: '有氧设备',
                    type: 'bar',
                    barWidth: 20,
                    symbol: 'circle',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#01f0ff'
                        }, {
                            offset: 1,
                            color: '#00585c'
                        }])
                    }
                }
                series[1] = {
                    ...series[1],
                    name: '无氧设备',
                    type: 'bar',
                    barWidth: 20,
                    symbol: 'circle',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#01bdfb'
                        }, {
                            offset: 1,
                            color: '#00385b'
                        }])
                    }
                }
                this.option.series = series
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
