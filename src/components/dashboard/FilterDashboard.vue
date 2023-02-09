<template>
  <q-toolbar>
    <div class="row q-col-gutter-md">
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
        :options="['Motorola']"
        label="Rede"
        outlined
        style="width: 300px"
        bg-color="bg-white"
      />
      <q-input
        v-model="model"
        type="text"
        label="Periodo"
        style="width: 400px"
        bg-color="bg-white"
        outlined
      />
    </div>
    <q-space />
    <q-btn flat round dense icon="apps" class="q-mr-xs" />
    <q-btn flat round dense icon="more_vert" />
  </q-toolbar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const model = ref("Motorola");
</script>
