<template>
    <div id="nav-menu">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router>
            <el-menu-item index="/"><i class="el-icon-menu"></i>首页</el-menu-item>
            <el-menu-item index="/signup"><i class="el-icon-menu"></i>报名</el-menu-item>
            <el-menu-item index="/vote"><i class="el-icon-menu"></i>投票</el-menu-item>
            <el-menu-item index="/grab"><i class="el-icon-menu"></i>抢票</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>