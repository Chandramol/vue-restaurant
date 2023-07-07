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
        
    </div>
</template>

<script>
    export default{
        name:'Header',
        methods:{
            logOut(){
                localStorage.clear();
                this.$router.push({name:'Login'})
            }
        }
    }
</script>

<style>
    ul{
        display: flex;
        justify-content: center;
        list-style: none;
    }
    ul li a{
        text-decoration: none;
        background-color: aqua;
        padding: 10px;
        margin: 5px;
        border-radius: 10px;
        color: #fff;
        font-size: 20px;
        transition: all 0.5s;
    }
    ul li a:hover{
        background-color: gray;
    }
</style>