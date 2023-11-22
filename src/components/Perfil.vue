<script >
import { ref } from 'vue';
var nombre = 'elena';
var msg ="";
var msg2 = "";
export default {
  data() {
    return {
      mostrarElemento: false, 
      mostrarElemento2:false,
      nombre: 'nombre',
      imagenURL: 'https://thumbs.dreamstime.com/b/informaci%C3%B3n-an%C3%B3nima-mujer-icono-dibujo-animado-estilo-dibujos-animados-de-vector-para-dise%C3%B1o-web-aislado-sobre-fondo-blanco-220529678.jpg',
    };
  },
  methods: {
    toggleElemento() {
      this.mostrarElemento = !this.mostrarElemento; // Cambia el valor de la variable para ocultar/mostrar
    },
     toggleElemento2() {
      this.mostrarElemento2 = !this.mostrarElemento2; // Cambia el valor de la variable para ocultar/mostrar
    },
    changename(){
    nombre = msg
    },
    cambiarImagen(event) {
      const archivo = event.target.files[0];

      if (archivo) {
        
        this.imagenURL = URL.createObjectURL(archivo);
      }
    },
  },
  
};

</script>

<template>
  <h1>Perfil</h1>
  <h2>{{nombre}}</h2>
  <div v-if="mostrarElemento">
  <input v-model="nombre">
   <button @click="changename">Cambiar nombre</button>
  </div>

  <div v-if="mostrarElemento2">
    <div>
     <img :src="imagenURL" alt="Imagen" style="max-width: 100%;" />
      <input type="file" @change="cambiarImagen" />
    </div>
  </div>
  
 
  <button @click="toggleElemento" >Editar nombre</button>
  <button  @click="toggleElemento2">Editar foto de perfil</button>
  <img :src="imagenURL">
  <button>Enviar solicitud de amistad</button>
  <button>Seguir</button>

</template>