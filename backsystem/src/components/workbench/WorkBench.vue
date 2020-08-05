<template>
    <div id="WorkBench">
        <el-row class="marBottom20">
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
        <el-row class="marBottom20">
            <el-col id="quickenter" class="publicH2" :span="24">
               <h2>
                    <span>快捷入口</span>
                    <span class="float-r publicSet" @click="FuncustomOpen">自定义<i class="el-icon-setting"></i></span>
               </h2>
                <ul class="pageUl">
                    <li v-bind:style="{width:widthData}" v-for="(pageSelectedBtn,index) in pageSelectedBtns" :key="index">
                        <div class="bgDiv"></div>
                        <span>{{pageSelectedBtn}}</span>
                    </li>
                </ul>
            </el-col>
        </el-row>

        <el-row class="marBottom20" type="flex">
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
                        <i class="el-icon-setting" @click="FuntodolistSetOpen"></i>
                        <i class="el-icon-refresh-left" style="margin-left:10px;"></i>
                    </span>
                </h2>
                <el-table :data="tableData" style="width: 100%" :show-header="false">
                    <el-table-column label="姓名" width="430" min-width="430">
                        <template slot-scope="scope">
                            <el-tag size="medium">订单</el-tag>
                            {{ scope.row.msg }}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="">
                            <el-button  size="mini" type="text">去处理</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <el-row class="marBottom20" type="flex">
            <el-col id="bottomleft" class="publicH2" :span="16">
                <h2>
                     <el-dropdown trigger="click">
                        <span class="el-dropdown-link" style="color: #444444;font-weight: normal;font-size: 16px;">
                            新增潜客<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                     <span class="float-r"></span>
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
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                     <span class="float-r"></span>
                </h2>
                <div style="width:100%;height:265px;">
                    <ve-funnel :data="chartData1" height="265px" :legend-visible="false"></ve-funnel>
                </div>
            </el-col>
        </el-row>



        <el-dialog width="720px"
            :title="dialogCustom.title"
            :visible.sync="dialogCustom.isOpen"
            :close-on-click-modal="false">
            <p>温馨提示：工作台最多可添加<b style="font-size:16px;">11</b>个快捷功能</p>
            <ul class="addUl">
                <li v-for="(selectedBtn,index) in selectedBtns" :key="index">
                    <div class="bgiconDiv"><i class="bgiconI bgiconIDelete" @click="Fundeletedown(index)"></i></div>
                    <span>{{selectedBtn}}</span>
                </li>
            </ul>
            <p style="margin-top:20px;">选择您要添加的快捷入口</p>
            <ul class="deleteUl">
                <li v-for="(noSelectedbtn,index) in noSelectedbtns" :key="index">
                    <div class="bgiconDiv"><i class="bgiconI bgiconIAdd" @click="Funaddup(index)"></i></div>
                    <span>{{noSelectedbtn}}</span>
                </li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogCustom.isOpen = false">取 消</el-button>
                <el-button type="primary" @click="FunCustomConfirm">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog width="720px"
            :title="dialogTodolistSet.title"
            :visible.sync="dialogTodolistSet.isOpen"
            :close-on-click-modal="false">
            <p>这里插入表格</p>
            
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogTodolistSet.isOpen = false">取 消</el-button>
                <el-button type="primary" @click="FunTodolistConfirm">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
    export default {
        name:'WorkBench',
        data(){
            return {
                dialogCustom:{
                    title:"自定义快捷入口",
                    isOpen:false
                },
                dialogTodolistSet:{
                    title:"待办事项管理",
                    isOpen:false
                },

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


            FuncustomOpen(){
                this.dialogCustom.isOpen = true;
                this.selectedBtns = [...this.pageSelectedBtns];
                this.noSelectedbtns = [...this.noSelect]
            },
            Fundeletedown(index){
                this.noSelectedbtns.push(this.selectedBtns[index]);
                this.selectedBtns.splice(index,1)
            },
            Funaddup(index){
                if(this.selectedBtns.length >= 11){
                   this.$message('最多添加11个快捷功能');
                }else{
                    this.selectedBtns.push(this.noSelectedbtns[index]);
                    this.noSelectedbtns.splice(index,1);
                }
            },
            FunCustomConfirm(){
                this.pageSelectedBtns = [...this.selectedBtns];
                this.noSelect = [...this.noSelectedbtns];
                this.dialogCustom.isOpen = false;
                this.widthData = Math.round(100 / parseFloat(this.pageSelectedBtns.length) * 100) / 100.00 + "%";
            },

            FuntodolistSetOpen(){
                //这里请求后台数据填入弹窗表格
                this.dialogTodolistSet.isOpen = true;
            },
            FunTodolistConfirm(){

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
.marBottom20{
    margin-bottom: 20px;
}



#quickenter{
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
.addUl{
    padding: 10px 0;
    border-bottom: 1px solid #d5d5d5;
}
.addUl li{
    display: inline-block;
    margin: 15px 21px 10px 16px;
}
.bgiconDiv{
    width: 56px;
    height: 56px;
    background: url(../../assets/icons/earlywarning.png) no-repeat center;
    background-size: 40px 40px;
    position: relative;
}
.bgiconI{
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    position: absolute;
    top: 0;
    right: -3px;
    cursor: pointer;
}
.bgiconIDelete{
    background-image: url(../../assets/icons/deletedown.png);
}
.bgiconIAdd{
    background-image: url(../../assets/icons/addup.png);
}
.deleteUl{
    padding: 10px 0;
}
.deleteUl li{
    display: inline-block;
    margin: 15px 21px 10px 16px;
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
