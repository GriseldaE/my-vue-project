<script>

export default {
  data() {
    return {
        buttonTextFo: 'Follow',
      claseDelBotonFo: 'btn btn-dark btn-round btn-simple',
      buttonTextFr: 'Add Friends',
      claseDelBotonFr: 'btn btn-dark btn-round btn-simple',
    };
  },
  methods: {
    cambiarFollow() {
      this.claseDelBotonFo =
        this.claseDelBotonFo === 'btn btn-dark btn-round btn-simple'
          ? 'btn btn-secondary'
          : 'btn btn-dark btn-round btn-simple';
          this.buttonTextFo =
        this.claseDelBotonFo === 'btn btn-secondary'
          ? 'Unfollow'
          : 'Follow';

    },
    cambiarFriends() {
      
      this.claseDelBotonFr =
        this.claseDelBotonFr === 'btn btn-dark btn-round btn-simple'
          ? 'btn btn-secondary'
          : 'btn btn-dark btn-round btn-simple';
          this.buttonTextFr =
        this.claseDelBotonFr === 'btn btn-secondary'
          ? 'Send friend request'
          : 'Add friends';
    },
    
    
  },

};

</script>

<template> 
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<div id="todo">
<div class="container profile-page">
    <div class="row">
        <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="card profile-header" style="background-color: #611c7c;">
                <div class="body">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""> </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-12">
                            <h4 class="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                            <span class="job_post">Ui UX Designer</span>
                            <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                            <div>
                                <button type="button" @click="cambiarFollow" :class="claseDelBotonFo" data-mdb-ripple-color="dark"
                style="z-index: 1;">
                {{ buttonTextFo }}
              </button>
                                <button class="btn btn-dark btn-round btn-simple">Message</button>
                            </div>
                            <p class="social-icon m-t-5 m-b-0">
                                <a title="Twitter" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a title="Facebook" href="javascript:void(0);"><i class="fa fa-facebook"></i></a>
                                <a title="Google-plus" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a title="Behance" href="javascript:void(0);"><i class="fa fa-behance"></i></a>
                                <a title="Instagram" href="javascript:void(0);"><i class="fa fa-instagram "></i></a>
                            </p>
                        </div>                
                    </div>
                </div>                    
            </div>
        </div>
        
        
        <div class="col-xl-6 col-lg-7 col-md-12">
            <div class="card profile-header" style="background-color: #611c7c;">
                <div class="body">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="profile-image float-md-right"> <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""> </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-12">
                            <h4 class="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                            <span class="job_post">Ui UX Designer</span>
                            <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                            <div>
                                <button type="button" @click="cambiarFriends" :class="claseDelBotonFr" data-mdb-ripple-color="dark"
                style="z-index: 1;">
                {{ buttonTextFr }}
              </button>
                                <button class="btn btn-dark btn-round btn-simple">Message</button>
                            </div>
                            <p class="social-icon m-t-5 m-b-0">
                                <a title="Twitter" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a title="Facebook" href="javascript:void(0);"><i class="fa fa-facebook"></i></a>
                                <a title="Google-plus" href="javascript:void(0);"><i class="fa fa-twitter"></i></a>
                                <a title="Behance" href="javascript:void(0);"><i class="fa fa-behance"></i></a>
                                <a title="Instagram" href="javascript:void(0);"><i class="fa fa-instagram "></i></a>
                            </p>
                        </div>                
                    </div>
                </div>                    
            </div>
        </div>
    </div>
        
    
</div><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<component :is="currentView" />
</div>
</template>
<style>
body{
    margin-top:20px;
    background-color: #611c7c;    
}
a {
    color: #f96332;
}
.m-t-5{
    margin-top: 5px;   
}
.card {
    background-color: #611c7c;
    margin-bottom: 30px;
    transition: .5s;
    border: 0;
    border-radius: .1875rem;
    display: inline-block;
    position: relative;
    width: 100%;
    box-shadow: none;
}
.card .body {
    font-size: 14px;
    color: white;
    padding: 20px;
    font-weight: 400;
}
.profile-page .profile-header {
    position: relative
}

.profile-page .profile-header .profile-image img {
    border-radius: 50%;
    width: 140px;
    border: 3px solid #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}

.profile-page .profile-header .social-icon a {
    margin: 0 5px
}

.profile-page .profile-sub-header {
    min-height: 60px;
    width: 100%
}

.profile-page .profile-sub-header ul.box-list {
    display: inline-table;
    table-layout: fixed;
    width: 100%;
    background-color: #611c7c;
}

.profile-page .profile-sub-header ul.box-list li {
    border-right: 1px solid #611c7c;
    display: table-cell;
    list-style: none
}

.profile-page .profile-sub-header ul.box-list li:last-child {
    border-right: none
}

.profile-page .profile-sub-header ul.box-list li a {
    display: block;
    padding: 15px 0;
    color: #424242
}
#todo{
    margin-top: 5%;
    
}

</style>