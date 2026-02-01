import { CourseCard } from "@/components/ui/CourseCard";
import { BookOpen } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      name: "Online MBA",
      description: "Master of Business Administration. Specialize in Marketing, HR, Finance, and more.",
      image: "/mba_course.png",
      features: ["2 Years", "Online", "Placement"],
    },
    {
      name: "Online BBA",
      description: "Bachelor of Business Administration. Build a strong foundation in business management.",
      image: "/education_hero.png",
      features: ["3 Years", "Online", "Fundamental"],
    },
    {
      name: "Online M.Com",
      description: "Master of Commerce. Advanced studies in accounting, economics, and business strategies.",
      image: "/counselling.png",
      features: ["2 Years", "Online", "Accounting"],
    },
    {
      name: "Online B.Com",
      description: "Bachelor of Commerce. Understand the core principles of commerce and trade.",
      image: "/education_hero.png",
      features: ["3 Years", "Online", "Commerce"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Our Courses</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our range of online degree programs designed to accelerate your career.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course.name}
            {...course}
            tag="Degree"
          />
        ))}
      </div>
    </div>
  );
}