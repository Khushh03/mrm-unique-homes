/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Residence, Amenity, Landmark, GalleryItem, FAQ } from './types';

export const RESIDENCES_DATA: Residence[] = [
  {
    id: 'four-sharing-no-washroom',
    name: '4 Sharing (Without attached washroom)',
    tagline: 'Value-oriented shared living with well-appointed beds and communal washroom access.',
    description: 'A practical four-bed residence designed for flexible occupants who appreciate a comfortable, community-first layout without attached bathrooms.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-omA2jZNUoz1WjcT4QABww1HKc7OhQDXYPPlZfE6T1SWVTEf-pINU0drymnhuMnUn0hUT4p6-zsdbF0pDxteetHSZL1RoXT85Eo8cH3Su9Fl-JEy6nxSFRB8xVB_Wxz_K0THXJXstaqrQGBbJzH0ZK7t3YovybmLYLEJ0Inh1nUQSXGSsJsb_x075FuzI0b8XfuoWtKF9lU9SXzdjQ1bsseNo81Nf42VTk6NUDwBFIejIcPAiVYAg35NpKuHqFuFKrvc9hbqxzutA',
    specs: ['Shared bathroom access', 'Private sleeping nook', 'Compact study area'],
    features: [
      'Four private bed stations with personal under-bed storage',
      'Open-plan communal meeting and lounge area',
      'High-efficiency climate control with acoustic zoning',
      'Integrated keyless entry for each resident'
    ],
    sizeSqFt: 620,
    availableFrom: 'Immediate',
    pricePerMonth: '₹20,000'
  },
  {
    id: 'three-sharing-attached',
    name: '3 Sharing with attached washroom',
    tagline: 'Triple occupancy comfort with private ensuite access for each bed.',
    description: 'Three-bed suites offer a premium shared residence experience, with individual attached washrooms and thoughtful privacy details throughout.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyTbj7nM_L1a97IGvcRmF1-KUgwQSqQUjDCXR3v5-AAWFvHmsSWt2F7tOt-xZM_uKhKe7R3xOPaLp9us1VTp-ODyBkQuRE2XH385jKtIOxjahPqMIwgpZGyAgqyAEvOi6wrK8t_-QAxxd2urJvqKTjZwtcUYOP5EXkk9XCMqYd1YGbyCNHADUMssgwjRvD1tYJ3-6V4JlhQS4ZVfD3KtUbAdKSO0DgNCw5arAFMHmJgacpV0Aiv1txoxAbrB5ZRTmGeGLdP_HH0-O',
    specs: ['Individual attached washroom', 'Shared lounge', 'Dedicated closet space'],
    features: [
      'Three private bedrooms with direct ensuite access',
      'Spacious shared kitchen and seating area',
      'Personal wardrobe zones with ambient lighting',
      'Enhanced privacy screening between sleeping areas'
    ],
    sizeSqFt: 780,
    availableFrom: 'July 2026',
    pricePerMonth: '₹22,000'
  },
  {
    id: 'two-sharing-attached',
    name: '2 Sharing with attached washroom',
    tagline: 'Semi-private duo residence with premium ensuite convenience.',
    description: 'Two-bed shared suites that pair private sleeping quarters with attached bathrooms, ideal for friends or colleagues seeking quiet comfort.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSZYDFwDMwJY1Pu5XJFyIv09F2xwRzEob60HcyMoszyffAX1I4RzzymYuPi9M0ejlJV0AbMcWWoIySYxCbihTxxmDkrkZvbJCkIEeOqQootQAVy5Ohqp_H1v4VLpvqpt26he0yI2CC2wysTBlIEVYlVmG2QmvZxsqRwX7aaTJJwDcyTyOcT3sVwf4SuYobrBgSfpptMGouPPNLxJAtCknSJu3RvwLPdmfR0XtTIchO8aGvlnc-OZ2KqrYZpakIPDKJiNSeBTNcULXE',
    specs: ['Attached washroom', 'Shared mini lounge', 'Personal storage'],
    features: [
      'Two private sleep alcoves each with ensuite bath',
      'Shared kitchenette and dining nook',
      'Acoustic privacy partitioning',
      'Soft ambient lighting throughout'
    ],
    sizeSqFt: 680,
    availableFrom: 'August 2026',
    pricePerMonth: '₹27,000'
  },
  {
    id: 'two-sharing-no-washroom',
    name: '2 Sharing (Without attached washroom)',
    tagline: 'Balanced twin sharing with thoughtful layout and shared facilities.',
    description: 'A cost-effective two-bed residence with shared washroom facilities, designed for clear circulation and comfortable dual occupancy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    specs: ['Shared bathroom access', 'Dual workspace zones', 'Large wardrobe'],
    features: [
      'Two private bed spaces with built-in storage',
      'Shared bathroom with premium fixtures',
      'Flexible shared lounge and study area',
      'High-performance ventilation and cooling'
    ],
    sizeSqFt: 560,
    availableFrom: 'Immediate',
    pricePerMonth: '₹18,000'
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'ac-rooms',
    name: 'AC-Equipped Rooms',
    description: 'Individual air conditioning in every room for year-round comfort.',
    iconName: 'Flower',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-omA2jZNUoz1WjcT4QABww1HKc7OhQDXYPPlZfE6T1SWVTEf-pINU0drymnhuMnUn0hUT4p6-zsdbF0pDxteetHSZL1RoXT85Eo8cH3Su9Fl-JEy6nxSFRB8xVB_Wxz_K0THXJXstaqrQGBbJzH0ZK7t3YovybmLYLEJ0Inh1nUQSXGSsJsb_x075FuzI0b8XfuoWtKF9lU9SXzdjQ1bsseNo81Nf42VTk6NUDwBFIejIcPAiVYAg35NpKuHqFuFKrvc9hbqxzutA',
    detailText: 'Individual air conditioning in every room for year-round comfort.',
    capacityLimit: 'All rooms equipped',
    operatingHours: '24/7 Available'
  },
  {
    id: 'power-backup',
    name: '24/7 Power Backup',
    description: 'Uninterrupted electricity with full generator backup at all times.',
    iconName: 'Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bPZ5JBuCD53OV8Zfb5Z0qC3FqP9piajiIUnuK5t5lxLmvzm5nLL4NGzbPaZzycoYekwVe8zYF2gsRUN9UvARAsSW2klS3PudUilFCzbQAYEdYOnCQfULHgkOZURJfTYgnUbM8ErdBsmnYAxQfh0fNB6OT1hjTHz1L2MtmmurpKMyGu-9bKVnKfdAKc4sgs5pxAs5Tb7KU_L6N5w_IyRobtK-IUKpvrqT3_rS83sdzgxqfdJ3XkDMNURx10Jva3bSCOWWldHVIrYD',
    detailText: 'Uninterrupted electricity with full generator backup at all times.',
    capacityLimit: 'Entire property',
    operatingHours: '24/7 Backup System'
  },
  {
    id: 'campus-shuttle',
    name: 'Free Campus Shuttle',
    description: 'Complimentary drop and pick-up service to college every day.',
    iconName: 'Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    detailText: 'Complimentary drop and pick-up service to college every day.',
    capacityLimit: 'All residents',
    operatingHours: 'Daily scheduled service'
  },
  {
    id: 'cctv-security',
    name: 'CCTV & 24/7 Security',
    description: '360° surveillance with trained security personnel round the clock.',
    iconName: 'BookOpen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-omA2jZNUoz1WjcT4QABww1HKc7OhQDXYPPlZfE6T1SWVTEf-pINU0drymnhuMnUn0hUT4p6-zsdbF0pDxteetHSZL1RoXT85Eo8cH3Su9Fl-JEy6nxSFRB8xVB_Wxz_K0THXJXstaqrQGBbJzH0ZK7t3YovybmLYLEJ0Inh1nUQSXGSsJsb_x075FuzI0b8XfuoWtKF9lU9SXzdjQ1bsseNo81Nf42VTk6NUDwBFIejIcPAiVYAg35NpKuHqFuFKrvc9hbqxzutA',
    detailText: '360° surveillance with trained security personnel round the clock. Enhanced safety features for residents.',
    capacityLimit: 'Full property coverage',
    operatingHours: '24/7 Monitored'
  },
  {
    id: 'warm-care',
    name: 'Motherly Care & Support',
    description: 'Warm personal attention from our owner — you\'re family here.',
    iconName: 'Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    detailText: 'Warm personal attention from our owner — you\'re family here. Personalized support and guidance available.',
    capacityLimit: 'All residents',
    operatingHours: '24/7 Available'
  },
  {
    id: 'hot-water',
    name: 'Geyser & Hot Water',
    description: 'Instant hot water available at all hours, every single day.',
    iconName: 'Flower',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bPZ5JBuCD53OV8Zfb5Z0qC3FqP9piajiIUnuK5t5lxLmvzm5nLL4NGzbPaZzycoYekwVe8zYF2gsRUN9UvARAsSW2klS3PudUilFCzbQAYEdYOnCQfULHgkOZURJfTYgnUbM8ErdBsmnYAxQfh0fNB6OT1hjTHz1L2MtmmurpKMyGu-9bKVnKfdAKc4sgs5pxAs5Tb7KU_L6N5w_IyRobtK-IUKpvrqT3_rS83sdzgxqfdJ3XkDMNURx10Jva3bSCOWWldHVIrYD',
    detailText: 'Instant hot water available at all hours, every single day.',
    capacityLimit: 'All bathrooms',
    operatingHours: '24/7 Available'
  },
  {
    id: 'home-meals',
    name: 'Home-Style Meals',
    description: 'Freshly prepared, hygienic and nutritious meals daily.',
    iconName: 'Utensils',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjahhPK7GGoYfa8TgoFvnDWvE3mFk_XSs6vsn1BFxVxGuZD_9GE3bWj__4Iv6Pm7dzxN7-d8qFKGmxERGPm7HKMJmH9pps9vgi-GbaNorfsYDgerYVFbFTHM19gMfJqFuZnq31p83CUkCcrDTIBsVx8Uw7BhMCSIqIAmrO5h8ITVf-_M5TaXPt1_n2CQmVDTRvew8NRRHlfhItGQmIKZfRNKnGWn7mtXOhlyPyNroSEbZrLn9QIM4KyD2be5k5-LiFj4RCPo9VYbe',
    detailText: 'Freshly prepared, hygienic and nutritious meals daily prepared with care.',
    capacityLimit: 'All residents',
    operatingHours: 'Daily meal service'
  },
  {
    id: 'laundry',
    name: 'Washing Machine Facility',
    description: 'Shared laundry facility available to all residents at no extra cost.',
    iconName: 'Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    detailText: 'Shared laundry facility available to all residents at no extra cost.',
    capacityLimit: 'Multiple machines',
    operatingHours: '24/7 Access'
  },
  {
    id: 'tv-lounge',
    name: 'Smart TV Lounge',
    description: 'Relax and unwind with premium entertainment in the shared lounge.',
    iconName: 'Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    detailText: 'Relax and unwind with premium smart TV in the shared lounge.',
    capacityLimit: 'Common area',
    operatingHours: 'Daily evening hours'
  },
  {
    id: 'ncr-transport',
    name: 'NCR Transport Options',
    description: 'Convenient transport options available across the NCR region.',
    iconName: 'Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-omA2jZNUoz1WjcT4QABww1HKc7OhQDXYPPlZfE6T1SWVTEf-pINU0drymnhuMnUn0hUT4p6-zsdbF0pDxteetHSZL1RoXT85Eo8cH3Su9Fl-JEy6nxSFRB8xVB_Wxz_K0THXJXstaqrQGBbJzH0ZK7t3YovybmLYLEJ0Inh1nUQSXGSsJsb_x075FuzI0b8XfuoWtKF9lU9SXzdjQ1bsseNo81Nf42VTk6NUDwBFIejIcPAiVYAg35NpKuHqFuFKrvc9hbqxzutA',
    detailText: 'Convenient transport options available across the NCR region.',
    capacityLimit: 'All residents',
    operatingHours: 'On-demand service'
  },
  {
    id: 'study-space',
    name: 'Student-Friendly Study Space',
    description: 'Peaceful atmosphere designed for focused study and academic growth.',
    iconName: 'BookOpen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    detailText: 'Peaceful atmosphere designed for focused study and academic growth.',
    capacityLimit: 'Multiple study zones',
    operatingHours: '24/7 Access'
  }
];

export const LANDMARKS_DATA: Landmark[] = [
  {
    id: 'transit-1',
    name: 'Metropolitan Transit Hub',
    type: 'transit',
    distance: '5 mins walking',
    desc: 'Bypasses standard city gridlock with high-speed direct links to major corporate parks and financial districts.',
    pxX: 25,
    pxY: 35
  },
  {
    id: 'transit-2',
    name: 'North Grand OverPass Station',
    type: 'transit',
    distance: '8 mins walking',
    desc: 'Local bus networks and shuttle hubs connecting directly to private aviation fields.',
    pxX: 35,
    pxY: 15
  },
  {
    id: 'retail-1',
    name: 'The Galleria Promenade',
    type: 'retail',
    distance: '10 mins drive',
    desc: 'High-end artisan outlets, custom drapery providers, design galleries, and boutique lifestyle curators.',
    pxX: 65,
    pxY: 45
  },
  {
    id: 'retail-2',
    name: 'Linen & Spice Gourmet Market',
    type: 'retail',
    distance: '4 mins walk',
    desc: 'Locally grown organic vegetables, premium aged provisions, and direct-trade single origin roasting spots.',
    pxX: 52,
    pxY: 62
  },
  {
    id: 'arts-1',
    name: 'Modernist Sculpture Pavilion',
    type: 'arts',
    distance: 'surrounding area',
    desc: 'Rotating collection of local concrete sculpts, raw iron models, and permanent visual installations.',
    pxX: 75,
    pxY: 25
  },
  {
    id: 'arts-2',
    name: 'The Arch Literature Sanctuary',
    type: 'arts',
    distance: '10 mins walking',
    desc: 'An independent architectural gallery hosting lectures, rare monographs, and private reading circles.',
    pxX: 18,
    pxY: 78
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    alt: 'The Grand Lounge Space',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    location: 'Central Lobby',
    likes: 148
  },
  {
    id: 'gal-2',
    alt: 'Symmetric Dining Room Interior',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjahhPK7GGoYfa8TgoFvnDWvE3mFk_XSs6vsn1BFxVxGuZD_9GE3bWj__4Iv6Pm7dzxN7-d8qFKGmxERGPm7HKMJmH9pps9vgi-GbaNorfsYDgerYVFbFTHM19gMfJqFuZnq31p83CUkCcrDTIBsVx8Uw7BhMCSIqIAmrO5h8ITVf-_M5TaXPt1_n2CQmVDTRvew8NRRHlfhItGQmIKZfRNKnGWn7mtXOhlyPyNroSEbZrLn9QIM4KyD2be5k5-LiFj4RCPo9VYbe',
    location: 'The Common Pavilion',
    likes: 92
  },
  {
    id: 'gal-3',
    alt: 'The Serene Bedroom Design',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bPZ5JBuCD53OV8Zfb5Z0qC3FqP9piajiIUnuK5t5lxLmvzm5nLL4NGzbPaZzycoYekwVe8zYF2gsRUN9UvARAsSW2klS3PudUilFCzbQAYEdYOnCQfULHgkOZURJfTYgnUbM8ErdBsmnYAxQfh0fNB6OT1hjTHz1L2MtmmurpKMyGu-9bKVnKfdAKc4sgs5pxAs5Tb7KU_L6N5w_IyRobtK-IUKpvrqT3_rS83sdzgxqfdJ3XkDMNURx10Jva3bSCOWWldHVIrYD',
    location: 'Signature Suite A',
    likes: 215
  },
  {
    id: 'gal-4',
    alt: 'The Minimalist Solo Layout',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-omA2jZNUoz1WjcT4QABww1HKc7OhQDXYPPlZfE6T1SWVTEf-pINU0drymnhuMnUn0hUT4p6-zsdbF0pDxteetHSZL1RoXT85Eo8cH3Su9Fl-JEy6nxSFRB8xVB_Wxz_K0THXJXstaqrQGBbJzH0ZK7t3YovybmLYLEJ0Inh1nUQSXGSsJsb_x075FuzI0b8XfuoWtKF9lU9SXzdjQ1bsseNo81Nf42VTk6NUDwBFIejIcPAiVYAg35NpKuHqFuFKrvc9hbqxzutA',
    location: 'Solo Workspace Alcove',
    likes: 184
  }
];

export const FAQ_DATA: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is included in the monthly residency fee?',
    answer: 'The residency fee encompasses your private suite, unrestricted 24/7 access to all curated amenities (wellness studio, study lounge, library, tranquility spa), ultra-fast redundant Wi-Fi, custom-ordered utilities, and weekly bespoke deep housekeeping services.'
  },
  {
    id: 'faq-2',
    question: 'Are the residences furnished?',
    answer: 'Yes, all residences are pre-appointed with fully integrated furniture elements designed by master fabricators. This includes organic linen mattresses, modular solid oak wardrobes, solid granite vanities, raw concrete lamps, and select limited monographs on design in your room.'
  },
  {
    id: 'faq-3',
    question: 'How does the booking process work?',
    answer: 'Simply request a private consultation or virtual walk-through using our inquiry panel. An appointed concierge will coordinate a convenient viewing interval. Successful applicants are invited to personalize move-in timelines, finish options, and bedding material configurations.'
  },
  {
    id: 'faq-4',
    question: 'Are pets accommodated in private residences?',
    answer: 'We recognize pets as crucial elements of daily life. Well-mannered companions are welcome in private quarters and specific outdoor garden levels. Central amenities maintain pet-free zoning to ensure serene environments for all residents.'
  },
  {
    id: 'faq-5',
    question: 'Can I extend my residency duration?',
    answer: 'Residencies are based on 12-month standard cycles. Residents receive priority invitation to extend their agreement for consecutive cycles 90 days before expiration, ensuring seamless stability for your personal sanctuary.'
  }
];
