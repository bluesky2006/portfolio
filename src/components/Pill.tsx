function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-brand-main border-1 inline-block rounded-full px-2 py-1 text-xs font-normal text-brand-main bg-brand-main/10 hover:bg-brand-main/25 cursor-default">
      {children}
    </span>
  );
}

export default Pill;
