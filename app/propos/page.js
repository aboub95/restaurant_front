import { A_propos } from "../components/a_propos/A_propos";
import { Header } from "../components/Header";
// import Image from "next/image";
export default function page() {
  return (
    <div className="bg-white">
      <Header />
      <A_propos />
  
 </div>
);
}