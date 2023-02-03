import { defineStore } from "pinia";
import { ref } from "vue";

export const useAccountStore = defineStore("account", () => {
  const profile = ref<any>();
  const setProfile = (data: any) => {
    profile.value = data;
  };
  return {
    profile,
    setProfile,
  };
});
