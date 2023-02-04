<script setup lang="ts">
// import LMap from "./apps/LMap.vue";
// import BarChart from "./apps/BarChart.vue";
// import DoughnutChart from "./apps/DoughnutChart.vue";
// import LineChart from "./apps/LineChart.vue";
import LineApexChart from "../widgets/LineDateApexChart.vue";
import BarApexChart from "../widgets/BarApexChart.vue";
import BrushApexChart from "../widgets/BrushApexChart.vue";

import CardView from "../widgets/CardView.vue";
import { ref, defineProps } from "vue";
import type { GridWidget } from "@/types/gridstack";

defineProps<{ item: GridWidget }>();
const size = ref({ width: 0, height: 0 });
const onResize = (value: any) => {
  size.value.width = value.width;
  size.value.height = value.height - 42;
};

const components: any = {
  CardView,
  LineApexChart,
  BarApexChart,
  BrushApexChart,
};

// const components = {
//   LMap, // Leaflet Map
//   BarChart, // Chart.js Bar Chart
//   DoughnutChart, // Chart.js Doughnut Chart
//   LineChart, // Chart.js Line Chart
//   LineApexChart, // Vue Map Chart
// };
</script>

<template>
  <q-card class="grid-stack-item-content" flat bordered>
    <q-resize-observer @resize="onResize" />
    <q-toolbar
      class="grid-stack-item__header non-selectable"
      style="min-height: 40px"
    >
      <q-toolbar-title class="text-subtitle2">
        {{ item.widget.name }}
      </q-toolbar-title>
      <q-btn icon="sym_r_more_horiz" dense unelevated flat />
    </q-toolbar>
    <component
      :is="components[item?.widget.component]"
      :size="size"
      :item="item"
    />
  </q-card>
</template>
