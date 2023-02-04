<template>
  <div ref="chartRef"></div>
  <div ref="chartLineRef"></div>
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
const generateDayWiseTimeSeries = (baseval: any, count: any, yrange: any) => {
  let i = 0;
  let series = [];
  while (i < count) {
    let x = baseval;
    let y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
};
const data = generateDayWiseTimeSeries(new Date("19 Jun 2017").getTime(), 115, {
  min: 30,
  max: 90,
});
const chartRef = ref<any>(null);
const chartLineRef = ref<any>(null);
const chart = ref<any>(null);
const chartLine = ref<any>(null);
const options = computed(() => ({
  series: [{ data }],
  chart: {
    id: "chart2",
    type: "line",
    fontFamily: "Poppins, sans-serif",
    height: (props.size.height - 22) / 2,
    width: "100%",
    toolbar: {
      autoSelected: "pan",
      show: false,
    },
  },
  colors: ["#546E7A"],
  stroke: {
    width: 3,
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: "datetime",
  },
}));
const optionsLine = computed(() => ({
  series: [{ data }],
  chart: {
    id: "chart1",
    fontFamily: "Poppins, sans-serif",
    height: (props.size.height - 22) / 2,
    width: "100%",
    type: "area",
    toolbar: {
      autoSelected: "pan",
      show: false,
    },
    brush: {
      target: "chart2",
      enabled: false,
    },
    selection: {
      enabled: true,
      xaxis: {
        min: new Date("19 Jun 2017").getTime(),
        max: new Date("14 Aug 2017").getTime(),
      },
    },
  },
  colors: ["#008FFB"],
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
    },
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    tickAmount: 2,
  },
}));

watch(props.size, () => {
  if (chart.value) chart.value.updateOptions(options.value);
  if (chartLine.value) chartLine.value.updateOptions(optionsLine.value);
});
onMounted(() => {
  setTimeout(() => {
    chart.value = new ApexCharts(chartRef.value, options.value);
    chartLine.value = new ApexCharts(chartLineRef.value, optionsLine.value);
    if (chart.value) chart.value.render();
    if (chartLine.value) chartLine.value.render();
  }, 500);
});
onDeactivated(() => {
  if (chart.value) chart.value.destroy();
  if (chartLine.value) chartLine.value.destroy();
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
