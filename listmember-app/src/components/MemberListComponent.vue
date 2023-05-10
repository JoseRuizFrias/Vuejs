<template>
  <h1>List Component</h1>
  <div class="filter">
    <input id="filter-input" v-model="filter" />
    <button @click="setFilter">SEARCH</button>
  </div>
  <ul class="list">
    <li v-for="member in memberList" :key="member.id" class="list--member">
      <img :src="member.avatar_url" class="list--member-avatar" />
      <div class="list--member-login">{{ member.login }}</div>
      <router-link class="list--member-id" :to="`/details/${member.id}`">{{
        member.id
      }}</router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Member } from "@/types";
import { membersService } from "@/services/member";
import { mapActions, mapGetters } from "vuex";
import { FilterActionEnums } from "@/store/Filter/type";

export default defineComponent({
  data() {
    return {
      memberList: [] as Member[],
      filter: "lemoncode",
    };
  },
  computed: {
    ...mapGetters("FilterModule", {
      filterValue: "filterValue",
    }),
  },
  async created() {
    const updateFilter = this.filterValue ? this.filterValue : this.filter;
    this.filter = updateFilter;
    const response = await membersService.get(updateFilter);
    this.memberList = response.data;
  },
  methods: {
    ...mapActions("FilterModule", {
      saveFilter: FilterActionEnums.SAVE_FILTER,
    }),
    onSaveFilter(filter: string) {
      this.saveFilter(filter);
    },
    async setFilter() {
      const response = await membersService.set(this.filter);
      this.memberList = response ? response.data : [];
      await this.onSaveFilter(this.filter);
    },
  },
});
</script>
<style lang="scss">
.list {
  display: flex;
  flex-direction: column;

  .list--member {
    display: flex;
    flex-direction: row;
    padding: 5px;

    .list--member-id {
      padding-left: 15px;
      font-style: italic;
    }
    .list--member-id:hover {
      padding-left: 15px;
      font-style: italic;
      color: gray;
    }
    .list--member-login {
      padding-left: 15px;
      font-weight: bold;
    }
    .list--member-avatar {
      width: 100px;
    }
  }
}
.filter {
  display: flex;
  flex-direction: row;
  padding-left: 45px;
}
</style>
