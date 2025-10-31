import Link from "next/link";

function Footer() {
  return (
    <div>
      <Link
        href="https://tigerknee.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-col items-center px-5 py-3 font-semibold text-white text-sm rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-transform duration-300 no-underline leading-snug"
      >
        Work with me
      </Link>
      <p className="text-xs text-gray-500 dark:text-gray-300 mr-15 my-10">
        This site was coded in{" "}
        <strong className="hover:text-brand-main h-6 w-6 transition-colors duration-300">
          Visual Studio Code
        </strong>{" "}
        using{" "}
        <strong className="hover:text-brand-main h-6 w-6 transition-colors duration-300">
          Next.js
        </strong>{" "}
        with{" "}
        <strong className="hover:text-brand-main h-6 w-6 transition-colors duration-300">
          Tailwind&nbsp;CSS
        </strong>
      </p>
    </div>
  );
}

export default Footer;
