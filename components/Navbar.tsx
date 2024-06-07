import IconLink from "./IconLink";

const navbarIcons = [
  {
    id: 0,
    title: "Home",
    linkTo: "/",
    icon: undefined,
  },
  { id: 1, title: "What we offer", linkTo: "", icon: undefined },
  { id: 2, title: "Why choose us", linkTo: "", icon: undefined },
  { id: 3, title: "Who are we", linkTo: "", icon: undefined },
];

interface Navbar {
  className?: string;
}

const Navbar: React.FC<Navbar> = ({ className }) => {
  return (
    <nav>
      <ul className={`${className}`}>
        {navbarIcons.map((navbarIcon) => (
          <IconLink key={navbarIcon.id} {...navbarIcon} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
