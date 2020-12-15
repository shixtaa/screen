<template>
    <div style="height: 100%;">

    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props: {
            series: Array,
            canvasId: String,
            title: String,
            color: String
        },
        data() {
            return {
                option: {
                    title: {
                        text: this.title,
                        bottom: 0,
                        left: 'center',
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: 'normal'
                        }
                    },
                    grid: {
                        top: 30,
                        left: 30,
                        right: 30,
                        bottom: 30
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                borderRadius: 3,
                            }
                        },
                        nameGap: 2,
                        indicator: [
                            { name: '周一', max: 8000},
                            { name: '周二', max: 8000},
                            { name: '周三', max: 8000},
                            { name: '周四', max: 8000},
                            { name: '周五', max: 8000},
                            { name: '周六', max: 8000},
                            { name: '周日', max: 8000}
                        ],
                        splitLine: {
                            lineStyle: {
                                color: '#235fcb'
                            }
                        },
                        splitArea: {
                            areaStyle: {
                                color: 'transparent'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#235fcb'
                            }
                        },
                        center: ['50%', '47%']
                    },
                    series: []
                }
            }
        },
        methods: {
            init(newSeries) {
                let canvasId = this.canvasId
                let myChart = echarts.init(document.getElementById(canvasId));
                let areaColor = this.color === '#70eefc'?'rgba(112,238,252,.8)':'rgba(186,69,220,.8)'
                let series = [{
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data : [
                        {
                            value : newSeries,
                            name : '男性用户',
                            lineStyle: {
                                color: this.color
                            },
                            symbol: 'none',
                            areaStyle: {
                                color:areaColor
                            }
                        }
                    ]
                }]
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
