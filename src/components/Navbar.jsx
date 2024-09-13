export const Navbar = () => {
  return (
    <header>
      <nav className="max-w-screen-2xl container mx-auto py-6 px-4 flex justify-between items-center">
        {/* nav logo */}
        <a href="/">Logo</a>

        {/* desktop menu items */}
        <div>Menu Items</div>

        {/* cart icon */}
        <div>cart</div>
      </nav>
    </header>
  );
};
