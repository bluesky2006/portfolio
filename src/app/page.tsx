import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-20 lg:pb-0 pb-24 px-12">
        <Header />
        <Main />
      </div>
    </div>
  );
}
