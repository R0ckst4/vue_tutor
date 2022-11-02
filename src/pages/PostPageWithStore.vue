<template>
  <div>
    <!-- <h1>Posts</h1>
    <my-input v-model="searchQuery" placeholder="Title search..." />
    <div class="app__btns">
      <my-button @click="showDialog"> New Post </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPost"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div class="pB" v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div> -->

    <!-- <div class="page__wrapper">
            <div 
            v-for="pageNum in totalPages" 
            :key="pageNum" 
            class="page"
            :class="{
                'current-page': page === pageNum
            }"
            @click="changePage(pageNum)">
            {{ pageNum }}
            </div>
        </div> -->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';
import { timeouts } from 'retry';
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: 'title', name: 'Titles' },
        { value: 'body', name: 'Describtion' },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNum){
    //     this.page = pageNum;

    // },
  },
  mounted() {
    // this.fetchPosts();
    // this.$refs.observer;
  },

  computed: {},
  watch: {
    // page() {
    //     this.fetchPosts()
    // }
  },
};
</script>

<style>
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
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
.observer {
  height: 10px;
  background: rgba(0, 0, 0, 0.01);
}
</style>
