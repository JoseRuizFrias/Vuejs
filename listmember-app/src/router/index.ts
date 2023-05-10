import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ListView from "../views/ListView.vue";
import DetailsView from "../views/DetailsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "List",
    component: ListView,
  },
  {
    path: "/details/:id",
    name: "details",
    component: DetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
