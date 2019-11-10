export const crudItemsMixin = {
    data(){
        return{
            items:[],
            nuevoItem : '',
            filtroItems : ''
        }
    },
    methods:{
        NuevoItem(){
            this.items.unshift({
                'title':this.nuevoItem
            })
            this.nuevoItem = ''
        },
        EliminarItem(indice){
            this.items.splice(indice, 1)
        }
    },
    computed:{
        ItemsFiltrados(){
            return this.items.filter( item => {
                return item.title.includes(this.filtroItems)
            })
        }
    },
}