<script>
import { ref } from 'vue';

export default {
  name: 'App',
  
  setup() {
    const Publicaciones = ref([
      {
        usuario: 'El pais',
        fotousuario: 'https://imagenes.elpais.com/resizer/q1Bzvi_vytH6svtum46Q9iiKu8Q=/300x300/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/PSMME3J7ZBDOHK4S6ZIIFVDEAQ.png',
        titulo: 'El nuevo jefe de OpenAI, un ‘apocalíptico’ que quiere frenar la inteligencia artificial',
        descripcion: 'Emmett Shear ha alertado del riesgo de que la tecnología en la que su empresa es puntera destruya a la humanidad',
        imagen: 'https://imagenes.elpais.com/resizer/N_RBq0Ci6yNG_b_im18TsnX-C2g=/828x466/cloudfront-eu-central-1.images.arcpublishing.com/prisa/GZTIQKS2CVCBZIXBWSKVGQPKVU.jpg',
        usuariocomentario: 'Sofia',
        usuariocomentariofoto: 'https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_people_person_profile_user_woman_icon_123359.png',
        comentarios: 'Es una noticia interesante'
      }
    ]);

    return {
      Publicaciones
    };
  }
}
</script>

<template>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Mi Proyecto Vuetify</title>
  <!-- Incluye los estilos de Vuetify desde CDN -->
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.5.10/dist/vuetify.min.css" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <!-- Incluye Vue.js y Vuetify desde CDN -->
  <v-btn>
  Button
</v-btn>
  <!-- Tu lógica de Vue y Vuetify aquí -->
</body>
</html>

</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  
  
  
}
#all{
  text-align: center;
  
  min-height: calc(100vh - 136px);
  border-radius: 3px;
  padding: 2rem 2rem;
  margin: 1.5rem; 
}
 #usuarioprin >ul > li{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 40px;
  border: 1px solid #000;
  border-radius: 60%;
 }
</style>
