

<script>

export default {
  data() {
    return {
      buttonTextFo: 'Follow',
      claseDelBotonFo: 'btn btn-outline-dark',
      buttonTextFr: 'Add Friends',
      claseDelBotonFr: 'btn btn-outline-dark',
      mostrarElemento: false,
      mostrarElemento2: false,
      nombre: 'Elena',
      imagenURL: 'https://thumbs.dreamstime.com/b/informaci%C3%B3n-an%C3%B3nima-mujer-icono-dibujo-animado-estilo-dibujos-animados-de-vector-para-dise%C3%B1o-web-aislado-sobre-fondo-blanco-220529678.jpg',
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
    cambiarFollow() {
      this.claseDelBotonFo =
        this.claseDelBotonFo === 'btn btn-outline-dark'
          ? 'btn btn-outline-success'
          : 'btn btn-outline-dark';
          this.buttonTextFo =
        this.claseDelBotonFo === 'btn btn-outline-success'
          ? 'Unfollow'
          : 'Follow';

    },
    cambiarFriends() {
      
      this.claseDelBotonFr =
        this.claseDelBotonFr === 'btn btn-outline-dark'
          ? 'btn btn-outline-success'
          : 'btn btn-outline-dark';
          this.buttonTextFr =
        this.claseDelBotonFr === 'btn btn-outline-success'
          ? 'Send friend request'
          : 'Add friends';
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
  <div id="todo">
 <section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card border-dark mb-3">
          <div class="rounded-top text-white d-flex flex-row" style="background-color: #611c7c; height:200px;">
            <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
              <img src="https://imagenes.elpais.com/resizer/q1Bzvi_vytH6svtum46Q9iiKu8Q=/300x300/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/PSMME3J7ZBDOHK4S6ZIIFVDEAQ.png"
                alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                style="width: 150px; z-index: 1">
              <button type="button" @click="cambiarFollow" :class="claseDelBotonFo" data-mdb-ripple-color="dark"
                style="z-index: 1;">
                {{ buttonTextFo }}
              </button>
              <button type="button" @click="cambiarFriends" :class="claseDelBotonFr" data-mdb-ripple-color="dark"
                style="z-index: 1;">
                {{buttonTextFr}}
              </button>
            </div>
            <div class="ms-3" style="margin-top: 130px;">
              <h5>Ana Horwitz</h5>
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
          <div class="card-body p-4 " style="background-color:#451955; color:white;" >
            <div class="mb-5">
              <p class="lead fw-normal ms-3">About</p>
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