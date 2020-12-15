<template>
    <div style="height: 100%;" id="barChart">

    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props:{
            series: Array,
            xAxis: Array
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
                    xAxis: [
                        {
                            type: 'category',
                            data: [],
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
                            max: 8000,
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
                let myChart = echarts.init(document.getElementById('barChart'));
                let series = [...newSeries]
                series[0] = {
                    ...series[0],
                    name: '男性',
                    type: 'bar',
                    smooth: true,
                    barWidth: 20,
                    symbol: 'circle',
                    itemStyle:{
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#01d1ff'
                        }, {
                            offset: 1,
                            color: '#2772ea'
                        }])
                    }
                }
                this.option.series = series
                this.option.xAxis[0].data = this.xAxis
                // this.$set(this.option.xAxis.data, this.xAxis)
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
