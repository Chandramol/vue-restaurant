<template>
  <div>
    <img class="logo" src="../assets/Images/restaurant-logo.jpg" alt="" />
    <h1>Log In</h1>
    <form @submit.prevent="" class="register mt-3">
      <input
        type="text"
        class="form-control m-auto border border-primary"
        placeholder="Enter your Name"
        v-model="name"
      /><br /><br />
      <input
        type="password"
        class="form-control m-auto border border-primary mb-0"
        placeholder="Enter your Password"
        v-model="password"
      /><br /><br />
      <button type="submit" v-on:click="login()" class="btn btn-primary btn-lg">
        Log In</button
      ><br /><br />

      <router-link :to="'/signup'" class="btn btn-lg btn-warning"
        >Sign Up</router-link
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // Getting data and matching it from api and if matched then user can able to go home page
      let result = await axios.get(
        ` http://localhost:3000/user?name=${this.name}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length>0) {
        this.$router.push({path:"/home"});
        localStorage.setItem("userInformation", JSON.stringify(result.data[0]));
      }
      console.log(result);
    }
  },
  mounted(){
    let store=localStorage.getItem("userInformation");
    if(store){
        this.$router.push({name:'Home'});
    }
  }
};
</script>
