import { defineStore } from "pinia";
import { ref } from "vue";

export const useDashboardStore = defineStore("dashboard", () => {
  const dashboards = ref<any[]>();
  const modeEdit = ref<boolean>(true);
  const setModeEdit = (data: boolean) => {
    modeEdit.value = data;
  };
  const setDashboards = (data: any) => {
    dashboards.value = data;
  };
  return {
    dashboards,
    modeEdit,
    setDashboards,
    setModeEdit,
  };
});
