<template>
  <div>
    <Header />
    <main>
      <router-view> </router-view>
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
