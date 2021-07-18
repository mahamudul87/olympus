import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/pages/dashboard.vue";

const routes= [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
