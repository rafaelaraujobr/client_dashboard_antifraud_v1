<template>
  <q-table
    :rows="data"
    :columns="columns"
    row-key="name"
    :pagination="{ rowsPerPage: 9 }"
  />
</template>
<script lang="ts" setup>
import { ref } from "vue";
const data = ref<any[]>([
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
  {
    url: "https://cdn.quasar.dev/img/mountains.jpg",
    campaign: "Motorola",
    rede: "Awing",
    channel: "56465",
    created: "2021-01-01",
  },
]);

const columns = ref<any[]>([
  {
    name: "url",
    label: "Url",
    field: "url",
    align: "left",
    sortable: true,
  },
  {
    name: "campaign",
    label: "Campaign",
    field: "campaign",
    align: "left",
    sortable: true,
  },
  {
    name: "rede",
    label: "Rede",
    field: "rede",
    align: "left",
    sortable: true,
  },
  {
    name: "channel",
    label: "Channel",
    field: "channel",
    align: "left",
    sortable: true,
  },
  {
    name: "created",
    label: "Created",
    field: "created",
    align: "left",
    sortable: true,
  },
]);
</script>
