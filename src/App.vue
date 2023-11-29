<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import Perfil from './components/PerfilUsuario.vue'
import AmigosSeguidores from './components/AmigosSeguidores.vue'
import PerfilPrueba from './components/PerfilPrueba.vue'
import Chat from './components/ChatComp.vue'
import Busqueda from './components/BusquedaComp.vue'
import Login from './components/LoginForm.vue'
import Register from './components/RegisterForm.vue'
import NotFound from './components/NotFound.vue'
const routes = {
  '/': Home,
  '/Perfil':Perfil,
  '/AmigosSeguidores':AmigosSeguidores,
  '/Chat': Chat,
  '/Busqueda': Busqueda,
  '/Login': Login,
  '/Register':Register,
  '/PerfilPrueba':PerfilPrueba
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  
  <nav class="navbar navbar-expand-lg  fixed-top"  style="background-color: #291430;" >
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" style="color:#bf00ff;">TechGirls</a>
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" style="color:#bf00ff" href="#/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  style="color:#bf00ff" href="#/Perfil">Perfil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  style="color:#bf00ff" href="#/AmigosSeguidores">Friends/Followers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  style="color:#bf00ff" href="#/Chat">Chat</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" style="color:#bf00ff" href="#/Busqueda">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" style="color:#bf00ff" href="#/non-existent-path">Error</a>
        </li>
        
      </ul>
      <form class="d-flex" role="search" style="box-shadow: #bf00ff 0px 5px 15px;">
        <a class="btn btn-outline-info" href="#/Login">Login</a>
        <a class="btn btn-outline-info" href="#/Register">Register</a>
      </form>
    
  </div>
</nav>
  
  <component :is="currentView" />
</template>

<style>

#menu{
  background-color: #611c7c ;
  box-shadow: rgb(191, 0, 255) 0px 5px 15px;
}
*{
  text-shadow: #bf00ff 0px 5px 15px;
  
  
}
</style>

