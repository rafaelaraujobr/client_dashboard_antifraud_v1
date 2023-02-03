import { createRouter, createWebHistory, type Router } from "vue-router";
import routes from "./routes";
import authGuard from "./authGuard";
const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(authGuard);

export default router;
