<template>
  <div>
    <Header />
    <h1>Hi {{user}} ! Welcome to Your Home page</h1>
    <div class="col-8 mx-auto mt-5">
      <table class="table table-striped">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Action</th>
      </tr>
      <tr v-for="val of restaurants" :key="val">
        <td>{{val.id}}</td>
        <td>{{val.name}}</td>
        <td>{{val.address}}</td>
        <td>{{val.contact}}</td>
        <td>
          <button class="btn btn-outline-info"><router-link :to="'/update/'+val.id">Update</router-link></button>
          <button class="btn btn-outline-danger" v-on:click="deleteRest(val.id)">Delete</button>
        </td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
  name: "Home",
  data(){
    return{
      user:"",
      restaurants:[]
    }
  },
  components:{
    Header
  },
  methods:{
   async deleteRest(id){
      let result=await axios.delete("http://localhost:3000/restaurant/"+id)
      if(result.status==200){
        alert("Your data deleted");
        // This is for refresh page
        this.loasData()
      }
    },
   async loasData(){
    // we are getting signup details from localStorage and if there is no details then only can go to login page otherwise not, if person logged in then they can  not access login page without logout
      let store = localStorage.getItem("userInformation");
      if (!store) {
         // this.$router.push({name:"SignUp"});
        this.$router.push({name:"Login"});
      }
      // we are taking name from localStorage who logged in and showing name on display
      this.user=JSON.parse(store).name
      let restaurant= await axios.get("http://localhost:3000/restaurant")
      console.log(restaurant.data);
      this.restaurants=restaurant.data
    }
  },
  mounted() {
    // we are refreshing page from this
  this.loasData()   
  },
};
</script>

<style>
  table tr td,th{
    border: 2px solid gray;
    padding: 10px;
    font-size: 18px;
    width: 250px;
  }
</style>
