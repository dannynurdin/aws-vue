<template>
    <div>
        this is record view
        <h5 v-for="record in records" :key="record.id">
            {{ record.name }} | {{ record.datetime }}
        </h5>
    </div>
</template>

<script>
export default {
    data () {
    return {
      records: null,
      repos: null
    }
  },
  mounted () {
      const axios = require('axios')

      axios
      .get('https://osu0259zlj.execute-api.ap-southeast-1.amazonaws.com/dev/absent')
      .then(response => (this.records = response.data))
        // const api_url = "https://osu0259zlj.execute-api.ap-southeast-1.amazonaws.com/dev/absent"; 
  
        // // Defining async function 
        // async function getapi(url) { 
            
        //     // Storing response 
        //     const response = await fetch(url); 
            
        //     // Storing data in form of JSON 
        //     var data = await response.json();
             
        //     console.log(data); 
            
        // } 
        // // Calling that async function 
        // getapi(api_url);
    }
}
</script>