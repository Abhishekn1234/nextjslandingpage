import Category from "./components/Category";
import Herosection from "./components/Herosection";
import Nextsteps from "./components/Nextsteps";
import Subscriber from "./components/Subscriber";
import Testimonials from "./components/Testimonals";
import Topsection from "./components/Topsection";

export default function Home() {
  return (
    <>
      <Herosection />
      <Category />
      <Topsection/>
      <Nextsteps/>
      <Testimonials/>
      <Subscriber/>
      
    </>
  );
}
