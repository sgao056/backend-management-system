<template>
  <header>
    <div class="l-content">
      <el-button @click="handleCollapse" plain icon="el-icon-menu" size="mini"></el-button>
      <el-breadcrumb style="margin-left:20px;" separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{path:item.path}">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" class="user"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">Profile</el-dropdown-item>
          <el-dropdown-item 
          command="b"
          @click.native="logOut">Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  el-button {
    margin: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
<script>
import {mapState} from 'vuex'
export default {
  name: "commenHeader",
  data() {
    return {
      userImg: require("../../assets/images/guest-user.jpg"),
    };
  },
  methods:{
    handleCollapse(){
      this.$store.commit('collapseMenu')
    },
    logOut(){
            this.$store.commit('clearToken')
            this.$store.commit('clearMenu')
            this.$router.push('/login')
    }
  },
  computed:{
    ...mapState({
      tags: state => state.tab.tabList
    })
  }
};
</script>
