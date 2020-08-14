<template>
    <div id="PotentialGL" class="outercss">
        <el-tabs v-model="tabs_active" type="card" @tab-click="FunTabClick">
            <el-tab-pane label="潜客" name="first">
                <potentiallist></potentiallist>
            </el-tab-pane>
            <el-tab-pane label="公池" name="second">
                <publicpoollist></publicpoollist>
            </el-tab-pane>
        </el-tabs>

        <el-dialog width="480px" title="自定义显示列" :visible.sync="dialogShowcol.isOpen">
                <el-checkbox-group v-model="checkedCustom" @change="FunCustomChange">
                    <el-checkbox v-for="custom in customs" :label="custom" :key="custom" style="width:180px;margin-bottom:10px;">{{custom}}</el-checkbox>
                </el-checkbox-group>
                <span slot="footer" class="dialog-footer">
                    <el-checkbox class="float-l" :indeterminate="isIndeterminate" v-model="checkAll" @change="FunCheckAllChange">全选</el-checkbox>
                    <el-button @click="dialogShowcol.isOpen = false">取 消</el-button>
                    <el-button type="primary" @click="dialogShowcol.isOpen = false">确 定</el-button>
                </span>
        </el-dialog>


    </div>
</template>
<script>
    import potentiallist from './PotentialList'
    import publicpoollist from './PublicpoolList'

    const customOptions = ['年龄', '意向度', '意向课程', '顾问','最近跟进时间','最近跟进记录','下次跟进时间','跟进状态','学员类型'];
    export default {
        name:"PotentialGL",
        components:{
            potentiallist,
            publicpoollist
        },
        data(){
            return{
                tabs_active:"first",
                dialogShowcol:{
                    isOpen:false
                },
                checkAll: false,
                checkedCustom: [],
                customs: customOptions,
                isIndeterminate: false,
            }
        },
        methods:{
            FunTabClick(tab, event){
                console.log(tab,event)
            },
            FunCheckAllChange(val) {
                this.checkedCustom = val ? customOptions : [];
                this.isIndeterminate = false;
            },
            FunCustomChange(val) {
                let checkedCount = val.length;
                this.checkAll = checkedCount === this.customs.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.customs.length;
            }

        }
    }
</script>
<style scoped>
</style>