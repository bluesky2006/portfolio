function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-brand-main inline-block rounded-full px-2 py-1 text-xs font-medium text-gray-800">
      {children}
    </span>
  );
}

export default Pill;
