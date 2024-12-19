
export const data = [
  {
    id: 'look-1',
    creator: {
      id: 'user-1',
      name: 'Emma Johnson',
      isVerified: true,
      avatarUrl: '/api/placeholder/150/150',
      type: 'INFLUENCER'
    },
    looks: [
      {
        id: 'looks-1-1',
        type: 'IMAGE',
        url: '/api/placeholder/400/600',
        products: [
          {
            id: 'prod-1',
            name: 'Floral Summer Dress',
            brand: 'Summer Vibes',
            price: 89.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Dresses',
            url: '/product/floral-summer-dress'
          }
        ]
      }
    ]
  },
  {
    id: 'look-2',
    creator: {
      id: 'user-2',
      name: 'Sophie Chen',
      isVerified: true,
      avatarUrl: '/api/placeholder/150/150',
      type: 'CELEBRITY'
    },
    looks: [
      {
        id: 'looks-2-1',
        type: 'IMAGE',
        url: '/api/placeholder/400/600',
        products: [
          {
            id: 'prod-2',
            name: 'Designer Handbag',
            brand: 'Luxe Fashion',
            price: 299.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Accessories',
            url: '/product/designer-handbag'
          }
        ]
      },
      {
        id: 'looks-2-2',
        type: 'VIDEO',
        url: 'https://example.com/video1.mp4',
        products: [
          {
            id: 'prod-2',
            name: 'Designer Handbag',
            brand: 'Luxe Fashion',
            price: 299.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Accessories',
            url: '/product/designer-handbag'
          }
        ]
      },
      {
        id: 'looks-2-3',
        type: 'IMAGE',
        url: '/api/placeholder/400/600',
        products: [
          {
            id: 'prod-2',
            name: 'Designer Handbag',
            brand: 'Luxe Fashion',
            price: 299.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Accessories',
            url: '/product/designer-handbag'
          }
        ]
      }
    ]
  },
  {
    id: 'look-3',
    creator: {
      id: 'user-3',
      name: 'Alex Rivera',
      isVerified: false,
      avatarUrl: '/api/placeholder/150/150',
      type: 'USER'
    },
    looks: [
      {
        id: 'looks-3-1',
        type: 'VIDEO',
        url: 'https://example.com/video2.mp4',
        products: [
          {
            id: 'prod-3',
            name: 'Denim Jacket',
            brand: 'Urban Style',
            price: 129.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Outerwear',
            url: '/product/denim-jacket'
          }
        ]
      }
    ]
  },
  // Additional looks following the same pattern...
  {
    id: 'look-4',
    creator: {
      id: 'user-4',
      name: 'Maria Garcia',
      isVerified: true,
      avatarUrl: '/api/placeholder/150/150',
      type: 'INFLUENCER'
    },
    looks: [
      {
        id: 'looks-4-1',
        type: 'IMAGE',
        url: '/api/placeholder/400/600',
        products: [
          {
            id: 'prod-4',
            name: 'Summer Dress Collection',
            brand: 'Summer Vibes',
            price: 149.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Dresses',
            url: '/product/summer-dress-collection'
          }
        ]
      }
    ]
  },
  {
    id: 'look-5',
    creator: {
      id: 'user-5',
      name: 'James Wilson',
      isVerified: true,
      avatarUrl: '/api/placeholder/150/150',
      type: 'CELEBRITY'
    },
    looks: [
      {
        id: 'looks-5-1',
        type: 'IMAGE',
        url: '/api/placeholder/400/600',
        products: [
          {
            id: 'prod-5',
            name: 'Classic Watch',
            brand: 'Luxe Fashion',
            price: 199.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Accessories',
            url: '/product/classic-watch'
          }
        ]
      }
    ]
  },
  // Continuing with looks 6-10...
  {
    id: 'look-6',
    creator: {
      id: 'user-6',
      name: 'Emily Johnson',
      isVerified: true,
      avatarUrl: '/api/placeholder/150/150',
      type: 'INFLUENCER'
    },
    looks: [
      {
        id: 'looks-6-1',
        type: 'VIDEO',
        url: 'https://example.com/video3.mp4',
        products: [
          {
            id: 'prod-6',
            name: 'Sport Sneakers',
            brand: 'Urban Style',
            price: 89.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Shoes',
            url: '/product/sport-sneakers'
          }
        ]
      }
    ]
  },
  {
    id: 'look-7',
    creator: {
      id: 'user-7',
      name: 'Sarah Chen',
      isVerified: true,
      avatarUrl: '/api/placeholder/150/150',
      type: 'CELEBRITY'
    },
    looks: [
      {
        id: 'looks-7-1',
        type: 'IMAGE',
        url: '/api/placeholder/400/600',
        products: [
          {
            id: 'prod-7',
            name: 'Evening Gown',
            brand: 'Luxe Fashion',
            price: 399.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Dresses',
            url: '/product/evening-gown'
          }
        ]
      }
    ]
  },
  {
    id: 'look-8',
    creator: {
      id: 'user-8',
      name: 'David Kim',
      isVerified: false,
      avatarUrl: '/api/placeholder/150/150',
      type: 'USER'
    },
    looks: [
      {
        id: 'looks-8-1',
        type: 'IMAGE',
        url: '/api/placeholder/400/600',
        products: [
          {
            id: 'prod-8',
            name: 'Casual Tee',
            brand: 'Urban Style',
            price: 29.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Tops',
            url: '/product/casual-tee'
          }
        ]
      }
    ]
  },
  {
    id: 'look-9',
    creator: {
      id: 'user-9',
      name: 'Lisa Wang',
      isVerified: true,
      avatarUrl: '/api/placeholder/150/150',
      type: 'INFLUENCER'
    },
    looks: [
      {
        id: 'looks-9-1',
        type: 'VIDEO',
        url: 'https://example.com/video4.mp4',
        products: [
          {
            id: 'prod-9',
            name: 'Leather Bag',
            brand: 'Luxe Fashion',
            price: 249.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Accessories',
            url: '/product/leather-bag'
          }
        ]
      }
    ]
  },
  {
    id: 'look-10',
    creator: {
      id: 'user-10',
      name: 'Mike Thompson',
      isVerified: false,
      avatarUrl: '/api/placeholder/150/150',
      type: 'USER'
    },
    looks: [
      {
        id: 'looks-10-1',
        type: 'IMAGE',
        url: '/api/placeholder/400/600',
        products: [
          {
            id: 'prod-10',
            name: 'Winter Jacket',
            brand: 'Urban Style',
            price: 179.99,
            thumbnailUrl: '/api/placeholder/150/200',
            category: 'Outerwear',
            url: '/product/winter-jacket'
          }
        ]
      }
    ]
  }
];

export default data;