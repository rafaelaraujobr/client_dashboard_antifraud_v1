<template>
  <div
    flat
    :style="{ height: size?.height + 'px', color: '#444444' }"
    class="flex flex-center text-h2 text-weight-bold"
  >
    {{ item?.widget.value }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import type { GridWidget } from "@/types/gridstack";
defineProps({
  size: {
    type: Object as PropType<{ width: number; height: number }>,
    require: true,
  },
  item: {
    type: Object as PropType<GridWidget>,
    require: true,
  },
});
</script>
