const NabbarMobileMenu = ({
  isOpen,
  setIsOpen,
  links,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: { id: string; text: string; href: string }[];
}) => {
  return (
    <div
      className={`md:hidden transition-transform duration-300 ease-in-out ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden bg-gray-800 shadow-md`}
    >
      <div className="px-4">
        {links.map(({ id, text, href }) => {
          return (
            <a
              href={href}
              key={id}
              className={`block text-center text-gray-200 hover:text-teal-400 transition-colors py-3 `}
              onClick={() => setIsOpen(false)}
            >
              {text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NabbarMobileMenu;
