import "./styles/quasar.sass";
import iconSet from "quasar/icon-set/material-symbols-rounded";
import lang from "quasar/lang/pt-BR.js";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";
import { AddressbarColor, Loading, QSpinnerDots } from "quasar";
// To be used on app.use(Quasar, { ... })
export default {
  plugins: { AddressbarColor, Loading },
  config: {
    loading: {
      spinner: QSpinnerDots,
      spinnerColor: "primary",
      spinnerSize: 140,
      backgroundColor: "white",
    },
  },
  lang: lang,
  iconSet: iconSet,
};
