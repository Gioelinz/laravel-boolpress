<template>
  <div class="col-12">
    <div class="card border-info my-3">
      <div class="card-body text-info">
        <h5 class="card-title text-success">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.description }}
        </p>
      </div>
      <div class="card-footer">{{ post.updated_at }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: ["post"],
};
</script>

<style>
</style>