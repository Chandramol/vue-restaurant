<template>
  <div>
    <h1>Hi! Welcome to Your Home page</h1>
    <button @submit.prevent="" type="submit" class="btn btn-lg btn-danger" v-on:click="logOut()">Log Out</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  mehtods:{
    logOut(){
        console.log("logout");
    }
  },
  mounted() {
    let store = localStorage.getItem("userInformation");
    if (!store) {
      this.$router.push("/signup");
    }
  },
};
</script>
