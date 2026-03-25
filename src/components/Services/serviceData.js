import hardscapingCover from '../../assets/imgs/hardscaping.jpeg';
import roofingCover from '../../assets/imgs/roofing_insulation.jpg';
import fencingCover from '../../assets/imgs/fencing.jpg';
import flooringCover from '../../assets/imgs/flooring.jpg';
import windowsCover from '../../assets/imgs/windows.jpg';
import aduCover from '../../assets/imgs/ADU_customHomes.jpg';
import kitchenCover from '../../assets/imgs/kitchen1.jpeg';
import bathroomCover from '../../assets/imgs/bathroom.jpg';
import paintCover from '../../assets/imgs/paint.jpg';

import {
  hardscaping_landscaping,
  roofs,
  windows,
  paint,
  kitchen,
  bathrooms,
} from './portfolio-object-images.js';

export const services = [
  {
    slug: 'hardscaping-landscaping',
    key: 'hardscaping_landscaping',
    title: 'Hardscaping & Landscaping',
    shortTitle: 'Landscaping',
    coverImage: hardscapingCover,
    gallery: hardscaping_landscaping,
    intro:
      'Upgrade your outdoor space with custom landscaping, pavers, concrete work, retaining walls, pathways, and backyard transformations designed for both beauty and everyday use.',
    description:
      'We design and build outdoor spaces that feel clean, welcoming, and functional. Whether you want a full backyard remodel, fresh planting, better drainage, or a new hardscape layout, our team focuses on durable materials, thoughtful planning, and polished finishes.',
    bullets: [
      'Pavers, concrete, turf, and backyard layouts',
      'Retaining walls, walkways, and outdoor living areas',
      'Low-maintenance landscaping and curb appeal upgrades',
    ],
  },
  {
    slug: 'roofing-insulation',
    key: 'roofs',
    title: 'Roofing & Insulation',
    shortTitle: 'Roofing',
    coverImage: roofingCover,
    gallery: roofs,
    intro:
      'Protect your home with dependable roofing and insulation services that improve comfort, energy efficiency, and long-term value.',
    description:
      'From roof replacement to attic insulation upgrades, we help homeowners improve protection from the elements while making the home more efficient year-round. We focus on quality workmanship, clean installation, and results built to last.',
    bullets: [
      'Roof repairs and full roof replacement',
      'Attic and insulation upgrades',
      'Energy efficiency and weather protection improvements',
    ],
  },
  {
    slug: 'exterior-interior-paint',
    key: 'paint',
    title: 'Exterior & Interior Paint',
    shortTitle: 'Paint',
    coverImage: paintCover,
    gallery: paint,
    intro:
      'Refresh and transform your property with professional painting that gives your home a cleaner, brighter, and more finished look.',
    description:
      'We handle interior and exterior painting with strong preparation, attention to detail, and finishes that elevate the overall feel of the space. Whether you want a full exterior repaint or interior refresh, we help bring the vision together.',
    bullets: [
      'Interior walls, ceilings, and trim',
      'Exterior painting and curb appeal updates',
      'Clean lines, durable finishes, and color refreshes',
    ],
  },
  {
    slug: 'fencing',
    key: 'fencing',
    title: 'Fencing',
    shortTitle: 'Fencing',
    coverImage: fencingCover,
    gallery: [{ url: fencingCover, title: 'fencing-main' }],
    intro:
      'Add privacy, security, and style to your property with fencing solutions designed to match your home and outdoor layout.',
    description:
      'A good fence does more than define a boundary. It adds value, improves privacy, and makes outdoor areas feel more complete. We help homeowners choose practical, attractive fencing options that fit their property and goals.',
    bullets: [
      'Privacy and perimeter fencing',
      'Updated curb appeal and yard definition',
      'Built for durability and everyday use',
    ],
  },
  {
    slug: 'flooring',
    key: 'flooring',
    title: 'Flooring',
    shortTitle: 'Flooring',
    coverImage: flooringCover,
    gallery: [{ url: flooringCover, title: 'flooring-main' }],
    intro:
      'Give your home a fresh foundation with flooring updates that improve the look, feel, and function of every room.',
    description:
      'New flooring can completely change the atmosphere of a home. We help create clean, modern spaces with flooring solutions that balance style, durability, and comfort for daily living.',
    bullets: [
      'Modern flooring upgrades for living spaces',
      'Durable finishes for busy households',
      'A cleaner, more updated interior feel',
    ],
  },
  {
    slug: 'windows',
    key: 'windows',
    title: 'Windows',
    shortTitle: 'Windows',
    coverImage: windowsCover,
    gallery: windows,
    intro:
      'Improve natural light, curb appeal, and efficiency with window upgrades designed for comfort and a polished finish.',
    description:
      'Window improvements can brighten the home, enhance the exterior, and help improve insulation. We focus on clean installations and a result that feels both functional and visually elevated.',
    bullets: [
      'Window replacement and upgrades',
      'Cleaner natural light and improved appearance',
      'More efficient and comfortable interiors',
    ],
  },
  {
    slug: 'kitchen-remodeling',
    key: 'kitchen',
    title: 'Kitchen Remodeling',
    shortTitle: 'Kitchen Remodeling',
    coverImage: kitchenCover,
    gallery: kitchen,
    intro:
      'Create a kitchen that feels more open, modern, and practical for cooking, gathering, and daily living.',
    description:
      'We help transform kitchens into spaces that balance beauty and function. Whether the goal is a cleaner layout, upgraded finishes, or a full remodel, we focus on design details that make the room work better and look better.',
    bullets: [
      'Cabinet, countertop, and layout improvements',
      'Modernized finishes and better functionality',
      'A space designed for both everyday use and entertaining',
    ],
  },
  {
    slug: 'bathroom-remodeling',
    key: 'bathrooms',
    title: 'Bathroom Remodeling',
    shortTitle: 'Bathroom Remodeling',
    coverImage: bathroomCover,
    gallery: bathrooms,
    intro:
      'Upgrade your bathroom into a space that feels cleaner, calmer, and more refined.',
    description:
      'Bathroom remodeling can make a big difference in comfort and style. From updated finishes to full transformations, we focus on details that make the space feel fresh, practical, and elevated.',
    bullets: [
      'Showers, vanities, tile, and finish upgrades',
      'Improved comfort, style, and use of space',
      'A polished result with everyday practicality',
    ],
  },
  {
    slug: 'adu-custom-homes',
    key: 'adu',
    title: 'ADU & Custom Homes',
    shortTitle: 'ADU & Custom Homes',
    coverImage: aduCover,
    gallery: [{ url: aduCover, title: 'adu-main' }],
    intro:
      'Expand what your property can do with ADU and custom home solutions tailored to your vision and long-term goals.',
    description:
      'Whether you are planning extra living space, an income-producing ADU, or a custom-built solution, we help guide the process with attention to layout, aesthetics, and practical function.',
    bullets: [
      'ADU planning and build support',
      'Custom home concepts and property expansion',
      'Designed around function, value, and lifestyle',
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export function getServiceByKey(key) {
  return services.find((service) => service.key === key);
}
