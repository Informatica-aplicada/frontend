import Footer from './footer';
import Navbar from "./navbar";

export function MasterPage(component) {

    const { Details } = component;
    
  return (
    <>
      <Navbar />
      {component}
      <Footer />
    </>
  );
}