import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="bg-primary select-none font-sans antialiased">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
