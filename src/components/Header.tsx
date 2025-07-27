import Socials from "./Socials";
import Footer from "./Footer";

function Header() {
  return (
    <header className="lg:sticky top-0 flex h-screen lg:w-[50%] md:w-[80%] flex-col justify-between pt-24 pb-12">
      <div className="flex flex-col gap-8">
        <h1 className="flex flex-col justify-start">
          <span className="text-brand-main text-3xl absolute pt-2">&gt; </span>{" "}
          <div className="ml-8">
            <span>simon.&#x200b;busby()</span>
            <span className="animate-blink-text text-brand-main">_</span>
          </div>
        </h1>
        <div className="ml-8 flex flex-col gap-3">
          <h2>Junior software developer</h2>
          <h3>Building engaging, well-crafted digital products</h3>
          <p className="mt-8 mr-15">
            I&apos;m a{" "}
            <strong className="hover:text-brand-main h-6 w-6 text-white transition-colors duration-300">
              software developer
            </strong>{" "}
            and former{" "}
            <strong className="hover:text-brand-main h-6 w-6 text-white transition-colors duration-300">
              print designer
            </strong>{" "}
            based in Somerset, UK with a background in creating{" "}
            <strong className="hover:text-brand-main h-6 w-6 text-white transition-colors duration-300">
              clean, beautiful content
            </strong>
          </p>
        </div>
      </div>
      <div className="flex flex-col  gap-5">
        <Footer />
        <Socials />
      </div>
    </header>
  );
}

export default Header;
