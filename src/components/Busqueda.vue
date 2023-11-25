<template>
    <div>
      <input v-model="searchQuery" @input="search" placeholder="Buscar usuarios...">
      <ul>
        <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </template>
  
  <!-- datos reales -->
  <!-- <script>
  export default {
    data() {
      return {
        searchQuery: '',
        users: [
          { id: 1, name: 'Usuario 1' },
          { id: 2, name: 'Usuario 2' },
          { id: 3, name: 'Usuario 3' },
          // ... más usuarios
        ]
      };
    },
    computed: {
      filteredUsers() {
        return this.users.filter(user =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    methods: {
      search() {
        // Puedes realizar acciones adicionales al escribir en la barra de búsqueda si es necesario
        console.log('Buscando...', this.searchQuery);
      }
    }
  };
  </script> -->

  <!-- dummy data -->
  <script>
export default {
  data() {
    return {
      searchQuery: '',
      users: [
        { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
        { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
        { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
        // ... más usuarios
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
      // Puedes realizar acciones adicionales al escribir en la barra de búsqueda si es necesario
      console.log('Buscando...', this.searchQuery);
    }
  }
};
</script>

  
  <style scoped>
  /* Estilos opcionales para dar formato a la lista de usuarios, etc. */
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 5px 0;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  </style>
  