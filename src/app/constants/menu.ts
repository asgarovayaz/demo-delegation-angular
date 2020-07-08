export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
}

const data: IMenuItem[] = [
  {
    id: 'home',
    icon: 'iconsminds-home',
    label: 'menu.home',
    to: '/home'
  },
  {
    id: 'projects',
    icon: 'iconsminds-windmill',
    label: 'menu.projects',
    to: '/projects'
  },
  {
    id: 'rules',
    icon: 'iconsminds-gymnastics',
    label: 'menu.rules',
    to: '/rules'
  },
  {
    id: 'faq',
    icon: 'simple-icon-question',
    label: 'menu.faq',
    to: '/faq'
  }
];
export default data;
