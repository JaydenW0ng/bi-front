<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">数据集</template>
        </el-submenu>
        <el-menu-item index="3">数据源</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
      <div class="line"></div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <div>
          <div style="margin: 1px;">
            <span style="margin: 1px;">数据集</span>
            <el-button type="text" @click="outerVisible = true">添加分组
              <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
                <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
                </el-dialog>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="outerVisible = false">取 消</el-button>
                  <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
                </div>
              </el-dialog>
              <el-divider></el-divider>
            </el-button>
          </div>
        </div>

        <!-- 搜索框 -->
        <!-- <div>
          <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容"
            @select="handleSelect"></el-autocomplete>
        </div> -->

        <!-- 带搜索的树形 -->
        <div>
          <el-input placeholder="输入关键字查找" v-model="filterText">
          </el-input>
          <div id="parent">
            <el-tree  @node-click="handleNodeClick">
              <AsideTree ref="AsideTreeRef"></AsideTree>
            </el-tree>
            
          </div>
        </div>
      </el-aside>

      <el-container>
        <el-main>
          <div>
            <span style="margin: 1px; height: 300px;">请从左侧选择表</span>
          </div>
        </el-main>
        
      </el-container>
      <el-footer>twiceuncle</el-footer>
    </el-container>
  </el-container>
</template>
 
<script>
import DatasetAsideTree from "C:/Users/DLL/bi-front/src/views/Dataset/DatasetAsideTree.vue";

export default {
  methods: {
    handleNodeClick() {
      this.$refs.DatasetAsideTree.select();
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    DatasetAsideTree
  }
}


</script>

<style>
/* .el-header{
      background-color: #070b0f;
      display: flex;
      color: rgb(129, 51, 51);
      text-align: center;
      line-height: 80px;
    } */
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 260px;
}

.el-aside {
  background-color: #e9eef5;
  color: #333;
  text-align: center;
  /* line-height: 80px; */
}

/* .el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 200px;
} */

/* body>.el-container {
  margin-bottom: 40px;
} */

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
} */
/* 
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style> 