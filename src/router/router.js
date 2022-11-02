import Main from '@/pages/Main';
import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';
import PostPages from '@/pages/PostPages';
import About from '@/pages/About';
import PostIdPage from '@/pages/PostIdPage';
import PostPageWithStore from '@/pages/PostPageWithStore';
import PostPageCompositionApi from '@/pages/PostPageCompositionApi';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/posts',
    component: PostPages,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/posts/:id',
    component: PostIdPage,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/composition',
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
