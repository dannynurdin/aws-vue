<template>
  <div class="about">
    <h1>This is a Server info</h1>
    <p>{{ info.data }}</p>
  </div>
</template>

<script>
import Axios from "axios"
export default {
  data() {
    return{
      info: ''
    }
  },
  mounted() {
    if(this.$store.state.user) {
      const jwt = this.$store.state.user
      .getSignInUserSession()
      .getIdToken()
      .getJwtToken();

      const config =  {
        headers: {
          authorization: jwt
        }
      }

      Axios.get('https://pjgxudrd32.execute-api.ap-southeast-1.amazonaws.com/v1/m', config)
      .then(val=> this.info = val)
      .catch(err => console.log(err))
    }
  }
}
</script>