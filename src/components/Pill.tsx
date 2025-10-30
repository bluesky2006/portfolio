function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-brand-main border-1 inline-block rounded-full px-2 py-1 text-xs font-normal bg-[#fefdfc] hover:bg-brand-main hover:text-white cursor-default">
      {children}
    </span>
  );
}

export default Pill;
