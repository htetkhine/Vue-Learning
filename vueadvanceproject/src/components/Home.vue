<template>
  <div>
    <div class="form">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12 mx-auto">
            <div class="card">            
              <div class="card-body">
                <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label text-start d-block">Email address</label>
                  <input @keyup="eventWork" v-model="name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text text-start d-block">{{ names }}</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label text-start d-block">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1">
                </div>                
                <button type="submit" class="btn btn-primary d-block">Submit</button>
              </form>
              </div> 
            </div>           
          </div>
        </div>
      </div>
    </div>           
  </div>
  
</template>

<script>
  export default {
    app:'Home',
    data() {
      return {
        name:"",
        names:[]        
      }
    },  
    methods: {
      eventWork(e){
        if(e.key === ','){
          this.names.push(this.name);
          this.name = "";
        }        
      }
    },  
  }
</script>

<style scoped>

</style>