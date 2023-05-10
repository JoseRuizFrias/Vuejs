<template>
  <title>ListView</title>
  <MemberListComponent />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MemberListComponent from "@/components/MemberListComponent.vue";

export default defineComponent({
  components: {
    MemberListComponent,
  },
});
</script>
