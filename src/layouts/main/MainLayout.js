export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
