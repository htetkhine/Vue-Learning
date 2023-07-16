<template>
  <div class="home" v-if="projects.length !== 0">
    <div v-for="project in projects" :key="project.id">
      <ProjectDetails @click="deleteFunction" :project="project" @delete="deleteItem" @updateState="updateState" @editState="editState">      
      </ProjectDetails>
    </div>     
  </div>    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

import ProjectDetails from '../components/ProjectDetails';

const router = useRouter();

let name = ref('Nga Htet');
let projects = ref([]);

function deleteFunction() {
  name.value="Hein htet";
}


onMounted(async() => {
//   fetch('http://localhost:3000/projects')
//   .then(response=>{
    
//       if(response.status == 200){
//          let resp = response.json()
//           return resp
//       }else{
//           let err = "something was wrong!"
//           return err
//       }
     
//   })
//   .then(resp=>{     
//      projects.value = resp     
//   })
//   .catch(err=>{
//     console.log(err.message);
//     router.push({name:'about'})
// // console.log(err)
//   })
    
    try {
      let api = await axios.get('http://localhost:3000/projects');
      projects.value = api.data;      
    } catch (error) {      
      // errorMessage = error.message
      console.log(error);
    }
})
function deleteItem(id){    
    projects.value = projects.value.filter(deleteId=>{
        return deleteId.id != id;
    })
}
function updateState(id){
  let findProject = projects.value.find(project=>{
       return  project.id === id
  })
    findProject.complete=!findProject.complete
}

</script>
