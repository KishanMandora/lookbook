import { LookPost } from "@/helpers/type";

export const data: LookPost[] = [
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
        url: 'https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/7/f2DxH44X_29d104d1b9e34382a0c031903bea75e3.jpg',
        products: [
          {
            id: 'prod-1',
            name: 'Red Tshirt',
            brand: 'Summer Vibes',
            price: 89.99,
            thumbnailUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/OCTOBER/7/t2xtq1ep_e70cf5b769af48299659c397ee6979e2.jpg',
            category: 'Dresses',
            url: 'https://www.myntra.com/night-suits/marks+%26+spencer/marks--spencer-women-checked-printed-night-suit/31237609/buy'
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
        url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25101404/2023/9/21/bff907ff-e1f2-4320-a45b-3a25cf45f0bd1695294915593MarksSpencerWomenGreyCardigan1.jpg',
        products: [
          {
            id: 'prod-2',
            name: 'Round Neck Cardigan',
            brand: 'Luxe Fashion',
            price: 299.99,
            thumbnailUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25101404/2023/9/21/bff907ff-e1f2-4320-a45b-3a25cf45f0bd1695294915593MarksSpencerWomenGreyCardigan1.jpg',
            category: 'Accessories',
            url: 'https://www.myntra.com/handbags/bagsy+malone/bagsy-malone-set-of-3-white-structured-handbags/18170074/buy'
          }
        ],
      },
      {
        id: 'looks-2-2',
        type: 'IMAGE',
        url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25101404/2023/9/21/793f8e26-02a6-46ef-b8dd-34083b3926301695294915625MarksSpencerWomenGreyCardigan2.jpg',
        products: [
          {
            id: 'prod-2',
            name: 'Round Neck Cardigan',
            brand: 'Luxe Fashion',
            price: 299.99,
            thumbnailUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25101404/2023/9/21/bff907ff-e1f2-4320-a45b-3a25cf45f0bd1695294915593MarksSpencerWomenGreyCardigan1.jpg',
            category: 'Accessories',
            url: 'https://www.myntra.com/sweaters/marks+%26+spencer/marks--spencer-round-neck-front-open-cardigan/25101404/buy'
          }
        ]
      },
      {
        id: 'looks-2-3',
        type: 'IMAGE',
        url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25101404/2023/9/21/ac4f4735-3f03-4dad-839b-c1163d3dd2fd1695294915609MarksSpencerWomenGreyCardigan4.jpg',
        products: [
          {
            id: 'prod-2',
            name: 'Designer Handbag',
            brand: 'Luxe Fashion',
            price: 299.99,
            thumbnailUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/18170074/2022/5/6/0e27addc-4105-4a08-bb43-74557cc619a91651813507901BagsyMaloneWhiteTexturedPUShopperSatchelwithCutWork2.jpg',
            category: 'Accessories',
            url: 'https://www.myntra.com/handbags/bagsy+malone/bagsy-malone-set-of-3-white-structured-handbags/18170074/buy',
          },
          {
            id: 'prod-2',
            name: 'Long Skirts',
            brand: 'Luxe Fashion',
            price: 299.99,
            thumbnailUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/25101420/2023/9/21/8fef1fb2-b178-422c-9966-7371edb8883e1695301465981MarksSpencerMaxiLengthFlaredSkirt2.jpg',
            category: 'Accessories',
            url: 'https://www.myntra.com/skirts/marks+%26+spencer/marks--spencer-tie-and-dye-maxi-length-flared-skirt/25101420/buy'
          },
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
        type: 'IMAGE',
        url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/21113116/2022/12/8/e52e89d4-db58-40c5-8cfb-f211705a43581670477494345MarksSpencerWomenPinkPullover3.jpg',
        products: [
          {
            id: 'prod-3',
            name: 'Denim Jacket',
            brand: 'Urban Style',
            price: 129.99,
            thumbnailUrl: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/NOVEMBER/12/TqNpqURK_04e81fb0e39f46a2a7c59bf937f26fc0.jpg',
            category: 'Outerwear',
            url: 'https://www.myntra.com/jackets/sassafras/sassafras-women-fleece-tailored-jacket/31603601/buy'
          }
        ]
      }
    ]
  },
  // {
  //   id: 'look-4',
  //   creator: {
  //     id: 'user-4',
  //     name: 'Maria Garcia',
  //     isVerified: true,
  //     avatarUrl: '/api/placeholder/150/150',
  //     type: 'INFLUENCER'
  //   },
  //   looks: [
  //     {
  //       id: 'looks-4-1',
  //       type: 'IMAGE',
  //       url: '/api/placeholder/400/600',
  //       products: [
  //         {
  //           id: 'prod-4',
  //           name: 'Summer Dress Collection',
  //           brand: 'Summer Vibes',
  //           price: 149.99,
  //           thumbnailUrl: '/api/placeholder/150/200',
  //           category: 'Dresses',
  //           url: '/product/summer-dress-collection'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'look-5',
  //   creator: {
  //     id: 'user-5',
  //     name: 'James Wilson',
  //     isVerified: true,
  //     avatarUrl: '/api/placeholder/150/150',
  //     type: 'CELEBRITY'
  //   },
  //   looks: [
  //     {
  //       id: 'looks-5-1',
  //       type: 'IMAGE',
  //       url: '/api/placeholder/400/600',
  //       products: [
  //         {
  //           id: 'prod-5',
  //           name: 'Classic Watch',
  //           brand: 'Luxe Fashion',
  //           price: 199.99,
  //           thumbnailUrl: '/api/placeholder/150/200',
  //           category: 'Accessories',
  //           url: '/product/classic-watch'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'look-6',
  //   creator: {
  //     id: 'user-6',
  //     name: 'Emily Johnson',
  //     isVerified: true,
  //     avatarUrl: '/api/placeholder/150/150',
  //     type: 'INFLUENCER'
  //   },
  //   looks: [
  //     {
  //       id: 'looks-6-1',
  //       type: 'IMAGE',
  //       url: 'https://example.com/video3.mp4',
  //       products: [
  //         {
  //           id: 'prod-6',
  //           name: 'Sport Sneakers',
  //           brand: 'Urban Style',
  //           price: 89.99,
  //           thumbnailUrl: '/api/placeholder/150/200',
  //           category: 'Shoes',
  //           url: '/product/sport-sneakers'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'look-7',
  //   creator: {
  //     id: 'user-7',
  //     name: 'Sarah Chen',
  //     isVerified: true,
  //     avatarUrl: '/api/placeholder/150/150',
  //     type: 'CELEBRITY'
  //   },
  //   looks: [
  //     {
  //       id: 'looks-7-1',
  //       type: 'IMAGE',
  //       url: '/api/placeholder/400/600',
  //       products: [
  //         {
  //           id: 'prod-7',
  //           name: 'Evening Gown',
  //           brand: 'Luxe Fashion',
  //           price: 399.99,
  //           thumbnailUrl: '/api/placeholder/150/200',
  //           category: 'Dresses',
  //           url: '/product/evening-gown'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'look-8',
  //   creator: {
  //     id: 'user-8',
  //     name: 'David Kim',
  //     isVerified: false,
  //     avatarUrl: '/api/placeholder/150/150',
  //     type: 'USER'
  //   },
  //   looks: [
  //     {
  //       id: 'looks-8-1',
  //       type: 'IMAGE',
  //       url: '/api/placeholder/400/600',
  //       products: [
  //         {
  //           id: 'prod-8',
  //           name: 'Casual Tee',
  //           brand: 'Urban Style',
  //           price: 29.99,
  //           thumbnailUrl: '/api/placeholder/150/200',
  //           category: 'Tops',
  //           url: '/product/casual-tee'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'look-9',
  //   creator: {
  //     id: 'user-9',
  //     name: 'Lisa Wang',
  //     isVerified: true,
  //     avatarUrl: '/api/placeholder/150/150',
  //     type: 'INFLUENCER'
  //   },
  //   looks: [
  //     {
  //       id: 'looks-9-1',
  //       type: 'IMAGE',
  //       url: 'https://example.com/video4.mp4',
  //       products: [
  //         {
  //           id: 'prod-9',
  //           name: 'Leather Bag',
  //           brand: 'Luxe Fashion',
  //           price: 249.99,
  //           thumbnailUrl: '/api/placeholder/150/200',
  //           category: 'Accessories',
  //           url: '/product/leather-bag'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'look-10',
  //   creator: {
  //     id: 'user-10',
  //     name: 'Mike Thompson',
  //     isVerified: false,
  //     avatarUrl: '/api/placeholder/150/150',
  //     type: 'USER'
  //   },
  //   looks: [
  //     {
  //       id: 'looks-10-1',
  //       type: 'IMAGE',
  //       url: '/api/placeholder/400/600',
  //       products: [
  //         {
  //           id: 'prod-10',
  //           name: 'Winter Jacket',
  //           brand: 'Urban Style',
  //           price: 179.99,
  //           thumbnailUrl: '/api/placeholder/150/200',
  //           category: 'Outerwear',
  //           url: '/product/winter-jacket'
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export default data;