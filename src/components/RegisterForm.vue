<!-- src/components/RegisterForm.vue -->
<template>
  <div class="register-container">
    <div class="register-form">
      <h2>Registro</h2>
      <form @submit.prevent="Registro">
        <div class="form-group">
          <label for="newUsername">Usuario:</label>
          <input type="text" id="newUsername" v-model="newUsername" required />
        </div>

        <div class="form-group">
          <label for="newPassword">Contraseña:</label>
          <input type="password" id="newPassword" v-model="newPassword" required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUsername: '',
      newPassword: '',
    };
  },
  methods: {
    register() {
      console.log('Register:', this.newUsername, this.newPassword);
    },
  },
};
</script>

<style scoped>
.register-container {
  background-color: #0d080e; 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-form {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #611c7c ;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  padding: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 3px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #A377CC;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
