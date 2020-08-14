<template>
  <div id="pushset">
    <el-dialog
      width="650px"
      :title="dialogPushSet.title"
      :visible.sync="dialogPushSet.isOpen"
      :close-on-click-modal="false"
    >
        <el-row class="margin-bottom10">
            <el-col :span="24">
                <p>
                    报名设置：
                    <span class="margin-right5"><span style="color:red;">* </span>学院姓名：</span>
                    <span class="margin-right5"><span style="color:red;">* </span>联系电话：</span>
                    <span class="margin-right5"><span style="color:red;">* </span>学院年龄：</span>
                </p>
            </el-col>
        </el-row>
        <el-row class="margin-bottom10">
            <el-col :span="24">
                <el-checkbox v-model="isNochannel"></el-checkbox>
                <span class="margin-left5">短信验证码（当前短信剩余0条，当短信不足时用户将无法获取验证码提交信息）</span>
                <el-button type="text" size="small" class="margin-left5">去充值</el-button>
            </el-col>
        </el-row>
      
        <el-row>
            <el-col :span="24">
                <el-table :data="tableData" 
                    row-key="id" border fit highlight-current-row
                    size="small"
                    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                    >
                        <el-table-column label="采单员" align="center" width="200">
                            <template slot-scope="{row}">
                                <span>{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="专属二维码" align="center">
                            <template slot-scope="{row}">
                                <el-button type="text" size="mini" @click="FunCheckQscode(row)">查看二维码</el-button>
                            </template>
                        </el-table-column>
                </el-table>
            </el-col>
        </el-row>

      <el-dialog width="330px" :title="dialogPushSet.innerTitle" :visible.sync="dialogPushSet.innerIsopen" append-to-body :close-on-click-modal="false">
          <el-row class="margin-bottom10">
              <el-col :span="24">
                <el-image style="width: 290px; height: 290px" :src="dialogPushSet.url"></el-image>
              </el-col>
          </el-row>
          <el-row>
              <el-col :span="24">
                <el-button style="display:block;margin:0 auto;" type="primary" size="mini">下载二维码</el-button>
              </el-col>
          </el-row>
      </el-dialog>

      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogPushSet.isOpen = false">取 消</el-button>
        <el-button type="primary" size="mini" @click="dialogPushSet.isOpen = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
    name: "pushset",
    data() {
        return {
            dialogPushSet: {
                title: "地推设置",
                isOpen: false,
                innerTitle: "",
                innerIsopen: false,
                url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
            },
            isNochannel: false,
            tableData: [
                { date: "2016-05-02", name: "王小虎" },
                { date: "2016-05-04", name: "王小虎" },
            ],
        };
    },
    methods:{
        FunCheckQscode(row) {
            this.dialogPushSet.innerTitle = row.name + "的地推二维码";
            this.dialogPushSet.innerIsopen = true;
        },
    }
};
</script>
<style>
</style>