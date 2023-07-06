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
      let result = await axios.get(
        ` http://localhost:3000/user?name=${this.name}&password=${this.password}`
      );
      if (result.status == 200) {
        this.$router.push("/home");
        localStorage.setItem("userInformation", JSON.stringify(result.data));
      }
      console.log(result);
      
    },
  },
};
</script>
