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
  series: [75],
  chart: {
    height: props.size.height + 15,
    width: "100%",
    fontFamily: "Poppins, sans-serif",
    type: "radialBar",
    toolbar: {
      show: false,
    },
  },
  grid: {
    padding: {
      top: 0,
      bottom: 0,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "60%",
        background: "#fff",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
      },
      track: {
        background: "#f5f5f5f5",
        strokeWidth: "67%",
        margin: 0, // margin is in pixels
        // dropShadow: {
        //   enabled: true,
        //   top: -3,
        //   left: 0,
        //   blur: 4,
        //   opacity: 0.35,
        // },
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: false,
          color: "#888",
          fontSize: "14px",
        },
        value: {
          formatter: function (val: string) {
            return parseInt(val) + "%";
          },
          color: "#111",
          fontSize: "36px",
          show: true,
        },
      },
    },
  },
  colors: ["#FB4168"],
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#FB4168"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Percent"],
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
