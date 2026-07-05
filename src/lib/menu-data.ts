export type DietTag = "veg" | "nonveg";

export interface MenuGroup {
  title: string;
  items: string[];
}

export interface MenuSection {
  key: string;
  label: string;
  diet?: DietTag;
  groups: MenuGroup[];
}

export const FOOD_VEG: MenuGroup[] = [
  {
    title: "Soups",
    items: [
      "Tamatar Dhaniya Shorba",
      "Dal Shorba",
      "Subz Shorba",
      "Forest Mushroom Soup",
      "Veg Broth",
      "Hot & Sour Soup (Veg)",
      "Sweet Corn Soup (Veg)",
      "Manchow Soup (Veg)",
    ],
  },
  {
    title: "Starters & Tandoori",
    items: [
      "Hara Bhara Kebab",
      "Dahi Ke Sholay",
      "Paneer Tikka Shashlik",
      "Aloo Dilnaaz",
      "Stuffed Pickled Mushroom",
      "Mushroom Kurkure",
      "Soya Chaap Tandoori",
      "Honey Chilli Potato",
      "Chilli Paneer",
      "French Fries",
      "Veg Kebab Platter",
      "Chutney Bharwa Paneer Tikka",
      "Corn Patty with Herbs & Mint Sauce",
      "Crunchy Pizza Patties",
    ],
  },
  {
    title: "Main Course — Paneer & Vegetables",
    items: [
      "Paneer Makhani",
      "Paneer Lababdar",
      "Kadhai Paneer",
      "Palak Paneer",
      "Paneer Tikka Masala",
      "Scrambled Paneer (Bhurji Style)",
      "Corn & Spinach Masala",
      "Soya Tikka Masala",
      "Mix Vegetable Masala Gravy",
      "Chana Masala",
      "Kaali Dal / Black Chickpeas Curry",
      "Sarson Ka Saag",
      "Aloo Gobi",
      "Aloo Methi",
      "Rajma",
    ],
  },
  {
    title: "Dals",
    items: ["Dal Makhani (Dal Balluchi)", "Dal Tadka", "Panchmel Dal"],
  },
  {
    title: "Breads",
    items: [
      "Butter Roti",
      "Tandoori Roti",
      "Butter Naan",
      "Garlic Naan",
      "Laccha Paratha",
      "Hari Mirch Roti",
      "Makki Di Roti",
      "Varki Paratha",
    ],
  },
  {
    title: "Rice & Biryani",
    items: ["Steamed Rice", "Vegetable Biryani (Handi Style)"],
  },
  {
    title: "Thalis",
    items: [
      "Deluxe Veg Thali",
      "Executive Veg Thali",
      "Includes Dal Makhani, Paneer Makhani, Mix Vegetable, Rice, Raita, Roti/Paratha, Green Salad, Gulab Jamun",
    ],
  },
  {
    title: "Desserts",
    items: ["Gulab Jamun", "Gajar Ka Halwa", "Thandi Kheer", "Raj Bhog", "Matka Kulfi"],
  },
];

export const FOOD_NONVEG: MenuGroup[] = [
  {
    title: "Soups",
    items: [
      "Murgh Badami Shorba",
      "Chicken Broth (Add-on)",
      "Hot & Sour Soup (Chicken)",
      "Sweet Corn Soup (Chicken)",
      "Manchow Soup (Chicken)",
    ],
  },
  {
    title: "Starters & Tandoori",
    items: [
      "Tandoori Chicken",
      "Chicken Tikka (Cream, Cheese & Cashew Marination)",
      "Mutton Seekh Kebab",
      "Fish Fry (Batter-Fried Freshwater Fish)",
      "Kalmi Kebab",
      "Tangri Kebab",
      "Dahi Ke Kebab",
      "Lehsooni Tangri (Garlic & Cashew Marinated Drumsticks)",
      "Chicken Malai Tikka",
    ],
  },
  {
    title: "Main Course",
    items: [
      "Murgh Makhani (Butter Chicken)",
      "Chicken Tikka Masala",
      "Bhuna Chicken",
      "Charcoal Chicken in Rice-Tomato-Cream Gravy",
      "Mutton Rogan Josh",
      "Bhuna Goat",
      "Chicken Curry",
    ],
  },
  {
    title: "Rice & Biryani",
    items: [
      "Chicken Biryani (Handi Style)",
      "Mutton Biryani (Handi Style)",
      "Egg Biryani",
    ],
  },
  {
    title: "Thalis",
    items: ["Deluxe Non-Veg Thali", "Executive Non-Veg Thali"],
  },
];

export const BEVERAGES: MenuGroup[] = [
  {
    title: "Refreshers",
    items: [
      "Fresh Lime Soda",
      "Jal Jeera",
      "Chhach (Buttermilk)",
      "Aam Ka Panna",
      "Tamatar (Tomato Refresher)",
    ],
  },
  {
    title: "Lassi & Shakes",
    items: [
      "Lassi Manpasand (Sweet / Masala / Rose / Banana / Mango / Strawberry)",
      "Mango Lassi",
      "Fruit Milkshakes",
    ],
  },
  {
    title: "Hot Beverages",
    items: [
      "Masala Chai",
      "Elaichi (Cardamom) Tea",
      "Ginger Tea",
      "Kadak Chai",
      "Gur Wali Chai (Jaggery Tea)",
      "Filter Coffee",
    ],
  },
  {
    title: "Juices & Aerated",
    items: [
      "Fresh Fruit Juices (Orange, Apple, Mixed Fruit)",
      "Aerated Beverages / Soft Drinks",
      "Diet Coke",
    ],
  },
  {
    title: "Water",
    items: ["Mineral Water"],
  },
];
