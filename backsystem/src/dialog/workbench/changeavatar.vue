<template>
    <div id="changeavatar">
        <el-dialog title="更换头像" :visible.sync="dialogVisible" width="320px">
            
            <div style="width:95px;height:95px;margin:0 auto;margin-bottom:50px;">   
                <el-avatar class="float-l" style="margin:10px 3px 0 0;" :size="95" :src="circleUrl"></el-avatar>
            </div>
            <div style="width:80px;margin:0 auto;">
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
                    <el-button size="small" type="primary">选择图片</el-button>
                </el-upload>
            </div>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        name:'changeavatar',
        props:{
            circleUrl:{
                type:String
            }
        },
        data(){
            return{
                dialogVisible:false,
            }
        }
    }
</script>
<style scoped>

</style>