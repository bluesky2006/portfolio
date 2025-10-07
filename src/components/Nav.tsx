function Nav() {
  const links = [
    { id: "bio", label: "bio" },
    { id: "experience", label: "experience" },
    { id: "projects", label: "projects" },
  ];

  return (
    <nav className="flex flex-col border-l-2 border-l-brand-main">
      {links.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="text-md font-bold tracking-wide hover:text-brand-main no-underline py-1 pl-5 transition delay-50 duration-300 hover:translate-x-2"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
