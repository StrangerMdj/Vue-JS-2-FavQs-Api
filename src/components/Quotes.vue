<template>
  <div class="quoteday">
   <div class="row ">
       <article class="quotes-list" v-for="q in quotes">
                <p >
                    {{q.body}}<br> <span class="author-quotes"> {{q.author}}</span>
                </p> 
                <ul class="tags"> <li v-for='tag in q.tags'>{{tag}}</li></ul>
        </article>   
    </div>
     
  </div>
</template>

<script>
  import axios from "axios";
  import {HTTP} from "../http";

    export default {
        name: "Quotes",
        data() {
            return {
                quotes: []
            };
        },
        created() {
            HTTP.get(`quotes`).then(response => {
                console.log(response);
                this.quotes = response.data.quotes;
            });
        }
    };
</script>
<style>
    .quotes-list {
        margin-bottom: 20px;
        text-align: left;
        font-family: "Indie Flower", cursive;
    }
    span.author-quotes {
        font-size: 15px;
        color: #ff8600;
       
    }
    .tags li{
        background: #52884f;
        color: #fff;
        padding: 4px;
        font-size: 13px;
        text-transform: lowercase;
        border-radius: 5px;
    }
</style>
