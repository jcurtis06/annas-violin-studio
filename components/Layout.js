import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="w-screen justify-center items-center flex flex-col">
        {children}
      </main>
    </>
  );
}
