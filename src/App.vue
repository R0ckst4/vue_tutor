<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Поиск..."
        />
        <div class="app__btns">
            <my-button @click="showDialog">
            Новый пост
        </my-button>
        <my-select
        v-model="selectedSort"
        :options="sortOptions"
        />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form
             @create="createPost"/>

        </my-dialog>
        
        <post-list
         :posts="sortedAndSearchedPost"
          @remove ="removePost"
          v-if="!isPostLoading"/>
        <div class="pB" v-else>Идет загрузка...</div>
       
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import axios from 'axios';
import { timeouts } from "retry";
export default {
    components: {
        PostForm, PostList
    },
    data(){
        return{
            posts: [],
            dialogVisible : false,
            isPostLoading: false,
            selectedSort: '',
            searchQuery:'',
            sortOptions: [
            {value:'title', name: 'По названию'},
            {value:'body', name: 'По содержимому'},
            ]
        }

    },
    methods: {
        createPost(post){
            this.posts.push(post);
            this.dialogVisible = false;

        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)

        },
        showDialog(){
            this.dialogVisible = true;
        },
        async fetchPosts(){
            try {
                this.isPostLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data;
                            
            } catch (e) {
                alert('ERROR')
            } finally{
                this.isPostLoading = false;                  
            }

        },
               
    },
    mounted() {
            this.fetchPosts();
        },
        computed:{
            sortedPosts(){
                return [...this.posts].sort( (post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
                })
            },
            sortedAndSearchedPost() {
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
    }


</script>

<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
.pB {
    text-align: center;
    margin: 0;
    padding: 0;
 }
 .app__btns {
    margin: 25px 0;
    display: flex;
    justify-content: space-between;

 }
</style>
