<template>
  <q-input
    v-model="model"
    type="text"
    label="Periodo"
    style="width: 300px"
    bg-color="bg-white"
    outlined
    readonly
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer" color="primary">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="date" range @range-end="setDate"></q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts" setup>
import { defineProps, ref, defineEmits, watch } from "vue";
import moment from "moment";
import { QDate } from "quasar";
const props = defineProps({ vModel: { type: String, require: false } });
const qDateProxy = ref<any>(null);
const model = ref<string>(props.vModel || "");
const date = ref<{ from: string; to: string } | undefined>();
const emit = defineEmits(["update:model-value"]);
const dateToString = (date: { from: Date; to: Date }) => {
  return `${moment(date.from).format("L")} - ${moment(date.to).format("L")}`;
};

watch(props, (val) => {
  model.value = val.vModel || "";
});
const initDate = (vModel: string | undefined) => {
  if (vModel) {
    date.value = {
      from: moment(vModel?.split(" - ")[0], "L").format("YYYY/MM/DD"),
      to: moment(vModel?.split(" - ")[1], "L").format("YYYY/MM/DD"),
    };
  }
};
initDate(props.vModel);

interface DateRange {
  from: {
    year: number;
    month: number;
    day: number;
  };
  to: {
    year: number;
    month: number;
    day: number;
  };
}

const setDate = (date: DateRange | null) => {
  if (date && date.from && date.to) {
    qDateProxy.value.hide();
    const dateObject = {
      from: new Date(date.from.year, date.from.month - 1, date.from.day),
      to: new Date(date.to.year, date.to.month - 1, date.to.day),
    };
    emit("update:model-value", dateToString(dateObject));
  }
};
</script>
<style>
.q-field--outlined.q-field--readonly .q-field__control:before {
  border-style: solid;
}
</style>
