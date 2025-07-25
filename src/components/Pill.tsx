function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-brand-main my-2 inline-block rounded-md px-3 py-1 text-xs font-medium text-gray-800">
      {children}
    </span>
  );
}

export default Pill;
