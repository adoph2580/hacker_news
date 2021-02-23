<template>
    <div>
      <div v-for="job in jobs">{{job.title}}</div>
    </div>
</template>

<script>
import{fetchJobslist} from '../api/index.js'

export default {
  data(){
    return{
      jobs:[]
    }
  },
  created(){
    fetchJobslist()
    .then(response=> this.jobs = response.data)
    .catch(error=>console.log(error));
  }
}
</script>

<style>

</style>