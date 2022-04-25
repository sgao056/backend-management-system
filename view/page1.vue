<template>
    <div>
        <Tester/>
    </div>
</template>
<script>
    import Tester from './test.js'
    export default {
        name:"page1",
        components:{
            "Tester":Tester
        },
        data(){
            return {}
        }
    }
</script>