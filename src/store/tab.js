import Cookies from 'js-cookie'
export default {
    state:{
        isCollapse:false,
        tabList:[
            {
                path:'/home',
                name:'home',
                label:'home',
                icon:'home'
            }
        ],
        currentMenu:null,
        menu:[]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name !== 'home'){
                state.currentMenu = val
                const result = state.tabList.findIndex(item=>item.name === val.name)
                if(result === -1){
                    state.tabList.push(val)
                }else{
                    state.currentMenu = null
                }
            }
        },
        closeTag(state,val){
            const result = state.tabList.findIndex(item=>item.name === val.name)
            state.tabList.splice(result,1)
        },
        setMenu(state,val){
            state.menu=val
            Cookies.set('menu',JSON.stringify(val))

        },
        clearMenu(state){
            state.menu=[]
            Cookies.remove('menu')
        },
        addMenu(state,router){
            if(!Cookies.get('menu')){
                return
            }
            const menu=JSON.parse(Cookies.get('menu'))
            state.menu=menu
            const menuArray=[]
            menu.forEach(item=>{
                if(item.children){
                    item.children= item.children.map(item=>{
                        item.component =()=>import(`../../view/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else{
                    item.component =()=>import(`../../view/${item.url}`)
                    menuArray.push(item)
                }
            });
        }
    }
}