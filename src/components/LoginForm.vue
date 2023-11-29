<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    Log() {
      window.location.reload();
    }
  }
};

</script>

<template>
    <div class="login-container">
      <div class="login-form">
    <h2 class="logo">Tech Girls</h2>
    <form class="login-form">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" placeholder="Usuario" />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" placeholder="Contraseña" />

      <button @click="Log">Login</button>
    </form>

    <a href="#/Restablecer">Forget your password?</a>
    
  </div>
</div>
</template>

<style>
body {
  background-color: #0d080e; 
}
.login-form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #611c7c ;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login-container {
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