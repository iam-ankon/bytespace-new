export type Course = {
  id: string;
  title: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  enrolled: number;
  categories: string[];
};

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "Writing",
  "Languages",
  "Fitness",
] as const;

const base = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  price: 25,
  enrolled: 26,
} as const;

export const courses: Course[] = [
  {
    ...base,
    id: "learn-figma",
    title: "Learn Figma from Basic",
    image: "/images/courses/learn-figma.png",
    rating: 4.5,
    categories: ["Featured", "UI/UX Design", "Graphic Design"],
  },
  {
    ...base,
    id: "digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/digital-asset.jpg",
    rating: 4.5,
    categories: ["Featured", "Digital Illustration", "Graphic Design", "Crafts"],
  },
  {
    ...base,
    id: "big-data",
    title: "the Power of Big Data",
    image: "/images/courses/big-data.jpg",
    rating: 4.5,
    categories: ["Featured", "Data Science", "Web Development"],
  },
  {
    ...base,
    id: "productivity",
    title: "Balancing Productivity and Wellbeing",
    image: "/images/courses/productivity.jpg",
    rating: 4.5,
    categories: ["Featured", "Productivity", "Freelance & Entrepreneurship"],
  },
  {
    ...base,
    id: "money",
    title: "Mastering Money Management",
    image: "/images/courses/money.jpg",
    rating: 4.5,
    categories: ["Featured", "Marketing", "Freelance & Entrepreneurship"],
  },
  {
    ...base,
    id: "startup",
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.jpg",
    rating: 4.5,
    categories: ["Featured", "Creative Marketing", "Social Media", "Marketing"],
  },
];
