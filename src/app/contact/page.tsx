import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Career Counselling & Support | EdGrowth",
  description: "Get in touch with EdGrowth Consultants for expert career counselling, admission support, and financing solutions. Visit our Lucknow office or call us today.",
};

export default function ContactPage() {
  return <ContactClient />;
}