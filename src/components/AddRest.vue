<template>
    <div>
        <nav class="d-flex justify-content-around align-items-center">
            <ul>
                <li>
                    <router-link to="/home">Home</router-link>
                </li>
                <li>
                    <router-link to="/add">Add</router-link>
                </li>
            </ul>
            <div>
                <button @submit.prevent="" type="submit" class="btn btn-danger fw-semibold" v-on:click="logOut()">Log Out</button>
             </div>
        </nav>
        <h2>Welcome {{ user }}, Your are to Add Restaurant</h2>

        <form @submit.prevent="" class="register mt-3">
      <input
        type="text"
        class="form-control m-auto border border-primary"
        placeholder="Name of Restaurant" v-model="name"
      /><br /><br />
      <input
        type="text"
        class="form-control m-auto border border-primary"
        placeholder="Enter your Address" v-model="address"
      /><br /><br />
      <input
        type="text"
        class="form-control m-auto border border-primary mb-0"
        placeholder="Enter for Contact" v-model="contact"
      /><br /><br />
      <button type="submit" v-on:click="addRest()" class="btn btn-primary btn-lg">Save</button>
      </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
        name:'Add',
        data(){
            return{
                name:"",
                address:"",
                contact:"",
                user:""
            }
        },
        methods:{
            // For adding new record and redirect to home after added
            async addRest(){
                let Addrest= await axios.post("http://localhost:3000/restaurant",{
                name:this.name,
                address:this.address,
                contact:this.contact
            })
            console.log(Addrest);
            alert("Your Restaurant successfullt Added..")
            this.$router.push({name:'Home'})
            }
        },
        mounted(){
            // It is for the show name sho logged in
            let store = localStorage.getItem("userInformation");
            this.user=JSON.parse(store).name;
        }
        
        
    }
</script>