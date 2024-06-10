
import React from 'react'
import { HoverEffect } from '@/components/ui/CardHoverEffect'

const Services = () => {
  return (
    <section className='w-full py-20'>
        <h1 className="heading">
        My <span className="text-purple font-bold">Services</span>
      </h1>

    <div className="max-w-5xl flex justify-center item-center">
    <HoverEffect items={projects} />
  </div>
    </section>
  )
}
export const projects = [
    {
      title: "Frontend Web Application </>",
      description:
        "With the help of knowledgeable frontend web development services, realise your goal. My area of expertise is developing online applications that are responsive, aesthetically pleasing, and easy to use on all platforms.",
      link: "https://react.dev/",
    },
    {
      title: "MERN Application 👨🏻‍💻",
      description:
        "The four technologies that make up the stack are referred to as MERN (MongoDB, Express, React, and Node.js). The MERN stack is widely acknowledged by developers as a streamlined platform for developing interactive and highly scalable web applications.",
      link: "https://expressjs.com/",
    },
    {
      title: "Custom Development 🚀",
      description:
        "My core competency lies in custom development, which enables me to create solutions that are specifically designed to meet your business's demands. I can provide creative, top-notch solutions whether you need a new application or want to improve the functioning of an already-existing one.",
      link: "https://www.mongodb.com/",
    },
    {
      title: "Solution Strategy for Web Dev 💡",
      description:
        "Utilize our all-inclusive web development plan services to accomplish your business objectives. I offer strategic planning and consulting services to guarantee the success of your online projects from beginning to end. In-depth evaluation of your company's needs and objectives, technology consulting, and project planning are all topics we can cover.",
      link: "https://meta.com",
    },
 
  ];
export default Services