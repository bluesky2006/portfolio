import Header from "@/components/Header";
import Main from "@/components/Main";
import VantaBackground from "@/components/VantaBackground";

export default function Home() {
  return (
    <div className="relative">
      <VantaBackground />
      <div className="flex lg:flex-row flex-col justify-between lg:gap-20 lg:pb-0 pb-24 px-8">
        <Header />
        <Main />
      </div>
    </div>
  );
}
