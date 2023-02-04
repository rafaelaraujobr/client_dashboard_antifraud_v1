import { useDashboardStore } from "../stores/modules/dashboard";
import { storeToRefs } from "pinia";
export function dashboardComposable() {
  const { dashboards, modeEdit } = storeToRefs(useDashboardStore());
  const { setDashboards, setModeEdit } = useDashboardStore();
  return {
    dashboards,
    modeEdit,
    setDashboards,
    setModeEdit,
  };
}
