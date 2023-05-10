<template>
  <h1>Details View</h1>
  <h3>User Id: {{ id }}</h3>
  <RouterLink class="member--id" to="/">Member List</RouterLink>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocation } from "vue-router";
export default defineComponent({
  computed: {
    id(): string {
      return String((this.$route as RouteLocation).params.id);
    },
  },
});
</script>
<style lang="scss">
.member--id {
  padding-left: 15px;
  font-style: italic;
}
.member--id:hover {
  padding-left: 15px;
  font-style: italic;
  color: gray;
}
</style>
