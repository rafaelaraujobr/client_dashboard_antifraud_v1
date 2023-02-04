<script lang="ts" setup>
import { ref, computed, defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
defineProps<{ miniState: boolean }>();
const currentRoute = computed<string>(
  (): string => router.currentRoute.value.path
);
interface IMenu {
  id: number;
  name: string;
  icon: string;
  route: string;
  children?: IMenu[];
}
const menuList = ref<IMenu[]>([
  {
    id: 1,
    name: "Dashboard",
    icon: "sym_r_dashboard",
    route: "/",
  },
  //   {
  //     id: 2,
  //     name: "Transactions",
  //     icon: "sym_r_receipt_long",
  //     route: "/transactions",
  //   },
  //   {
  //     id: 3,
  //     name: "Companies",
  //     icon: "sym_r_business",
  //     route: "/companies",
  //   },
  //   {
  //     id: 4,
  //     name: "Settings",
  //     icon: "sym_r_settings",
  //     route: "/settings",
  //     children: [
  //       {
  //         id: 22,
  //         name: "Users",
  //         icon: "sym_r_settings",
  //         route: "/settings/users",
  //       },
  //       {
  //         id: 23,
  //         name: "Roles",
  //         icon: "sym_r_settings",
  //         route: "/settings/roles",
  //       },
  //       {
  //         id: 24,
  //         name: "Permissions",
  //         icon: "sym_r_settings",
  //         route: "/settings/permissions",
  //       },
  //     ],
  //   },
  {
    id: 5,
    name: "About",
    icon: "sym_r_info",
    route: "/about",
  },
]);
</script>

<template>
  <q-scroll-area style="height: calc(100% - 150px)">
    <q-list>
      <template v-for="item in menuList" :key="item.id">
        <template v-if="item.children && item.children?.length > 0">
          <q-expansion-item
            :label="item.name"
            :icon="item.icon"
            header-class="q-my-xs rounded-borders q-pa-sm"
            :class="miniState || 'q-mx-md'"
          >
            <template v-for="child in item.children" :key="child.id">
              <q-item
                clickable
                v-ripple
                class="q-pl-lg q-my-xs rounded-borders q-mx-md"
                :to="{ path: child.route }"
              >
                <q-item-section>{{ child.name }}</q-item-section>
              </q-item>
            </template>
          </q-expansion-item>
        </template>
        <template v-else>
          <q-item
            clickable
            :to="{ path: item.route }"
            class="q-my-xs rounded-borders q-pa-sm"
            :class="miniState || 'q-mx-md'"
          >
            <q-item-section avatar>
              <q-icon
                :name="item.icon"
                :color="currentRoute === item.route ? '' : 'grey'"
                size="2em"
              />
            </q-item-section>
            <q-item-section
              :class="
                currentRoute === item.route ? 'text-weight-medium' : 'text-grey'
              "
              >{{ item.name }}</q-item-section
            >
          </q-item>
        </template>
      </template>
    </q-list>
  </q-scroll-area>
</template>
