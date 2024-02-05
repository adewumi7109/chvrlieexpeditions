import Image from "next/image";
import Intro from "./components/Intro";
import Banner from "./components/Banner";
import Products from "./components/products/Products";
export default function Home() {
  return (
    <>
<div>
  <Banner/>
<div className="w-[90%] mx-auto my-0 ">
<Intro/>
<Products/>
</div>
</div>
    </>
  );
}
