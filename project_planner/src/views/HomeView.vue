<template>
  <div class="home">
    <van-button type="primary">Primary</van-button>
    <ProjectDetails></ProjectDetails>     
  </div>
</template>

<script>
import ProjectDetails from '../components/ProjectDetails'
export default {
  name: 'HomeView',
  components: {
    ProjectDetails,    
  }
}
</script>
