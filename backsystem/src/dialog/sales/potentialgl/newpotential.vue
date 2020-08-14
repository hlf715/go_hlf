<template>
  <div id="newpotential">
    <el-dialog
      width="760px"
      :title="dialogNewPotential.title"
      :visible.sync="dialogNewPotential.isOpen"
      :close-on-click-modal="false"
    >
      <el-form :model="newForm" :inline="true" label-width="72px" size="mini">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名：">
              <el-input v-model="newForm.name" size="mini" placeholder="学员姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="主要联系人：">
              <el-input placeholder="手机号" size="mini" v-model="newForm.phonenum1">
                <el-select v-model="newForm.phonename1" slot="prepend" size="mini">
                  <el-option
                    v-for="item in newForm.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="性别：">
              <el-radio-group v-model="newForm.sex" size="mini">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
                <el-radio :label="3">未知</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="备用联系人：">
              <el-input placeholder="手机号" v-model="newForm.phonenum2" size="mini">
                <el-select v-model="newForm.phonename2" slot="prepend" size="mini">
                  <el-option
                    v-for="item in newForm.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="生日/年龄：">
              <el-select v-model="newForm.agetype" size="mini" class="agetypeC float-l">
                <el-option key="1" label="生日" value="1"></el-option>
                <el-option key="2" label="年龄" value="2"></el-option>
              </el-select>
              <el-date-picker
                class="dateC float-l"
                v-if=" newForm.agetype == '1' "
                v-model="newForm.date"
                type="date"
                size="mini"
                :editable="false"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
              <el-input-number
                v-if=" newForm.agetype == '2' "
                v-model="newForm.age"
                :min="1"
                :max="150"
                class="inputnumC float-l"
              ></el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="12" style="padding-left:72px;">
            <el-form-item>
              <el-input placeholder="手机号" v-model="newForm.phonenum3" size="mini">
                <el-select v-model="newForm.phonename3" slot="prepend" size="mini">
                  <el-option
                    v-for="item in newForm.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider></el-divider>

        <el-row>
          <el-col :span="12">
            <el-form-item label="学校：" style="position:relative;">
              <el-input v-model="newForm.schoolname" size="mini" placeholder="学校名称" style="float:left"></el-input>
              <el-button type="text" size="mini" style="position:absolute;top:0;right:-55px;">学校管理</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年级：">
              <el-select v-model="newForm.grade" size="mini" placeholder="请选择">
                <el-option key="1" label="一年级" value="1"></el-option>
                <el-option key="2" label="二年级" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="昵称：">
              <el-input v-model="newForm.nickname" size="mini" placeholder="请输入学员昵称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证号：">
              <el-input v-model="newForm.idnumber" size="mini" placeholder="请输入身份证号"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="家庭住址：">
              <el-input v-model="newForm.homeadress" size="mini" placeholder="请输入家庭地址/小区"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider></el-divider>

        <el-row>
          <el-col :span="24">
            <el-form-item label="渠道类型：">
              <el-select v-model="newForm.channeltype" size="mini" placeholder="请选择">
                <el-option key="1" label="一年级" value="1"></el-option>
                <el-option key="2" label="二年级" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="推荐人：">
              <el-button type="text" size="mini" icon="el-icon-plus">选择学员</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="采单员：">
              <el-select v-model="newForm.pickstaff" size="mini" placeholder="请选择">
                <el-option key="1" label="一年级" value="1"></el-option>
                <el-option key="2" label="二年级" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="顾问：">
              <el-select v-model="newForm.counselor" size="mini" placeholder="请选择">
                <el-option key="1" label="一年级" value="1"></el-option>
                <el-option key="2" label="二年级" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="意向度：">
              
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="意向课程：">
              <el-button type="text" size="mini" icon="el-icon-plus">请添加意向课程</el-button>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider></el-divider>

        <el-row>
          <el-col :span="24">
            <el-form-item label="标签：">
              <el-button type="text" size="mini" icon="el-icon-plus">请添加标签</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="备注：">
              <el-input style="width:500px;" type="textarea" :rows="2" placeholder="请输入内容" v-model="newForm.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      

      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogNewPotential.isOpen = false">取 消</el-button>
        <el-button type="primary" size="mini" @click="dialogNewPotential.isOpen = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "newpotential",
  data() {
    return {
      dialogNewPotential: {
        isOpen: false,
        title: "新增潜客",
      },
      newForm: {
        name: "",
        phonenum1: "",
        phonename1: "1",
        options: [
          {
            value: "1",
            label: "爸爸",
          },
          {
            value: "2",
            label: "妈妈",
          },
          {
            value: "3",
            label: "爷爷",
          },
          {
            value: "4",
            label: "奶奶",
          },
          {
            value: "5",
            label: "外公",
          },
          {
            value: "6",
            label: "外婆",
          },
          {
            value: "7",
            label: "阿姨",
          },
          {
            value: "8",
            label: "本人",
          },
          {
            value: "9",
            label: "其他",
          },
        ],
        sex: 3,
        phonenum2: "",
        phonename2: "9",
        phonenum3: "",
        phonename3: "9",
        agetype: "1",
        date: "",
        age: "",
        schoolname:'',
        grade:'',
        nickname:'',
        idnumber:'',
        homeadress:'',

        channeltype:'',

        // 这里还有个选择推荐人

        pickstaff:'',
        counselor:'',

        //意向度参数
        //意向课程
        //标签参数

        remark:'',

      },
    };
  },
};
</script>
<style scoped>
  .el-col{
    height: 40px;
  }
  .agetypeC {
    width: 71px;
  }
  .dateC {
    width: 153px !important;
  }
</style>