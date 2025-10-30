function Strapline() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="flex flex-col justify-start">
        <span className="text-brand-main text-3xl absolute -left-8 pt-2">&gt; </span>{" "}
        <div>
          <span>
            simon<span className="text-brand-main">.</span>&#x200b;busby
            <span className="text-brand-main">()</span>
          </span>
          <span className="animate-blink-text">_</span>
        </div>
      </h1>
      <div className="flex flex-col gap-3">
        <h2 className="text-brand-main">Junior software developer</h2>
        <h3>Building engaging, beautiful digital products</h3>
        <p className="mt-12 mb-16 mr-15">
          I&apos;m a{" "}
          <strong className="hover:text-brand-main h-6 w-6 transition-colors duration-300">
            software developer
          </strong>{" "}
          and former{" "}
          <strong className="hover:text-brand-main h-6 w-6 transition-colors duration-300">
            print designer
          </strong>{" "}
          based in Somerset, UK with a background in creating{" "}
          <strong className="hover:text-brand-main h-6 w-6 transition-colors duration-300">
            clean, beautiful content
          </strong>
        </p>
      </div>
    </div>
  );
}

export default Strapline;
