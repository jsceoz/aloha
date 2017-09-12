<template>
    <div id="create-sign-up">
        <div class="step-wrapper">
            <el-steps :active="stepIndex" finish-status="success" center>
                <el-step title="选择类型"></el-step>
                <el-step title="基本信息"></el-step>
                <el-step title="设置表单"></el-step>
                <el-step title="设置通知方式"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>
        </div>

        <div class="container">

            <div v-if="stepIndex === 0" class="card-wrapper">
                <el-row :gutter="50">
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span style="line-height: 36px;">招新报名</span>
                                <el-button style="float: right;" type="primary" @click="stepIndex++">选择</el-button>
                            </div>
                            <div class="text item">
                                针对招新的报名
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span style="line-height: 36px;">比赛报名</span>
                                <el-button style="float: right;" type="primary">选择</el-button>
                            </div>
                            <div class="text item">
                                针对比赛的报名
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <span style="line-height: 36px;">活动报名</span>
                                <el-button style="float: right;" type="primary">选择</el-button>
                            </div>
                            <div class="text item">
                                针对活动的报名
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>

            <div v-if="stepIndex === 1" class="form-wrapper">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="活动时间">-->
                        <!--<el-date-picker-->
                                <!--v-model="value4"-->
                                <!--type="datetimerange"-->
                                <!--:picker-options="pickerOptions2"-->
                                <!--placeholder="选择时间范围"-->
                                <!--align="right">-->
                        <!--</el-date-picker>-->
                    <!--</el-form-item>-->
                    <el-form-item label="活动介绍">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="stepIndex++">下一步</el-button>
                        <el-button @click="stepIndex--">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div v-if="stepIndex === 2" class="custom-form-wrapper">
                <CustomForm/>
            </div>

        </div>
    </div>
</template>

<script>
    import CustomForm from './CustomSignUpForm.vue'

    export default {
        components: {
            CustomForm: CustomForm
        },
        data () {
            return {
                stepIndex: 0,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {

        }
    }
</script>

<style>
    header {
        margin: 20px;
    }
    .container {
        padding: 30px;
    }
    .step-wrapper {
        width: 80%;
        margin: 20px auto;
    }

    .form-wrapper {
        margin: 30px auto;
        width: 430px;
    }
</style>