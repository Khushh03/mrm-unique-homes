/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Residence, Amenity, Landmark, GalleryItem, FAQ } from './types';

export const RESIDENCES_DATA: Residence[] = [
  {
    id: 'solo',
    name: 'The Solo',
    tagline: 'A private sanctuary designed for singular focus and profound rest.',
    description: 'Intentionally curated for solopreneurs, writers, or individuals who value unmatched focus. Soft indirect lighting and integrated task-spaces optimize flow.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-omA2jZNUoz1WjcT4QABww1HKc7OhQDXYPPlZfE6T1SWVTEf-pINU0drymnhuMnUn0hUT4p6-zsdbF0pDxteetHSZL1RoXT85Eo8cH3Su9Fl-JEy6nxSFRB8xVB_Wxz_K0THXJXstaqrQGBbJzH0ZK7t3YovybmLYLEJ0Inh1nUQSXGSsJsb_x075FuzI0b8XfuoWtKF9lU9SXzdjQ1bsseNo81Nf42VTk6NUDwBFIejIcPAiVYAg35NpKuHqFuFKrvc9hbqxzutA',
    specs: ['En-suite bathroom', 'Dedicated workspace'],
    features: [
      'Bespoke workspace desk with ergonomic integrated lighting',
      'Under-bed smart integrated storage panel system',
      'Acoustic insulation panels within all shared walls',
      'Zero-noise continuous eco-air circulation system'
    ],
    sizeSqFt: 380,
    availableFrom: 'Immediate',
    pricePerMonth: '$2,800'
  },
  {
    id: 'dual',
    name: 'The Dual',
    tagline: 'Spacious, shared living that honors individual privacy and shared connection.',
    description: 'Perfect for companions, partners, or corporate peers. Double master beds positioned symmetrically around a central acoustic divider, leading into premium shared lounges.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKyTbj7nM_L1a97IGvcRmF1-KUgwQSqQUjDCXR3v5-AAWFvHmsSWt2F7tOt-xZM_uKhKe7R3xOPaLp9us1VTp-ODyBkQuRE2XH385jKtIOxjahPqMIwgpZGyAgqyAEvOi6wrK8t_-QAxxd2urJvqKTjZwtcUYOP5EXkk9XCMqYd1YGbyCNHADUMssgwjRvD1tYJ3-6V4JlhQS4ZVfD3KtUbAdKSO0DgNCw5arAFMHmJgacpV0Aiv1txoxAbrB5ZRTmGeGLdP_HH0-O',
    specs: ['Generous closet space', 'Dual vanities', 'Lounge area'],
    features: [
      'Symmetric layouts with individual high-privacy sleeping alcoves',
      'Deep dual oak vanities with backlit custom designer mirrors',
      'Walk-in floor-to-ceiling boutique wardrobe panels',
      'Panoramic reading lounge with dual-tilt floor-to-ceiling glazing'
    ],
    sizeSqFt: 620,
    availableFrom: 'June 2026',
    pricePerMonth: '$4,500'
  },
  {
    id: 'collective',
    name: 'The Collective',
    tagline: 'An expansive suite designed for collaborative living without compromise.',
    description: 'Bringing together collective intelligence and personal quietude. Generous common areas pair with completely private bedrooms, maintaining an elegant, premium look.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSZYDFwDMwJY1Pu5XJFyIv09F2xwRzEob60HcyMoszyffAX1I4RzzymYuPi9M0ejlJV0AbMcWWoIySYxCbihTxxmDkrkZvbJCkIEeOqQootQAVy5Ohqp_H1v4VLpvqpt26he0yI2CC2wysTBlIEVYlVmG2QmvZxsqRwX7aaTJJwDcyTyOcT3sVwf4SuYobrBgSfpptMGouPPNLxJAtCknSJu3RvwLPdmfR0XtTIchO8aGvlnc-OZ2KqrYZpakIPDKJiNSeBTNcULXE',
    specs: ['Expansive living area', 'Kitchenette'],
    features: [
      'Fully functional kitchen with high-end Gaggenau appliances',
      'Double en-suite bathrooms featuring hand-picked Italian marble',
      'Modular sensory workstation configures dynamically for three',
      'Curated local slate stone features and continuous plant columns'
    ],
    sizeSqFt: 950,
    availableFrom: 'August 2026',
    pricePerMonth: '$6,200'
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'dining',
    name: 'Artisan Dining',
    description: 'A curated culinary space featuring locally sourced ingredients and bespoke menus.',
    iconName: 'Utensils',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSjahhPK7GGoYfa8TgoFvnDWvE3mFk_XSs6vsn1BFxVxGuZD_9GE3bWj__4Iv6Pm7dzxN7-d8qFKGmxERGPm7HKMJmH9pps9vgi-GbaNorfsYDgerYVFbFTHM19gMfJqFuZnq31p83CUkCcrDTIBsVx8Uw7BhMCSIqIAmrO5h8ITVf-_M5TaXPt1_n2CQmVDTRvew8NRRHlfhItGQmIKZfRNKnGWn7mtXOhlyPyNroSEbZrLn9QIM4KyD2be5k5-LiFj4RCPo9VYbe',
    detailText: 'Collaborating directly with organic farms, our culinary directors curate seasonal tasting plates and organic daily provisions tailored to your dietary metrics.',
    capacityLimit: '24 Guests max / Reservation required',
    operatingHours: '07:00 AM – 11:00 PM Daily'
  },
  {
    id: 'studio',
    name: 'Wellness Studio',
    description: 'State-of-the-art equipment in a serene, light-filled environment designed for holistic health.',
    iconName: 'Dumbbell',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bPZ5JBuCD53OV8Zfb5Z0qC3FqP9piajiIUnuK5t5lxLmvzm5nLL4NGzbPaZzycoYekwVe8zYF2gsRUN9UvARAsSW2klS3PudUilFCzbQAYEdYOnCQfULHgkOZURJfTYgnUbM8ErdBsmnYAxQfh0fNB6OT1hjTHz1L2MtmmurpKMyGu-9bKVnKfdAKc4sgs5pxAs5Tb7KU_L6N5w_IyRobtK-IUKpvrqT3_rS83sdzgxqfdJ3XkDMNURx10Jva3bSCOWWldHVIrYD',
    detailText: 'Features integrated resistance machines, premium free weights, custom oak-lined Pilates reformers, and a private floor for meditation and restorative posture training.',
    capacityLimit: '12 Guests max / Walk-ins allowed',
    operatingHours: '24/7 Access with electronic badge'
  },
  {
    id: 'library',
    name: 'The Library',
    description: 'A quiet sanctuary housing a curated collection of architecture and design literature.',
    iconName: 'BookOpen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    detailText: 'Wood-paneled, acoustically isolated study hall with a collection of classic philosophy, custom design prints, art monographs, and high-contrast ambient task reading spots.',
    capacityLimit: '8 Guests max / Quiet workspace',
    operatingHours: '06:00 AM – Midnight Daily'
  },
  {
    id: 'spa',
    name: 'Tranquility Spa',
    description: 'Bespoke treatments in a minimalist setting focused on restoration and peace.',
    iconName: 'Flower',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bPZ5JBuCD53OV8Zfb5Z0qC3FqP9piajiIUnuK5t5lxLmvzm5nLL4NGzbPaZzycoYekwVe8zYF2gsRUN9UvARAsSW2klS3PudUilFCzbQAYEdYOnCQfULHgkOZURJfTYgnUbM8ErdBsmnYAxQfh0fNB6OT1hjTHz1L2MtmmurpKMyGu-9bKVnKfdAKc4sgs5pxAs5Tb7KU_L6N5w_IyRobtK-IUKpvrqT3_rS83sdzgxqfdJ3XkDMNURx10Jva3bSCOWWldHVIrYD',
    detailText: 'A dedicated steam sauna, infrared cold plunge panels, and custom-ordered aromacology tables designed to realign physical and cognitive restoration after heavy travel or work.',
    capacityLimit: '4 Guests max / Private appointment',
    operatingHours: '09:00 AM – 09:00 PM Daily'
  },
  {
    id: 'lounge',
    name: 'The Lounge',
    description: 'An expansive common area for socializing and relaxation.',
    iconName: 'Coffee',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPrb4x2ksEnDNt4cR7ciKm-iqqEMNbd8b42hnujmBIQfn1oQnWjKsJX9eb3HMcbKxz8ojixaxkZzeN7_rpUWk4DuKxx0JXCZEsDW79FKdG3CJF7BzHczL75KQqGvHSidYFvygVmnFE3ESCuRsJlNmOeZxWY805N_M5Z84NavTfEfJzsOXdSvwJyCC0uabEBFtyxPJUC3-6iMbeYQLTMM-2w20hj5GgpPuDBST7cMdpZYi8h17eYuRw2DQcx7AYzf94Vg28mdBt3y6d',
    detailText: 'The architectural heart of the property featuring linear sandstones, minimalist open fireplace pits, and a complimentary artisanal coffee/tea service counter.',
    capacityLimit: '40 Guests max / Multi-purpose area',
    operatingHours: '06:00 AM – 11:00 PM Daily'
  },
  {
    id: 'work',
    name: 'Co-working Hub',
    description: 'Dedicated spaces designed for focus and collaboration.',
    iconName: 'Laptop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-omA2jZNUoz1WjcT4QABww1HKc7OhQDXYPPlZfE6T1SWVTEf-pINU0drymnhuMnUn0hUT4p6-zsdbF0pDxteetHSZL1RoXT85Eo8cH3Su9Fl-JEy6nxSFRB8xVB_Wxz_K0THXJXstaqrQGBbJzH0ZK7t3YovybmLYLEJ0Inh1nUQSXGSsJsb_x075FuzI0b8XfuoWtKF9lU9SXzdjQ1bsseNo81Nf42VTk6NUDwBFIejIcPAiVYAg35NpKuHqFuFKrvc9hbqxzutA',
    detailText: 'Equipped with redundant solid-state high-speed connections, isolated call pods, dynamic height-adjustable workbenches, and professional local screen casting panels.',
    capacityLimit: '15 Stations / Open layout',
    operatingHours: '24/7 Access with electronic badge'
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
