import { TECH_STACK } from "../utils/constants";

const Technologies = () => {
  return (
    <section id="technologies" className="pb-20 bg-gray-50 text-gray-800">
      <div className="max-w-3xl mx-auto px-4 text-center pt-10">
        <h2 className="text-2xl font-bold mb-8">Technologies I Use</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {TECH_STACK.map((tech, index) => (
            <div
              key={index}
              className="w-32 bg-white p-4 rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-shadow flex flex-col items-center cursor-pointer"
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="w-10 h-10 object-contain mb-2"
              />
              <h3 className="text-sm font-medium">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
