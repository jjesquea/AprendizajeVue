<template>
    <div>
        <h1>Tareas</h1>
        <input type="text" placeholder="ingresa un item" v-model="nuevoItem">
        <input type="button" value="Agregar item" @click="NuevoItem"><br>
        <input type="search" placeholder="Busqueda por titulo" v-model="filtroItems">
        <Tarea 
            v-for="(tarea, $index) in ItemsFiltrados" 
            :key="tarea.id" 
            :titulo='tarea.title'
            @EliminarItem = 'EliminarItem($index)'
        >
            
        </Tarea>
    </div>
</template>

<script>
    import Tarea from '@/components/Tarea'
    import todoService from '../services/todoService.js'
    import {crudItemsMixin} from '../mixins/crudItem.js'
    export default {
        name:'Tareas',
        created(){
            todoService.get()
                .then( item => this.items = item.data)
        },
        components:{
            Tarea
        },
        mixins: [crudItemsMixin]
    }
</script>