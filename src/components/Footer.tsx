function Footer() {
  return (
    <div className="ml-8">
      <p className="text-xs text-gray-500">
        This site was coded in{" "}
        <strong className="hover:text-brand-main h-6 w-6 text-gray-500 transition-colors duration-300">
          Visual Studio Code
        </strong>{" "}
        using{" "}
        <strong className="hover:text-brand-main h-6 w-6 text-gray-500 transition-colors duration-300">
          Next.js
        </strong>{" "}
        with{" "}
        <strong className="hover:text-brand-main h-6 w-6 text-gray-500 transition-colors duration-300">
          Tailwind CSS
        </strong>
      </p>
    </div>
  );
}

export default Footer;
