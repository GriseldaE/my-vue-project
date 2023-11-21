<!-- src/components/RegisterForm.vue -->
<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <label for="newUsername">Username:</label>
      <input type="text" id="newUsername" v-model="newUsername" required />

      <label for="newPassword">Password:</label>
      <input type="password" id="newPassword" v-model="newPassword" required />

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUsername: '',
      newPassword: ''
    };
  },
  methods: {
    register() {
      // Aquí puedes agregar la lógica de registro
      console.log('Register:', this.newUsername, this.newPassword);
    }
  }
};
</script>
