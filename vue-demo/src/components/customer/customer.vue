<template>
  <div class="customer">
    <el-card class="box-card">
      <el-row>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>客户管理</el-breadcrumb-item>
          <el-breadcrumb-item>客户视图</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <div class="customer-area">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-input placeholder="请输入内容" v-model="queryInfo.query" class="input-with-select" clearable>
              <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary">添加用户</el-button>
          </el-col>
        </el-row>

        <el-table :data="userList" border stripe max-height="500px">
          <el-table-column type="index"></el-table-column>
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="手机号码" prop="phone" width="100px"></el-table-column>
          <el-table-column label="性别" prop="gender"></el-table-column>
          <el-table-column label="年龄" prop="age"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
          <el-table-column label="生日" prop="birth" width="100"></el-table-column>
          <el-table-column label="证件号码" prop="cardType"></el-table-column>
          <el-table-column label="公司" prop="company"></el-table-column>
          <el-table-column label="昵称" prop="wechatName" width="100px"></el-table-column>
          <el-table-column label="创建时间" prop="createTime" width="150px"></el-table-column>
          <el-table-column label="状态" prop="createTime">
            <template slot-scope="scope">
              <!--{{scope.row}}}-->
              <el-switch v-model="scope.row.idType"></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300px">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="dark" content="编辑" placement="top" :enterable="false">
                <el-button type="primary" icon="el-icon-edit" v-model="scope.row.id" size="mini"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="分享" placement="top" :enterable="false">
                <el-button type="primary" icon="el-icon-share" v-model="scope.row.id" size="mini"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="删除" placement="top" :enterable="false">
                <el-button type="primary" icon="el-icon-delete" v-model="scope.row.id" size="mini"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="搜索" placement="top" :enterable="false">
                <el-button type="primary" icon="el-icon-search" v-model="scope.row.id" size="mini"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="上传" placement="top" :enterable="false">
                <el-button type="primary" icon="el-icon-upload" v-model="scope.row.id" size="mini"></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pageNum"
          :page-sizes="[1, 2, 5, 10]"
          :page-size="queryInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      queryInfo: {
        query: '',
        pageNum: 1,
        pageSize: 10
      },
      userList: [],
      total: 0
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    async getUserList () {
      const { data: res } = await this.$http.get('/wisdom/clue/list', { params: this.queryInfo })
      console.log(res)
      if (res.code !== 200) {
        return this.$message.error('数据获取失败')
      }
      this.userList = res.rows
      this.total = Number(res.total)
    },
    handleSizeChange (newSize) {
      this.queryInfo.pageSize = newSize
      this.getUserList()
    },
    handleCurrentChange (newPage) {
      this.queryInfo.pageNum = newPage
      this.getUserList()
    }
  }
}
</script>

<style scoped>
.customer{
  width: 100%;
}
.customer-area{
  padding-left: 10px;
}
</style>
