<script setup>



</script>

<template v-if="mostrarRecuperarContrasena">
    <div class="Resta-container">
      <div class="Resta-form">
    <h2 class="logo">Recuperar Contraseña</h2>
    <form class="Resta-form">
      <label for="username">Introduce tu dirección de correo electrónico:</label>
      <input type="email" id="Restablecer" v-model='res' placeholder="Correo Electrónico">

      <button>Enviar Correo de Recuperación</button>
    <a class="btn btn-outline-info" href="#/Login">Volver a Iniciar Sesión</a>
    
    </form>
    <component :is="currentView" />
    
    
  </div>
</div>
</template>

<style>
body {
  background-color: #0d080e; 
}
.Resta-form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #611c7c ;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.Resta-container {
  background-color: #0d080e; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
font-size: 32px;
color: #ffffff;
margin-bottom: 30px;
}

.Resta-form {
display: flex;
flex-direction: column;
}

label {
margin-bottom: 10px;
color:  #E4C8FF ; 
}

input {
padding: 8px;
margin-bottom: 12px;
border: 2px solid black;
border-radius: 5px;
}

button {
background-color: #8e44ad;
color: white;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;
}

button:hover {
background-color: #9b59b7;
}
</style>