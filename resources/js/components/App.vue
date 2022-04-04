<template>
  <div>
    <Header />
    <main>
      <PostsList />
    </main>
  </div>
</template>

<script>
import Header from "./Header.vue";
import PostsList from "./posts/PostsList.vue";

export default {
  components: {
    Header,
    PostsList,
  },
};
</script>
