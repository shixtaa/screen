<template>
    <div style="height: 100%;" id="rose">

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
                      text: '门店信息\r\n\n登录次数:',
                      top: 20,
                      right: 140,
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
                    color: ['#1654f5', '#e987b3'],
                    legend: {
                        orient: 'vertical',
                        right: 110,
                        top: 80,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12
                        },
                        itemWidth: 20,
                        itemHeight: 10,
                        itemGap: 20,
                        data: ['男性占比',"女性占比"],
                        formatter: (name) => {
                            if(name === '男性占比'){
                                return name+':'+this.series[0].data[0]
                            }else{
                                return name+':'+this.series[0].data[1]

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
                let sum = 0
                let data = newSeries[0].data.map((v, i) => {
                    sum += v
                    if (i === 0) {
                        return {name: '男性占比', value: v}
                    }
                    if (i === 1) {
                        return {name: '女性占比', value: v}
                    }
                })
                this.option.title.text += sum
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
