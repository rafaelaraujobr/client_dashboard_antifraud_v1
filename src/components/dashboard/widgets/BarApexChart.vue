<template>
  <div ref="chartRef"></div>
</template>
<script lang="ts" setup>
import ApexCharts from "apexcharts";
import {
  PropType,
  ref,
  onMounted,
  computed,
  watch,
  onDeactivated,
  defineProps,
} from "vue";
const props = defineProps({
  size: {
    type: Object as PropType<{ width: number; height: number }>,
    required: true,
  },
});
const chartRef = ref<any>(null);
const chart = ref<any>(null);
const options = computed(() => ({
  series: [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ],
  chart: {
    type: "bar",
    fontFamily: "Poppins, sans-serif",
    height: props.size.height - 28,
    width: "100%",
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      dataLabels: {
        position: "top", // top, center, bottom
      },
    },
  },
  colors: ["#FB4168"],
  dataLabels: {
    enabled: true,
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colorTo: "#BED1E6",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
}));
watch(props.size, () => {
  if (chart.value) chart.value.updateOptions(options.value);
});
onMounted(() => {
  setTimeout(() => {
    chart.value = new ApexCharts(chartRef.value, options.value);
    if (chart.value) chart.value.render();
  }, 500);
});
onDeactivated(() => {
  if (chart.value) chart.value.destroy();
});
</script>

<style>
.apexcharts-toolbar {
  padding: 0 10px 2px;
}
.apexcharts-zoom-icon {
  display: none;
}
.apexcharts-menu-icon {
  margin-left: 8px;
}
</style>
