<template>
  <section id="post-detail">
    <div class="container">
      <h2 class="text-center mt-3">Dettaglio Post</h2>
      <div>
        <PostCard :post="post" v-if="post" />
        <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        <Loader v-if="isLoading" message="Post" />
      </div>
    </div>
  </section>
</template>


<script>
import PostCard from "../posts/PostCard.vue";
import Loader from "../Loader.vue";

export default {
  name: "PostDetail",
  components: { PostCard, Loader },
  data() {
    return {
      post: null,
      isLoading: false,
    };
  },
  methods: {
    getPost() {
      this.isLoading = true;
      axios
        .get("http://localhost:8000/api/posts/" + this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style>
</style>