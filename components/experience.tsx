"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

const workExperience = [
  {
    title: "Full Stack Developer",
    company: "Zagazig University",
    location: "OnSite",
    period: "Dec 2024 – Present",
    description: [
      "Developed and maintained enterprise applications for the university, focusing on Archive management, Website" ,
      "development, and Parking Management System." ,
      "Designed and developed a document storage and retrieval system using Spring Boot and Angular.\n" ,
      "Developed a Parking management system to track and manage university parking." ,
      "Contributed to the development and maintenance of the official university website using ASP.NET and SQL Server"
    ],
  },
  {
    title: "Java Developer",
    company: "",
    location: "FreeLance",
    period: "Sep 2023 – Jul 2024",
    description: [
      "Developed and maintained server-side components using Java, Spring Boot, and Hibernate, ensuring efficient data." ,
      "processing and system performance." ,
      "Built and consumed RESTful APIs to integrate with frontend components and external systems, ensuring seamless communication and data exchange." ,
      "Integrated MySQL database to support application data storage, ensuring optimal performance and scalability for high-traffic applications.",
      "Optimized application performance through code refactoring and query optimization, improving response time by 25%."
    ],
  },
  {
    title: "Software Developer",
    company: "Ideal System Company",
    location: "Onsite",
    period: "Aug 2022 – Mar 2024",
    description: [
      "Designed, developed, and maintained desktop applications using VB.NET and C#, enhancing system performance." ,
      "Collaborated with cross-functional teams to deliver software solutions on time and within budget, contributing to a 15% increase in project efficiency" ,
      "Created and optimized SQL Server database objects, including tables and indexes, resulting in a 20% improvement in query performance."
    ],
  },

];

const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Zagazig University",
    location: "Zagazig, Egypt",
    period: "2024",
    description:""
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Experience & Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4  max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Work Experience
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold">{job.title}</h4>
                    <div className="text-primary font-medium">
                      {job.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm  mb-3">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {job.period}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-1 ">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-background bg-primary"></div>
                  <div className="mb-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <div className="text-primary font-medium">
                      {edu.institution}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm  mb-3">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
