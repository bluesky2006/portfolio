import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex justify-between gap-20">
      <Header />
      <Main />
    </div>
  );
}
