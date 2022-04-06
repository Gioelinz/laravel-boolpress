<template>
  <div class="alert alert-danger" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["message"],
};
</script>

<style>
</style>