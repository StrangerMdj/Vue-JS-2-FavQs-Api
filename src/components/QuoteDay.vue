<template>
  <div class="quoteday">
   <div class="row ">
      <h2>Quote of the Day </h2>
        <blockquote class="quote-day">
           <i class="fa fa-quote-left" aria-hidden="true"></i>
             {{qtd.body}}
            <h5 class="author">{{qtd.author}}</h5>   
        </blockquote>
    </div>
     
  </div>
</template>

<script>
  import axios from "axios";

    export default {
        name: "QuoteToday",
        data() {
            return {
            qtd: []
            };
        },
        created() {
            axios.get(`https://favqs.com/api/qotd`).then(response => {
            console.log(response.data.quote);
            this.qtd = response.data.quote;
            });
        }
    };
</script>
