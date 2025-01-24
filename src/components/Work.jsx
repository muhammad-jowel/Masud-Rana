import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/resturent.png",
    title: "Social Media Strategy",
    tags: ["Social Media", "Engagement"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/portfolio.png",
    title: "SEO Optimization",
    tags: ["SEO", "Website Traffic"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/blog.png",
    title: "Content Marketing",
    tags: ["Content", "Strategy"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/resort.png",
    title: "PPC Campaigns",
    tags: ["Paid Ads", "ROI"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/medical.png",
    title: "Email Marketing",
    tags: ["Campaigns", "Retention"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/health.png",
    title: "Analytics & Reporting",
    tags: ["Data Analysis", "Insights"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/services.png",
    title: "Brand Management",
    tags: ["Branding", "Strategy"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/link.png",
    title: "Affiliate Marketing",
    tags: ["Affiliates", "Sales"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Reputation Management",
    tags: ["Reputation", "Trust"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Lead Generation",
    tags: ["Leads", "Sales Funnel"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Conversion Optimization",
    tags: ["CRO", "Sales"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "E-commerce Marketing",
    tags: ["E-commerce", "Sales"],
    projectLink: "/",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "Influencer Marketing",
    tags: ["Influencers", "Engagement"],
    projectLink: "/",
  },
];

const Work = () => {
  return (
    <section id="works" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My Works highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};



export default Work;
