<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="7">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
    </el-card>

    <el-table
      :data="userLists"
      border stripe>
      <el-table-column type="index"></el-table-column>
      <el-table-column
        prop="username"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="rolename"
        label="角色">
      </el-table-column>
      <el-table-column
        prop="mg_state"
        label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="操作" width="250px">
        <template>
          <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
          <el-tooltip effect="dark" content="角色分配" placement="top" :enterable="false">
            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        queryInfo: {
          query: '',
          pagenum: 1,
          pagesize: 2
        },
        userLists: [],
        total: 0
      }
    },
    created () {
      this.getUserList()
    },
    methods: {
      async getUserList () {
        const { data: res } = await this.$http.get('/user', { params: this.queryInfo })
        if (res.meta.status !== 200) {
          return this.$notify.error({
            title: res.meta.msg
          })
        }
        this.userLists = res.data.users
        this.total = res.data.total
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
