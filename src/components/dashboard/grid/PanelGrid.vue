<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import "gridstack/dist/gridstack.min.css";
import "@/styles/gridstack.custom.sass";
import ItemGrid from "./ItemGrid.vue";
import {
  GridStack,
  type GridStackNode,
  type GridStackOptions,
} from "gridstack";
import { onMounted } from "vue";
import { dashboardComposable } from "@/composables/dashboardComposable";
const { modeEdit } = dashboardComposable();
let grid: any = null;
const items = ref<any[]>([
  {
    id: 1,
    x: 0,
    y: 0,
    w: 3,
    h: 2,
    minW: 2,
    minH: 2,
    maxW: 3,
    maxH: 2,
    widget: {
      name: "Volume de ocorrências",
      component: "CardView",
      value: "1K",
    },
  },
  {
    id: 3,
    x: 3,
    y: 0,
    w: 3,
    h: 2,
    minW: 2,
    minH: 2,
    maxW: 3,
    maxH: 2,
    widget: {
      name: "Ocorrências com Identificação",
      component: "CardView",
      value: 300,
    },
  },
  {
    id: 4,
    x: 6,
    y: 0,
    w: 3,
    h: 2,
    minW: 2,
    minH: 2,
    maxW: 3,
    maxH: 2,
    widget: {
      name: "Plataform com mais ganho de trocas",
      component: "CardView",
      value: "Awin",
    },
  },
  {
    id: 6,
    x: 9,
    y: 0,
    w: 3,
    h: 3,
    minW: 2,
    minH: 2,
    maxW: 3,
    maxH: 2,
    widget: {
      name: "Troca por Iframe 0x0",
      component: "CardView",
      value: 250,
    },
  },
  {
    id: 7,
    x: 0,
    y: 2,
    w: 6,
    h: 3,
    minW: 5,
    minH: 3,
    maxW: 12,
    maxH: 5,
    widget: {
      name: "Volume de ocorrências",
      component: "LineApexChart",
      value: 1000,
    },
  },
  {
    id: 8,
    x: 6,
    y: 2,
    w: 6,
    h: 3,
    minW: 5,
    minH: 3,
    maxW: 12,
    maxH: 5,
    widget: {
      name: "Volume de ocorrências",
      component: "BrushApexChart",
      value: 1000,
    },
  },
  {
    id: 9,
    x: 0,
    y: 5,
    w: 4,
    h: 3,
    minW: 4,
    minH: 3,
    maxW: 12,
    maxH: 5,
    widget: {
      name: "Volume de ocorrências",
      component: "BarApexChart",
    },
  },
  {
    id: 8,
    x: 4,
    y: 5,
    w: 4,
    h: 3,
    minW: 4,
    minH: 3,
    maxW: 12,
    maxH: 5,
    widget: {
      name: "Volume de ocorrências",
      component: "BarApexChart",
    },
  },
  {
    id: 8,
    x: 8,
    y: 5,
    w: 4,
    h: 3,
    minW: 4,
    minH: 3,
    maxW: 12,
    maxH: 5,
    widget: {
      name: "Volume de ocorrências",
      component: "BarApexChart",
    },
  },
]);
const initGridStack = (options: any): void => {
  grid = GridStack.init(options, ".grid-stack");
  onChangeGridStack(grid);
};
const onChangeGridStack = (gridstackInstace: GridStack): void => {
  gridstackInstace.on("change", (event: Event, GridItems: GridStackNode[]) => {
    GridItems.forEach((element: any) => {
      console.log(element);
    });
  });
};
const heightGridStack = computed<number>(
  () => window.innerHeight - (50 + 24 + 24 + 2)
);
const options = computed<GridStackOptions>(() => {
  return {
    row: 8,
    maxRow: 8,
    column: 12,
    margin: 10,
    float: true,
    removable: ".grid-stack-trash",
    dragIn: ".grid-stack-new-widget",
    cellHeight: heightGridStack.value / 8,
    resizable: {
      handles: "se, sw",
    },
    draggable: {
      handle: ".grid-stack-item__header",
    },
  };
});
watch(modeEdit, (val) => {
  grid?.setStatic(!val);
});
onMounted((): void => {
  initGridStack(options.value);
  grid.setStatic(!modeEdit.value);
});
</script>

<template>
  <q-card flat :class="modeEdit ? 'grid-stack__grid' : ''">
    <div class="grid-stack">
      <item-grid v-for="item in items" :key="item.id" :item="item" />
    </div>
  </q-card>
</template>

<style lang="sass">
.grid-stack__grid::before
  content: ""
  pointer-events: none
  background-size: calc(100% / v-bind(12)) calc(100% / v-bind(8))
  width: 100%
  height: 100%
  position: absolute
  top: 0
  left: 0
</style>
