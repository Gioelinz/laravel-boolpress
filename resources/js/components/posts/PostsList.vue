<template>
  <div class="container">
    <h1 v-if="!isLoading" class="mt-3">Posts</h1>
    <Pagination
      v-if="!isLoading"
      :current-page="currentPage"
      :last-page="lastPage"
      @on-page-change="getPosts"
    />
    <Loader v-if="isLoading" message="Posts" />
    <div class="posts" v-else>
      <div class="row" v-if="posts.length">
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
          visible-link="true"
        />
      </div>
      <h4 v-else>Non ci sono posts</h4>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Loader from "../Loader.vue";
import Pagination from "../Pagination.vue";

export default {
  name: "PostsList",
  components: {
    PostCard,
    Loader,
    Pagination,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
      currentPage: 1,
      lastPage: undefined,
    };
  },
  methods: {
    getPosts(page = 1) {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts?page=" + page)
        .then((res) => {
          this.posts = res.data.data;
          this.currentPage = res.data.current_page;
          this.lastPage = res.data.last_page;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          console.log("Call finished");
          this.isLoading = false;
          this.$emit("on-api-load", false);
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
</style>