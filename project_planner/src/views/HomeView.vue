<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="py-4">
            <input type="text" class="searchDesign" v-model="searchResult" placeholder="Search...">
          </div>    
          <div class="home" v-if="projects.length !== 0">
            <div v-for="project in searchProjects" :key="project.id">
              <ProjectDetails :project="project" @delete="deleteItem" @updateState="updateState" @editState="editState">      
              </ProjectDetails>
            </div>     
          </div>
          <div v-if="searchProjects == ''" class="w-50 mx-auto my-5"> 
            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">             
              <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </symbol>
            </svg>             
            <div class="alert alert-danger d-flex align-items-center" role="alert">
              <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
              <div>
                 Search not found!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>      
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import ProjectDetails from '../components/ProjectDetails';

const router = useRouter();

let projects = ref([]);
let searchResult = ref('');

onMounted(async() => {    
    try {
      let api = await axios.get('http://localhost:3000/projects');
      projects.value = api.data;      
    } catch (error) {            
      console.log(error);
    }
})

let searchProjects = computed(()=>{
    return projects.value.filter(project=>{
      return project.title.includes(searchResult.value);
    })
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

<style scoped>
  .searchDesign{
    border:1px solid #2c3e50;
    border-radius: 30px;
    padding: 3px 10px;    
  }
</style>
