<template>
    <div id="quickenter">
        <el-dialog width="720px" :title="dialogCustom.title" :visible.sync="dialogCustom.isOpen" :close-on-click-modal="false">
           
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
        name:'quickenter',
        props:{
            selectedBtns:{
                type:Array
            },
            noSelectedbtns:{
                type:Array
            }

        },
        data(){
            return{
                dialogCustom:{
                    title:"自定义快捷入口",
                    isOpen:false
                },
            }
        },
        methods:{
            Fundeletedown(index){
                this.$parent.noSelectedbtns.push(this.$parent.selectedBtns[index]);
                this.$parent.selectedBtns.splice(index,1)
            },
            Funaddup(index){
                if(this.$parent.selectedBtns.length >= 11){
                   this.$message('最多添加11个快捷功能');
                }else{
                    this.$parent.selectedBtns.push(this.$parent.noSelectedbtns[index]);
                    this.$parent.noSelectedbtns.splice(index,1);
                }
            },
            FunCustomConfirm(){
                this.$parent.pageSelectedBtns = [...this.$parent.selectedBtns];
                this.$parent.noSelect = [...this.$parent.noSelectedbtns];
                this.dialogCustom.isOpen = false;
                this.$parent.widthData = Math.round(100 / parseFloat(this.$parent.pageSelectedBtns.length) * 100) / 100.00 + "%";
            },
        }
    }
</script>
<style scoped>
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