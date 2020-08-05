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
        <el-row>
            <el-col class="minH170 publicH2" :span="24">
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
        <el-row>
            <el-col :span="16">
                <div class=""></div>
            </el-col>
            <el-col :span="8">
                <div class=""></div>
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
                widthData:'',
                pageSelectedBtns:[],
                selectedBtns:[],
                noSelectedbtns:[],
                noSelect:[],
            }
        },
        methods:{
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
 .el-row{
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

.minH170{
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
</style>