export default [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../../views/DashboardView.vue'),
    redirect: {
      name: 'catalog',
    },
    children: [
      {
        path: '/catalog',
        name: 'catalog',
        component: () => import('../../views/dashboard/CatalogView.vue')
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import('../../views/dashboard/OrderView.vue')
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../../views/dashboard/ProductView.vue')
      },
      {
        path: '/auctions',
        name: 'auctions',
        component: () => import('../../views/dashboard/AuctionView.vue')
      },
      {
        path: '/auction/:id/competition',
        name: 'competition',
        component: () => import('../../views/dashboard/CompetitionView.vue'),
      }
    ]
  }
]
