const Contact = () => {
  return (
    <section id="connect" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
        <p className="text-lg mb-8">
          Feel free to reach out for collaborations or just to say hi!
        </p>
        <div className="flex justify-center gap-10">
          <a
            href="mailto:your.email@example.com"
            className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
            aria-label="Gmail"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-teal-400"
              viewBox="0 0 48 48"
            >
              <path
                fill="currentColor"
                d="M24 24L4 10v28c0 1.1.9 2 2 2h8V22l10 7 10-7v18h8c1.1 0 2-.9 2-2V10L24 24z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-teal-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.6 4.09 5.5 3 5.5s-1.98-.9-1.98-2 .89-2 1.98-2 1.98.9 1.98 2zM4.98 8H1V24h3.98V8zM8.99 8H5.99V24h4V16.5c0-4.7 6-5 6 0V24h4V14.5c0-7.9-8-7.6-10-3.7V8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
