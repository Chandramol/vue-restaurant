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
        <h2>{{user}}, You can Update Restaurant here</h2>
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
      <button type="submit" v-on:click="updateRest()" class="btn btn-primary btn-lg">Update</button>
      </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
        name:'Update',
        data(){
            return{
                name:'',
                address:'',
                contact:'',
                user:''
            }
        },
        methods:{
            // updating these values
            async updateRest(){
              let update =  await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                    name:this.name,
                    address:this.address,
                    contact:this.contact
                })
                console.log(update);
                alert("Your data has been Updated...")
                this.$router.push({name:'Home'})
            }
        },
        async mounted(){
            // Pre-filled value input
            let result=await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
            console.log(result);
            this.name=result.data.name
            this.address=result.data.address
            this.contact=result.data.contact
            // console.log(this.$route.params.id)
            let store=localStorage.getItem("userInformation")
            this.user=JSON.parse(store).name
        }
    }
</script>