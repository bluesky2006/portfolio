import Socials from "./Socials";
import Footer from "./Footer";
import Strapline from "./Strapline";
import Skills from "./Skills";

function Header() {
  return (
    <header className="lg:sticky lg:top-24 lg:pt-0 pt-12 flex lg:h-[80vh] w-[100%] md:w-[70%] lg:w-[50%] flex-col lg:justify-between">
      <div>
        <Strapline />
        <Skills />
        {/* <aside className="hidden lg:block">
          <Nav />
        </aside> */}
      </div>
      <div>
        <Footer />
        <Socials />
      </div>
    </header>
  );
}

export default Header;
