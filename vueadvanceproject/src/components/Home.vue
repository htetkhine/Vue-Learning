<template>
  <div>
    <form @submit.prevent="submit">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12 mx-auto">
            <div class="card">            
              <div class="card-body">
                <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label text-start d-block">Email address</label>
                  <input v-model="name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <!-- <div id="emailHelp" class="form-text text-start d-block">{{ names }}</div> -->
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label text-start d-block">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                </div> 
                <div class="mb-3">
                    <label for="" class="form-label text-start d-block">Select Position</label>
                    <select v-model="position" class="form-select">
                      <option value="">Select Position</option>
                      <option value="Web Developer">web developer</option>
                      <option value="Web Engineer">Web Engineer</option>
                      <option value="Software Engineer">Software Engineer</option>
                    </select>
                </div>
                <div class="mb-3 form-check" >
                   <input type="checkbox" class="form-check-input" v-model="checkbox">
                   <label for="" class="form-check-label text-start d-block">Accept Term And Condition</label>
                </div>
                <div class="mb-3">
                  <label for="" class="form-check-label text-start d-block">Type Your Skill</label>
                   <input type="text" @keyup.alt="typeSkill" v-model="skill" class="form-control">
                </div> 
                <div class="text-start d-block" v-for="skill in skills" :key="skill">
                    <p>{{ skill }} <span class="text-danger cursor" @click="deleteSkill(skill)">&#x2716</span></p>
                </div>              
                <button type="submit" class="btn btn-primary d-block">Submit</button>
              </form>
              </div> 
            </div>           
          </div>
        </div>
      </div>
    </form>           
  </div>
  <p>Name : {{ name }}</p>
  <p>Password: {{ password }}</p>
  <p>Position: {{ position }}</p>
  <p>Term and condition: {{ checkbox }}</p>
  <p>Skill: {{ skills }}</p>
</template>

<script>
  export default {
    app:'Home',
    data() {
      return {
        name:"",
        password:"",
        position:"",
        checkbox:"",
        skill:"",
        skills:[]        
      }
    },  
    methods: {
      typeSkill(e){
        if(e.key === ','){
          this.skills.push(this.skill);
          this.skill = "";
        }        
      },
      deleteSkill(skill){
        this.skills=this.skills.filter(chooseSkill=>{
          return chooseSkill != skill;
        })
      },
      submit(){
        console.log('submitted');
      }
    },  
  }
</script>

<style scoped>
  .cursor{
    cursor: pointer;
  }
</style>