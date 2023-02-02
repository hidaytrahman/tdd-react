import { useAppContext } from "../../../providers/AppProviders";
function Header() {
  const { changeTheme, theme } = useAppContext();

  return (
    <header className="app-header" data-testid="app-header">
      <h1>Header</h1>
      <button onClick={() => changeTheme?.()} data-testid="themeChangeBtn">
        Theme - {theme.main}
      </button>
    </header>
  );
}

export default Header;
