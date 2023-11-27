
<template>
  <div>
    <login-form />
    <register-form />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';

export default {
  components: {
    LoginForm,
    RegisterForm
  }
};
</script>
