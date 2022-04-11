<template>
  <section id="posts">
    <h2 v-if="!isLoading" class="text-center mt-2">Benvenuti sulla Home</h2>
    <PostsList @on-api-load="loading" />
  </section>
</template>

<script>
import PostsList from "../posts/PostsList.vue";
export default {
  components: {
    PostsList,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  methods: {
    loading(loading) {
      this.isLoading = loading;
    },
  },
};
</script>

<style>
</style>