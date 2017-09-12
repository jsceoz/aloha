<template>
    <div id="user-info">
        <el-row>
            <el-col :span="9">
                <div class="avatar"></div>
            </el-col>
            <el-col :span="15">
                <span style="line-height: 50px;">武汉大学学生会</span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>
    #user-info {
        padding: 20px;
    }
    .avatar {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background: #aaa;
    }
</style>