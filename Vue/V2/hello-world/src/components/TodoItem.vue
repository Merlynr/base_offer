<template>
  <div>
    <li>{{ title }}</li>
    <button v-on:click="$emit('child-text', title)">emit</button>
  </div>
</template>
<script>
export default {
  name: "TodoItem",
  props: ["title"],
  data() {
    return {};
  },
};
</script>
