const aboutItems = [
  {
    label: "Project done",
    number: 250,
  },
  {
    label: "Years of experience",
    number: 8,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 rounded-2xl md:p-12 p-7 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          Hello! I'm Musud Rana, a professional Digital Marketing Specialist and the CEO of I Tech Park BD. With a passion for driving online growth and creating impactful digital strategies, I specialize in SEO, social media marketing, content creation, and performance analytics. My expertise lies in delivering innovative solutions that enhance brand visibility and drive results. Let’s collaborate to elevate your business and achieve remarkable success in the digital space.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="Header logo done.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
