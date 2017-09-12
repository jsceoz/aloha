<template>
    <div id="custom-form">
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">

        </el-form>
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