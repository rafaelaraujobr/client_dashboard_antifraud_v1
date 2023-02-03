<script lang="ts" setup>
import { useAccountStore } from "../stores/modules/account";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
const { profile } = storeToRefs(useAccountStore());
const { setProfile } = useAccountStore();
const logOut = () => {
  setProfile(null);
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  router.push({ name: "SignIn" });
};
</script>
<template>
  <q-btn flat icon="sym_r_person" round v-if="profile">
    <q-menu fit>
      <q-list style="min-width: 256px">
        <q-item>
          <q-item-section>
            <q-item-label>{{ profile.name }} </q-item-label>
            <q-item-label caption lines="2">{{ profile.email }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable @click="logOut">
          <q-item-section side>
            <q-icon name="sym_r_logout" />
          </q-item-section>
          <q-item-section>Logout</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>
