<template>
  <div>
    <!-- 列表 -->
    <el-table :data="studentList" >
      <el-table-column prop="sid" label="编号" width="150"></el-table-column>
      <el-table-column prop="sname" label="姓名" width="150"></el-table-column>
      <el-table-column prop="gender" label="性别" width="150"></el-table-column>
      <el-table-column prop="age" label="年龄" width="150"></el-table-column>
    </el-table>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      studentList: [
        {
          sid: 's001',
          sname: '张三',
          gender: '男',
          age: 18
        },
        {
          sid: 's002',
          sname: '李思',
          gender: '女',
          age: 21
        }
      ]
    }
  }
}
</script>
 
<style>
 
</style>
