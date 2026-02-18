import React, { useState } from "react";
import CyberpunkNavbar from "./Navbar";
import { Cpu, Zap, Box } from "lucide-react";
import Footer from "./Footer";
const img9 =`${process.env.REACT_APP_BUCKET}EB PHOTO 2025 (1)/2.png`;
// const img10 =`${process.env.REACT_APP_BUCKET}image2.jpg`;
const img11 =`${process.env.REACT_APP_BUCKET}EB PHOTO 2025 (1)/6.png`;
const img12 =`${process.env.REACT_APP_BUCKET}EB PHOTO 2025 (1)/3.png`;
const img13 =`${process.env.REACT_APP_BUCKET}EB PHOTO 2025 (1)/4.png`;
// const img14 =`${process.env.REACT_APP_BUCKET}image61.jpg`;
const img15 =`${process.env.REACT_APP_BUCKET}EB PHOTO 2025 (1)/5.png`;
const img16 =`${process.env.REACT_APP_BUCKET}EB PHOTO 2025 (1)/7.png`;
const img17 =`${process.env.REACT_APP_BUCKET}}EB PHOTO 2025 (1)/8.png`;
const img18 =`${process.env.REACT_APP_BUCKET}me.jpeg`;
const img19 =`${process.env.REACT_APP_BUCKET}Chanpreet_Kaur.jpg`;
const img20 =`${process.env.REACT_APP_BUCKET}DEVESH.jpg`;
const img21 =`${process.env.REACT_APP_BUCKET}Aaditi.webp`;
const img22 =`${process.env.REACT_APP_BUCKET}Hansika.png`;
const img23 =`${process.env.REACT_APP_BUCKET}harsh_bhati.jpg`;
const img24 =`${process.env.REACT_APP_BUCKET}Ishant.jpg`;
const img25 =`${process.env.REACT_APP_BUCKET}Jatin.jpg`;
const img26 =`${process.env.REACT_APP_BUCKET}Shubham.webp`;
const img27 =`${process.env.REACT_APP_BUCKET}Shubham Raj.jpg`;
const img28 =`${process.env.REACT_APP_BUCKET}Snehasish_Kundu.jpg`;
const img29 =`${process.env.REACT_APP_BUCKET}Talha.jpg`;
// const img0 =`${process.env.REACT_APP_BUCKET}image22.jpg`;
const img30 =`${process.env.REACT_APP_BUCKET}Udit Saini.JPG`;
const img31 =`${process.env.REACT_APP_BUCKET}Naman Gupta.jpg`;
const img32 =`${process.env.REACT_APP_BUCKET}Pershant.jpg`;
const img33 =`${process.env.REACT_APP_BUCKET}Rahul Raj.jpeg`;
const img34 =`${process.env.REACT_APP_BUCKET}Anushka Sharma.png`;
const img35 =`${process.env.REACT_APP_BUCKET}Anvi.png`;
const img36 =`${process.env.REACT_APP_BUCKET}Pragati.jpg`;
const img37 =`${process.env.REACT_APP_BUCKET}Rashim garg.jpg`;
const img38 =`${process.env.REACT_APP_BUCKET}Sahil Minz.png`;
const img39 =`${process.env.REACT_APP_BUCKET}sehaj.jpg`;
const img40 =`${process.env.REACT_APP_BUCKET}Shrishti_Tripathi.jpg`;
const img41=`${process.env.REACT_APP_BUCKET}Sweksha Mahto.jpeg`;
const img24=`${process.env.REACT_APP_BUCKET}Vinit.jpeg`;


const teamMembers = [
  {
    category: "Executive Board",
    name: "Vinay Kumar",
    title: "Chairperson",
    image: img9,
    linkedin: "https://www.linkedin.com/in/vinay-kumar-100a94311/",
    instagram: "https://www.instagram.com/vinay.mav?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  // {
  //   category: "Executive Board",
  //   name: "Parth Bansal",
  //   title: "Vice Chairperson",
  //   image: img10,
  //   linkedin: "https://www.linkedin.com/in/parth-bansal-627724290  ",
  //   instagram:
  //     "https://www.instagram.com/parth._.04/profilecard/?igsh=MW5vYWozamtxc2pqNw==",
  // },
  {
    category: "Executive Board",
    name: "Aryan Sahu",
    title: "Club Co-ordinator",
    image: img11,
    linkedin: "https://www.linkedin.com/in/aryan-sahu-918679207/",
    instagram:
      "https://www.instagram.com/aryan141414?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Executive Board",
    name: "Ujjval Siwach",
    title: "Secretary",
    image: img12,
    // linkedin: "https://www.linkedin.com/in/prashant-singh-30314a2a9/",
    instagram: "https://www.instagram.com/ujjval.siwach?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Executive Board",
    name: "Anshuman Sharma",
    title: "Treasurer",
    image: img13,
    linkedin: "https://www.linkedin.com/in/anshuman-sharma-348584334/",
    instagram: "https://www.instagram.com/10anshu_man01/?utm_source=ig_web_button_share_sheet",
  },
  // {
  //   category: "Executive Board",
  //   name: "Gaurav Patel",
  //   title: "Software & IT Chair",
  //   image: img14,
  //   linkedin: "https://www.linkedin.com/in/gaurav-patel-50a6041b5/",
  //   instagram: "https://www.instagram.com/gaurav6.0/",
  // },
  {
    category: "Executive Board",
    name: "Mohit Kumar",
    title: "Technical Chair",
    image: img15,
    linkedin: "https://www.linkedin.com/in/mohit-kumar-2b72a1207/",
    instagram: "https://www.instagram.com/_mohit_kum05/?utm_source=ig_web_button_share_sheet",
  },
  {
    category: "Executive Board",
    name: "Waquee Mubarak",
    title: "Program & Content Chair",
    image: img16,
    linkedin: "https://www.linkedin.com/in/waquee-mubarak-a69041208/",
    instagram: "https://www.instagram.com/waquee_mk/",
  },
  {
    category: "Executive Board",
    name: "Balbina Wadhwa",
    title: "Business & Finance Chair",
    image: img17,
    linkedin: "https://www.linkedin.com/in/balbina-wadhwa-86932b321/",
    instagram:
      "https://www.instagram.com/binavolent?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Divya Soni",
    title: " Software Lead",
    image: img18,
    linkedin: "https://www.linkedin.com/in/divya-soni-767216281/",
    instagram:
      "https://www.instagram.com/divyasoni._1011?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Chanpreet Kaur",
    title: " Software Lead",
    image: img19,
    linkedin: "https://www.linkedin.com/in/chanpreet-kaur-1a92b2322/",
    // instagram:
    //   "#",
  },
  {
    category: "Core Committee",
    name: "Devesh Yadav",
    title: "Member",
    image: img20,
    linkedin: "#",
    instagram:
      "https://www.instagram.com/devesh._.12/?utm_source=ig_web_button_share_sheet",
  },
  {
    category: "Core Committee",
    name: "Aaditi",
    title: " Member",
    image: img21,
    linkedin: "https://www.linkedin.com/in/aaditi-6489a6310/",
    instagram:
      "https://www.instagram.com/aadiwithtea15?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Hansika",
    title: "Member",
    image: img22,
    linkedin: "https://www.linkedin.com/in/hansika-sharma-a07813398/",
    instagram: "https://www.instagram.com/_sharma.jiiiii_/?utm_source=ig_web_button_share_sheet",
  },
  {
    category: "Core Committee",
    name: "Harsh Kumar Bhati",
    title: " Member",
    image: img23,
    linkedin: "https://www.linkedin.com/in/harrshbhati/",
    instagram: "https://www.instagram.com/harrshbhati?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Ishant Sharma",
    title: " Member",
    image: img24,
    linkedin:
      "https://www.linkedin.com/in/ishant-sharma-877073335/",
    instagram:
      "https://www.instagram.com/ishant2_004?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Jatin",
    title: " Member",
    image: img25,
    linkedin: "https://www.linkedin.com/in/jatin-bhardwaj-207515300/",
    instagram:
      "https://www.instagram.com/jatinbhardwaj1001?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Shubham Garg",
    title: " Member",
    image: img26,
    linkedin: "https://www.linkedin.com/in/shubham-garg-48ab3a289",
    instagram:
      "https://www.instagram.com/shubham_garg4444/profilecard/?igsh=MXYwYmg2MnlhYjFkZw==",
  },
  {
    category: "Core Committee",
    name: "Shubham Raj",
    title: " Member",
    image: img27,
    linkedin: "https://www.linkedin.com/in/shubham-raj-aa5b56352/",
    instagram:
      "https://www.instagram.com/shubhamrajj131003?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Snehasish Kundu ",
    title: " Member",
    image: img28,
    linkedin: "https://www.linkedin.com/in/snehasish-kundu-604a17296/",
    instagram:
      "#",
  },
  {
    category: "Core Committee",
    name: "Talha",
    title: " Member",
    image: img29,
    linkedin: "https://www.linkedin.com/in/talha-mohammed-13-04-eee/",
    instagram:
      "https://www.instagram.com/its_talha._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
{
    category: "Core Committee",
    name: "Udit Saini",
    title: " Member",
    image: img30,
    linkedin: "#",
    instagram:
      "https://www.instagram.com/udit_07_saini?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Naman Gupta",
    title: " Member",
    image: img31,
    linkedin: "https://www.linkedin.com/in/naman-gupta-717bb3360/",
    instagram:
      "https://www.instagram.com/___naman_g?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Pershant",
    title: " Member",
    image: img32,
    linkedin: "https://www.linkedin.com/in/pershant-sharma-11a6a2343/",
    instagram:
      "https://www.instagram.com/pershant506?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Rahul Raj",
    title: " Member",
    image: img33,
    linkedin: "https://www.linkedin.com/in/26-11-rahul-raj/",
    instagram:
      "https://www.instagram.com/_.shadeofblack_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Anushka Sharma",
    title: " Member",
    image: img34,
    linkedin: "#",
    instagram:
      "https://www.instagram.com/_anushka26.09/?utm_source=ig_web_button_share_sheet",
  },
  {
    category: "Core Committee",
    name: "Anvi",
    title: " Member",
    image: img35,
    linkedin: "#",
    instagram:
      "#",
  },
  {
    category: "Core Committee",
    name: "Pragati Negi",
    title: " Member",
    image: img36,
    linkedin: "#",
    instagram:
      "https://www.instagram.com/_.pragati._16?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  {
    category: "Core Committee",
    name: "Rashim Garg",
    title: " Member",
    image: img37,
    linkedin: "https://www.linkedin.com/in/rashim-garg-27a53b321/",
    instagram:
      "https://www.instagram.com/rshm.me?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Sahil Minz",
    title: " Member",
    image: img38,
    linkedin: "https://www.linkedin.com/in/sahil-minz-939655275/",
    instagram:
      "https://www.instagram.com/sahil_minz13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Sehaj",
    title: " Member",
    image: img39,
    linkedin: "https://www.linkedin.com/in/sehajbansal/",
    instagram:
      "https://www.instagram.com/sehaj._.bansal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Shrishti Tripathi",
    title: " Member",
    image: img40,
    linkedin: "https://www.linkedin.com/in/shrishti-tripathi-062b7a229/",
    instagram:
      "https://www.instagram.com/_shrishti_tripathi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Sweksha Mahto",
    title: " Member",
    image: img41,
    linkedin: "https://www.linkedin.com/in/sweksha-mahto-3324472b6/",
    instagram:
      "https://www.instagram.com/_sweksha_.15?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    category: "Core Committee",
    name: "Vinit",
    title: " Member",
    image: img42,
    linkedin: "https://www.linkedin.com/in/vinit-kumar-singh-b36b2b2b5/",
    instagram:
      "https://www.instagram.com/iamvinit09?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },


];

const GlowingText = ({ children }) => (
  <span className="relative">
    <span className="absolute inset-0 -z-10 blur-[2px] text-blue-500 opacity-70">
      {children}
    </span>
    <span className="relative">{children}</span>
  </span>
);

const MeetTheTeam = () => {
  const [selectedCategory, setSelectedCategory] = useState("Executive Board");

  const filteredMembers = teamMembers.filter(
    (member) => member.category === selectedCategory
  );

  return (
    <section className="min-h-screen flex flex-col items-center bg-black text-white overflow-hidden relative z-0">
      {/* Background Decorations */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black"></div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center text-center mt-4">
        <h1 className="text-5xl font-bold">
          <GlowingText>Meet Our Team</GlowingText>
        </h1>
        <div className="flex justify-center mb-8 space-x-4 pt-12">
          <button
            onClick={() => setSelectedCategory("Executive Board")}
            className={`px-1 py-2 sm:px-4 rounded-full ${
              selectedCategory === "Executive Board"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            Executive Board
          </button>
          <button
            onClick={() => setSelectedCategory("Core Committee")}
            className={`px-1 py-2 sm:px-4 rounded-full ${
              selectedCategory === "Core Committee"
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            Core Committee
          </button>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-12 py-12">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="relative group bg-gray-900 rounded-lg  hover:shadow-cyan-500/50 transform transition duration-500 shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[30rem] object-cover rounded-t-lg"
            />
            {/* Always Visible Content */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            <div className="p-6 absolute inset-x-0 bottom-0 text-center">
              <h3 className="text-2xl font-semibold opacity-50 group-hover:opacity-0 transition-opacity duration-300 text-white mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-cyan-400 opacity-50 group-hover:opacity-0 transition-opacity duration-300">
                {member.title}
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50">
              <h3 className="text-2xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-cyan-400 font-medium">{member.title}</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <i className="fab fa-linkedin text-white text-xl"></i>
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <i className="fab fa-instagram text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Decorations */}
      <div className="absolute top-1/4 right-1/4 z-[-1]">
        <Box className="w-8 h-8 text-blue-500 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 z-[-1]">
        <Zap className="w-10 h-10 text-blue-400 animate-ping" />
      </div>
      <div className="absolute top-1/2 right-1/3 z-[-1]">
        <Cpu className="w-6 h-6 text-blue-300 animate-bounce" />
      </div>
    </section>
  );
};

export default MeetTheTeam;
