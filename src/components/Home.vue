<script>
import { ref } from 'vue';
import RichTextEditor from "./RichTextEditor.vue";
export default {
  name: 'App',
  components: {
      RichTextEditor,
    },
  
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
      },
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
    <div class="todo">
 
 <div class="background">
    <div class="overlay opacity-50 active">
        <br><br><br>
      <h1 class="display-4 opacity-100 ">Bienvenida a TechGirls</h1>
      
    </div>
 </div>
 <RichTextEditor />
    <div v-for="item in Publicaciones" :key="item.usuario" class="Publicacion">

        <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand fs-5 "  style="color:white;" href="#/PerfilPrueba">
      <img :src="item.fotousuario" alt="Logo" width="40" style="color:white;" class="rounded-circle shadow-4 border d-inline-block align-text-middle">
        &nbsp;&nbsp;{{item.usuario }}
    </a>
  </div>
</nav>
      
      <div id="post">
        <h3>{{ item.titulo }}</h3>
        <h4>{{ item.descripcion }}</h4>
        <img :src="item.imagen" alt="imagen-noticia" >
      </div>
      <div class="row">
              <div class="col">
                <div class="d-flex flex-start">
                  <img class="rounded-circle shadow-1-strong me-3"
                    :src="item.usuariocomentariofoto" alt="avatar" width="65"
                    height="65" />
                  <div class="flex-grow-1 flex-shrink-1">
                    <div>
                      <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-1">
                          Maria
                        </p>
                      </div>
                      <p class="small mb-0">
                        {{item.comentarios}}
                      </p>
                    </div>
                    <div class="d-flex flex-start mt-4">
                      
                        <input type="text" class="form-control" placeholder="Responder comentario" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text" id="basic-addon2">Enviar</span>
                      
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
      <div id="areacomentarios">
        <nav class="navbar">
  <div class="container-fluid">
    
    
    
  </div>
  
  <br><br><br>
  <div class="input-group mb-3">
    
  <input type="text" class="form-control" placeholder="Escribe tu comentario" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon2">Enviar</span>
</div>
</nav>
        
      </div>
    </div>


  
</div>   
</template>

<style>

  .background {
    height: 100vh;
    background: url('https://img.freepik.com/fotos-premium/cerebro-morado-luces-moradas-fondo-morado_916191-10965.jpg') center center/cover no-repeat fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: #9f14d1 0px 5px 15px;
  }

  .Publicacion{

    padding-left: 5%;
    padding-right: 5%;
    margin-left: 15%;
    margin-right: 15%;
    color:white;
    background-color: #291430;
    box-shadow: #9f14d1 0px 5px 15px;

  }

  .overlay {
    width:100vh;
    height: 50vh;
    background-color: black; 
    padding: 20px;
    border-radius: 10px;
    color: rgb(219, 12, 238);
    text-align: center;
    box-shadow: #bf00ff 0px 5px 15px;
  }
  .todo{
    background-color: #0d080e; 
 }



</style>
