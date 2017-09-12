<template>
    <div id="app">
        <el-row class="tac">
            <el-col :span="3">
                <UserInfo/>
                <div class="nav-menu-wrapper">
                    <NavMenu/>
                </div>
                <div class="feedback-wrapper">
                    <el-button>建议反馈</el-button>
                    <el-button>功能需求</el-button>
                </div>
            </el-col>
            <el-col :span="21">
                <router-view></router-view>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import SignUp from './signup/Index.vue'
import CreateSignUp from './signup/CreateSignUp.vue'
import NavMenu from './components/NavMenu.vue'
import UserInfo from './components/UserInfo.vue'

export default {
    components: {
        SignUp: SignUp,
        CreateSignUp: CreateSignUp,
        NavMenu: NavMenu,
        UserInfo: UserInfo
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        height: 100%;
    }

    #app > .el-row, #app > .el-row > .el-col {
        height: 100%;
    }

    #app > .el-row > .el-col:first-child {
        background: #EEF1F6;
        position: relative;
    }

    .nav-menu-wrapper {
        margin-top: 30px;
    }

    .feedback-wrapper {
        position: absolute;
        bottom: 50px;
        padding-left: 20px;
    }

    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
    }


</style>
