<!-- src/components/LoginForm.vue -->
<template>
     <div class="login-container">
    <h2 class="logo">Tech Girls</h2>
    <form class="login-form">
      <label for="username">Usuario</label>
      <input type="text" id="username" v-model="username" placeholder="Ingresa tu usuario" />

      <label for="password">Contraseña</label>
      <input type="password" id="password" v-model="password" placeholder="Ingresa tu contraseña" />

      <button @click.prevent="login">Iniciar Sesión</button>
    </form>
  </div>
 
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Aquí puedes agregar la lógica de autenticación
      console.log('Login:', this.username, this.password);
    }
  }
};
</script>

<style>
body {
  background-color: #653790;
}
.login-container {
max-width: 600px;
margin: auto;
margin-top: 75px;
padding: 20px;
border: 1px solid rgb(191, 0, 255);
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
text-align: center;
background-color: #A371D1;
}

.logo {
font-size: 32px;
color: #ffffff;
margin-bottom: 30px;
}

.login-form {
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