export interface SubCategory {
  id: string;
  name: string;
  description: string;
  startingPrice: number; // in NPR
  estimatedDuration: string; // e.g., "1-2 hours"
  icon: string; // icon name reference
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string; // for UI theming per category
  subCategories: SubCategory[];
  image: string; // URL for category image
}

export const SERVICE_CATEGORIES: Category[] = [
  {
    id: 'plumber',
    name: 'Plumber',
    icon: '🔧',
    color: '#2196F3',
    image:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&q=80',
    subCategories: [
      {
        id: 'plumber_tap_repair',
        name: 'Tap / Faucet Repair or Replacement',
        description:
          'Fix dripping taps, replace old faucets, or install new ones.',
        startingPrice: 300,
        estimatedDuration: '1-2 hours',
        icon: 'water-outline',
      },
      {
        id: 'plumber_pipe_leakage',
        name: 'Pipe Leakage Fix',
        description:
          'Detect and repair leaking pipes in walls, floors, or exposed areas.',
        startingPrice: 500,
        estimatedDuration: '1-3 hours',
        icon: 'water-sharp',
      },
      {
        id: 'plumber_bathroom_fitting',
        name: 'Bathroom Fitting',
        description:
          'Install or replace toilets, sinks, showers, and bathroom fixtures.',
        startingPrice: 800,
        estimatedDuration: '2-4 hours',
        icon: 'home-outline',
      },
      {
        id: 'plumber_tank_repair',
        name: 'Water Tank Repair / Cleaning',
        description:
          'Repair cracks or leaks in water tanks and thorough internal cleaning.',
        startingPrice: 1500,
        estimatedDuration: '2-3 hours',
        icon: 'cube-outline',
      },
      {
        id: 'plumber_drainage',
        name: 'Drainage & Blockage Clearing',
        description: 'Clear blocked drains, pipes, and sewage lines.',
        startingPrice: 600,
        estimatedDuration: '1-2 hours',
        icon: 'funnel-outline',
      },
      {
        id: 'plumber_pump',
        name: 'Water Pump Installation / Repair',
        description: 'Install new water pumps or repair existing ones.',
        startingPrice: 700,
        estimatedDuration: '2-3 hours',
        icon: 'settings-outline',
      },
      {
        id: 'plumber_new_pipe',
        name: 'New Pipe Installation',
        description: 'Lay new pipelines for water supply or drainage systems.',
        startingPrice: 1000,
        estimatedDuration: '3-5 hours',
        icon: 'layers-outline',
      },
      {
        id: 'plumber_geyser',
        name: 'Geyser / Water Heater Installation',
        description: 'Install or replace geysers and electric water heaters.',
        startingPrice: 800,
        estimatedDuration: '1-2 hours',
        icon: 'flame-outline',
      },
    ],
  },
  {
    id: 'electrician',
    name: 'Electrician',
    icon: '⚡',
    color: '#FFC107',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
    subCategories: [
      {
        id: 'elec_switch_socket',
        name: 'Switch / Socket Repair or Replacement',
        description:
          'Fix or replace faulty switches, plug points, and sockets.',
        startingPrice: 200,
        estimatedDuration: '30 min - 1 hour',
        icon: 'power-outline',
      },
      {
        id: 'elec_fan',
        name: 'Fan Installation / Repair',
        description:
          'Install ceiling or wall fans, fix speed issues or noisy fans.',
        startingPrice: 350,
        estimatedDuration: '1-2 hours',
        icon: 'settings-outline',
      },
      {
        id: 'elec_light',
        name: 'Light / Bulb Fitting',
        description:
          'Install lights, LED strips, chandeliers, or replace bulbs.',
        startingPrice: 200,
        estimatedDuration: '30 min - 1 hour',
        icon: 'bulb-outline',
      },
      {
        id: 'elec_wiring',
        name: 'Wiring & Rewiring',
        description: 'New wiring for rooms, or replace old damaged wiring.',
        startingPrice: 1500,
        estimatedDuration: '4-8 hours',
        icon: 'code-outline',
      },
      {
        id: 'elec_mcb',
        name: 'MCB / Circuit Breaker Fix',
        description: 'Replace tripping MCBs, fix circuit breaker panels.',
        startingPrice: 400,
        estimatedDuration: '1-2 hours',
        icon: 'flash-outline',
      },
      {
        id: 'elec_inverter',
        name: 'Inverter / UPS Installation',
        description: 'Install or service home inverters and UPS systems.',
        startingPrice: 600,
        estimatedDuration: '1-2 hours',
        icon: 'battery-outline',
      },
      {
        id: 'elec_doorbell',
        name: 'Doorbell Installation',
        description: 'Install wired or wireless doorbells and video doorbells.',
        startingPrice: 300,
        estimatedDuration: '30 min - 1 hour',
        icon: 'notifications-outline',
      },
      {
        id: 'elec_cctv_wiring',
        name: 'CCTV / Camera Basic Wiring',
        description: 'Basic wiring and power setup for CCTV cameras.',
        startingPrice: 800,
        estimatedDuration: '2-3 hours',
        icon: 'camera-outline',
      },
      {
        id: 'elec_extension',
        name: 'Extension Board & Stabilizer Fix',
        description: 'Repair or replace extension boards, voltage stabilizers.',
        startingPrice: 250,
        estimatedDuration: '30 min - 1 hour',
        icon: 'extension-outline',
      },
    ],
  },
  {
    id: 'painter',
    name: 'Painter',
    icon: '🎨',
    color: '#9C27B0',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80',
    subCategories: [
      {
        id: 'paint_interior',
        name: 'Interior Wall Painting',
        description:
          'Paint interior walls and ceilings with primer and finish coat.',
        startingPrice: 5000,
        estimatedDuration: '1-3 days',
        icon: 'home-outline',
      },
      {
        id: 'paint_exterior',
        name: 'Exterior Wall Painting',
        description: 'Weather-resistant exterior painting for outer walls.',
        startingPrice: 8000,
        estimatedDuration: '2-5 days',
        icon: 'layers-outline',
      },
      {
        id: 'paint_waterproof',
        name: 'Waterproofing / Damp Fix',
        description:
          'Apply waterproof coating to walls, roofs, and damp areas.',
        startingPrice: 3000,
        estimatedDuration: '1-2 days',
        icon: 'shield-outline',
      },
      {
        id: 'paint_putty',
        name: 'Wall Putty & Primer',
        description:
          'Smooth wall surfaces with putty and primer before painting.',
        startingPrice: 2000,
        estimatedDuration: '1-2 days',
        icon: 'layers-outline',
      },
      {
        id: 'paint_wood',
        name: 'Wood / Door / Window Painting',
        description:
          'Polish, varnish, or paint wooden doors, windows, and furniture.',
        startingPrice: 1500,
        estimatedDuration: '1-2 days',
        icon: 'build-outline',
      },
      {
        id: 'paint_texture',
        name: 'Texture & Design Painting',
        description:
          'Decorative texture finishes, stencil work, and feature walls.',
        startingPrice: 4000,
        estimatedDuration: '1-3 days',
        icon: 'brush-outline',
      },
      {
        id: 'paint_roof',
        name: 'Roof Painting',
        description: 'Heat-resistant and weatherproof painting for rooftops.',
        startingPrice: 5000,
        estimatedDuration: '1-2 days',
        icon: 'home-outline',
      },
    ],
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: '🧹',
    color: '#4CAF50',
    image:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80',
    subCategories: [
      {
        id: 'clean_full_home',
        name: 'Full Home Deep Cleaning',
        description:
          'Complete top-to-bottom cleaning of entire house including all rooms.',
        startingPrice: 3000,
        estimatedDuration: '4-8 hours',
        icon: 'home-outline',
      },
      {
        id: 'clean_kitchen',
        name: 'Kitchen Deep Cleaning',
        description:
          'Degrease chimney, stove, tiles, cabinets, and all surfaces.',
        startingPrice: 1500,
        estimatedDuration: '2-4 hours',
        icon: 'flame-outline',
      },
      {
        id: 'clean_bathroom',
        name: 'Bathroom Deep Cleaning',
        description:
          'Scrub tiles, sanitize toilet, clean fixtures and remove stains.',
        startingPrice: 800,
        estimatedDuration: '1-2 hours',
        icon: 'water-outline',
      },
      {
        id: 'clean_sofa_carpet',
        name: 'Sofa / Carpet / Mattress Cleaning',
        description:
          'Shampoo and deep clean upholstery, carpets, and mattresses.',
        startingPrice: 1200,
        estimatedDuration: '2-3 hours',
        icon: 'layers-outline',
      },
      {
        id: 'clean_tank',
        name: 'Water Tank Cleaning',
        description:
          'Drain, scrub, disinfect and refill underground or overhead tanks.',
        startingPrice: 1500,
        estimatedDuration: '2-3 hours',
        icon: 'water-outline',
      },
      {
        id: 'clean_post_construction',
        name: 'Post-Construction Cleaning',
        description:
          'Remove cement, paint, dust after renovation or construction work.',
        startingPrice: 5000,
        estimatedDuration: '1-2 days',
        icon: 'construct-outline',
      },
      {
        id: 'clean_office',
        name: 'Office / Commercial Cleaning',
        description:
          'Professional cleaning for offices, shops, and commercial spaces.',
        startingPrice: 2000,
        estimatedDuration: '2-4 hours',
        icon: 'business-outline',
      },
      {
        id: 'clean_window',
        name: 'Window & Glass Cleaning',
        description:
          'Streak-free cleaning of windows, glass doors, and mirrors.',
        startingPrice: 800,
        estimatedDuration: '1-2 hours',
        icon: 'layers-outline',
      },
    ],
  },
  {
    id: 'appliance_repair',
    name: 'Repair',
    icon: '🔨',
    color: '#F44336',
    image:
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80',
    subCategories: [
      {
        id: 'repair_fridge',
        name: 'Refrigerator Repair',
        description:
          'Fix cooling issues, compressor problems, leaks, and electrical faults.',
        startingPrice: 800,
        estimatedDuration: '1-3 hours',
        icon: 'snow-outline',
      },
      {
        id: 'repair_washing_machine',
        name: 'Washing Machine Repair',
        description:
          'Fix drum issues, draining problems, motor faults, and error codes.',
        startingPrice: 700,
        estimatedDuration: '1-2 hours',
        icon: 'water-outline',
      },
      {
        id: 'repair_ac',
        name: 'AC Service / Repair / Gas Refill',
        description:
          'Deep clean, repair, or refill gas for split and window ACs.',
        startingPrice: 1200,
        estimatedDuration: '1-3 hours',
        icon: 'snow-outline',
      },
      {
        id: 'repair_tv',
        name: 'TV / LED Repair',
        description:
          'Fix display issues, no power, sound problems for all TV brands.',
        startingPrice: 600,
        estimatedDuration: '1-2 hours',
        icon: 'tv-outline',
      },
      {
        id: 'repair_microwave',
        name: 'Microwave / Oven Repair',
        description: 'Fix heating issues, turntable problems, door faults.',
        startingPrice: 500,
        estimatedDuration: '1-2 hours',
        icon: 'flame-outline',
      },
      {
        id: 'repair_water_purifier',
        name: 'Water Purifier Service',
        description:
          'Filter replacement, membrane cleaning, and general servicing.',
        startingPrice: 800,
        estimatedDuration: '1-2 hours',
        icon: 'water-outline',
      },
      {
        id: 'repair_geyser',
        name: 'Geyser / Water Heater Repair',
        description:
          'Fix heating element, thermostat, leakage, and pressure issues.',
        startingPrice: 600,
        estimatedDuration: '1-2 hours',
        icon: 'flame-outline',
      },
      {
        id: 'repair_mixer',
        name: 'Mixer / Grinder Repair',
        description:
          'Fix motor, blade, jar, and electrical issues in mixers and grinders.',
        startingPrice: 300,
        estimatedDuration: '30 min - 1 hour',
        icon: 'settings-outline',
      },
    ],
  },
];

// Helper: get a single category by id
export const getCategoryById = (id: string): Category | undefined =>
  SERVICE_CATEGORIES.find(cat => cat.id === id);

// Helper: get a single sub-category by id across all categories
export const getSubCategoryById = (id: string): SubCategory | undefined =>
  SERVICE_CATEGORIES.flatMap(cat => cat.subCategories).find(
    sub => sub.id === id,
  );

// Helper: get all sub-categories for a given category id
export const getSubCategoriesByCategoryId = (
  categoryId: string,
): SubCategory[] => getCategoryById(categoryId)?.subCategories ?? [];

// Helper: get all main categories with only id, name and icon
export interface CategorySummary {
  id: string;
  name: string;
  icon: string;
}

export const getCategorySummaries = (): CategorySummary[] =>
  SERVICE_CATEGORIES.map(({ id, name, icon }) => ({ id, name, icon }));
