import Pet from '../containers/Pet/Pet'
import Species from '../containers/Species/Species'
import Weather from '../containers/Weather/Weather'
import Skill from '../containers/Skill/Skill'
import Quality from '../containers/Quality/Quality'
import PetDimension from '../containers/PetDimension/PetDimension'

import {
  Pets,
  Accessibility,
  Grade,
  Build,
  Extension,
  WbSunny
} from 'material-ui-icons'

const appRoutes = [
  {
    path: '/pet',
    sidebarName: '宠物',
    navbarName: '宠物',
    icon: Pets,
    component: Pet
  },{
    path: '/dimension',
    sidebarName: '属性',
    navbarName: '属性',
    icon: Accessibility,
    component: PetDimension
  },{
    path: '/quality',
    sidebarName: '品质',
    navbarName: '品质',
    icon: Grade,
    component: Quality
  },{
    path: '/skill',
    sidebarName: '技能',
    navbarName: '技能',
    icon: Build,
    component: Skill
  },{
    path: '/species',
    sidebarName: '类型',
    navbarName: '类型',
    icon: Extension,
    component: Species
  },{
    path: '/weather',
    sidebarName: '天气',
    navbarName: '天气',
    icon: WbSunny,
    component: Weather
  },
  { redirect: true, path: '*', to: '/pet', navbarName: 'Redirect' }
]

export default appRoutes
