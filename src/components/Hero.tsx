import ConnectLink from "./core/ConnectLink";
import SocialMediaLinks from "./core/SocialMediaLinks";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#d4fcff] via-[#cfe0fc] to-[#e0c3fc] text-gray-800 min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Hi, I'm <span className="text-teal-600">Hajar Nasr</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          A Frontend Developer, building modern web experiences with React,
          Next.js, and modern technologies.
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto leading-tight">
          Passionate about building responsive, user-friendly web applications.
          I enjoy transforming ideas into polished digital experiences while
          collaborating with diverse teams.
        </p>
        <SocialMediaLinks />
        <div className="pt-2">
          <ConnectLink showIcon={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
