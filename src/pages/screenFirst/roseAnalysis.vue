<template>
    <div style="height: 100%;" id="rose">

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
                      text: '性别比例分析',
                        textStyle: {
                          color: '#fff',
                            fontWeight: 'normal'
                        },
                        left: '10%',
                        bottom: 0
                    },
                    color: ['#1f72f0', '#01d1cd', '#6cfa99'],
                    legend: {
                        orient: 'vertical',
                        right: 20,
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
                                name: '男性',
                                textStyle: {
                                    color: '#1f72f0'
                                }
                            }, {
                                name: '女性',
                                textStyle: {
                                    color: '#01d1cd'
                                }
                            }, {
                                name: '未知',
                                textStyle: {
                                    color: '#6cfa99'
                                }
                            },
                        ],
                        formatter: (name) => {
                            let sum = 0
                            let data = this.series[0].data
                            data.forEach(v => {
                                sum += v
                            })
                            if (name === '男性') {
                                return '男性：' + Math.ceil(data[0] / sum * 100) + '%'
                            } else if (name === '女性') {
                                return '女性：' + Math.ceil(data[1] / sum * 100) + '%'
                            } else {
                                return '未知：' + Math.ceil(data[2] / sum * 100) + '%'

                            }
                        }
                    },
                    series: []
                }
            }
        },
        methods: {
            init(newSeries) {
                let myChart = echarts.init(document.getElementById('rose'));
                let data = newSeries[0].data.map((v, i) => {
                    if (i === 0) {
                        return {name: '男性', value: v}
                    }
                    if (i === 1) {
                        return {name: '女性', value: v}
                    }
                    if (i === 2) {
                        return {name: '未知', value: v}
                    }
                })
                this.option.series = [{
                    type: 'pie',
                    roseType: 'area',
                    startAngle: -90,
                    label: {
                        show: false
                    },
                    center: ['30%','50%'],
                    labelLine: {
                        show: false
                    },
                    radius: ['30%', '60%'],
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
