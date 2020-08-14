<template>
    <div id="WorkBench">
        <el-row class="margin-bottom15">
            <el-col class="minH135" :span="24">
                <el-col class="pdright10" :span="8">
                    <img class="imgC" src="https://cdn.yizhiniao.com/oa_admin_1595054064302_picture" alt="">
                </el-col>
                <el-col class="pdright10" :span="8">
                    <img class="imgC" src="https://cdn.yizhiniao.com/oa_admin_1592912702867_picture" alt="">
                </el-col>
                <el-col class="pdright10" :span="8">
                    <img class="imgC" src="https://cdn.yizhiniao.com/oa_admin_1581490407062_picture" alt="">
                </el-col>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15">
            <el-col id="quickenters" class="publicH2" :span="24">
               <h2>
                    <span>快捷入口</span>
                    <span class="float-r publicSet" @click="openCustom">自定义
                      <i class="el-icon-setting"></i>
                    </span>
               </h2>
                <ul class="pageUl">
                    <li v-bind:style="{width:widthData}" v-for="(pageSelectedBtn,index) in pageSelectedBtns" :key="index">
                        <div class="bgDiv"></div>
                        <span>{{pageSelectedBtn}}</span>
                    </li>
                </ul>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15" type="flex">
            <el-col id="centerleft" class="publicH2" :span="16">
                <h2>
                    <span>数据汇总
                        <i style="margin-left:10px;cursor:pointer;" class="el-icon-view"></i>
                    </span>
                    <span class="float-r">
                        <span class="datatab" @click="FunChangedate(1)">今天</span>
                        <span class="datatab" @click="FunChangedate(2)">本周</span>
                        <span class="datatab" @click="FunChangedate(3)">本月</span>
                    </span>
               </h2>
                <el-row style="height:114px">
                    <el-col class="centerleftcol" :span="12">
                        <span class="txtC">新增潜客</span>
                        <strong class="numC">0</strong>
                    </el-col>
                    <el-col class="centerleftcol" :span="12">
                        <span class="txtC">报课金额</span>
                        <strong class="numC">￥1600.00</strong>
                    </el-col>
                </el-row>
                <el-row style="height:114px">
                    <el-col class="centerleftcol" :span="12">
                        <span class="txtC">消课课时</span>
                        <strong class="numC">10</strong>
                    </el-col>
                    <el-col class="centerleftcol" :span="12">
                        <span class="txtC">消课金额</span>
                        <strong class="numC">￥84.90</strong>
                    </el-col>
                </el-row>
            </el-col>

            <el-col id="centerright" class="publicH2" :span="8">
                <h2>
                    <span>待办事项</span><span class="todobadge">99+</span>
                    <span class="float-r" style="cursor:pointer;">
                        <i class="el-icon-setting" @click="openTodolistSet"></i>
                        <i class="el-icon-refresh-left" style="margin-left:10px;"></i>
                    </span>
                </h2>

                <el-table :data="tableData" style="width: 100%" :show-header="false">
                    <el-table-column label="姓名">
                        <template slot-scope="scope">
                            <el-tag size="medium">订单</el-tag>
                            {{ scope.row.msg }}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="60px">
                        <template slot-scope="">
                            <el-button  size="mini" type="text">去处理</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <el-row class="margin-bottom15" type="flex">
            <el-col id="bottomleft" class="publicH2" :span="16">
                <h2>
                     <el-dropdown trigger="click">
                        <span class="el-dropdown-link" style="color: #444444;font-weight: normal;font-size: 16px;">
                            新增潜客<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </h2>
                <div style="width:100%;height:265px;">
                    <ve-line :data="chartData" height="265px" :legend-visible="false"></ve-line>
                </div>

            </el-col>

            <el-col id="bottomright" class="publicH2" :span="8">
                <h2>
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link" style="color: #444444;font-weight: normal;font-size: 16px;">
                            销售漏斗图<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </h2>
                <div style="width:100%;height:265px;">
                    <ve-funnel :data="chartData1" height="265px" :legend-visible="false"></ve-funnel>
                </div>
            </el-col>
        </el-row>

        <todolistset :selectedBtns="selectedBtns" :noSelectedbtns="noSelectedbtns" ref="todolistset"></todolistset>
        <quickenter :selectedBtns="selectedBtns" :noSelectedbtns="noSelectedbtns" ref="quickenter"></quickenter>
    </div>
</template>
<script>
    import todolistset from '../../dialog/workbench/todolistset'
    import quickenter from '../../dialog/workbench/qiuckenter'
    export default {
        name:'WorkBench',
        components:{
            todolistset,
            quickenter
        },
        data(){
            return {
               

                widthData:'',          //根据浏览器宽度自定义模块宽度

                pageSelectedBtns:[],
                selectedBtns:[],
                noSelectedbtns:[],
                noSelect:[],

                tableData: [{
                        msg: '欠费待补缴：3元',
                    }, {
                        msg: '欠费待补缴：3元',
                    }, {
                        msg: '欠费待补缴：3元',
                    }, {
                        msg: '欠费待补缴：3元',
                }],
                chartData: {
                    columns: ['日期', '新增潜客'],
                    rows: [
                        { '日期': '2020-07-23', '新增潜客': 0 },
                        { '日期': '2020-07-27', '新增潜客': 0 },
                        { '日期': '2020-07-30', '新增潜客': 5 },
                        { '日期': '2020-08-01', '新增潜客': 6 },
                        { '日期': '2020-08-04', '新增潜客': 1 }
                    ]
                },
                chartData1: {
                    columns: ['状态', '数值'],
                    rows: [
                        { '状态': '展示', '数值': 900 },
                        { '状态': '访问', '数值': 600 },
                        { '状态': '点击', '数值': 300 },
                        { '状态': '订单', '数值': 100 }
                    ]
                },
            }
        },
        methods:{
            FunChangedate(n){
                console.log(n)
            },
            openCustom(){
                this.$refs.quickenter.dialogCustom.isOpen = true
                this.selectedBtns = [...this.pageSelectedBtns]
                this.noSelectedbtns = [...this.noSelect]
            },
            openTodolistSet(){
                this.$refs.todolistset.dialogTodolistSet.isOpen = true;
            }
        },
        created:function(){
            //获取数据，将data放入
            this.pageSelectedBtns = ["新增潜客", "续费预警","今日来访","新生报名", "学员请假","快速排课", "课表管理", "上课记录", "通知管理", "订单管理","收支明细"];
            this.noSelect = [];  //获取数据后，添加为选中快捷方式
            this.widthData = Math.round(100 / parseFloat(this.pageSelectedBtns.length) * 100) / 100.00 + "%";
        }
    }
</script>
<style scoped>
 .el-col{
   background: #ffffff;
 }

.minH135{
    min-width: 930px;
    min-height: 135px;
}
.pdright10{
    padding: 10px 10px;
    max-height: 245px;
    min-height: 135px;
}
.imgC{
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
}

#quickenters{
    height: 170px;
    padding: 0 20px;
}
.publicH2 h2{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ebebeb;
    text-align: left;
    line-height: 50px;
    color: #444444 !important;
    font-weight: normal;
    font-size: 16px;
}
.publicH2 .publicSet{
    font-size: 12px;
    color: #858585;
    cursor: pointer;
}
.pageUl {
    width: 100%;
    height: 79px;
    padding: 20px 0;
}
.pageUl li{
    margin: 0 auto;
    display: inline-block;
    text-align: center;
}
.pageUl li .bgDiv{
    width: 56px;
    height: 56px;
    background: url(../../assets/icons/earlywarning.png) no-repeat center;
    background-size: 40px 40px;
    margin: 0 auto;
    cursor: pointer;
}
.pageUl li span{
    display: block;
    width: 100%;
    text-align: center;
    padding-top: 5px;
    cursor: pointer;
}





#centerleft{
    height: 280px;
    padding: 0 20px;
    margin-right: 20px;
}
.datatab{
    display: inline-block;
    font-size: 12px;
    margin-left: 25px;
    height: 48px;
    color: #949494;
    cursor: pointer;
    border-bottom: 2px solid #f5787c;
}

.centerleftcol{
    height: 114px;
    line-height: 114px;
    text-align: left;
}
.txtC{
    color: #999999;
    font-size: 14px;
    margin-right: 20px;
}
.numC{
    font-size: 34px;
    color: #444444;
}










#centerright{
    padding: 0 20px;
    height: 280px;
}
.todobadge{
     padding: 0 8px;
     border-radius:8px;
     background-color:#ff6e72;
     margin-left: 5px;
     color: #ffffff;
}

#centerright .el-scrollbar__wrap{
  overflow-x: scroll!important;
}


#bottomleft{
    padding: 0 20px;
    height: 316px;
    margin-right: 20px;
}




#bottomright{
    padding: 0 20px;
    height: 316px;
}
</style>
