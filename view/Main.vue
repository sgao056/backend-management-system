<template>
    <el-container style="height:100%">
        <el-aside style="width:auto">
            <common-aside/>
        </el-aside>
        <el-container>
            <el-header style="background-color: black">
                <common-header/>
            </el-header>
                <common-tag/>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
            </el-footer>
        </el-container>
    </el-container>
</template>
<style>
    
</style>
<script>
    import commonAside from '../src/components/commonAside/aside.vue';
    import commonHeader from '../src/components/commonHeader/header.vue';
    import commonTag from '../src/components/commonTag/tag.vue';
    
    export default {
        name:"Main",
        components:{
            commonAside,
            commonHeader,
            commonTag
        },
        data(){
            return {}
        }
    }
</script>