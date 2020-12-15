<template>
    <div style="height: 100%;" id="pieAnalysis">

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
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    },
                    title: {
                        text: '用户来源分析',
                        textStyle: {
                            color: '#fff',
                            fontWeight: 'normal'
                        },
                        left: '10%',
                        bottom: 0
                    },
                    color: ['#6cfa99', '#3ee6e3', '#6975f5'],
                    legend: {
                        orient: 'vertical',
                        right: 0,
                        top: 60,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                        itemWidth: 20,
                        itemHeight: 10,
                        itemGap: 20,
                        data: [
                            {
                                name: '微信登录',
                                textStyle: {
                                    color: '#6cfa99'
                                }
                            }, {
                                name: '微博登录',
                                textStyle: {
                                    color: '#3ee6e3'
                                }
                            }, {
                                name: '手机号登录',
                                textStyle: {
                                    color: '#6975f5'
                                }
                            },
                        ],
                        formatter: (name) => {
                            let sum = 0
                            let data = this.series[0].data
                            data.forEach(v => {
                                sum += v
                            })
                            if (name === '微信登录') {
                                return '微信登录：' + Math.ceil(data[0] / sum * 100) + '%'
                            } else if (name === '微博登录') {
                                return '微博登录：' + Math.ceil(data[1] / sum * 100) + '%'
                            } else {
                                return '手机号登录：' + Math.ceil(data[2] / sum * 100) + '%'

                            }
                        }
                    },
                    series: []
                }
            }
        },
        methods: {
            init(newSeries) {
                let myChart = echarts.init(document.getElementById('pieAnalysis'));
                let data = newSeries[0].data.map((v, i) => {
                    if (i === 0) {
                        return {name: '微信登录', value: v}
                    }
                    if (i === 1) {
                        return {name: '微博登录', value: v}
                    }
                    if (i === 2) {
                        return {name: '手机号登录', value: v}
                    }
                })
                this.option.series = [{
                    type: 'pie',
                    startAngle: -90,
                    label: {
                        show: false
                    },
                    center: ['30%','50%'],
                    labelLine: {
                        show: false
                    },
                    radius: ['50%', '65%'],
                    data
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
