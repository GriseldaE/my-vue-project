<template>
  <div class="search-container">
    <input v-model="searchQuery" @input="search" placeholder="Buscar usuarios..." class="search-input">
    <ul class="user-list">
      <li v-for="user in filteredUsers" :key="user.id" class="user-item">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      users: [
        { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
        { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
        { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
        { id: 32, name: 'Usuario 32', email: 'usuario32@example.com' },
        { id: 38, name: 'Usuario 38', email: 'usuario38@example.com' },
      ]
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    search() {
      console.log('Buscando...', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.search-container {
  text-align: center;
  margin-top: 45px;
  background-color: #0d080e; 
  color: #fff;
}

.search-input {
  padding: 10px;
  margin-top: 10px;
  width: 300px;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 16px;
  background-color: #611c7c ;
  color: #fff;
}

.user-list {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

.user-item {
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 5px;
  background-color: #611c7c ;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #fff;
}

.user-item:hover {
  background-color: #611c7c ;
}
</style>