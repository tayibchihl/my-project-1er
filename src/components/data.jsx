import { CiMap } from "react-icons/ci";
import { FaImages, FaWallet } from "react-icons/fa";

// 1. البيانات الخاصة بكروت قسم الهوم (Home Cards)
export const cardData = [
  {
    id: 1,
    icon: <CiMap />,
    title: "Book Library",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "var(--red)",
    bgColor: "var(--light-pink)",
  },
  {
    id: 2,
    icon: <FaImages />,
    title: "Market Analysis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "var(--green)",
    bgColor: "var(--light-green)",
  },
  {
    id: 3,
    icon: <FaWallet />,
    title: "50+ Online Courses",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "var(--sky-blue)",
    bgColor: "var(--light-sky-blue)",
  },
];

// 2. البيانات الخاصة بقسم الكورسات (Courses Data)
export const coursesData = [
  {
    id: 1,
    img: "/images/grap-design.png",
    department: "Graphic Design",
    rating: 4.7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sales: 80,
    price: "$100",
    discount: "$50",
    duration: "22h",
    lessons: 120,
  },
  {
    id: 2,
    img: "/images/graph-design.png",
    department: "Graphic Design",
    rating: 4.7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sales: 160,
    price: "$100",
    discount: "$50",
    duration: "22h",
    lessons: 89,
  },
  {
    id: 3,
    img: "/images/graphic-design.png",
    department: "Graphic Design",
    rating: 4.7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sales: 288,
    price: "$100",
    discount: "$50",
    duration: "22h",
    lessons: 108,
  },
];

// 3. البيانات الخاصة بقسم التقييمات (Reviews / Riten Data)
export const ritenData = [
  {
    id: 1,
    stars: 5,
    img: "/images/user1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "User Name",
    job: "Software Engineer",
  },
  {
    id: 2,
    stars: 4,
    img: "/images/user2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "User Name",
    job: "Graphic Designer",
  },
  {
    id: 3,
    stars: 5,
    img: "/images/user3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "User Name",
    job: "Web Developer",
  },
];
