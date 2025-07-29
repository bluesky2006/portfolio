function Nav() {
  const links = [
    { id: "bio", label: "bio" },
    { id: "projects", label: "projects" },
    { id: "experience", label: "experience" },
  ];

  return (
    <nav className="flex flex-col mt-10 border-l-2 border-l-brand-main">
      {links.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="text-sm font-bold hover:text-brand-main text-white no-underline py-1 pl-5 transition delay-50 duration-300 hover:translate-x-2"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
