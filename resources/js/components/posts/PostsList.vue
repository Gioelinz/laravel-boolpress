<template>
  <div class="container">
    <h1 class="mt-3">Posts</h1>
    <Loader v-if="isLoading" />
    <div class="posts" v-else>
      <div class="row" v-if="posts.length">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <h4 v-else>Non ci sono posts</h4>
    </div>
  </div>
</template>

<script>
import PostCard from "./PostCard.vue";
import Loader from "../Loader.vue";

export default {
  name: "PostsList",
  components: {
    PostCard,
    Loader,
  },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    getPosts() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts")
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          console.log("Call finished");
          this.isLoading = false;
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