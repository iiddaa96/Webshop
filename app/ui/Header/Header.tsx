import CategoryHeader from "../SubHeader/CategoryHeader";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1100,
          backgroundColor: "#ffffff",
          boxShadow: "none",
          color: "black",
          borderBottom: "1px solid black",
        }}
      >
        <Navbar />
        <CategoryHeader />
      </header>
    </>
  );
}
