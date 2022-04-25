<template>
   <el-form 
   ref="form" 
   label-width="100px"
   :model="form"
   :inline="inline">
        <el-form-item 
        v-for="item in formLabel"
        :key="item.label"
        :label="item.label">
            <el-input 
            v-if="item.type === 'input'"
            :placeholder = "'Please enter'+item.label"
            v-model = form[item.model]
            ></el-input>
            <el-switch 
            v-if = "item.type === 'switch'"
            v-model = form[item.model]
            placeholder = "select date"></el-switch>
            <el-date-picker 
            v-if="item.type === 'date'"
            type="date"
            value-format="yyyy-mm-dd"
            v-model = form[item.model]
            placeholder = "select date"
            >
            </el-date-picker>
            <el-select
            v-if="item.type === 'select'"
            placeholder="please select"
            v-model="form[item.model]"
            >
                <el-option
                v-for="item in item.opts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item><slot></slot></el-form-item>
    </el-form>
</template>
<script>
    export default {
        name:"commonForm",
        props:{
            formLabel:Array,
            form:Object,
            inline:Boolean
        }
    }
</script>