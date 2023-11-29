<script setup>
import Login from './components/LoginForm.vue'
import { ref, computed } from 'vue'
import NotFound from './components/NotFound.vue'
const routes = {
'/Login': Login
}

</script>

<template v-if="mostrarRecuperarContrasena">
    <h1>Recuperar Contraseña</h1>
    <p>Introduce tu dirección de correo electrónico:</p>
    <input type="email" id="Restablecer" v-model='res' placeholder="Correo Electrónico">
    <button>Enviar Correo de Recuperación</button>
    <a class="btn btn-outline-info" href="#/Login">Volver a Iniciar Sesión</a>
    <component :is="currentView" />
</template>