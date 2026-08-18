import { ProductVariant, Ingredient, Review, Order } from '../types';
import { BRAND_IMAGES } from './images';

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: '100ml',
    name: '100 ml Bottle',
    subtitle: '1 Month Supply (100ml)',
    bottles: 1,
    volume: '100 ml / 3.38 fl. oz.',
    durationMonths: 1,
    price: 599,
    originalPrice: 799,
    discountPercentage: 25,
    popular: false,
    bestValue: false,
    freeGifts: [],
    image: BRAND_IMAGES.mainProduct,
    description: 'Perfect 100ml size for trying the authentic Ayurvedic cold-pressed formula. Targets active hair shedding and revitalizes scalp microcirculation within 21 days.'
  },
  {
    id: '200ml',
    name: '200 ml Bottle',
    subtitle: '2 Months Complete Regimen (200ml)',
    bottles: 1,
    volume: '200 ml / 6.76 fl. oz.',
    durationMonths: 2,
    price: 998,
    originalPrice: 1398,
    discountPercentage: 29,
    popular: true,
    bestValue: true,
    freeGifts: [
      'Free Express Priority Delivery',
      'Save ₹200 vs 2x 100ml'
    ],
    image: BRAND_IMAGES.mainProduct,
    description: 'Most popular 200ml size for complete root revitalization and sustainable hair density. Delivers maximum value per ml.'
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'red-onion',
    name: 'Red Onion',
    sanskritName: 'पलाण्डु (Palandu)',
    botanicalName: 'Allium cepa',
    tagline: "Nature's Scalp-Nourishing Powerhouse",
    role: 'Sulfur-Rich Follicle Booster & Regrowth Stimulant',
    keyBenefits: [
      'High Sulfur Content Boosts Keratin Production: Sulfur provides the essential building blocks needed to synthesize keratin, reinforcing structural integrity to prevent hair thinning and breakage.',
      'Stimulates Hair Regrowth: Boosts blood circulation to micro-capillaries around hair follicles, encouraging dormant roots to enter the active growth phase (notably effective for patchy hair loss/alopecia areata).',
      'Rich in Quercetin & Antioxidants: Quercetin is a powerful flavonoid that fights free radical damage, calms scalp inflammation, and helps protect hair follicles from oxidative stress.',
      'Antimicrobial Scalp Defense: Strong antibacterial and antifungal properties help clear scalp infections, unblock clogged pores, and minimize dandruff.',
      'Restores Moisture & Natural Luster: Contains essential minerals that help revive dull, lifeless strands, smoothing out cuticles for improved softness and shine.'
    ],
    detailedBenefits: [
      {
        title: 'High Sulfur Content Boosts Keratin Production',
        desc: 'Sulfur provides the essential building blocks needed to synthesize keratin, reinforcing structural integrity to prevent hair thinning and breakage.'
      },
      {
        title: 'Stimulates Hair Regrowth',
        desc: 'Boosts blood circulation to micro-capillaries around hair follicles, encouraging dormant roots to enter the active growth phase (notably effective for patchy hair loss/alopecia areata).'
      },
      {
        title: 'Rich in Quercetin & Antioxidants',
        desc: 'Quercetin is a powerful flavonoid that fights free radical damage, calms scalp inflammation, and helps protect hair follicles from oxidative stress.'
      },
      {
        title: 'Antimicrobial Scalp Defense',
        desc: 'Strong antibacterial and antifungal properties help clear scalp infections, unblock clogged pores, and minimize dandruff.'
      },
      {
        title: 'Restores Moisture & Natural Luster',
        desc: 'Contains essential minerals that help revive dull, lifeless strands, smoothing out cuticles for improved softness and shine.'
      }
    ],
    activeCompounds: ['Dietary Sulfur', 'Quercetin', 'Catalase', 'Flavonoid Glycosides', 'Essential Minerals'],
    ayurvedicDosha: 'Kapha',
    percentage: '10% Botanical Infusion',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80',
    description: "Red onion (Allium cepa) is exceptionally rich in dietary sulfur, quercetin, and essential antioxidants that directly target root weakness and patchy hair thinning. Onion has a long history of traditional use in scalp and hair care. For everyday hair care, red onion is a beautiful addition to a botanical formulation designed to nourish the scalp, support healthy-looking hair and complement a consistent hair-care routine.",
    brandDifference: 'Red Onion brings a modern botanical appeal to an age-old tradition of natural scalp care.',
    clinicalNote: 'Supplies concentrated dietary sulfur and quercetin that actively nourish follicular roots and accelerate cellular keratin synthesis without harsh chemical residues.'
  },
  {
    id: 'brahmi',
    name: 'Brahmi',
    sanskritName: 'ब्राह्मी (Brahmi)',
    botanicalName: 'Bacopa monnieri',
    tagline: 'The Ayurvedic Scalp-Nourishing Herb',
    role: 'Scalp-Nourishing Adaptogen & Stress-Induced Shedding Shield',
    keyBenefits: [
      'Strengthens Roots & Prevents Breakage: Forms a protective layer around hair fibers, thickening individual shafts and reducing split ends.',
      'Reduces Stress-Induced Hair Loss: Known for its nerve-soothing properties, scalp application helps calm tension, reducing cortisol-driven hair shedding.',
      'Protects & Nourishes Hair Follicles: Rich in antioxidants that neutralize free radical damage, keeping hair roots healthy and well-anchored.',
      'Soothes Dry, Flaky Scalp: Provides deep nourishment that calms itchiness, redness, and scalp dryness without stripping natural oils.',
      'Enhances Natural Hair Volume & Texture: Regular use adds body and fullness to limp strands, making fine hair look noticeably denser.',
      'Cools the Scalp & Supports Sleep: Delivers a soothing cooling sensation when massaged into the scalp, promoting relaxation and restful sleep.'
    ],
    detailedBenefits: [
      {
        title: 'Strengthens Roots & Prevents Breakage',
        desc: 'Forms a protective layer around hair fibers, thickening individual shafts and reducing split ends.'
      },
      {
        title: 'Reduces Stress-Induced Hair Loss',
        desc: 'Known for its nerve-soothing properties, scalp application helps calm tension, reducing cortisol-driven hair shedding.'
      },
      {
        title: 'Protects & Nourishes Hair Follicles',
        desc: 'Rich in antioxidants that neutralize free radical damage, keeping hair roots healthy and well-anchored.'
      },
      {
        title: 'Soothes Dry, Flaky Scalp',
        desc: 'Provides deep nourishment that calms itchiness, redness, and scalp dryness without stripping natural oils.'
      },
      {
        title: 'Enhances Natural Hair Volume & Texture',
        desc: 'Regular use adds body and fullness to limp strands, making fine hair look noticeably denser.'
      },
      {
        title: 'Cools the Scalp & Supports Sleep',
        desc: 'Delivers a soothing cooling sensation when massaged into the scalp, promoting relaxation and restful sleep.'
      }
    ],
    activeCompounds: ['Bacosides A & B', 'Hersaponin', 'Betulinic Acid', 'Alkaloids', 'Natural Saponins'],
    ayurvedicDosha: 'Pitta',
    percentage: '12% Pure Extract',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
    description: 'Brahmi (Bacopa monnieri) is a legendary Ayurvedic adaptogenic herb rich in bacosides, alkaloids, and natural saponins that fortify the hair structure while calming scalp nerves. Brahmi is traditionally associated with nourishing and soothing care. In a hair-oil formulation, it provides a botanical touch that complements massage-based scalp care.',
    brandDifference: 'Brahmi connects the timeless heritage of Ayurveda with a modern, luxurious hair-care ritual.',
    clinicalNote: 'Demonstrated to strengthen hair fiber tensile strength against traction while delivering adaptogenic neuro-calming support during scalp massage.'
  },
  {
    id: 'rosemary',
    name: 'Rosemary',
    sanskritName: 'रुचिरा (Ruchira)',
    botanicalName: 'Salvia rosmarinus',
    tagline: 'The Modern Botanical Hair-Care Favourite',
    role: 'Microcirculation & Cellular Turnover Activator (Natural DHT Shield)',
    keyBenefits: [
      'Stimulates Hair Regrowth: Carnosic acid heals tissue and nerve damage in the scalp while improving blood circulation, helping reactivate dormant hair follicles.',
      'Blocks Hair Loss (DHT Inhibition): Acts as a natural inhibitor of 5-alpha reductase, helping to reduce dihydrotestosterone (DHT) levels responsible for androgenetic alopecia (pattern baldness).',
      'Relieves Dandruff & Scalp Itching: Strong antifungal, antibacterial, and anti-inflammatory properties target Malassezia fungi and reduce scalp flakes.',
      'Reduces Scalp Inflammation & Irritation: Soothes inflammation, redness, and itching associated with scalp psoriasis, eczema, or environmental sensitivity.',
      'Adds Shine & Strengthens Shafts: Smooths hair cuticles, enhancing natural shine and reducing breakage over time.'
    ],
    detailedBenefits: [
      {
        title: 'Stimulates Hair Regrowth',
        desc: 'Carnosic acid heals tissue and nerve damage in the scalp while improving blood circulation, helping reactivate dormant hair follicles.'
      },
      {
        title: 'Blocks Hair Loss (DHT Inhibition)',
        desc: 'Acts as a natural inhibitor of 5-alpha reductase, helping to reduce dihydrotestosterone (DHT) levels responsible for androgenetic alopecia (pattern baldness).'
      },
      {
        title: 'Relieves Dandruff & Scalp Itching',
        desc: 'Strong antifungal, antibacterial, and anti-inflammatory properties target Malassezia fungi and reduce scalp flakes.'
      },
      {
        title: 'Reduces Scalp Inflammation & Irritation',
        desc: 'Soothes inflammation, redness, and itching associated with scalp psoriasis, eczema, or environmental sensitivity.'
      },
      {
        title: 'Adds Shine & Strengthens Shafts',
        desc: 'Smooths hair cuticles, enhancing natural shine and reducing breakage over time.'
      }
    ],
    activeCompounds: ['Carnosic Acid', 'Rosmarinic Acid', 'Ursolic Acid', '1,8-Cineole', 'Camphor'],
    ayurvedicDosha: 'Kapha',
    percentage: '8% Essential Distillate',
    image: 'https://images.unsplash.com/photo-1515586000433-a5512c1266e3?auto=format&fit=crop&w=600&q=80',
    description: 'Rosemary (Salvia rosmarinus) is rich in carnosic acid, rosmarinic acid, and ursolic acid, making it one of the most scientifically backed natural ingredients for hair loss and microcirculation.',
    brandDifference: 'Rosemary brings together traditional herbal knowledge and promising modern hair-care research.',
    clinicalNote: 'Demonstrated in peer-reviewed dermatology trials to significantly improve microcapillary perfusion and active follicular counts comparably to standard minoxidil therapies without synthetic side effects.'
  },
  {
    id: 'ginger',
    name: 'Ginger',
    sanskritName: 'आर्द्रक (Ardraka)',
    botanicalName: 'Zingiber officinale',
    tagline: 'A Warming Botanical Tradition',
    role: 'Scalp Warming & Microcirculation Energizer (Dandruff Shield)',
    keyBenefits: [
      'Boosts Scalp Circulation: Gingerol stimulates microcirculation in scalp blood vessels, delivering vital oxygen and nutrients directly to hair follicles.',
      'Fights Dandruff & Flakes: Powerful natural antiseptic and antifungal properties target Malassezia yeast to keep the scalp clean and flake-free.',
      'Relieves Scalp Inflammation: Soothes redness, itching, and irritation associated with dryness or environmental exposure.',
      'Nourishes & Strengthens Strands: Rich in minerals like potassium, magnesium, and phosphorus, along with essential fatty acids that help fortify brittle hair shafts.',
      'Prevents Free Radical Damage: Packed with antioxidants that neutralize environmental stressors that can age hair follicles prematurely.'
    ],
    detailedBenefits: [
      {
        title: 'Boosts Scalp Circulation',
        desc: 'Gingerol stimulates microcirculation in scalp blood vessels, delivering vital oxygen and nutrients directly to hair follicles.'
      },
      {
        title: 'Fights Dandruff & Flakes',
        desc: 'Powerful natural antiseptic and antifungal properties target Malassezia yeast to keep the scalp clean and flake-free.'
      },
      {
        title: 'Relieves Scalp Inflammation',
        desc: 'Soothes redness, itching, and irritation associated with dryness or environmental exposure.'
      },
      {
        title: 'Nourishes & Strengthens Strands',
        desc: 'Rich in minerals like potassium, magnesium, and phosphorus, along with essential fatty acids that help fortify brittle hair shafts.'
      },
      {
        title: 'Prevents Free Radical Damage',
        desc: 'Packed with antioxidants that neutralize environmental stressors that can age hair follicles prematurely.'
      }
    ],
    activeCompounds: ['Gingerols', 'Shogaols', 'Zingiberene', 'Potassium & Magnesium', 'Essential Fatty Acids'],
    ayurvedicDosha: 'Kapha',
    percentage: '6% Active Distillate',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    description: 'Ginger (Zingiber officinale) is packed with active bioactive compounds like gingerol, essential fatty acids, and antioxidants that energize the scalp and target dandruff. Ginger has been used traditionally in hair and scalp rituals, particularly in Asian herbal practices. Kesh Amruth celebrates Ginger primarily as part of its traditional botanical scalp-care blend.',
    brandDifference: 'Ginger adds warmth, character and traditional herbal richness to every drop.',
    clinicalNote: 'Warms and revitalizes scalp microvasculature, optimizing nutrient diffusion to the follicular bulb while providing gentle natural antimicrobial protection.'
  },
  {
    id: 'amla',
    name: 'Amla',
    sanskritName: 'आमलकी (Amalaki)',
    botanicalName: 'Phyllanthus emblica',
    tagline: 'The Indian Hair-Care Classic',
    role: 'Antioxidant Powerhouse & Melanin Protector (Follicle Revitalizer)',
    keyBenefits: [
      'Stimulates Hair Growth: Inhibits 5-alpha reductase (the enzyme responsible for hormonal hair loss) and increases cell proliferation in dermal papilla cells to promote faster regrowth.',
      'Prevents Premature Greying: High concentration of antioxidants and Vitamin C protects melanocytes from oxidative damage, helping hair retain its natural pigment.',
      'Strengthens Hair Shaft & Reduces Breakage: Rich in essential fatty acids and minerals that nourish roots and fortify hair strands against splitting and snapping.',
      'Purifies & Clarifies Scalp: Natural astringent and antibacterial properties dissolve excess sebum, clearing clogged hair follicles and reducing dandruff.',
      'Improves Hair Texture & Shine: Smooths down raised hair cuticles, enhancing natural luster and soft manageability without adding greasy weight.',
      'Soothes Scalp Inflammation: Calms irritated, itchy scalp tissue and maintains a balanced pH environment optimal for healthy hair.'
    ],
    detailedBenefits: [
      {
        title: 'Stimulates Hair Growth',
        desc: 'Inhibits 5-alpha reductase (the enzyme responsible for hormonal hair loss) and increases cell proliferation in dermal papilla cells to promote faster regrowth.'
      },
      {
        title: 'Prevents Premature Greying',
        desc: 'High concentration of antioxidants and Vitamin C protects melanocytes from oxidative damage, helping hair retain its natural pigment.'
      },
      {
        title: 'Strengthens Hair Shaft & Reduces Breakage',
        desc: 'Rich in essential fatty acids and minerals that nourish roots and fortify hair strands against splitting and snapping.'
      },
      {
        title: 'Purifies & Clarifies Scalp',
        desc: 'Natural astringent and antibacterial properties dissolve excess sebum, clearing clogged hair follicles and reducing dandruff.'
      },
      {
        title: 'Improves Hair Texture & Shine',
        desc: 'Smooths down raised hair cuticles, enhancing natural luster and soft manageability without adding greasy weight.'
      },
      {
        title: 'Soothes Scalp Inflammation',
        desc: 'Calms irritated, itchy scalp tissue and maintains a balanced pH environment optimal for healthy hair.'
      }
    ],
    activeCompounds: ['Emblicanin A & B', 'Natural Vitamin C', 'Gallic Acid', 'Ellagic Acid', 'Tannins', 'Essential Minerals'],
    ayurvedicDosha: 'Pitta',
    percentage: '15% Bioactive Infusion',
    image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=600&q=80',
    description: 'Amla (Phyllanthus emblica), or Indian Gooseberry, is one of the most potent natural sources of Vitamin C, tannins, and antioxidants that revitalize hair follicles from root to tip.',
    brandDifference: 'Amla brings an unmistakably Indian heritage to our botanical hair-care philosophy.',
    clinicalNote: 'Significantly enhances dermal papilla proliferation, protects follicular melanocyte viability against oxidative stress, and provides collagen-stabilizing antioxidants.'
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    sanskritName: 'नारिकेल तैल (Narikela Taila)',
    botanicalName: 'Cocos nucifera',
    tagline: 'Deeply Nourishing Hair Care',
    role: 'Deep-Shaft Cortex Penetrator & Protein Loss Shield',
    keyBenefits: [
      'Prevents Protein Loss: Lauric acid binds to hair proteins, significantly reducing protein loss from both undamaged and damaged hair during washing.',
      'Reduces Hygral Fatigue: Penetrates into the cortex to minimize swelling and deswelling caused by water absorption, protecting hair fibers from structural weakening.',
      'Deeply Conditions & Moisture-Seals: Acts as a powerful pre-wash or post-wash treatment that smooths cuticles and seals in long-lasting hydration.',
      'Protects Against Mechanical Damage: Lubricates the hair shaft, reducing friction and snagging during combing, brushing, and styling.',
      'Combats Scalp Fungi & Microbes: Packed with antimicrobial properties from lauric and caprylic acids that help maintain a healthy, flake-free scalp environment.',
      'Adds Luster & Softness: Restores natural oil balance to dry, dull strands, leaving them softer, smoother, and visibly glossier.'
    ],
    detailedBenefits: [
      {
        title: 'Prevents Protein Loss',
        desc: 'Lauric acid binds to hair proteins, significantly reducing protein loss from both undamaged and damaged hair during washing.'
      },
      {
        title: 'Reduces Hygral Fatigue',
        desc: 'Penetrates into the cortex to minimize swelling and deswelling caused by water absorption, protecting hair fibers from structural weakening.'
      },
      {
        title: 'Deeply Conditions & Moisture-Seals',
        desc: 'Acts as a powerful pre-wash or post-wash treatment that smooths cuticles and seals in long-lasting hydration.'
      },
      {
        title: 'Protects Against Mechanical Damage',
        desc: 'Lubricates the hair shaft, reducing friction and snagging during combing, brushing, and styling.'
      },
      {
        title: 'Combats Scalp Fungi & Microbes',
        desc: 'Packed with antimicrobial properties from lauric and caprylic acids that help maintain a healthy, flake-free scalp environment.'
      },
      {
        title: 'Adds Luster & Softness',
        desc: 'Restores natural oil balance to dry, dull strands, leaving them softer, smoother, and visibly glossier.'
      }
    ],
    activeCompounds: ['Lauric Acid (C12:0)', 'Caprylic Acid', 'Capric Acid', 'Medium-Chain Triglycerides (MCTs)', 'Natural Tocopherols'],
    ayurvedicDosha: 'Pitta',
    percentage: '25% Wood-Pressed Virgin Base',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80',
    description: 'Coconut oil (Cocos nucifera) is unique because it consists primarily of lauric acid, a medium-chain fatty acid whose straight molecular structure allows it to penetrate deep inside the hair shaft rather than just sitting on top. Among commonly used hair oils, coconut oil has particularly interesting evidence for protecting the hair shaft. Research has found that coconut oil can significantly reduce protein loss from both damaged and undamaged hair when used as a pre-wash or post-wash grooming treatment. Its fatty-acid composition allows it to interact closely with hair proteins and penetrate the hair shaft. This makes Coconut Oil an excellent foundation for a nourishing hair-oil formulation.',
    brandDifference: 'Coconut oil provides the nourishing foundation upon which our botanical blend comes together.',
    clinicalNote: 'Demonstrated in biochemical hair studies to penetrate the cortex and significantly reduce protein loss by up to 90% in both damaged and undamaged hair during water cycles.'
  },
  {
    id: 'castor-oil',
    name: 'Castor Oil',
    sanskritName: 'एरण्ड तैल (Eranda Taila)',
    botanicalName: 'Ricinus communis',
    tagline: 'Rich, Luxurious Conditioning',
    role: 'Follicle Densifier & High-Traction Protective Shield',
    keyBenefits: [
      'Promotes Thicker Hair & Regrowth: High concentration of ricinoleic acid boosts blood circulation to the hair follicles, nourishing roots and encouraging denser growth.',
      'Reduces Hair Fall & Breakage: Deeply coats the hair shaft to improve flexibility, reducing split ends and mechanical breakage from styling.',
      'Locks in Deep Moisture: Acts as a powerful natural humectant and occlusive, sealing hydration into dry, damaged, or high-porosity strands.',
      'Fights Scalp Infections & Fungi: Contains natural antimicrobial and anti-inflammatory properties that help combat scalp buildup, folliculitis, and dandruff.',
      'Enhances Natural Shine & Texture: Smooths raised cuticles, giving dull, frizzy hair a glossy, polished finish and extra weight.'
    ],
    detailedBenefits: [
      {
        title: 'Promotes Thicker Hair & Regrowth',
        desc: 'High concentration of ricinoleic acid boosts blood circulation to the hair follicles, nourishing roots and encouraging denser growth.'
      },
      {
        title: 'Reduces Hair Fall & Breakage',
        desc: 'Deeply coats the hair shaft to improve flexibility, reducing split ends and mechanical breakage from styling.'
      },
      {
        title: 'Locks in Deep Moisture',
        desc: 'Acts as a powerful natural humectant and occlusive, sealing hydration into dry, damaged, or high-porosity strands.'
      },
      {
        title: 'Fights Scalp Infections & Fungi',
        desc: 'Contains natural antimicrobial and anti-inflammatory properties that help combat scalp buildup, folliculitis, and dandruff.'
      },
      {
        title: 'Enhances Natural Shine & Texture',
        desc: 'Smooths raised cuticles, giving dull, frizzy hair a glossy, polished finish and extra weight.'
      }
    ],
    activeCompounds: ['Ricinoleic Acid (90%)', 'Vitamin E (Tocopherol)', 'Omega-6 Fatty Acids', 'Linoleic Acid', 'Oleic Acid'],
    ayurvedicDosha: 'Vata',
    percentage: '10% Cold-Pressed Base',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
    description: 'Castor oil (Ricinus communis) is a heavy, nutrient-dense humectant rich in ricinoleic acid, Vitamin E, and essential omega-6 fatty acids that deeply condition the scalp and lock in moisture. Its primary value in hair care is best understood as conditioning and lubrication, it can help coat the hair shaft, improve the feel of dry hair and reduce friction and breakage.',
    brandDifference: 'Castor oil gives Kesh Amruth its luxurious, deeply nourishing character.',
    clinicalNote: 'Provides a high-viscosity biomimetic protective film that seals cuticular gaps, minimizes friction coefficients, and enhances tensile flexibility against mechanical strain.'
  },
  {
    id: 'curry-leaves',
    name: 'Curry Leaves',
    sanskritName: 'कैडर्य (Kaidarya)',
    botanicalName: 'Murraya koenigii',
    tagline: "India's Traditional Hair-Care Herb",
    role: 'Beta-Carotene Root Strengthener & Natural Pigment Preserver',
    keyBenefits: [
      'Prevents Premature Greying: High antioxidant content and essential nutrients help preserve natural melanin in hair follicles, slowing down early greying.',
      'Reduces Hair Fall & Thinning: Rich in beta-carotene and proteins that rebuild weak hair shafts, reinforce root strength, and minimize excessive shedding.',
      'Stimulates New Hair Growth: Carbazole alkaloids boost microcirculation to the scalp, reactivating dormant hair follicles to foster healthy regrowth.',
      'Clears Dandruff & Scalp Infections: Natural antifungal and antibacterial properties remove dead skin buildup and calm scalp itchiness.',
      'Repairs Damaged & Brittle Hair: Deeply nourishes the cuticle layer, restoring natural elasticity and preventing split ends caused by pollution and styling heat.'
    ],
    detailedBenefits: [
      {
        title: 'Prevents Premature Greying',
        desc: 'High antioxidant content and essential nutrients help preserve natural melanin in hair follicles, slowing down early greying.'
      },
      {
        title: 'Reduces Hair Fall & Thinning',
        desc: 'Rich in beta-carotene and proteins that rebuild weak hair shafts, reinforce root strength, and minimize excessive shedding.'
      },
      {
        title: 'Stimulates New Hair Growth',
        desc: 'Carbazole alkaloids boost microcirculation to the scalp, reactivating dormant hair follicles to foster healthy regrowth.'
      },
      {
        title: 'Clears Dandruff & Scalp Infections',
        desc: 'Natural antifungal and antibacterial properties remove dead skin buildup and calm scalp itchiness.'
      },
      {
        title: 'Repairs Damaged & Brittle Hair',
        desc: 'Deeply nourishes the cuticle layer, restoring natural elasticity and preventing split ends caused by pollution and styling heat.'
      }
    ],
    activeCompounds: ['Beta-Carotene', 'Plant Amino Acids', 'Carbazole Alkaloids (Mahanimbine)', 'Iron & Minerals', 'Antioxidant Flavonoids'],
    ayurvedicDosha: 'Tridoshic',
    percentage: '8% Herbal Extract',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    description: 'Curry leaves (Murraya koenigii) are packed with beta-carotene, plant proteins, iron, and carbazole alkaloids, making them a powerful natural remedy for hair thinning and root nourishment. For generations, Indian households have incorporated curry leaves into traditional hair-oiling practices.',
    brandDifference: "Curry Leaves bring the warmth and familiarity of India's traditional hair-care rituals to our formulation.",
    clinicalNote: 'Supplies essential plant amino acids, iron, and carbazole alkaloids directly to the hair matrix to nourish follicular cells and maintain natural melanin integrity.'
  },
  {
    id: 'neelambari',
    name: 'Neelambari',
    sanskritName: 'नीलाम्बरी (Neelambari)',
    botanicalName: 'Indigofera tinctoria',
    tagline: 'The Ayurvedic Indigo Tradition',
    role: 'Crown Rejuvenator & Natural Pigmentation Preserver (Sheeta Virya Cooling)',
    keyBenefits: [
      'Delays Premature Greying: Packed with flavonoids that protect melanocytes (pigment-producing cells) from oxidative damage, helping hair maintain its natural dark shade longer.',
      'Acts as a Natural Hair Dye: Traditionally used as a plant-based alternative to chemical hair dyes, producing rich brown to deep black tones when combined with henna.',
      'Tightens Follicles to Reduce Shedding: Contains natural tannins that firm up scalp tissue around hair roots, anchoring follicles and minimizing hair fall.',
      'Cools & Calms the Scalp: Classified in Ayurveda as a cooling (Sheeta Virya) herb, it reduces scalp heat, soothing redness, itching, and stress-related hair thinning.',
      'Combats Dandruff & Scalp Yeast: Indirubin and antimicrobial compounds target Malassezia fungi to clean up scalp flaking and infections.',
      'Conditions Hair Strands: Smooths out rough cuticles, adding natural body, shine, and soft texture to dry or brittle hair.'
    ],
    detailedBenefits: [
      {
        title: 'Delays Premature Greying',
        desc: 'Packed with flavonoids that protect melanocytes (pigment-producing cells) from oxidative damage, helping hair maintain its natural dark shade longer.'
      },
      {
        title: 'Acts as a Natural Hair Dye',
        desc: 'Traditionally used as a plant-based alternative to chemical hair dyes, producing rich brown to deep black tones when combined with henna.'
      },
      {
        title: 'Tightens Follicles to Reduce Shedding',
        desc: 'Contains natural tannins that firm up scalp tissue around hair roots, anchoring follicles and minimizing hair fall.'
      },
      {
        title: 'Cools & Calms the Scalp',
        desc: 'Classified in Ayurveda as a cooling (Sheeta Virya) herb, it reduces scalp heat, soothing redness, itching, and stress-related hair thinning.'
      },
      {
        title: 'Combats Dandruff & Scalp Yeast',
        desc: 'Indirubin and antimicrobial compounds target Malassezia fungi to clean up scalp flaking and infections.'
      },
      {
        title: 'Conditions Hair Strands',
        desc: 'Smooths out rough cuticles, adding natural body, shine, and soft texture to dry or brittle hair.'
      }
    ],
    activeCompounds: ['Indirubin', 'Indican', 'Bioactive Flavonoids', 'Natural Tannins', 'Phenolic Glycosides'],
    ayurvedicDosha: 'Pitta',
    percentage: '7% Botanical Infusion',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80',
    description: 'Neelambari (botanically known as Indigofera tinctoria or True Indigo) is a revered Ayurvedic plant rich in bioactive flavonoids, tannins, and indirubin that target scalp vitality and hair pigmentation. For Kesh Amruth, Neelambari represents the deeper heritage of Indian botanical hair care—a reminder that the traditional approach to beautiful hair has always looked to nature.',
    brandDifference: 'Neelambari adds an authentic touch of traditional Indian herbal wisdom to our modern formulation.',
    clinicalNote: 'Provides powerful Sheeta Virya cooling benefits to alleviate Pitta scalp inflammation while preserving follicular melanocyte integrity.'
  },
  {
    id: 'flaxseed',
    name: 'Flaxseed',
    sanskritName: 'अतसी (Atasi)',
    botanicalName: 'Linum usitatissimum',
    tagline: 'Natural Nourishment for Smooth, Manageable Hair',
    role: 'Omega-3 Matrix Nourisher & Frizz-Control Smoothing Agent',
    keyBenefits: [
      'Rich in Omega-3 Fatty Acids: Nourishes hair follicles, improves shaft elasticity, and reduces brittleness to prevent hair breakage.',
      'Natural Curl Definition & Hold: Natural non-flaking botanical mucilage defines curl and wave patterns without harsh chemical stiffness.',
      'Deep Moisture & Frizz Control: Binds hydration to dry strands, smoothing the cuticle layer and taming flyaways.',
      'Soothes Scalp & Reduces Inflammation: Antioxidants and Vitamin E help relieve scalp redness, dryness, and inflammation.',
      'Protects Against Environmental Damage: Shields hair fibers from free radicals, pollution, and thermal stress.',
      'Supports Scalp Circulation: Vitamin B complexes help boost microcirculation to nourish roots and support overall hair vitality.'
    ],
    detailedBenefits: [
      {
        title: 'Rich in Omega-3 Fatty Acids',
        desc: 'Nourishes hair follicles, improves shaft elasticity, and reduces brittleness to prevent hair breakage.'
      },
      {
        title: 'Natural Curl Definition & Hold',
        desc: 'Natural non-flaking botanical mucilage defines curl and wave patterns without harsh chemical stiffness.'
      },
      {
        title: 'Deep Moisture & Frizz Control',
        desc: 'Binds hydration to dry strands, smoothing the cuticle layer and taming flyaways.'
      },
      {
        title: 'Soothes Scalp & Reduces Inflammation',
        desc: 'Antioxidants and Vitamin E help relieve scalp redness, dryness, and inflammation.'
      },
      {
        title: 'Protects Against Environmental Damage',
        desc: 'Shields hair fibers from free radicals, pollution, and thermal stress.'
      },
      {
        title: 'Supports Scalp Circulation',
        desc: 'Vitamin B complexes help boost microcirculation to nourish roots and support overall hair vitality.'
      }
    ],
    activeCompounds: ['Alpha-Linolenic Acid (ALA Omega-3)', 'Vitamin E (Tocopherols)', 'B-Complex Vitamins', 'Soluble Plant Mucilage', 'Lignans'],
    ayurvedicDosha: 'Vata',
    percentage: '6% Cold-Pressed Extract',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    description: 'Flaxseeds (Linum usitatissimum) are packed with Omega-3 fatty acids (alpha-linolenic acid), Vitamin E, B vitamins, and natural mucilage, making them exceptionally beneficial for hydration and curl definition. In hair care, flaxseed is particularly appreciated for its conditioning and smoothing qualities. Flaxseed-based preparations are commonly used to help hair feel more hydrated, manageable and less prone to frizz. In Kesh Amruth, Flax adds another layer of botanical nourishment to help create hair that feels soft, conditioned and beautifully cared for.',
    brandDifference: 'Flax helps bring softness and manageability to the Kesh Amruth experience.',
    clinicalNote: 'Supplies essential ALA omega-3 lipids and hydrophilic plant mucilage to coat the cortex, restoring mechanical flexural strength and eliminating friction-induced frizz.'
  },
  {
    id: 'kalonji',
    name: 'Kalonji / Black Seed',
    sanskritName: 'उपकुञ्चिका (Upakunchika)',
    botanicalName: 'Nigella sativa',
    tagline: 'The Black Seed of Traditional Wellness',
    role: 'Thymoquinone Follicular Activator & Shedding Blocker',
    keyBenefits: [
      'Blocks Telogen Effluvium & Shedding: Thymoquinone acts as a potent anti-inflammatory and antioxidant that revitalizes weak hair follicles to reduce active hair loss.',
      'Stimulates Regrowth: Nourishes hair roots with linoleic and oleic acids, boosting blood circulation to encourage dormant follicles back into growth.',
      'Soothes Scalp Conditions: Strong antibacterial and antifungal properties calm inflammation, soothe itching, and control dandruff-causing yeast.',
      'Delays Premature Greying: Helps preserve melanin content in hair follicles, maintaining natural pigment for longer.',
      'Conditions & Adds Elasticity: Rich fatty acid content restores moisture balance, sealing dry ends and improving hair strength to prevent breakage.'
    ],
    detailedBenefits: [
      {
        title: 'Blocks Telogen Effluvium & Shedding',
        desc: 'Thymoquinone acts as a potent anti-inflammatory and antioxidant that revitalizes weak hair follicles to reduce active hair loss.'
      },
      {
        title: 'Stimulates Regrowth',
        desc: 'Nourishes hair roots with linoleic and oleic acids, boosting blood circulation to encourage dormant follicles back into growth.'
      },
      {
        title: 'Soothes Scalp Conditions',
        desc: 'Strong antibacterial and antifungal properties calm inflammation, soothe itching, and control dandruff-causing yeast.'
      },
      {
        title: 'Delays Premature Greying',
        desc: 'Helps preserve melanin content in hair follicles, maintaining natural pigment for longer.'
      },
      {
        title: 'Conditions & Adds Elasticity',
        desc: 'Rich fatty acid content restores moisture balance, sealing dry ends and improving hair strength to prevent breakage.'
      }
    ],
    activeCompounds: ['Thymoquinone', 'Nigellone', 'Linoleic Acid', 'Oleic Acid', 'Phytosterols', 'Antioxidants'],
    ayurvedicDosha: 'Tridoshic',
    percentage: '7% Pure Cold-Pressed Extract',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80',
    description: 'Kalonji, also known as Black Seed or Nigella sativa, has been treasured in traditional wellness practices for centuries. It is rich in thymoquinone, essential fatty acids, and antioxidants that actively target hair thinning and scalp health.',
    brandDifference: 'Kalonji adds a distinctive botanical ingredient with a rich history in traditional wellness.',
    clinicalNote: 'Thymoquinone blocks pro-inflammatory cytokines around the dermal papilla, suppressing acute telogen shedding while revitalizing microvascular perfusion.'
  },
  {
    id: 'neem',
    name: 'Neem',
    sanskritName: 'निम्ब (Nimba)',
    botanicalName: 'Azadirachta indica',
    tagline: "Nature's Scalp-Care Guardian",
    role: 'Antibacterial & Antifungal Scalp Purifier (Ecosystem Balancer)',
    keyBenefits: [
      'Treats & Prevents Dandruff: Potent antifungal properties target Malassezia, the fungus responsible for dandruff and flaky scalp buildup.',
      'Relieves Scalp Itch & Inflammation: Anti-inflammatory compounds calm irritation, redness, and scalp psoriasis or eczema flare-ups.',
      'Protects Against Lice & Infections: Natural insecticidal properties help eradicate head lice and shield hair follicles from bacterial infections.',
      'Strengthens Hair Follicles: Rich in antioxidants and fatty acids like oleic, linoleic, and palmitic acids, which nourish roots and reduce premature shedding.',
      'Balances Oil Production: Regulates sebum secretion on oily scalps without stripping away essential moisture.',
      'Promotes Scalp Regeneration: Improves cell turnover and enhances microcirculation to foster a healthier environment for hair growth.'
    ],
    detailedBenefits: [
      {
        title: 'Treats & Prevents Dandruff',
        desc: 'Potent antifungal properties target Malassezia, the fungus responsible for dandruff and flaky scalp buildup.'
      },
      {
        title: 'Relieves Scalp Itch & Inflammation',
        desc: 'Anti-inflammatory compounds calm irritation, redness, and scalp psoriasis or eczema flare-ups.'
      },
      {
        title: 'Protects Against Lice & Infections',
        desc: 'Natural insecticidal properties help eradicate head lice and shield hair follicles from bacterial infections.'
      },
      {
        title: 'Strengthens Hair Follicles',
        desc: 'Rich in antioxidants and fatty acids like oleic, linoleic, and palmitic acids, which nourish roots and reduce premature shedding.'
      },
      {
        title: 'Balances Oil Production',
        desc: 'Regulates sebum secretion on oily scalps without stripping away essential moisture.'
      },
      {
        title: 'Promotes Scalp Regeneration',
        desc: 'Improves cell turnover and enhances microcirculation to foster a healthier environment for hair growth.'
      }
    ],
    activeCompounds: ['Nimbin', 'Azadirachtin', 'Nimbidol', 'Gedunin', 'Quercetin', 'Essential Fatty Acids'],
    ayurvedicDosha: 'Pitta',
    percentage: '6% Medicated Extract',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=600&q=80',
    description: 'Neem has been an important part of Indian traditional wellness for centuries. Neem (Azadirachta indica), long known as nature’s medicinal herb, is packed with nimbin, fatty acids, and powerful antioxidants that purify the scalp and strengthen hair health. Neem contains numerous naturally occurring compounds and is widely used in traditional scalp and skin care. Research has demonstrated antimicrobial activity from neem-derived compounds, and a recent study also reported improvements in dandruff scores following topical neem leaf paste application. This makes Neem a particularly appealing ingredient for people who want their hair-oiling ritual to include scalp-focused care.',
    brandDifference: 'Neem brings the trusted heritage of Indian scalp care into every nourishing application.',
    clinicalNote: 'Demonstrated broad-spectrum antifungal efficacy against Malassezia restricta and globosa, dramatically improving clinical scalp flaking and pruritus scores.'
  },
  {
    id: 'olive-oil',
    name: 'Olive Oil',
    sanskritName: 'जलपाई तैल (Jalpai Taila)',
    botanicalName: 'Olea europaea',
    tagline: 'Botanical Moisture & Smoothness',
    role: 'Squalene-Rich Emollient & Deep Strand Conditioner',
    keyBenefits: [
      'Deeply Hydrates & Locks Moisture: Seals hair cuticles to prevent moisture loss, making it especially effective for dry, high-porosity, or coarse hair.',
      'Reduces Hair Breakage: Improves hair elasticity and flexibility, minimizing mechanical damage during brushing and styling.',
      'Smoothes Frizz & Flyaways: Coats the outer layer of strands to tame stubborn frizz, split ends, and rough texture.',
      'Protects Against Heat & Stress: Rich in polyphenols that shield hair fibers from environmental damage and free radicals.',
      'Soothes Dry Scalp: Calms flaky, dry scalp skin when applied as a pre-shampoo massage treatment.'
    ],
    detailedBenefits: [
      {
        title: 'Deeply Hydrates & Locks Moisture',
        desc: 'Seals hair cuticles to prevent moisture loss, making it especially effective for dry, high-porosity, or coarse hair.'
      },
      {
        title: 'Reduces Hair Breakage',
        desc: 'Improves hair elasticity and flexibility, minimizing mechanical damage during brushing and styling.'
      },
      {
        title: 'Smoothes Frizz & Flyaways',
        desc: 'Coats the outer layer of strands to tame stubborn frizz, split ends, and rough texture.'
      },
      {
        title: 'Protects Against Heat & Stress',
        desc: 'Rich in polyphenols that shield hair fibers from environmental damage and free radicals.'
      },
      {
        title: 'Soothes Dry Scalp',
        desc: 'Calms flaky, dry scalp skin when applied as a pre-shampoo massage treatment.'
      }
    ],
    activeCompounds: ['Squalene', 'Oleic Acid (Omega-9)', 'Vitamin E (Tocopherols)', 'Polyphenols (Hydroxytyrosol)', 'Essential Fatty Acids'],
    ayurvedicDosha: 'Vata',
    percentage: '8% Extra Virgin Base',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=600&q=80',
    description: 'Olive oil (Olea europaea) is an emollient packed with squalene, oleic acid, and antioxidants like vitamin E that penetrate the hair shaft better than many lighter oils. In hair care, Olive Oil helps provide lubrication and can leave hair feeling softer and smoother. It is particularly useful as part of a nourishing oil blend for hair that feels dry or lacks manageability.',
    brandDifference: 'Olive Oil adds smoothness, richness and a luxurious finish to our botanical oil blend.',
    clinicalNote: 'Significantly improves inter-fiber lubricity and cuticular cohesion, lowering the friction coefficient to safeguard strands against tensile fracture.'
  },
  {
    id: 'bhringraj',
    name: 'Bhringraj',
    sanskritName: 'केशराज (Kesharaja)',
    botanicalName: 'Eclipta alba',
    tagline: 'The Ayurvedic Hair-Care Favourite',
    role: 'King of Hair (Kesharaja) — Premier Follicle Activator & Anagen Stimulator',
    keyBenefits: [
      'Stimulates Hair Growth: Increases blood circulation to the scalp and shifts dormant hair follicles into the active growth (anagen) phase.',
      'Reduces Hair Fall: Strengthens hair roots from within and minimizes breakage due to its high nutrient profile.',
      'Fights Dandruff & Scalp Infections: Contains natural antimicrobial and anti-inflammatory properties that reduce scalp itchiness and fungal activity.',
      'Prevents Premature Greying: Packed with natural antioxidants and pigments that help maintain the hair\'s natural dark tone.',
      'Deeply Conditions & Adds Shine: Nourishes dry, brittle strands to improve overall texture and natural luster.',
      'Soothes Scalp Inflammation: Has a natural cooling effect that relaxes the scalp and helps reduce stress-induced hair loss.'
    ],
    detailedBenefits: [
      {
        title: 'Stimulates Hair Growth',
        desc: 'Increases blood circulation to the scalp and shifts dormant hair follicles into the active growth (anagen) phase.'
      },
      {
        title: 'Reduces Hair Fall',
        desc: 'Strengthens hair roots from within and minimizes breakage due to its high nutrient profile.'
      },
      {
        title: 'Fights Dandruff & Scalp Infections',
        desc: 'Contains natural antimicrobial and anti-inflammatory properties that reduce scalp itchiness and fungal activity.'
      },
      {
        title: 'Prevents Premature Greying',
        desc: 'Packed with natural antioxidants and pigments that help maintain the hair\'s natural dark tone.'
      },
      {
        title: 'Deeply Conditions & Adds Shine',
        desc: 'Nourishes dry, brittle strands to improve overall texture and natural luster.'
      },
      {
        title: 'Soothes Scalp Inflammation',
        desc: 'Has a natural cooling effect that relaxes the scalp and helps reduce stress-induced hair loss.'
      }
    ],
    activeCompounds: ['Wedelolactone', 'Ecliptine', 'Iron & Magnesium', 'Vitamin E', 'Phytosterols & Flavonoids'],
    ayurvedicDosha: 'Tridoshic',
    percentage: '18% Botanical Extract',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=600&q=80',
    description: 'Bhringraj (Eclipta alba), often called the "King of Hair" in Ayurveda, is a traditional herb rich in iron, magnesium, vitamin E, and bioactive compounds like wedelolactone.',
    brandDifference: 'Bhringraj is one of the signature Ayurvedic herbs that gives Kesh Amruth its authentic herbal identity.',
    clinicalNote: 'Activates follicular microcirculation and dermal papilla proliferation, accelerating Anagen-phase transition while wedelolactone preserves melanogenesis.'
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sunita Sharma',
    city: 'Mumbai, MH',
    rating: 5,
    verified: true,
    date: '3 days ago',
    title: 'Hair fall stopped by 90% in just 4 weeks!',
    content: 'I was losing clumps of hair every single time I washed or combed my hair after having COVID last year. I tried expensive serums and dermatologists. Kesh Amruth is genuinely magic in a bottle. The herbal fragrance is so soothing and within 3 weeks my hair fall reduced dramatically. I can see tiny baby hair sprouting all along my front hairline now! Ordered the 200ml bottle for my mother and sister too.',
    hairType: 'Fine, Wavy Hair with Crown Thinning',
    durationUsed: 'Used for 7 Weeks (200ml Regimen)',
    helpfulCount: 84,
    beforeAfterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    tags: ['Hair Fall Stopped', 'Baby Hair Regrowth', 'Real Results']
  },
  {
    id: 'rev-2',
    author: 'Vikramaditya Iyer',
    city: 'Bengaluru, KA',
    rating: 5,
    verified: true,
    date: '1 week ago',
    title: 'Receding temple area is filling in nicely',
    content: 'As a 32-year-old software engineer, chronic stress and hard water in Bangalore had destroyed my hair density. After applying Kesh Amruth 3 nights a week with the wooden neem comb, my scalp dryness and itchiness vanished in 4 days. After 2 months, my barber noticed my hair was significantly thicker and denser. 100% natural and feels light on the scalp without feeling sticky.',
    hairType: 'Thick Straight Hair, Oily Scalp',
    durationUsed: 'Used for 9 Weeks',
    helpfulCount: 61,
    tags: ['Men Scalp Care', 'Density Boost', 'Non-Sticky']
  },
  {
    id: 'rev-3',
    author: 'Pooja Deshmukh',
    city: 'Pune, MH',
    rating: 5,
    verified: true,
    date: '2 weeks ago',
    title: 'The best Ayurvedic oil I have ever used in my life',
    content: 'You can tell immediately by the deep golden emerald color and genuine botanical aroma that there are NO synthetic fragrances or mineral oils. It washes out easily with mild shampoo and leaves hair feeling like liquid silk. The 200ml bottle is exceptional value!',
    hairType: 'Curly, Dry, Frizzy Hair',
    durationUsed: 'Used for 5 Weeks',
    helpfulCount: 42,
    tags: ['Silky Smooth', 'Pure Ayurvedic', 'Quality Neem Comb']
  },
  {
    id: 'rev-4',
    author: 'Dr. Ananya Reddy',
    city: 'Hyderabad, TS',
    rating: 5,
    verified: true,
    date: '3 weeks ago',
    title: 'Clinically impressive formulation without harsh side effects',
    content: 'As a wellness practitioner, I appreciate the combination of traditional Bhringraj with modern research on Rosemary and Amla. The cold extraction preserves the active wedelolactone. My patients have reported great satisfaction with both scalp soothing and regrowth density.',
    hairType: 'Combination Scalp',
    durationUsed: 'Used for 12 Weeks',
    helpfulCount: 95,
    tags: ['Expert Recommended', 'Safe & Pure', 'Zero Chemicals']
  },
  {
    id: 'rev-5',
    author: 'Meera Kapoor',
    city: 'New Delhi, DL',
    rating: 5,
    verified: true,
    date: '1 month ago',
    title: 'Postpartum hair loss saved!',
    content: '4 months postpartum I thought I was going to lose half my hair. Kesh Amruth was recommended by my grandmother. 2 months in, my hair shedding is back to completely normal levels. It gave me my confidence back.',
    hairType: 'Medium Density, Dry Ends',
    durationUsed: 'Used for 8 Weeks',
    helpfulCount: 53,
    tags: ['Postpartum Care', 'Fast Delivery', 'Root Strength']
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'KA-89421',
    date: 'August 16, 2026',
    customer: {
      fullName: 'Sunil Verma',
      email: 'sunil.verma@example.com',
      phone: '+91 98765 43210',
      street: 'Flat 402, Green Meadows, Koramangala',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560034',
      country: 'India'
    },
    items: [
      {
        variant: PRODUCT_VARIANTS[1], // 200ml Bottle
        quantity: 1,
        customGiftWrap: true
      }
    ],
    subtotal: 998,
    discount: 0,
    shippingFee: 0,
    total: 998,
    couponApplied: 'AYURVEDA20',
    paymentMethod: 'upi',
    paymentStatus: 'PAID',
    status: 'Out for Delivery',
    courierName: 'Bluedart Express Priority',
    trackingNumber: 'BD-84729103IN',
    estimatedDelivery: 'Today by 6:00 PM',
    timeline: [
      {
        status: 'Order Placed & Verified',
        description: 'Payment confirmed via UPI. Order entered artisanal preparation queue.',
        location: 'Kesh Amruth Central Apothecary, Nashik',
        timestamp: 'Aug 15, 2026 - 10:24 AM',
        completed: true
      },
      {
        status: 'Hand-Packed with Neem Comb',
        description: 'Fresh batch batch #KA-AUG26 inspected, bottled in UV-protective amber glass, and sealed with tamper-proof seal.',
        location: 'Apothecary Packaging Unit, Nashik',
        timestamp: 'Aug 15, 2026 - 02:40 PM',
        completed: true
      },
      {
        status: 'Dispatched with Express Courier',
        description: 'Handed over to Bluedart Air Cargo Express (AWB: BD-84729103IN).',
        location: 'Mumbai Air Hub',
        timestamp: 'Aug 15, 2026 - 08:15 PM',
        completed: true
      },
      {
        status: 'Arrived at Destination City Hub',
        description: 'Package sorted and cleared at Bangalore Koramangala Delivery Hub.',
        location: 'Bengaluru South Facility',
        timestamp: 'Aug 16, 2026 - 06:30 AM',
        completed: true
      },
      {
        status: 'Out for Delivery',
        description: 'Delivery Executive (Ramesh Kumar - +91 91234 56789) is en route with your package.',
        location: 'Koramangala, Bengaluru',
        timestamp: 'Aug 16, 2026 - 09:15 AM',
        completed: true,
        current: true
      },
      {
        status: 'Delivered',
        description: 'Recipient signature and delivery completion.',
        location: 'Bengaluru, KA',
        timestamp: 'Estimated Today by 6:00 PM',
        completed: false
      }
    ]
  },
  {
    id: 'KA-76290',
    date: 'August 14, 2026',
    customer: {
      fullName: 'Neha Singhal',
      email: 'neha.singhal@example.com',
      phone: '+91 98111 22334',
      street: 'Plot 18, Sector 15, CBD Belapur',
      city: 'Navi Mumbai',
      state: 'Maharashtra',
      pincode: '400614',
      country: 'India'
    },
    items: [
      {
        variant: PRODUCT_VARIANTS[0], // 100ml Bottle
        quantity: 1
      }
    ],
    subtotal: 599,
    discount: 60,
    shippingFee: 0,
    total: 539,
    couponApplied: 'FIRST10',
    paymentMethod: 'card',
    paymentStatus: 'PAID',
    status: 'Delivered',
    courierName: 'Delhivery Express Direct',
    trackingNumber: 'DL-993847120',
    estimatedDelivery: 'Delivered on Aug 16, 2026',
    timeline: [
      {
        status: 'Order Placed & Verified',
        description: 'Payment confirmed via Visa Card.',
        location: 'Kesh Amruth Apothecary, Nashik',
        timestamp: 'Aug 14, 2026 - 11:10 AM',
        completed: true
      },
      {
        status: 'Dispatched',
        description: 'Package handed to courier partner.',
        location: 'Nashik Logistics Hub',
        timestamp: 'Aug 14, 2026 - 04:30 PM',
        completed: true
      },
      {
        status: 'Delivered Successfully',
        description: 'Delivered to recipient at front gate.',
        location: 'Navi Mumbai, MH',
        timestamp: 'Aug 16, 2026 - 01:22 PM',
        completed: true,
        current: true
      }
    ]
  }
];

export const FAQS = [
  {
    question: 'How quickly will I see visible results with Kesh Amruth?',
    answer: 'Most users experience a noticeable 70-90% reduction in hair fall and scalp dryness within 21 to 28 days of consistent application (2-3 times per week). For new baby hair regrowth and enhanced follicular density, our 200ml (2-Month) regimen is our most recommended option to cover the complete Ayurvedic cellular renewal cycle.'
  },
  {
    question: 'How do I properly apply Kesh Amruth for maximum absorption?',
    answer: 'Take 5 to 10 ml (1-2 dropperfuls) of Kesh Amruth. Rub gently between your palms to warm the herbal botanicals. Part your hair and apply directly onto the scalp roots. Perform a gentle 5-10 minute circular massage (the Ayurvedic Champi ritual) using your fingertips to stimulate microcirculation. Leave it on for at least 2 hours or overnight, then wash with a gentle, sulfate-free shampoo.'
  },
  {
    question: 'Is Kesh Amruth 100% natural, chemical-free, and safe for colored/treated hair?',
    answer: 'Yes, absolutely. Kesh Amruth is 100% Ayurvedic, cold-pressed, and free from mineral oils, parabens, silicones, synthetic artificial fragrances, and chemical preservatives. It is completely safe for color-treated, keratin-treated, and sensitive scalps.'
  },
  {
    question: 'Is this hair oil suitable for both men and women?',
    answer: 'Yes. Kesh Amruth is formulated to address the root biological causes of hair thinning that affect both men and women—namely DHT sensitivity at the follicle base, poor capillary circulation, oxidative stress, and scalp microbial imbalances.'
  },
  {
    question: 'Will it make my scalp sticky or greasy?',
    answer: 'No. Unlike cheap commercial oils loaded with thick liquid paraffin or mineral oil, Kesh Amruth uses a wood-pressed virgin coconut and sesame carrier base that mimics the scalp natural sebum lipids, allowing it to penetrate deeply into the follicular shaft without leaving a heavy greasy layer.'
  },
  {
    question: 'How does shipping and order tracking work?',
    answer: 'We dispatch all orders within 24 hours via express air courier (Bluedart, Delhivery, Express Air). Once placed on WhatsApp, our team directly confirms your order and sends tracking updates straight to your WhatsApp.'
  },
  {
    question: 'What is the 30-Day Happiness Guarantee?',
    answer: 'We stand behind the potency of our authentic Ayurvedic herbs. If you do not feel a genuine difference in your scalp health or hair fall within 30 days of consistent use, simply contact our concierge team for a hassle-free refund or replacement.'
  }
];

export const CLINICAL_STATS = [
  { metric: '94%', label: 'Experienced reduced hair shedding in 21 days', detail: 'Based on a 12-week clinical perception study of 420 participants' },
  { metric: '89%', label: 'Noticed baby hair regrowth along thinning hairline', detail: 'Measured by follicular dermatoscope analysis after 60 days' },
  { metric: '98%', label: 'Reported immediate relief from scalp itch & flakes', detail: 'Within 3 applications of bioactive Bhringraj & Brahmi' },
  { metric: '3.4x', label: 'Greater hair shaft tensile strength against breakage', detail: 'Tested via mechanical pull force resistance' }
];

export const AYURVEDIC_PROMISES = [
  {
    title: '100% Cold-Pressed Purity',
    description: 'Slow-extracted in wooden Ghani presses below 40°C to preserve living bioactive enzymes.',
    icon: 'Leaf'
  },
  {
    title: 'Zero Harsh Chemicals',
    description: 'No mineral oil, no silicones, no synthetic fragrances, no parabens or sulfates.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Ayush & GMP Certified',
    description: 'Manufactured in an ISO & GMP-certified Ayurvedic apothecary following ancient shloka standards.',
    icon: 'Award'
  },
  {
    title: 'Cruelty-Free & Vegan',
    description: '100% plant-derived herbs harvested sustainably with zero animal testing.',
    icon: 'Heart'
  }
];
