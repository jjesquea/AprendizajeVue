<template>
    <div>
        <h1>Tareas</h1>
        <input type="text" placeholder="ingresa un item" v-model="nuevoItem">
        <input type="button" value="Agregar item" @click="NuevoItem"><br>
        <input type="search" placeholder="Busqueda por titulo" v-model="filtroItems">
        <ul>
            <li v-for="post in ItemsFiltrados"
            :key="post.id"
            >
            {{post.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    import postService from '../services/postService.js'
    import {crudItemsMixin} from '../mixins/crudItem.js'
    export default {
        name:'PostsList',
        created(){
            postService.get()
                .then( item => this.items = item.data)
        },
        mixins: [crudItemsMixin]
    }
</script>