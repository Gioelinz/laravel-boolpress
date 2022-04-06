<template>
  <div :class="`alert alert-${type || 'danger'}`" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: ["type"],
};
</script>

<style>
</style>