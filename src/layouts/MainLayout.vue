<template>
  <q-layout view="lHr Lpr lFf">
    <q-header class="bg-transparent text-dark" bordered>
      <q-toolbar>
        <q-btn
          flat
          round
          icon="sym_r_notes"
          @click="toggleLeftDrawer"
          color="secondary"
        />

        <q-toolbar-title>
          <!-- <q-img
            :src="require('@/assets/logo.png')"
            spinner-color="primary"
            width="128px"
            spinner-size="82px"
          /> -->
        </q-toolbar-title>
        <div class="q-gutter-sm">
          <q-btn round icon="sym_r_notifications" flat />
          <account-menu />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      show-if-above
      :mini="miniState"
      :mini-width="50"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      class="text-white"
      style="
        background: rgb(251, 65, 104);
        background: linear-gradient(
          162deg,
          rgba(251, 65, 104, 1) 0%,
          rgba(251, 65, 104, 0.3477766106442577) 100%
        );
      "
    >
      <q-item class="q-mb-md">
        <q-item-section avatar>
          <img
            :src="
              require('@/assets/images/dynaton__logo-horizontal-white-02.png')
            "
            v-show="!miniState"
            style="height: 30px"
          />
          <img
            :src="require('@/assets/images/dynaton__logo-solo-white-big.png')"
            v-show="miniState"
            style="height: 30px"
          />
        </q-item-section>
      </q-item>
      <main-menu :miniState="miniState" />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AccountMenu from "../components/AccountMenu.vue";
import MainMenu from "../components/MainMenu.vue";
const leftDrawerOpen = ref<boolean>(false);
const miniState = ref<boolean>(true);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
