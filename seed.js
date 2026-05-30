import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();

const products = [
  {
    name: "Bamboo Speaker",
    category: "Corporate Gifting",
    price: "2499",
    description:
      "Wireless bamboo speaker for premium corporate gifting and executive welcome kits. Natural acoustics with modern Bluetooth technology.",
    imageUrl: "/images/products/speaker.jpg",
  },
  {
    name: "Bamboo Travel Mug",
    category: "Corporate Gifting",
    price: "999",
    description:
      "Classic bamboo travel mug for daily commutes, office use and corporate gifting. Keeps beverages warm and looks premium.",
    imageUrl: "/images/products/bamboo-travel-mug.jpg",
  },
  {
    name: "Bamboo Water Bottle",
    category: "Corporate Gifting",
    price: "799",
    description:
      "Bamboo water bottle for corporate giveaways, event kits, and employee onboarding. Stylish, sustainable and long-lasting.",
    imageUrl: "/images/products/bamboo-water-bottel.jpg",
  },
  {
    name: "Bamboo Plant Stand",
    category: "Lifestyle",
    price: "1299",
    description:
      "Elegant multi-tier bamboo plant stand to display your indoor plants beautifully and sustainably. Sturdy and stylish.",
    imageUrl: "/images/products/bamboo-plant-stand.jpg",
  },
  {
    name: "Bamboo Cutting Board",
    category: "Kitchen",
    price: "899",
    description:
      "Durable, naturally antimicrobial cutting board crafted from premium bamboo. Perfect for every kitchen and eco-conscious home.",
    imageUrl: "/images/products/bamboo-cutting-board.jpg",
  },
  {
    name: "Bamboo Diary",
    category: "Stationery",
    price: "599",
    description:
      "Bamboo cover diary for corporate gifting, events and daily journaling. Premium feel with eco-conscious construction.",
    imageUrl: "/images/products/diary.jpg",
  },
  {
    name: "Bamboo Sipper",
    category: "Corporate Gifting",
    price: "699",
    description:
      "Bamboo sipper built for office desks, event welcome kits, and repeat brand recall. A premium sustainable gifting option.",
    imageUrl: "/images/products/bamboo-sipper.jpg",
  },
  {
    name: "Bamboo Cup",
    category: "Corporate Gifting",
    price: "599",
    description:
      "Premium bamboo cup variant for corporate gifting and event welcome kits. Elegant, reusable and eco-friendly.",
    imageUrl: "/images/products/bamboo-cup.jpg",
  },
  {
    name: "Bamboo Cutlery Set",
    category: "Kitchen",
    price: "499",
    description:
      "Complete set of bamboo utensils including fork, spoon, knife and chopsticks. Ideal for on-the-go dining and zero-waste living.",
    imageUrl: "/images/products/bamboo-cutlery-set.jpg",
  },
  {
    name: "Bamboo Pen",
    category: "Stationery",
    price: "199",
    description:
      "Bamboo pen for events, corporate gifting and stationery kits. Smooth writing experience with a sustainable bamboo barrel.",
    imageUrl: "/images/products/bamboo-pen.png",
  },
  {
    name: "Paddle Hair Brush",
    category: "Personal Care",
    price: "449",
    description:
      "Bamboo paddle hair brush with natural bristles. Reduces frizz, adds shine and is gentle on the scalp for daily grooming.",
    imageUrl: "/images/products/bamboo-paddle-hair-brushes.jpg",
  },
  {
    name: "Bathroom Slipper",
    category: "Hospitality",
    price: "499",
    description:
      "Eco-friendly jute and terry bathroom slipper perfect for hotel guest amenities, spas and wellness retreats.",
    imageUrl: "/images/products/slippers.jpg",
  },
  {
    name: "Eco Friendly Straws",
    category: "Hospitality",
    price: "299",
    description:
      "Reusable bamboo and coconut drinking straws for cafes, events, and low-waste living. Durable, washable and fully biodegradable.",
    imageUrl: "/images/products/bamboo-straw.jpg",
  },
  {
    name: "Shaving Kit",
    category: "Hospitality",
    price: "799",
    description:
      "Complete bamboo shaving kit for hospitality amenity sets. Includes razor and accessories in sustainable packaging.",
    imageUrl: "/images/products/bamboo-shaving-kit.jpg",
  },
  {
    name: "Dental Kit",
    category: "Hospitality",
    price: "599",
    description:
      "Hospitality dental kit that combines oral-care basics in a clean, guest-ready format. Perfect for hotels, spas and wellness centres.",
    imageUrl: "/images/products/bamboo-dental-kit.jpg",
  },
  {
    name: "Loofah",
    category: "Personal Care",
    price: "199",
    description:
      "Natural loofah sponge for gentle exfoliation. Biodegradable, plastic-free and perfect for eco-conscious bathroom routines.",
    imageUrl: "/images/products/loofah.jpg",
  },
  {
    name: "Neem Comb",
    category: "Personal Care",
    price: "249",
    description:
      "Classic neem wood comb that detangles hair naturally while stimulating the scalp. Anti-static and gentle on all hair types.",
    imageUrl: "/images/products/WoodenComb.jpg",
  },
  {
    name: "Bamboo Razor",
    category: "Personal Care",
    price: "399",
    description:
      "Reusable wooden-handle razor made for hospitality shaving kits and sustainable grooming routines. Plastic-free and long-lasting.",
    imageUrl: "/images/products/bamboo-razor.jpg",
  },
  {
    name: "Bamboo Tongue Cleaner",
    category: "Personal Care",
    price: "199",
    description:
      "Reusable bamboo tongue cleaner suitable for oral-care routines and hotel dental kits. Natural alternative to plastic tongue scrapers.",
    imageUrl: "/images/products/bamboo-tongue-cleaner.jpeg",
  },
  {
    name: "Bamboo Toothbrush",
    category: "Personal Care",
    price: "299",
    description:
      "Daily-use bamboo toothbrush crafted for hotels, wellness kits, and conscious retail. Biodegradable handle with soft bristles for a guilt-free clean.",
    imageUrl: "/images/products/bamboo-toothBrush.jpg",
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Connected to MongoDB");

  await Product.deleteMany({});
  await User.deleteMany({ role: "admin" });

  await Product.insertMany(products);
  console.log("✅ Products seeded");

  const hashedPassword = await bcrypt.hash("admin123", 10);
  await User.create({
    name: "Admin",
    email: "admin@bamboo.com",
    password: hashedPassword,
    role: "admin",
  });
  console.log("✅ Admin seeded → admin@bamboo.com / admin123");

  mongoose.disconnect();
  console.log("🎉 Done!");
}

seed().catch(console.error);
