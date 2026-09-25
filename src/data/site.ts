export const business = {
  name: "WBeauty Studio",
  llc: "WBeauty Studio, LLC",
  owner: "Wondeline Colon-Rivera",
  tagline: "Enhancing Natural Beauty",
  specialties: "Skin • Brows • Lashes",
  phone: "(203) 671-4056",
  phoneHref: "tel:+12036714056",
  email: "wbeauty.studio@yahoo.com",
  emailHref: "mailto:wbeauty.studio@yahoo.com",
  street: "4130 Whitney Avenue",
  floor: "2nd Floor",
  city: "Hamden, CT 06518",
  areaNote: "Just one minute from the Cheshire line",
  parkingNote:
    "Parking is in the back of Rumanoffs Fine Jewelry. Enter through the back of the building, take the door on the left, and head up to the 2nd floor.",
  hours: [
    { day: "Monday – Thursday", time: "9:00 AM – 7:00 PM" },
    { day: "Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  bookingUrl:
    "https://book.squareup.com/appointments/utqrnlqtvbhsaa/location/LRZRAVH2MBG9K/services",
  instagram: "https://www.instagram.com/wbeauty.studio",
  facebook: "https://www.facebook.com/p/WBeautyStudio-LLC-100063480821763",
  linktree: "https://linktr.ee/wbeautystudio",
  reviewUrl: "https://g.page/r/CQjVTo11MJIREB0/review",
  mapsUrl:
    "https://www.google.com/maps/place/4130+Whitney+Ave,+Hamden,+CT+06518/@41.4432777,-72.9112045,17z",
  mapEmbed:
    "https://maps.google.com/maps?q=4130%20Whitney%20Ave%2C%20Hamden%2C%20CT%2006518&t=&z=15&ie=UTF8&iwloc=&output=embed",
  rating: "5.0",
  reviewCount: "31",
};

export type Category =
  | "Facials"
  | "Lashes"
  | "Brows"
  | "Waxing"
  | "Body"
  | "Add-Ons";

export type Service = {
  name: string;
  category: Category;
  price?: number;
  duration?: string;
  blurb: string;
  popular?: boolean;
};

export const services: Service[] = [
  // ---------------- Facials ----------------
  {
    name: "Golden Hour GLOW Facial",
    category: "Facials",
    price: 110,
    duration: "60 min",
    blurb:
      "A fully customized Circadia facial designed to renew and revitalize — balanced, soothing and hydrating for skin that looks smooth, polished and lit from within.",
    popular: true,
  },
  {
    name: "Timeless GLOW Facial",
    category: "Facials",
    price: 140,
    duration: "80 min",
    blurb:
      "Advanced techniques, modalities and booster formulations with a cooling hydrating seal mask. Tailored for sensitive, aging, acneic, rosacea or pigmented skin.",
  },
  {
    name: "MicroCurrent Facial",
    category: "Facials",
    price: 170,
    duration: "70 min",
    blurb:
      "A gentle workout for facial muscles — tighter, toned skin, chiseled cheekbones, a defined jawline, lifted brows and boosted collagen for instant, visible firmness.",
  },
  {
    name: "Microdermabrasion Facial",
    category: "Facials",
    price: 170,
    duration: "70 min",
    blurb:
      "A diamond-tipped wand deeply exfoliates to soften fine lines, sun damage, acne scarring and melasma while refining pores and revealing a fresh, bright complexion.",
  },
  {
    name: "HydroDermabrasion Facial",
    category: "Facials",
    price: 175,
    duration: "70 min",
    blurb:
      "Hydra-exfoliation sweeps away dullness while infusing nourishing serums — improving texture, tone and pigmentation for dewy, replenished, healthy-looking skin.",
    popular: true,
  },
  {
    name: "Beauty and the Blade — Derma Facial",
    category: "Facials",
    price: 175,
    duration: "70 min",
    blurb:
      "Dermaplaning gently removes dead skin and peach fuzz, triggering cellular renewal for immediate radiance, silky texture and a flawless canvas for makeup.",
  },
  {
    name: "Acne BootCamp",
    category: "Facials",
    price: 120,
    duration: "75 min",
    blurb:
      "The Face Reality clearing program guided by a Certified Acne Specialist — a proven 95% success rate for grades 1–4 acne, without prescription drugs. Bi-weekly commitment.",
  },
  {
    name: "Gentlemen's Retreat Facial",
    category: "Facials",
    price: 130,
    duration: "60 min",
    blurb:
      "Deep cleansing, hot towels, steam, exfoliation, a custom mask, facial oil and hydration — made to counter daily shaving, dullness and environmental stress.",
  },
  {
    name: "Oxygen Rx with Celluma LED",
    category: "Facials",
    price: 190,
    duration: "90 min",
    blurb:
      "Oxygen therapy brightens ruddy, acne-prone and rosacea skin while Celluma LED accelerates cellular repair — calm, clear, luminous and firmer-looking skin.",
  },
  {
    name: "LuxeLift with Celluma LED",
    category: "Facials",
    price: 225,
    duration: "90 min",
    blurb:
      "Our most powerful anti-aging facial. Instantly firms, lifts and brightens while stimulating collagen and elastin, finished with Celluma LED for lasting radiance.",
    popular: true,
  },

  // ---------------- Lashes ----------------
  {
    name: "Lash Lift & Tint",
    category: "Lashes",
    duration: "45 min",
    blurb:
      "Wake up to longer-looking, beautifully curled, dark lashes — a low-maintenance, eye-opening lift that lasts for weeks.",
    popular: true,
  },
  {
    name: "Lash Lift",
    category: "Lashes",
    duration: "40 min",
    blurb:
      "A semi-permanent curl that lifts and opens the eyes — natural, polished and effortless from morning to night.",
  },
  {
    name: "Lash Tint",
    category: "Lashes",
    duration: "20 min",
    blurb:
      "Rich, natural depth that makes lashes look fuller and defined without a swipe of mascara.",
  },

  // ---------------- Brows ----------------
  {
    name: "Brow Wax & Shape",
    category: "Brows",
    price: 25,
    duration: "30 min",
    blurb:
      "Your brows are sculpted into their most flattering shape with a careful combination of wax and tweeze.",
  },
  {
    name: "Brow Tint",
    category: "Brows",
    price: 52,
    duration: "45 min",
    blurb:
      "Bold, defined, clean brows — a rich tint that lightly stains skin and hairs, finished with a wax or tweeze shaping.",
    popular: true,
  },
  {
    name: "Brow Lamination",
    category: "Brows",
    price: 80,
    duration: "45 min",
    blurb:
      "Fluffy, brushed-up, perfectly full brows that stay set in place for a soft, modern, editorial arch.",
  },
  {
    name: "Brow Lamination & Tint",
    category: "Brows",
    price: 110,
    duration: "60 min",
    blurb:
      "The ultimate brow — the full, feathered hold of lamination paired with rich tint color for maximum definition.",
  },

  // ---------------- Waxing ----------------
  {
    name: "Bikini Wax",
    category: "Waxing",
    price: 72,
    duration: "30 min",
    blurb:
      "A classic tidy of the panty line — sides and across the top — so nothing peeks out. Smooth, even, long-lasting.",
    popular: true,
  },
  {
    name: "Chest Wax",
    category: "Waxing",
    price: 45,
    duration: "30 min",
    blurb:
      "A thorough, comfortable wax that lifts hair at the root for sleek, smooth skin that lasts.",
  },
  {
    name: "Half Arm Wax",
    category: "Waxing",
    price: 32,
    duration: "30 min",
    blurb:
      "Forearms to elbows left silky smooth — waxing also buffs away dry, dead surface cells.",
  },
  {
    name: "Underarm Wax",
    category: "Waxing",
    price: 25,
    duration: "30 min",
    blurb:
      "A gentle way to remove unwanted hair that leaves underarms smooth while exfoliating dull, dry skin.",
  },
  {
    name: "Lip Wax",
    category: "Waxing",
    price: 15,
    duration: "15 min",
    blurb:
      "A quick, delicate wax to keep the upper lip perfectly smooth.",
  },
  {
    name: "Chin Wax",
    category: "Waxing",
    price: 25,
    duration: "30 min",
    blurb:
      "Precise, gentle removal for a clean, smooth jawline.",
  },
  {
    name: "Men's Back Wax",
    category: "Waxing",
    price: 65,
    duration: "45 min",
    blurb:
      "A meticulous full-back wax with professional-grade technique for smooth, even results.",
  },
  {
    name: "Men's Half Arm Wax",
    category: "Waxing",
    price: 32,
    duration: "30 min",
    blurb:
      "Clean, confident and smooth — a careful half-arm wax designed for thicker hair.",
  },

  // ---------------- Body ----------------
  {
    name: "Back Facial",
    category: "Body",
    price: 145,
    duration: "60 min",
    blurb:
      "Everything you love about a facial, customized for the back — deep cleanse, exfoliation and masking for a clear, smooth, radiant back.",
    popular: true,
  },
  {
    name: "HydroJelly Belly",
    category: "Body",
    price: 55,
    duration: "30 min",
    blurb:
      "A soothing, hydrating jelly mask for the belly that calms, firms and nourishes — a wonderfully relaxing self-care treat.",
  },
  {
    name: "Cavitation Body Series (8 visits)",
    category: "Body",
    price: 910,
    duration: "8-visit series",
    blurb:
      "A sculpting series of eight cavitation body-contouring sessions to smooth and refine over time.",
  },

  // ---------------- Add-Ons ----------------
  {
    name: "Celluma LED Light Therapy — 30 min",
    category: "Add-Ons",
    price: 75,
    duration: "30 min add-on",
    blurb:
      "Add therapeutic LED to any facial to target acne and rosacea, calm sensitivity or support anti-aging and repair.",
  },
  {
    name: "Nano-Infusion Upgrade",
    category: "Add-Ons",
    duration: "Add-on",
    blurb:
      "Infuse specialized serums deeper for maximum glow, hydration and results — a beautiful upgrade for any GLOW facial. Priced with your service.",
  },
  {
    name: "Radio Frequency Tightening Upgrade",
    category: "Add-Ons",
    duration: "Add-on",
    blurb:
      "Pair with MicroCurrent for an extra anti-aging boost — warmth, firmness and skin tightening. Priced with your service.",
  },
];

export const categories: ("All" | Category)[] = [
  "All",
  "Facials",
  "Lashes",
  "Brows",
  "Waxing",
  "Body",
  "Add-Ons",
];

export const testimonials = [
  {
    quote:
      "Without a drop of exaggeration, I had the best facial of my life — and most of mine were at high-end spas in NYC. The studio is clean, modern and luxurious, and she crafted the perfect combination of products for my skin.",
    name: "Janina K.",
    context: "Google Review",
  },
  {
    quote:
      "This is absolutely the place to go for eyebrow waxes and tints and lash lifts and tints in the Hamden–Cheshire area. A beautiful, clean studio and meticulous work every single time.",
    name: "Mackenzie E.",
    context: "Google Review",
  },
  {
    quote:
      "Wondeline is truly amazing. She is very personable and takes great care of her clients. I'm so happy to have found her for my skin and waxing needs!",
    name: "Grace F.",
    context: "Google Review",
  },
  {
    quote:
      "The best facial! From the second I walked in I felt comfortable and taken care of — such a calming, kind energy. My skin felt smooth, hydrated and incredible afterward. I've already booked my next visit.",
    name: "Verified Client",
    context: "Google Review",
  },
  {
    quote:
      "I had such a wonderful experience. I'm doing the Acne BootCamp and I'm so excited for my upcoming appointments.",
    name: "Jennie S.",
    context: "Google Review",
  },
  {
    quote:
      "Excellent service and beautiful results. I would highly recommend WBeauty Studio to everyone.",
    name: "Jennifer F.",
    context: "Google Review",
  },
];

export const brandPartners = ["Circadia", "Face Reality", "Celluma LED", "Hale & Hush"];
