<template>
    <div>
      <div v-for="item in ask">{{item}}</div>
    </div>
</template>

<script>
import{fetchAsklist} from '../api/index.js'

export default {
  data(){
    return{
      ask:[]
    }
  },
  created(){
    var vm=this;
    fetchAsklist()
    .then(function(response){
      console.log(response);
      vm.ask=response.data;
    })
    .catch(function(error){
      console.log("error");
    })
  },
}

</script>

<style>

</style>