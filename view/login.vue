<template>
    <el-form
            :model="form"
            status-icon
            :rules="rules"
            ref="form"
            label-width="100px"
            class="login-container"
    >
        <h3 class="login_title">System login</h3>
        <el-form-item
        label="username"
        label-width="80px"
        prop="username"
        class="username"
        >
            <el-input
            type="input"
            v-model="form.username"
            auto-complete="off"
            placeholder="Please enter your username"
            ></el-input>
        </el-form-item>
        <el-form-item
        label="password"
        label-width="80px"
        prop="password"
        >
            <el-input
            type="password"
            v-model="form.password"
            auto-complete="off"
            placeholder="Please enter your password"
            ></el-input>
        </el-form-item>
        <el-form-item class="login_submit">
            <el-button type="primary" @click="login" class="login_submit">Login</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import {getMenu} from '../api/data'

export default {
    name:'login',
    data(){
        return {
            form:{},
            rules:{
                username:[
                    {required:true,message:"Username is required!",trigger:"blur"},
                    {
                        min:3,
                        message:"Username cannot less than 3 characters",
                        trigger:"blur"
                    }
                ],
                password:[
                    {
                        required:true,message:"Password is required!",trigger:"blur"
                    }
                ]
            },

        }
    },
    methods:{
        login(){
            getMenu(this.form).then(({data:res})=>{
                if(res.code===20000){
                    this.$store.commit('clearMenu')
                    this.$store.commit('setMenu',res.data.menu)
                    this.$store.commit('setToken',res.data.token)
                    this.$store.commit('addMenu',this.$router)
                    this.$router.push({name:'home'})
                }else{
                    this.$message.warning(res.data.message)
                }
            })
           
        }
    }
}
</script>
<style lang="less" scoped>
.login-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.login_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
.login_submit{
    margin: 10px auto 0 auto;

}
</style>