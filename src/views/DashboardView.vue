<script setup lang="ts">
import PanelGrid from "../components/dashboard/grid/PanelGrid.vue";
import { ref } from "vue";
import { dashboardComposable } from "../composables/dashboardComposable";
import FilterDashboard from "../components/dashboard/FilterDashboard.vue";
const { modeEdit, setModeEdit } = dashboardComposable();
const draggingFab = ref<boolean>(false);
const fabPos = ref<[number, number]>([18, 18]);
const moveFab = (ev: any) => {
  draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
  fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y];
};
</script>

<template>
  <q-page padding class="wrapper">
    <filter-dashboard />
    <panel-grid />
    <q-page-sticky position="bottom-right" :offset="fabPos">
      <q-btn
        fab
        icon="sym_r_edit"
        color="black"
        :disable="draggingFab"
        v-touch-pan.prevent.mouse="moveFab"
        @click="setModeEdit(!modeEdit)"
      />
    </q-page-sticky>
  </q-page>
</template>
