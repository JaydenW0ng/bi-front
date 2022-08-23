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
          <div style="margin: 1px;">
            <span style="margin: 1px;">数据集</span>
            <!-- <div style="margin: 10px;">
              <el-button type="text" @click="dialogFormVisible = true">添加分组</el-button>

              <el-dialog title="分组" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="分组名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            </div> -->
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

          <el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all
            :filter-node-method="filterNode" ref="tree">
            <div>
              <el-button-group style="margin: 1px">
                <el-button size="mini" type="primary" icon="el-icon-edit" style="margin: 1px">
                  <el-dropdown size="mini" type="primary">
                    <span class="el-dropdown-link">
                      下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>数据库数据集</el-dropdown-item>
                      <el-dropdown-item>SQL数据集</el-dropdown-item>
                      <el-dropdown-item>excel数据集</el-dropdown-item>
                      <el-dropdown-item>clickhouse数据集</el-dropdown-item>
                      <el-dropdown-item>API</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>

                </el-button>
                <el-button size="mini" type="primary" icon="el-icon-share"></el-button>
                <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
              </el-button-group>
            </div>

          </el-tree>
        </div>
      </el-aside>

      <el-container>
        <el-main>
          <div>
            <span style="margin: 1px; height: 30px;">数据集name</span>
            <el-divider></el-divider>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">数据预览</el-menu-item>
              <el-menu-item index="2">字段管理</el-menu-item>
              <el-menu-item index="3">数据关联</el-menu-item>
              <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
            </el-menu>
            <div class="line"></div>
          </div>
        </el-main>
        <el-footer>twiceuncle</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
 
<script>
export default {
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },

      dialogFormVisible: false,
      formLabelWidth: '120px',
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
};

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

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 2px;
}
</style> 