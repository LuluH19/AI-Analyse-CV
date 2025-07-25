import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to Resumind!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
  <Navbar />


   <section className="main-section">
    <div className="page-header">
     <h1>Track your Application & Resumes Rating</h1>
     <h2>Review your submissions and get feedback</h2>
   </div>

  {resumes.length > 0 && (

  <div className="resumes-section">
    {resumes.map((resume) => (
      <ResumeCard key={resume.id} resume={resume} />
    ))}
  </div>
  )}
  </section>
  </main>;
}
