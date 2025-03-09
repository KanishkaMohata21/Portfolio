"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const internshipData = [
  {
    id: 1,
    company: "Skatesmen",
    position: "Web Developer",
    duration: "Jun 2024 - Oct 2024",
    location: "Remote",
    description:
      "Developed multiple components for the Dhrona app, an educational app, using React Native. Integrated backend services for the components created.",
    pdfLink: "/assets/skatesmen.pdf", // Link to the PDF for this internship
  },
  {
    id: 2,
    company: "YPP Technologies",
    position: "Web Developer",
    duration: "Dec 2023 - Jan 2024",
    location: "Remote",
    description:
      "Worked on web development projects focusing on frontend and backend technologies.",
    pdfLink: "/assets/ypp.pdf", // Link to the PDF for this internship
  },
  {
    id: 3,
    company: "Antriksh.AI",
    position: "Frontend Developer",
    duration: "July 2024 - Dec 2024",
    location: "Remote",
    description:
      "Developed websites for Rich Solar System, TravelAgency, Law firm, STP Foils, 4Foursquare using NextJS. Mobile apps for VitalStep using flutter and Shrut Sanskar Tirtha Pathshala using React Native.",
    pdfLink: "/assets/antriksh.pdf", // Link to the PDF for this internship
  },
  {
    id: 4,
    company: "Technode",
    position: "Web Developer",
    duration: "Dec 2024 - Till date",
    location: "Remote",
    description:
      "Developed multiple graphical components for the Technode dashboard, enhancing data visualization and user interaction. Rebuilt the entire Technode landing website using Next.js, improving performance and user experience.",
    pdfLink: "/path/to/technode-internship.pdf", // Link to the PDF for this internship
  },
];

const InternshipSection = () => {
  const handleOpenPDF = (pdfLink) => {
    window.open(pdfLink, "_blank"); // Opens the PDF in a new tab
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -left-1/4 -top-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {internshipData.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                damping: 12,
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <motion.div
                initial={false}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300"
              />
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {internship.position}
                    </h3>
                    <p className="text-xl font-semibold text-pink-400">
                      {internship.company}
                    </p>
                  </motion.div>

                  {internship.company === "Technode" ? (
                    <div className = "text-white">
                      Currently Working
                    </div>
                  ) : (
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-500/10"
                      onClick={() => handleOpenPDF(internship.pdfLink)} // Handle PDF click
                    >
                      <ExternalLink className="w-6 h-6 text-pink-400" />
                    </motion.div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-pink-400" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pink-400" />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    className="text-gray-300 leading-relaxed"
                  >
                    {internship.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipSection;
