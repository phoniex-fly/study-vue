<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/title.png">
        <span>用来练手的管理系统</span>
      </div>
      <el-button type="text" @click="logout" size="medium">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="asideWidth">
        <div class="toggle-button" @click="toggle" v-text="toggleVal"></div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#2b4b6b"
          text-color="#ffffff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          router><!--router 为侧边栏开启路由模式-->
          <el-submenu :index="'/'+first.path" v-for="first in firstLevelMenu" :key="first.menuId">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{first.menuName}}</span>
            </template>
            <el-menu-item :index="sec.path+''" v-for="sec in secLevelMenu(first)" :key="sec.menuId">
              <template>
                <i class="el-icon-location"></i>
                <span>{{sec.menuName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: [],
      isCollapse: false,
      asideWidth: '220px',
      toggleVal: '>'
    }
  },
  /* 页面加载时获取菜单，所以使用created函数 */
  created () {
    this.getMenuList()
  },
  computed: {
    firstLevelMenu () {
      var firstMenuList = this.menuList
      return firstMenuList.filter(firstMenu => {
        return firstMenu.menuType === 'M' && firstMenu.status === '0'
      })
    }
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList () {
      const { data: res } = await this.$http.get('/system/menu/list')
      console.log('res', res)
      if (res.code !== 200) {
        return this.$message.error(res.msg)
      }
      this.menuList = res.data
    },
    secLevelMenu (first) {
      var secMenuList = this.menuList
      return secMenuList.filter(secMenu => {
        return secMenu.parentId === first.menuId && secMenu.menuType !== 'F'
      })
    },
    toggle () {
      this.isCollapse = !this.isCollapse
      this.asideWidth = this.isCollapse ? '64px' : '220px'
      this.toggleVal = this.isCollapse ? '>' : '<<'
    }
  }
}
</script>

<style lang="less" scoped>
.home-container{
  height: 100%;
}
.el-header{
  background-color: #2b4b6b;
  box-shadow: 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  > div{
    display: flex;
    padding: 10px;
    span{
      display: flex;
      align-items: center;
      color: #ffffff;
      font-size: 25px;
      margin-left: 15px;
    }
  }
}
.el-main{
  display: flex;
  padding-right: 5px;
  padding-bottom: 5px;
  box-shadow: 20px 20px 20px;
}
.el-aside{
  background-color: #2b4b6b;
  box-shadow: 20px 10px 20px;
  .el-menu{
    border-right: none;
  }
}
.toggle-button{
  background-color: #2b616b;
  font-size: 10px;
  line-height: 24px;
  color: #ffffff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  /*box-shadow: 20px 0px 20px black inset;*/
}
</style>
