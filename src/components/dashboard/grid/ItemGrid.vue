<script setup lang="ts">
import { defineProps } from "vue";
import type { GridWidget } from "@/types/gridstack";
import ContentGrid from "./ContentGrid.vue";
defineProps<{ item: GridWidget }>();
</script>

<template>
  <div
    class="grid-stack-item"
    :gs-w="item.w"
    :gs-h="item.h"
    :gs-x="item.x"
    :gs-y="item.y"
    :gs-min-w="item.minW"
    :gs-min-h="item.minH"
    :gs-max-w="item.maxW"
    :gs-max-h="item.maxH"
    :gs-id="item.id"
  >
    <content-grid :item="item" />
  </div>
</template>
