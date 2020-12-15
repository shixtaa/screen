<template>
    <div style="height: 100%;" id="chart">

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
                    color: ['#2b80ff', '#04bed5'],
                    grid: {
                        x: 40,
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
                            data: ['00:00', '03:00', '06:00', '09:00', '00:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
                            axisTick: {
                                alignWithLabel: true,
                                lineStyle: {
                                    color: '#6ea8c2'
                                }
                            },
                            axisLabel: {
                                color: '#fff'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#1f3f6c'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 1800,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                color: '#fff'
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                lineStyle: {
                                    color: '#1f3f6c'
                                }
                            }

                        }
                    ],
                    series: []
                }
            }
        },
        methods: {
           init(newSeries){
               let myChart = echarts.init(document.getElementById('chart'));
               let series = [...newSeries]
               series[0] = {
                   ...series[0],
                   name: '男性',
                   type: 'line',
                   smooth: true,
                   symbol: 'circle',
                   areaStyle: {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: 'rgba(67,114,250,.45)'
                       }, {
                           offset: 1,
                           color: 'rgba(1,239,253,0)'
                       }])
                   }
               }
               series[1] = {
                   ...series[1],
                   name: '女性',
                   type: 'line',
                   smooth: true,
                   symbol: 'circle',
                   areaStyle: {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: 'rgba(67,250,226,.45)'
                       }, {
                           offset: 1,
                           color: 'rgba(1,239,253,0)'
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
            series(newSeries){
                this.init(newSeries)
            }
        }
    }
</script>

<style scoped>

</style>
