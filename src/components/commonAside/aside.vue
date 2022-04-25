<template>
    <el-menu 
    default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    @open="handleOpen" 
    @close="handleClose" 
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
      <div 
      style=
      "height:50px; 
      justify-content:center;
      align-items: center;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 20px;
      font-weight: 800;
      display: flex; 
      color:#fff">
        <h3>
          {{!isCollapse ? 'Backend managment system':'BMS'}}
        </h3>
      </div>  
        <el-menu-item 
        @click="clickMenu(item)"
        v-for="item in noChildren" 
        :index="item.path+''" 
        :key="item.path">
          <i :class="'el-icon-'+item.icon"></i>  
          <span slot="title">{{item.label}}</span>
        </el-menu-item>

        <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
          <template slot="title">  
            <i :class="'el-icon-'+item.icon"></i>
            <span slot="title">{{item.label}}</span>
          </template>
          <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
            <el-menu-item @click="clickMenu(subItem)" :index="subIndex+''">
              <i :class="'el-icon-'+subItem.icon"></i>
              {{subItem.label}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
  }
  .el-menu-vertical-demo{
    min-height:100vh;
    height: 100%;
    border:0;
  }
</style>
  
<script>
  import menu from './NavData.js'
  export default {
    data() {
      return {
        menu: menu
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({name:item.name})
        this.$store.commit('selectMenu',item)
      }
    },
    computed:{
      noChildren(){
        return this.asyncMenu.filter(item=>!item.children)
      },
      hasChildren(){
        return this.asyncMenu.filter(item=>item.children)
      },
      isCollapse(){
        return this.$store.state.tab.isCollapse
      },
      asyncMenu(){
        return this.$store.state.tab.menu
    }
    }
  }
</script>