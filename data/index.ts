export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    // { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Megaminds IT Services - Company's Website",
      des: "Explore the wonders of our company's website, I developed a front-end web application for my company Megaminds IT Services using HTML, CSS, JS",
      img: "/recentproject1.jpg",
      iconLists: ["/html.svg", "/css.svg", "/js.svg",],
      link: "https://megamindsit.in/",
    },
    {
      id: 2,
      title: "Apple Mart",
      des: "This is an E-commerce Website which is called Apple_Mart. I used Node Js., JavaScript, React Js, HTML,CSS, Bootstrap etc.",
      img: "/recentproject2.jpg",
      iconLists: ["/js.svg", "/tail.svg", "/re.svg"],
      link: "https://apple-mart-five.vercel.app/",
    },
    {
      id: 3,
      title: "Crypto Dashboard",
      des: "It is a Live auto updating Dashboard. This dashboard visualizes Crypto Market Data. Data used is dynamic, coming directly from crypto API.",
      img: "/recentproject3.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/apex.svg",],
      link: "https://crypto-live-dashboard-gilt.vercel.app/",
    },
    {
      id: 4,
      title: "Animated Shirt-customization-3D Website",
      des: "Recreated the Shirt-customization-3D website, combining React, animations and Three.js 3D effects..",
      img: "/recentproject4.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/Muntasirul-2002/3D_Shirt-customization-3JS",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Highly impressed with Muntasirul's dedication, ability to fix complex issues with timely manner and quick learner. Shows great potential and strong teamwork skills. Keep up the excellent work! 👏",
      name: "Mansur Haider",
      title: "Application Development Specialist, Accenture",
    },
    {
      quote:
        "Mr. Islam has been engaged in an internship role within our organization as a web developer. I am pleased to inform you that he has showcased exemplary skills and competence in handling various client projects during his tenure. His commitment to excellence and ability to manage tasks efficiently have been commendable.",
      name: "Gouthami V.",
      title: "R&D Head, Megaminds IT Services",
    },
    {
      quote:
        "As a director at Megaminds IT Services, I can confidently say that Muntasirul islam is one of the best intern in MITS family.  His knowledge, commitment, and creative approach to each project have continuously surpassed our clients' expectations. With exceptional proficiency and effectiveness, he can manage intricate web applications as well as easily navigable websites. I'm glad to work with you 🤝.",
      name: "Mahesh Kandakatla",
      title: "Founder&Director of Megaminds IT Services",
    },
   
  ];
  

  
  export const workExperience = [
    {
      id: 1,
      title: "Web Developer Intern",
      date: 'Jan,2023 - May,2023',
      desc: "Assisted in the development of a web-based platform using Flask,JS, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/builtintech_comp.png",
    },
    {
      id: 2,
      title: "Freelance - Relite Service",
      date: 'Oct,2023 - Oct,2023',
      desc: "Designed and developed an e-commerce web application using HTML5, CSS3, JS.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Full Stack Web Dev - Megaminds IT Services",
      date: 'Nov,2023 - May,2024',
      desc: "Design and Developed web based application using React.js, based on client requirements and satisfaction  ",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/megaminds.jpg",
    },
    {
      id: 4,
      title: "Sr. Web dev - Megaminds IT Services",
      date: 'May,2024 - June,2024',
      desc: "Developed and maintained MERN Stack Web Application",
      className: "md:col-span-2",
      thumbnail: "/megaminds.jpg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: 'https://github.com/'
    },
    {
      id: 2,
      img: "/upwork.svg",
    },
    {
      id: 3,
      img: "/linkedin-svg.svg",
    },
  ];