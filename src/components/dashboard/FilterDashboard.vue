<template>
  <q-toolbar>
    <div class="row q-col-gutter-md q-py-md">
      <q-select
        v-model="model"
        :options="['Motorola']"
        label="Campanha"
        outlined
        style="width: 300px"
        bg-color="bg-white"
      />
      <q-select
        v-model="model"
        :options="['Awing']"
        label="Rede"
        outlined
        style="width: 300px"
        bg-color="bg-white"
      />
      <input-date-range
        :v-model="date"
        @update:model-value="
          (val: string) => {
            date = val;
          }
        "
      />
    </div>
    <q-space />
    <q-btn flat round dense icon="apps" class="q-mr-xs" />
    <q-btn flat round dense icon="more_vert" />
  </q-toolbar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import InputDateRange from "../widgets/InputDateRange.vue";
const model = ref<string>("Motorola");
const date = ref<string>("02/01/2023 - 02/28/2023");
</script>
