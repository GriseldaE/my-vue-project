

<script>

export default {
  data() {
    return {
      mostrarElemento: false,
      mostrarElemento2: false,
      nombre: 'Elena',
      imagenURL: 'https://img.freepik.com/fotos-premium/superheroe-animal-tema-edicion-imitacion_947926-601.jpg',
      nuevoNombre: '', 
    };
  },
  methods: {
    toggleElemento() {
      this.mostrarElemento = !this.mostrarElemento;
    },
    toggleElemento2() {
      this.mostrarElemento2 = !this.mostrarElemento2;
    },
    changename() {
      
      if (this.nuevoNombre.trim() !== '') {
        this.nombre = this.nuevoNombre;
      }
      
      this.nuevoNombre = '';
    },
    cambiarImagen(event) {
      const archivo = event.target.files[0];

      if (archivo) {

        this.imagenURL = URL.createObjectURL(archivo);
      }
    },
    // cambiarPref(){

    // },
  },

};

</script>

<template>
  <div id="todo">
 <section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card border-dark mb-3">
          <div class="rounded-top text-white d-flex flex-row" style="background-color: #611c7c; height:200px;">
            <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img :src="imagenURL"
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                style="width: 150px; z-index: 1">
                
              <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style="z-index: 1;" @click="toggleElemento">
                Edit profile
              </button><br>

              <button type="button" class="btn btn-outline-dark" data-mdb-ripple-color="dark"
                style="z-index: 1;" @click="toggleElemento2">
                Settings
              </button>
            </div>
            
            <div class="ms-3" style="margin-top: 130px;">
              <h5>{{ nombre }}</h5>
              <p>New York</p>
            </div>
          </div>
          <div class="p-4 text-black" style="background-color: #f8f9fa;">
            <div class="d-flex justify-content-end text-center py-1">
              <div>
                <p class="mb-1 h5">253</p>
                <p class="small text-muted mb-0">Photos</p>
              </div>
              <div class="px-3">
                <p class="mb-1 h5">1026</p>
                <p class="small text-muted mb-0">Followers</p>
              </div>
              <div>
                <p class="mb-1 h5">478</p>
                <p class="small text-muted mb-0">Following</p>
              </div>
            </div>
          </div>
          <div class="card-body p-4 " style="background-color:#451955; color:white; margin-top: 10%;" >
            <div class="mb-5">
              <p class="lead fw-normal ms-3"></p>
              <br>
              <div v-if="mostrarElemento">
                Nombre: <input v-model="nombre">
                Foto Perfil:<input type="file" @change="cambiarImagen" />
                </div>
                <div v-if="mostrarElemento2">
                <div><h3>Preferences</h3><br>
                 <p>Notifications</p> 
                 <input type="radio" name="radio1" id="yes">
                 <label for="yes">Yes</label>&nbsp;
                 <input type="radio" name="radio1" id="no">
                 <label for="no">No</label>
                </div>
                 <div><h3>Privacy</h3><br>
                 <p>Perfil</p>
                 <input type="radio" name="radio2" id="priv">
                 <label for="priv">Privated</label>&nbsp;
                 <input type="radio" name="radio2" id="public">
                 <label for="public">Public</label>
                </div>
                 <div><h3>Activity</h3>
                 <input type="radio" name="radio3" id="hidden">
                 <label for="hidden">Hide content</label>&nbsp;
                 <input type="radio" name="radio3" id="visible">
                 <label for="visible">Show content</label>
                </div>
                </div>
              <div class="p-4" style="background-color:#451955;">
                <p class="font-italic ms-3">Web Developer</p>
                <p class="font-italic ms-3">Lives in New York</p>
                <p class="font-italic ms-3">Photographer</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <p class="lead fw-normal mb-0">Recent photos</p>
              <p class="mb-0"><a href="#!" class="text-muted">Show all</a></p>
            </div>
            <div class="row g-2">
              <div class="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" class="w-100 rounded-3">
              </div>
              <div class="col mb-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 1" class="w-100 rounded-3">
              </div>
            </div>
            <div class="row g-2">
              <div class="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="image 1" class="w-100 rounded-3">
              </div>
              <div class="col">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="image 1" class="w-100 rounded-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>
<style>
#todo{
    background-color: #0d080e; 
 }
</style>
