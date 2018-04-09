import App from "../containers/App/App.js";

import {
  Pets
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/pet",
    sidebarName: "宠物",
    navbarName: "宠物",
    icon: Pets,
    component: App
  },
  {
    path: "/dimension",
    sidebarName: "属性",
    navbarName: "属性",
    icon: Pets,
    component: App
  },
  {
    path: "/quality",
    sidebarName: "品质",
    navbarName: "品质",
    icon: Pets,
    component: App
  },
  {
    path: "/skill",
    sidebarName: "技能",
    navbarName: "技能",
    icon: Pets,
    component: App
  },
  {
    path: "/species",
    sidebarName: "类型",
    navbarName: "类型",
    icon: Pets,
    component: App
  },
  {
    path: "/weather",
    sidebarName: "天气",
    navbarName: "天气",
    icon: Pets,
    component: App
  },
  { redirect: true, path: "/", to: "/pet", navbarName: "Redirect" }
];

export default appRoutes;
