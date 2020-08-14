<template>
   <div id="PublicpoolList">
      <el-row class="margin-bottom10">
            <el-col :span="12">
                  <el-input
                     v-model="serachTxt"
                     clearable
                     placeholder="姓名、昵称、联系方式"
                     class="el-input-width margin-right10 float-l"
                     size="mini"
                  >
                     <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                  <el-date-picker 
                        v-model="dateTxt"
                        type="daterange"
                        size="mini"
                        :editable="false"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        :picker-options="this.defaultCheckDate">
                  </el-date-picker>
            </el-col>
            <el-col :span="12">
                  <el-button class="float-r margin-left10" type="primary" plain size="mini" icon="el-icon-more-outline">导出潜客</el-button>
                  <el-button class="float-r" type="primary" plain size="mini" icon="el-icon-user">导入潜客</el-button>
                  <el-button class="float-r" type="primary" plain size="mini" icon="el-icon-s-operation">公池设置</el-button>
            </el-col>
      </el-row>
      <el-row class="margin-bottom15">
         <el-col :span="24">
               <el-dropdown trigger="click" placement="bottom" class="margin-right10">
                     <span class="el-dropdown-link">
                           状态
                           <i class="el-icon-arrow-down el-icon--right"></i>
                     </span>
                     <el-dropdown-menu slot="dropdown">
                           <el-dropdown-item>黄金糕</el-dropdown-item>
                     </el-dropdown-menu>
               </el-dropdown>
               <el-dropdown trigger="click" placement="bottom" class="margin-right10">
                     <span class="el-dropdown-link">
                           销售
                           <i class="el-icon-arrow-down el-icon--right"></i>
                     </span>
                     <el-dropdown-menu slot="dropdown">
                           <el-dropdown-item>黄金糕</el-dropdown-item>
                     </el-dropdown-menu>
               </el-dropdown>
               <el-dropdown trigger="click" placement="bottom" class="margin-right10">
                     <span class="el-dropdown-link">
                           采单员
                           <i class="el-icon-arrow-down el-icon--right"></i>
                     </span>
                     <el-dropdown-menu slot="dropdown">
                           <el-dropdown-item>黄金糕</el-dropdown-item>
                     </el-dropdown-menu>
               </el-dropdown>
               <el-button type="text" plain size="mini" class="margin-left10">
                     重置
                     <i class="el-icon-refresh-left"></i>
               </el-button>
         </el-col>
      </el-row>
      <el-row class="margin-bottom15">
         <el-col :span="24">
               <el-table :data="tableData" @selection-change="FunTableCheck" row-key="id" 
                     highlight-current-row
                     :fit="true"
                     size="small"
                     :header-cell-style="{background:'#eef1f6',color:'#606266'}">
                     
               <el-table-column fixed align="center" type="selection" width="45">

               </el-table-column>

               <el-table-column fixed label="姓名" width="80">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>

               <el-table-column fixed label="联系方式" width="120">
                  <template slot-scope="{row}">
                  <span>{{ row.date }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="意向度" width="110">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>
               <el-table-column label="意向度" width="110">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>
               <el-table-column label="意向度" width="110">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="意向课程" min-width="150">
                  <template slot-scope="{row}">
                  <span>{{ row.address }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="顾问" width="80">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="最近跟进时间" width="180">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="最近跟进记录" width="180">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="下次跟进时间" width="180">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="跟进状态" width="130">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="学员类型" width="80">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>

               <el-table-column label="录入时间" width="120">
                  <template slot-scope="{row}">
                  <span>{{ row.name }}</span>
                  </template>
               </el-table-column>
               

               <el-table-column fixed="right" align="center" width="175">
                  <template slot="header" slot-scope="{}">
                     <el-button type="text">自定义显示列<i class="el-icon-edit el-icon--right"></i></el-button>
                  </template>
                  <template slot-scope="{}">
                     <el-button size="mini" type="text">领取</el-button>
                     <el-button size="mini" type="text">分配</el-button>
                     <el-button size="mini" type="text">删除</el-button>
                  </template>
               </el-table-column>
            </el-table>
         </el-col>
      </el-row>
      <el-row>
         <el-col :span="12">
               <span class="float-l margin-right10" style="line-height:28px;">已选中<strong style="color:red;"> 0 </strong>个</span>
               <el-button class="float-l" type="warning" size="mini" plain>批量领取</el-button>
               <el-button class="float-l" type="warning" size="mini" plain>批量分配</el-button>
               <el-button class="float-l" type="warning" size="mini" plain>批量删除</el-button>
         </el-col>
         <el-col :span="12">
               <el-pagination
                  :current-page="currentData.currentPage"
                  small
                  background
                  :page-sizes="[5, 10, 15, 20]"
                  :page-size="5"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="currentData.currentTotal"
               ></el-pagination>
         </el-col>
      </el-row>

   </div>
</template>
<script>
   import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

   export default {
      nema:'PublicpoolList',
      data(){
         return{
            serachTxt:'',
            dateTxt:[],
            tableData: [
                  {date: "2016-05-02",name: "王小虎", address: "上海市普陀区金沙江路", },
                  {date: "2016-05-04",name: "王小虎", address: "上海市普陀区金沙江路", }
            ],
            table_checked:[],
            currentData:{
                  currentPage: 1,
                  currentTotal:500,
            }
         }
      },
      computed:{
         ...mapState(['defaultCheckDate'])
      },
      methods:{
         FunTableCheck(val) {
               console.log(val)
               this.table_checked = val;
         },
      }
   }
</script>
<style scoped>

</style>