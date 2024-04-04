import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineCog,
  HiQuestionMarkCircle,
} from 'react-icons/hi';
import { AiOutlineApartment } from 'react-icons/ai';
import { MdOutlineHomeRepairService } from 'react-icons/md';

export const DashboardTop = [
  {
    key: 'Home',
    label: 'Home',
    path: '/dashboard',
    icon: < HiOutlineHome />,
    sublinks: [],
  },
  {
    key: 'Blog',
    label: 'Blog',
    path: '/blog',
    icon: <HiQuestionMarkCircle />,
    sublinks: [
      {
        key: 'BlogSublink1',
        label: 'Add Blog',
        path: '/blog/add',
      },
      {
        key: 'BlogSublink2',
        label: 'View Blogs',
        path: '/blog/view',
      },
    ],
  },
  {
    key: 'Partners',
    label: 'Partners',
    path: '/partners',
    icon: <MdOutlineHomeRepairService />,
    sublinks: [
      {
        key: 'PartnersSublink1',
        label: 'Add Partners',
        path: '/partners/add',
      },
      {
        key: 'PartnersSublink2',
        label: 'View Partners',
        path: '/partners/view',
      },
    ],
  },
  {
    key: 'Testimonials',
    label: 'Testimonials',
    path: '/testimonials',
    icon: <HiOutlineUsers />,
    sublinks: [
      {
        key: 'TestimonialsSublink1',
        label: 'Add Testimonials',
        path: '/testimonials/add',
      },
      {
        key: 'TestimonialsSublink2',
        label: 'View Testimonials',
        path: '/testimonials/view',
      },
    ],
  },
  {
    key: 'Teams',
    label: 'Teams',
    path: '/teams',
    icon: <HiOutlineUsers />,
    sublinks: [
      {
        key: 'TeamsSublink1',
        label: 'Add Team',
        path: '/team/add',
      },
      {
        key: 'TeamsSublink2',
        label: 'View Teams',
        path: '/team/view',
      },
    ],
  },
];

export const DashboardBottom = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <HiOutlineCog />,
  },
];
