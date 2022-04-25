<template>
    <div class="manage">
        <el-dialog
        :title="operateType === 'add' ? 'createUser':'updateUser'"
        :visible.sync="isShow">
            <common-form
            :formLabel="operateFormLabel"
            :form="operateForm"
            :inline="true"
            ref="form"
            ></common-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">Cancel</el-button>
                <el-button type="primary" @click="confirm">Apply</el-button>
            </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addUser">Create</el-button>
            <common-form
            :formLabel="formLabel"
            :form="searchForm"
            :inline="true"
            ref="form"
            >
            <el-button type="primary" @click="getList(searchForm.keyword)">Search</el-button>
            </common-form>
        </div>
        <common-table
        :tableData="tableData"
        :tableLabel="tableLabel"
        :config="config"
        @changePage="getList()"
        @edit="editUser"
        @delete="deleteUser"
        ></common-table>
    </div>
</template>
<style>
.manage-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
<script>
import {getUser} from '../api/data.js'
import commonForm from '../src/components/commonForm/form.vue'
import commonTable from '../src/components/commonTable/table.vue'
import userFormLabel from '../view/data/user-formLabel'
import usersLabel from '../view/data/user-usersLabel'
    export default {
        name:"user",
        components:{
            commonForm,
            commonTable
        },
        data(){
            return {
                operateType:'add',
                isShow:false,
                operateFormLabel:userFormLabel,
                operateForm:{
                    name:'',
                    ip:'',
                    age:'',
                    birthday:'',
                    gender:''
                },
                formLabel:[
                    {
                        model:"keyword",
                        label:"",
                        type:"input"
                    }
                ],
                searchForm:{
                    keyword:""
                },
                tableData:[

                ],
                tableLabel:usersLabel,
                config:{
                    page:1,
                    total:30
                }
            }
        },
        methods:{
            confirm(){
                if(this.operateType === 'add'){
                    this.$http.post('/user/add',this.operateForm)
                    .then(res=>{
                        this.isShow = false
                        this.getList()
                    })
                }
                else{
                    this.$http.post('/user/edit',this.operateForm)
                    .then(res=>{
                        this.isShow = false
                        this.getList()
                    })
                }
            },
            addUser() {
                (this.isShow = true),
                (this.operateType = "add"),
                (this.operateForm = {
                    name: "",
                    ip: "",
                    age: "",
                    birthday: "",
                    gender: "",
                });
            },
            getList(name='') {
            this.config.loading = true
                name ? (this.config.page=1) : ''
                getUser({
                    page:this.config.page,
                    name
                })
                .then(({data:res})=>{
                    this.tableData = res.list.map(item=>{
                    item.genderLabel = item.gender === 0 ? "female" : "male"
                    return item
                    })
                    this.config.total = res.count
                    this.config.loading = false
                })
            },
            editUser(row){
                this.operateType = 'edit'
                this.isShow = true
                this.operateForm = JSON.parse(JSON.stringify(row))
            },
            deleteUser(row){
                this.$confirm('Are you sure you want to delete this user permanately?','tips',{
                    confirmButtonText:"Yes",
                    cancelButtonText:"No",
                    type:"warning"
                })
                .then(()=>{
                    const id = row.id
                    this.$http.delete("/user/delete",{
                        params:{id}
                    })
                    .then(()=>{
                        this.$message({
                            type:"success",
                            message:"You have deleted "+row.name+" successfully"
                        })
                        this.getList()
                    })
                })
            } 
        },
        created(){
            this.getList()
        }
    }
</script>