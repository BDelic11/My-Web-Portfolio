import IconLink from "./IconLink";
import LanguageChanger from "./LanguageChanger";

const navbarIcons = [
  {
    id: 0,
    title: "Home",
    linkTo: "hero",
    icon: undefined,
  },
  { id: 1, title: "Stand out", linkTo: "unique", icon: undefined },
  { id: 2, title: "About me", linkTo: "about", icon: undefined },
  { id: 3, title: "Projects", linkTo: "projects", icon: undefined },
];

interface NavbarProps {
  className?: string;
  setIsOpen: (bool: boolean) => void;
  locale: any;
}

const Navbar: React.FC<NavbarProps> = ({ setIsOpen, className, locale }) => {
  return (
    <nav>
      <ul
        className={`${className} flex flex-col justify-around py-10 align-middle `}
      >
        {navbarIcons.map((navbarIcon) => (
          <IconLink
            key={navbarIcon.id}
            setLinkClick={setIsOpen}
            {...navbarIcon}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
