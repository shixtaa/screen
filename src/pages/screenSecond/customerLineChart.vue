<template>
    <div style="height: 100%;" id="chart">
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props: {
            series: Array,
            xAxis: Array
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
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#fff',
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#1f3f6c'
                            }
                        },

                        data: []
                    }
                    ,
                    yAxis: {
                        type: 'value',
                        min: 0,
                        max: 8000,
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
                    ,
                    series: []
                }
            }
        },
        methods: {
            init(newSeries) {
                let myChart = echarts.init(document.getElementById('chart'));
                let series = [...newSeries]
                series[0] = {
                    ...series[0],
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    lineStyle: {
                        width: 1
                    },
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
                this.option.xAxis.data = this.xAxis
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
