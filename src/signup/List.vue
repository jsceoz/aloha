<template>
    <div id="sign-up-list">
        <el-row>
            <div class="add-btn">
                <a href="#/signup/create">
                    <el-button type="primary" icon="plus">创建新的报名</el-button>
                </a>
            </div>
        </el-row>
        <el-row>
            <div class="table-wrapper">
                <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                    <el-table-column
                            label="状态"
                            width="100">
                        <template scope="scope">
                            <el-tag type="success">进行中</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="时间"
                            width="350">
                        <template scope="scope">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 5px">2017-11-11 11:11</span>
                            <span>~</span>
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 5px">2017-11-11 11:11</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="名称">
                        <template scope="scope">
                            <span>武汉大学学生会2017秋季招新</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="200">
                        <template scope="scope">
                            <el-button
                                    size="small"
                                    type="info"
                                    @click="handleEdit(scope.$index, scope.row)">管理</el-button>
                            <el-button
                                    size="small"
                                    type="warning"
                                    @click="handleEdit(scope.$index, scope.row)">暂停</el-button>
                            <el-button
                                    size="small"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        }
    }
</script>