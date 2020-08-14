<template>
    <div id="todolist">
        <el-dialog width="720px" :title="dialogTodolistSet.title" :visible.sync="dialogTodolistSet.isOpen" :close-on-click-modal="false">

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
        name:'todolist',
        props:{
            circleUrl:{
                type:String
            }
        },
        data(){
            return{
                dialogTodolistSet:{
                    isOpen:false,
                    title:'待办事项管理'
                }
            }
        },
        methods:{
            FunTodolistConfirm(){

            }
        }
    }
</script>
<style scoped>

</style>