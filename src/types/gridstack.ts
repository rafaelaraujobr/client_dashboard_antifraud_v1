import type { GridStackWidget } from "gridstack";
export interface GridWidget extends GridStackWidget {
  widget: {
    name?: string;
    icon?: string;
    component: string;
    value?: any;
  };
}
