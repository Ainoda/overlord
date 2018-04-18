import App from "../containers/App/App";
import Pet from "../containers/Pet/Pet";

import {
  Pets,
  Accessibility,
  Grade,
  Build,
  Extension,
  WbSunny
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/pet",
    sidebarName: "宠物",
    navbarName: "宠物",
    icon: Pets,
    component: Pet
  },
  {
    path: "/dimension",
    sidebarName: "属性",
    navbarName: "属性",
    icon: Accessibility,
    component: App
  },
  {
    path: "/quality",
    sidebarName: "品质",
    navbarName: "品质",
    icon: Grade,
    component: App
  },
  {
    path: "/skill",
    sidebarName: "技能",
    navbarName: "技能",
    icon: Build,
    component: App
  },
  {
    path: "/species",
    sidebarName: "类型",
    navbarName: "类型",
    icon: Extension,
    component: App
  },
  {
    path: "/weather",
    sidebarName: "天气",
    navbarName: "天气",
    icon: WbSunny,
    component: App
  },
  { redirect: true, path: "/", to: "/pet", navbarName: "Redirect" }
];

export default appRoutes;
