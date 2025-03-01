import { FaLinkedin, FaDev, FaGithub } from "react-icons/fa";

const LINKS_COMPONENTS = [
  {
    id: "linkedin",
    Component: FaLinkedin,
    href: "https://www.linkedin.com/in/hajar-nasr",
  },
  {
    id: "dev",
    Component: FaDev,
    href: "https://dev.to/hajarnasr",
  },
  {
    id: "github",
    Component: FaGithub,
    href: "https://github.com/hajar-nasr",
  },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-8 text-2xl">
      {LINKS_COMPONENTS.map(({ id, Component, href }) => {
        return (
          <a
            href={href}
            key={id}
            className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
          >
            <Component />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaLinks;
