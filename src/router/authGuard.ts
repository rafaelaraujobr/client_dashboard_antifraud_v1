import { useAccountStore } from "../stores/modules/account";
import { storeToRefs } from "pinia";
import { Loading } from "quasar";
import { getProfileService } from "../services/accountServices";
export default async (to: any) => {
  const token = localStorage.getItem("token");
  const { setProfile } = useAccountStore();
  const { profile } = storeToRefs(useAccountStore());
  const getProfile = async (): Promise<any> => {
    try {
      Loading.show();
      const { status, data } = await getProfileService();
      if (status === 200) return data;
    } catch (error) {
      return false;
    } finally {
      Loading.hide();
    }
  };
  if (await to.matched.some((record: any) => record.meta.requiresAuth)) {
    if (!token) return "signin";
    if (!profile.value) {
      const data = await getProfile();
      if (data) setProfile(data);
      else {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        return "signin";
      }
    }
    return true;
  } else {
    if (token) return "";
    else return true;
  }
};
