import Socials from "./Socials";
import Footer from "./Footer";
import Nav from "./Nav";
import Strapline from "./Strapline";

function Header() {
  return (
    <header className="lg:sticky lg:top-24 lg:pt-0 pt-12 flex lg:h-[80vh] lg:w-[50%] w-[70%] flex-col lg:justify-between">
      <div>
        <Strapline />
        <aside className="hidden lg:block">
          <Nav />
        </aside>
      </div>
      <div>
        <Footer />
        <Socials />
      </div>
    </header>
  );
}

export default Header;
