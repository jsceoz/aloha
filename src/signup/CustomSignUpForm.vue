<template>
    <div id="custom-form">
        <el-row>
            <el-col :span="10">
                <h3>选择表单组件</h3>
                <div class="custom-form-component-wrapper">
                    <div class="custom-form-component-item">
                        <span class="label">输入框</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="custom-form-component-item">
                        <span class="label">单选框</span>
                        <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
                        <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
                    </div>
                </div>
            </el-col>
            <el-col :span="14">

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                }
            }
        }
    }
</script>

<style>
    .custom-form-component-item {
        display: flex;
    }
    .custom-form-component-item > .label {
        width: 80px;
        line-height:36px;
    }
</style>