<template>
    <div style="height: 100%;position:relative;">

        <div class="radios">
            <ul>
                <li :class="{active: type === 1}" @click="handleChangeType(1)">今日</li>
                <li :class="{active: type === 2}" @click="handleChangeType(2)">昨日</li>
                <li :class="{active: type === 3}" @click="handleChangeType(3)">本周</li>
                <li :class="{active: type === 4}" @click="handleChangeType(4)">本月</li>
            </ul>
        </div>
        <div style="height: 100%;" id="inout">

        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props: {
            series: Array,
            type: Number
        },
        data() {
            return {
                option: {
                    color: ['#04cdf4', '#6259ff'],
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
                        left: 0,
                        orient: 'horizontal',
                        itemHeight: 10,
                        itemGap: 5,
                        textStyle: {
                            color: '#fff',
                            fontSize: 10
                        },
                        symbol: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['00:00', '03:00', '06:00', '09:00', '00:00', '12:00', '15:00', '18:00'],
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
                            max: 800,
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
            init(newSeries) {
                let myChart = echarts.init(document.getElementById('inout'));
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
                            color: 'rgba(28,131,137,.45)'
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
                            color: 'rgba(106,39,181,.45)'
                        }, {
                            offset: 1,
                            color: 'rgba(106,39,181,0)'
                        }])
                    }
                }
                this.option.series = series
                myChart.setOption(this.option)
            },
            handleChangeType(type) {
                this.$emit('update:type', type)
                this.$emit('change', type)
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

<style lang="scss" scoped>
    .radios {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;

        ul {
            display: flex;

            li {
                flex: 1;
                color: #fff;
                margin-right: 10px;
                cursor: pointer;
                &.active {
                    color: #04cdf4;
                }
            }
        }
    }
</style>
