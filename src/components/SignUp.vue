<template>
  <div>
    <img class="logo" src="../assets/Images/restaurant-logo.jpg" alt="" />
    <h1>Sign Up</h1>
    <form @submit.prevent="" class="register mt-3">
      <input
        type="text"
        class="form-control m-auto border border-primary"
        placeholder="Enter your Name" v-model="name"
      /><br /><br />
      <input
        type="email"
        class="form-control m-auto border border-primary"
        placeholder="Enter your Email" v-model="email"
      /><br /><br />
      <input
        type="password"
        class="form-control m-auto border border-primary mb-0"
        placeholder="Enter your Password" v-model="password"
      /><br /><br />
      <button type="submit" v-on:click="signUp" class="btn btn-primary btn-lg">Sign Up</button><br><br>
      
        <router-link :to="'/login'" class="btn btn-lg btn-warning">Log In</router-link>
      
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data(){
    return {
        name:'',
        email:'',
        password:''
    }
  },
  methods:{
    // we are using async await to handle promise and api
    async signUp(){
        console.log(this.name,this.email,this.password,"bhjsh");
        let result = await axios.post(" http://localhost:3000/user",{
            name:this.name,
            email:this.email,
            password:this.password
        });
        console.log(result);

        if(result.status==201){
            // we are redirecting to home page if status success 
            alert("You are succesfully registred...")
            // this.$router.push('/home');
            localStorage.setItem("userInformation",JSON.stringify(result.data));
        }
    }
  },
  mounted(){
    // we are getting signup details from localStorage and if there is any details then only can go to home page otherwise not
    let store=localStorage.getItem("userInformation");
    if(store){
        this.$router.push({name:'Home'});
    }
  }
};
</script>

<style>

</style>
