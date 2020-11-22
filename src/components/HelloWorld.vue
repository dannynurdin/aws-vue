<template>
  <div class="hello">
    <!-- <div v-if=!signedIn>
      <amplify-authenticator/>
    </div>
    <div v-if=signedIn>
      <amplify-sign-out/>
    </div> -->
    <h1>Serverless Attendance Beta Vesion</h1>
    <h3>v 0.1</h3>
    <h4>How To Add Face into Database</h4>
    <h5>1. goto <router-link to="/camera">Camera</router-link> </h5>
    <h5>2. take selfie with face in the corner camera view</h5>
    <h5>3. fill in the name and group fields (as long as it's okay) </h5>
    <h5>4. press send picture (dimohon bersabar) estimated loading up to 30s</h5>
    <br><br>
    <h5>How To take Absent</h5>
    <h5>1. goto <router-link to="/absent">Take Absent</router-link> </h5>
    <h5>2. take selfie with face in corner camera view</h5>
    <h5>3. press save pivture (mohon bersabar) estimated loading up to 30s</h5>

    

  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    // signedIn: {
    //   type: Boolean,
    //   default: true
    // }
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn
    }
  },
  created() {
    this.findUser();

    AmplifyEventBus.$on('authState', info => {
      if (info === "signedIn") {
        this.findUser();
      } else {
        this.$store.state.signedIn = false;
        // this.signedIn = false;
      }
    })
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.$store.state.signedIn = true;
        this.$store.state.user = user;
        // this.signedIn = true;
        console.log(user)

      } catch(err) {
        this.$store.state.signedIn = false;
        this.$store.state.user = null;
        // this.signedIn = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
