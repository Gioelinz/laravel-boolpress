<template>
  <div>
    <Header />
    <main>
      <Transition name="fade">
        <router-view> </router-view>
      </Transition>
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

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
