import { Rock_3D } from "next/font/google";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    items: [
      "Personalized nutrition plan tailored to your goals and dietary preferences.",
      "Access to our mobile app for convenient meal tracking and progress monitoring.",
      "Email support to address your questions and concerns.",
      "Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.",
    ],
    price: "49",
  },
  {
    id: 2,
    name: "Premium  Plan",
    items: [
      "All the features included in the Basic Plan.",
      "One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.",
      "Recipe recommendations and meal planning assistance.",
      "Priority email support for quicker responses to your inquiries.",
      "Educational resources and guides to deepen your understanding of nutrition and healthy habits.",
    ],
    price: "79",
  },
  {
    id: 3,
    name: "Ultimate  Plan",
    items: [
      "All the features included in the Plus Plan.",
      "Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.",
      "Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.",
      "Customized meal plans and recipe suggestions based on your preferences and nutritional needs.",
      "Priority email and phone support for immediate assistance.",
    ],
    extra:
      "The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.",
    price: "99",
  },
];

const features = [
  {
    id: 1,
    title: "Personalized Nutrition Plan",
    plans: {
      Basic: true,
      Premium: true,
      Ultimate: true,
    },
  },
  {
    id: 2,
    title: "Mobile App Access",
    plans: {
      Basic: true,
      Premium: true,
      Ultimate: true,
    },
  },
  {
    id: 3,
    title: "Email Support",
    plans: {
      Basic: true,
      Premium: true,
      Ultimate: true,
    },
  },
  {
    id: 4,
    title: "One -on One Video Consultations",
    plans: {
      Basic: false,
      Premium: true,
      Ultimate: true,
    },
  },
  {
    id: 5,
    title: "Recipe Recommendations and Meal Planning",
    plans: {
      Basic: false,
      Premium: true,
      Ultimate: true,
    },
  },
  {
    id: 6,
    title: "Priority Support",
    plans: {
      Basic: false,
      Premium: true,
      Ultimate: true,
    },
  },
  {
    id: 7,
    title: "Educational Resources and Guides",
    plans: {
      Basic: false,
      Premium: true,
      Ultimate: true,
    },
  },
  {
    id: 8,
    title: "Advanced Progress Tracking Tools",
    plans: {
      Basic: false,
      Premium: false,
      Ultimate: true,
    },
  },
  {
    id: 9,
    title: "Customized Meal Plans and Recipe Suggestions",
    plans: {
      Basic: false,
      Premium: false,
      Ultimate: true,
    },
  },
  {
    id: 10,
    title: "Phone Support",
    plans: {
      Basic: false,
      Premium: false,
      Ultimate: true,
    },
  },
];
