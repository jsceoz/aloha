<template>
    <div id="sign-up">
        <header>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>报名</el-breadcrumb-item>
            </el-breadcrumb>
        </header>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeIndex: '1',
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style>
    #sign-up {
        padding: 15px;
    }

    header {
        margin: 20px;
    }

    .add-btn {
        text-align: left;
        margin: 10px 0 15px 10px;
    }
</style>