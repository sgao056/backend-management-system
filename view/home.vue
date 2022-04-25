<template>
   <el-row class="home" :gutter="20">
       <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
            <div class="user">
                <img :src="userImg"/>
                <div class="userinfo">
                  <p class="name">admin</p>
                  <p class="access">Superb administer</p>
                </div>
            </div>
            <div class="login-info">
                <p>Last login time: <span>2022-04-06</span></p>
                <p>Last login place: <span>Toronto, Ontario</span></p>
            </div>
        </el-card>
        <el-card style="margin-top: 20px;">
            <el-table :data="tableData">
                <el-table-column 
                v-for="(val,key) in tableLabel" 
                :key="key"
                :prop="key"
                :label="val"></el-table-column>
            </el-table>
        </el-card>
       </el-col>
       <el-col :span="16">
        <div class="num">
            <el-card 
            style="margin-top:20px"
            v-for="item in countData"
            :key="item.name"
            :body-style="{display:'flex', padding:0}"
            >
                <i class="icon" :class="`el-icon-${item.icon}`" :style="{backgroundColor: item.color}"></i>
                <div class="detail">
                    <p class="num" style="margin-left:80px">{{item.value}}</p>
                    <p class="txt">{{item.name}}</p>
                </div>
            </el-card>
            <el-card style="width:100%; height:30vh">
                <div style="height:30vh" ref="echarts"></div>
            </el-card>
            <div class="graph">
                <el-card style="height:300px">
                    <div style="height:300px" ref="userEcharts"></div>
                </el-card>
                <el-card  style="height:300px">
                    <div style="height:280px" ref="videoEcharts"></div>
                </el-card>
            </div>
        </div>
       </el-col>
   </el-row>
</template>
<script>
    import * as echarts from 'echarts'
    import tableData from './data/home-tableData.js'
    import countData from './data/home-countData.js'
    import {getData} from '../api/data.js'
    export default {
        name:"home",
        data(){
            return {
                userImg: require('../src/assets/images/guest-user.jpg'),
                tableData: tableData,
                tableLabel:{
                    name:'name',
                    todayPurchase:'Today purchase',
                    monthlyPurchase:'Monthly purchase',
                    totalPurchase:'Total purchase'
                },
                countData:countData,
            }
        },
        mounted(){
            getData().then(res=>{
                const {code, data} = res.data
                if(code === 20000){
                    this.tableData = data.tableData
                    //line chart
                    const order = data.orderData
                    const keyArray = Object.keys(order.data[0])
                    const series = []
                    const xData = order.date
                    keyArray.forEach(key=>{
                        series.push({
                            name:key,
                            data:order.data.map(item=>item[key]),
                            type:'line'
                        })
                    })
                    const option={
                        tooltip: {
                            trigger: "axis",
                        },
                        xAxis:{
                            data:xData
                        },
                        yAxis:{},
                        legend:{
                           data:keyArray
                        },
                        series
                    }
                    const EC =  echarts.init(this.$refs.echarts)
                    EC.setOption(option)

        
                    const userOption = {
                        legend: {
                            textStyle: {
                            color: "#333",
                            },
                        },
                        grid: {
                            left: "20%",
                        },
                        
                        tooltip: {
                            trigger: "axis",
                        },
                        xAxis: {
                            type: "category", 
                            data: data.userData.map(item=>item.date),
                            axisLine: {
                                lineStyle: {
                                    color: "#17b3a3",
                                },
                            },
                            axisLabel: {
                                interval: 0,
                                color: "#333",
                            },
                        },
                        yAxis: [
                            {
                            type: "value",
                            axisLine: {
                                lineStyle: {
                                color: "#17b3a3",
                                },
                            },
                            },
                        ],
                        color: ["#2ec7c9", "#b6a2de"],
                        series: [
                            {
                                name:'new user',
                                data:data.userData.map(item =>item.new),
                                type:'bar'
                            },
                            {
                                name:'active user',
                                data:data.userData.map(item =>item.active),
                                type:'bar'
                            }
                        ],
                    }
                    const uEC =  echarts.init(this.$refs.userEcharts)
                    uEC.setOption(userOption)

                    //pie chart
                    const videoOption={
                        tooltip: {
                            trigger: "item",
                        },
                        color: [
                            "#0f78f4",
                            "#dd536b",
                            "#9462e5",
                            "#a6a6a6",
                            "#e1bb22",
                            "#39c362",
                            "#3ed1cf",
                        ],
                        series: [
                            {
                                data:data.videoData,
                                type:'pie'
                            }
                        ],
                    }
                    const vEC= echarts.init(this.$refs.videoEcharts)
                    vEC.setOption(videoOption)

                }
            })
        }
    }
</script>