<template>
  <div>
    <h1>Posts</h1>
    <my-input v-model="searchQuery" placeholder="Title search..." />
    <div class="app__btns">
      <my-button @click="showDialog"> New Post </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
    <div class="pB" v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

import axios from 'axios';
import { timeouts } from 'retry';
import { ref } from 'vue';
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'Titles' },
        { value: 'body', name: 'Describtion' },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsloading } = usePosts('10');
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      totalPages,
      isPostsloading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
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
