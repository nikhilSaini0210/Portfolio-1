const NavbarLogo = () => {
  return (
    <div>
      <h1
        style={{
          color: "var(--color-white)",
        }}
        className="text-2xl sm:hidden md:block"
      >
        Nikhil Saini
      </h1>
      <h1
        style={{
          color: "var(--color-white)",
          fontFamily: "var(--font-special)",
        }}
        className="font-extrabold text-4xl md:hidden sm:block"
      >
        NS
      </h1>
    </div>
  );
};

export default NavbarLogo;
