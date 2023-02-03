<script setup lang="ts">
import { loginService } from "../../services/accountServices";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const email = ref("rflaraujodev@gmail.com");
const password = ref("c5Jg0N$8KD1I");
const loading = ref(false);
const showPassword = ref(false);
const onSubmit = async (e: Event) => {
  loading.value = true;
  try {
    const { status, data } = await loginService(email.value, password.value);
    if (status === 200 || status === 201) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      router.push({ name: "Dashboard" });
    }
    e.preventDefault();
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <q-page class="flex flex-center">
    <q-form @submit="onSubmit" class="wrapper"
      ><q-card flat bordered class="q-pa-lg">
        <q-card-section class="row justify-center">
          <q-img
            :src="require('@/assets/images/dynaton__logo-solo-small.png')"
            spinner-color="primary"
            width="82px"
            spinner-size="82px"
          />
        </q-card-section>
        <q-card-section class="row justify-center">
          <span class="text-h6">dashboard antifraud v2.0</span>
        </q-card-section>
        <q-card-section>
          <div>
            <span class="text-body2 q-ml-xs">Email</span>
            <q-input
              v-model="email"
              type="email"
              outlined
              :rules="[(val: any) => !!val || 'email is required']"
            />
          </div>
          <div>
            <span class="text-body2 q-ml-xs">Senha</span>
            <q-input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              outlined
              :rules="[(val: any) => !!val || 'password is required']"
              @keyup.enter="onSubmit"
            >
              <template v-slot:append>
                <q-icon
                  class="cursor-pointer"
                  :name="
                    showPassword ? 'sym_r_visibility_off' : 'sym_r_visibility'
                  "
                  @click="showPassword = !showPassword"
                />
              </template>
            </q-input>
            <router-link
              to="/forgot-password"
              class="text-weight-medium row justify-end mouse-pointer text-primary"
              style="text-decoration: none; margin-top: -15px"
            >
              Esqueceu a senha?
            </router-link>
          </div>
        </q-card-section>
        <q-card-section>
          <div>
            <q-btn
              label="Entrar"
              type="submit"
              color="primary"
              unelevated
              no-caps
              class="full-width"
              :loading="loading"
            />
          </div>
        </q-card-section>
      </q-card>
      <div class="text-center q-mt-md text-caption">
        © 2023, made with
        <q-icon name="favorite" class="heart" /> by Team Dynaton
      </div>
    </q-form>
  </q-page>
</template>

<style scoped>
.wrapper {
  min-width: 300px;
  width: 448px;
}
</style>
