<template>
  <div class="hello">
    <div v-if=!signedIn>
      <amplify-authenticator/>
    </div>
    <div v-if=signedIn>
      <amplify-sign-out/>
    </div>
  {{ signedIn }}
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
