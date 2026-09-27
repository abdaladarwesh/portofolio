import { Injectable } from '@angular/core';
import { Project } from '../model/project';




@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly projects:Project[] = [
    {
      id: 0,
      type: "FullStack Application",
      title: "School Managment System (Student Affairs Module)",
      body: "Student affairs module designed to modernize educational governance and to automate manual work, this full-stack application optimizes core school operations including student management, term tracking, and reporting. Powered by Spring Boot and Angular, it delivers an intuitive user experience backed by secure access controls. It enhances administrative productivity while fostering better engagement across the institution.",
      images: ["2.png", "3.png", "4.png", "5.png"],
      mainImage:"project1.png",
      technologies:["Spring", "Angular", "Oracle Database", "Spring Security"],
      isLive: false,
      githubLink: "https://github.com/abdaladarwesh/school-managment-system-ntg"
    },
    {
      id: 1,
      type: "Full Stack Application",
      title: "EasyStay (Tourism Management System)",
      body: "a comprehensive digital solution designed to streamline, automate, and optimize operations for travel agencies",
      images:["6.png", "7.png", "8.png", "9.png"],
      mainImage: "8.png",
      technologies:["Spring", "Angular", "Oracle Database", "Spring Security", "Tailwind", "Spring Batch"],
      isLive: false,
      githubLink: "https://github.com/abdaladarwesh/EasyStay-Frontend"
    },
    {
      id: 2,
      type: "SaaS Application",
      title: "Masarak",
      body:"The largest scholarship and career opportunity platform for technical and vocational education students Discover scholarships and practical internships abroad specifically designed for your certificates and practical experience.",
      images:["10.png", "12.png", "13.png"],
      mainImage:"10.png",
      technologies: ["React.js", "TanStack", "Supabase", "Tailwind", "OAuth"],
      isLive: true,
      githubLink:"https://github.com/abdaladarwesh/school-guide",
      liveLink:"https://school-guide-three.vercel.app/"
    },
    {
      id: 3,
      type: "Micro Service",
      title: "Excel to Spring Automation",
      body: "The Excel to Spring Automation microservice bridges the gap between traditional administrative workflows and modern backend architectures. Designed specifically to accommodate educators who rely on familiar spreadsheet workflows, this service automates the ingestion, validation, and persistence of student marks from standard Excel sheets directly into the central database.",
      images: ["11.png"],
      mainImage:"11.png",
      technologies: ["Spring Batch", "Java", "Spring", "Apache POI"],
      isLive: false,
      githubLink:"https://github.com/abdaladarwesh/excel-to-marks"
    },
    {
      id:4,
      type: "Full Stack Application",
      title: "E-Commerce",
      body: "The Modern E-Commerce Platform is a high-performance, feature-rich online shopping web application engineered to deliver a seamless and secure digital retail experience. Designed with a clean, modern user interface and a robust enterprise backend, the platform handles everything from dynamic product browsing to secure user authentication and order management.",
      images: ["14.png", "15.png", "16.png"],
      mainImage: "14.png",
      technologies:["Spring", "Angular", "Oracle Database", "Spring Security", "Tailwind", "Spring Batch"],
      isLive: true,
      githubLink: "https://github.com/abdaladarwesh/e_commerce",
      liveLink: "https://e-commerce-nine-beta-76.vercel.app/"
    },
    {
      id: 5,
      type: "FullStack Mobile Application",
      title: "Mualim",
      body: "Muallim (معلم) is an intelligent teacher management system designed to eliminate administrative friction in educational workflows. By combining advanced AI-powered data extraction with automated parent communication, the platform bridges the gap between traditional teaching methods and modern digital efficiency, making grade management completely effortless for educators.",
      images: ["17.jpeg"],
      mainImage:"17.jpeg",
      technologies: ["Flutter", "Supabase", "Node.js", "Postgresql", "Puppeteer"],
      isLive: false,
      githubLink:"https://github.com/abdaladarwesh/Mualim"
    }
  ]
  get project(){
    return this.projects;
  }
}
