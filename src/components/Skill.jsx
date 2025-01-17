import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "seo_icon.png",
    label: "SEO",
    desc: "Search Engine Optimization",
  },
  {
    imgSrc: "graphic_icon.png",
    label: "Graphic Design",
    desc: "Visual Content Creation",
  },
  {
    imgSrc: "remarketing_iocn.png",
    label: "PPC",
    desc: "Pay-Per-Click Advertising",
  },
  {
    imgSrc: "remarketing_iocn.png",
    label: "Social Media Marketing",
    desc: "Social Engagement",
  },
  {
    imgSrc: "email_icon.png",
    label: "Email Marketing",
    desc: "Targeted Campaigns",
  },
  {
    imgSrc: "content_icon.png",
    label: "Content Marketing",
    desc: "Strategic Content Creation",
  },
  {
    imgSrc: "statistics_icon.png",
    label: "Analytics",
    desc: "Performance Tracking",
  },
  {
    imgSrc: "wordpress_iocn.png",
    label: "WordPress",
    desc: "Website Management",
  },
  {
    imgSrc: "adove-icon.png",
    label: "Adobe Creative Suite",
    desc: "Creative Design Tools",
  },
  {
    imgSrc: "google_icon.png",
    label: "Google Ads",
    desc: "Online Advertising",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">My Skills And Expertise</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Explore the cutting-edge strategies and tools I leverage to drive online growth, enhance brand visibility, and deliver impactful digital marketing solutions.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
