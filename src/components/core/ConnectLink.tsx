import { FiMail } from "react-icons/fi";

const ConnectLink = ({ showIcon }: { showIcon: boolean }) => {
  return (
    <a
      href="mailto:hajarnasrm@gmail.com"
      className="flex items-center gap-1 max-w-fit m-auto bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg "
    >
      <span>Let's Connect</span>
      {showIcon && <FiMail className="w-5 h-5" />}
    </a>
  );
};

export default ConnectLink;
