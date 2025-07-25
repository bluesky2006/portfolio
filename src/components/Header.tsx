import Socials from "./Socials";

function Header() {
  return (
    <header className="sticky top-0 flex h-screen w-[50%] flex-col justify-between pt-24 pb-12">
      <div className="flex flex-col gap-8">
        <h1>
          <span className="text-brand-green text-md absolute">&gt;</span>{" "}
          <div className="ml-10">
            <span>simon.busby()</span>&nbsp;
            <span className="animate-blink-text text-brand-green">_</span>
          </div>
        </h1>
        <div className="ml-10 flex flex-col gap-3">
          <h2>Junior software developer</h2>
          <h3>Building engaging, well-crafted digital products</h3>
          <p className="mt-10 mr-15">
            I&apos;m a{" "}
            <strong className="hover:text-brand-green h-6 w-6 text-white transition-colors duration-300">
              software developer
            </strong>{" "}
            and former{" "}
            <strong className="hover:text-brand-green h-6 w-6 text-white transition-colors duration-300">
              print designer
            </strong>{" "}
            based in Somerset, UK with a background in creating{" "}
            <strong className="hover:text-brand-green h-6 w-6 text-white transition-colors duration-300">
              clean, beautiful content
            </strong>
            .
          </p>
        </div>
      </div>
      <Socials />
    </header>
  );
}

export default Header;
