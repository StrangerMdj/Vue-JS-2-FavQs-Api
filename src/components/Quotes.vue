<template>
  <div class="quoteday">
   <div class="row ">
       <article class="quotes-list" v-for="q in quotes">
            <p >
                {{q.body}}<br> <span class="author-quotes"> {{q.author}}</span>
            </p> 
            <ul class="tags"> <li v-for='tag in q.tags'  v-bind:class="tag" > {{tag}}</li></ul>
        </article>   
    </div>
     
  </div>
</template>

<script>
    import axios from "axios";
    import { HTTP } from "../http";

    export default {
        name: "Quotes",
        data() {
            return {
                quotes: [],
                tagsList:[],
                isTag: false,
                _tagName : ''
            };
        },
        created() {
            HTTP.get(`quotes`).then(response => {
                this.isTag = false
                this.quotes = response.data.quotes;
                console.log("changed")
            });
            HTTP.get(`typeahead`).then(response => {
                console.log(response);
                this.tagsList = response.data.tags
            });
        },
        methods: {
            filterTag: function (tag) {
                HTTP.get(`quotes/?filter=${tag}&type=tag`).then(response => {
                    this.isTag = true;
                    this._tagName = tag; 
                    this.quotes = response.data.quotes;
                });
            }
        }
    };
</script>
<style>
.quotes-list {
  margin-bottom: 20px;
  text-align: left;
  font-family: "Indie Flower", cursive;
}
.quotes-list p {
  margin-bottom: 0;
}
span.author-quotes {
  font-size: 15px;
  color: #ff8600;
}
.tags li {
  background: #52884f;
  color: #fff;
  padding: 4px;
  font-size: 11px;
  text-transform: lowercase;
  border-radius: 5px;
  font-family: "Josefin Sans", sans-serif;
  margin-left: 0;
}
.tags {
  margin-top: 0;
}
.quoteday{
    text-align: justify;
}
.tag-finder {
    color: firebrick;
}
 
</style>
