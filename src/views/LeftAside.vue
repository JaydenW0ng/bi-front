<!-- <template>
  <div>
   <el-button  v-show="isCollapse" style="margin:auto 0px auto 0px;border: 0px; margin: 10px;}" size="small" icon="el-icon-s-unfold" @click="toggleLeftDrawer"></el-button>
   <el-button  v-show = "!isCollapse" style="margin:auto 0px auto 0px;border: 0px; margin: 10px;}" size="small" icon="el-icon-s-fold" @click="toggleLeftDrawer"></el-button>

    <el-container class="grid-content bg-purple-light">

      <el-aside :width="isCollapse?'70px':'200px'" >
        <el-menu
            default-active=""
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose">
          <el-menu-item index="1" >
            <i class="el-icon-files"></i>
            <span slot="title">数据集</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-data-analysis"></i>
            <span slot="title">维度</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-data-line"></i>
            <span slot="title">指标</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isCollapse:false,
    }
  },
  methods:{
    toggleLeftDrawer(){
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style>


</style> -->