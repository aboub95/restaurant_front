import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Image from "next/image";
export default function page() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="">
          <h1 className=" text-3xl lg:text-6xl text-center text-red-600 font-bold mt-20">
            Histoire
          </h1>
          <div className="flex justify-center items-center md:mt-8">
            <div className="bg-yellow-400 h-3 w-20 md:w-52 mt-2"></div>
          </div>
        </div>
        <section className="flex flex-col md:flex-row justify-center mt-5">
          <div className=" whitespace-normal md:w-3/4 mt-2 p-2 flex justify-center items-center">
            <Image
              src="/assets/out-0 7 (1).svg"
              width={650}
              height={300}
              alt="img"
              className="lg:h-"
            />
          </div>
          <div className="bg-white text-justify md:w-3/4 pl-5 pr-5 flex-col gap-56 justify-center items-center mt-2 md:ml-10">
            <p className=" text-black text-justify whitespace-normal  sm:flex-col text-xl  gap-6 md: flex-col lg:flex-col lg:text-3xl flex justify-center items-center ">
              Fondé en 2010 par la passionnée de cuisine Marie Okoumé, Saveurs
              Bantu est né du désir de partager l`authentique cuisine gabonaise
              avec le monde. Notre voyage culinaire a commencé dans une petite
              cuisine familiale et s`est transformé en l`expérience
              gastronomique que nous offrons aujourd`hui.
            </p>
            <br />
            <p className=" lg:text-3xl flex justify-center items-center md: flex-col text-justify text-xl">
              Situé au cœur de Libreville, notre restaurant est devenu un lieu
              de rencontre pour les amateurs de cuisine gabonaise authentique et
              les curieux culinaires du monde entier. Nous nous efforçons de
              créer non seulement des repas, mais des expériences qui racontent
              l`histoire riche et diverse du Gabon à travers ses saveurs
              uniques.
            </p>
          </div>
        </section>
        {/* Ici nous avons la deuxième section */}
        <section className=" bg-white">
          <div className="">
            <h1 className=" text-3xl lg:text-6xl text-center text-red-600 font-bold mt-20 md:text-3xl flex-col justify-start items-center sm: flex-col justify-center items-center text-2xl ">
              Notre mission
            </h1>
            <div className="flex justify-center items-center mt-8">
              <div className="bg-yellow-400 h-3 w-48"></div>
            </div>
          </div>
          <p className="text-xl text-black ml-5 mb-2 mt-5 lg:text-3xl flex justify-start items-center">
            Chez Saveurs Bantu, notre mission est de :
          </p>
          <div className="flex-col  text-black text-xl md:ml-2 p-8 lg:text-3xl flex justify-center items-center">
            <div className="flex justify-center gap-5">
              {/* <Image
                src="/assets/Ellipse 21.jpg"
                width={30}
                height={10}
                alt="img"
              /> 
            </div>
            <li> Préserver et promouvoir l`héritage culinaire gabonais</li>

            <li className="mt-2">
              Préserver et promouvoir l`héritage culinaire gabonais
            </li>
            <li className="mt-2">
              Soutenir les producteurs locaux et promouvoir la durabilité
            </li>
            <li className="mt-2">
              Offrir une expérience gastronomique authentique et innovante
            </li>
            <li className="mt-2">
              Créer un espace accueillant où la communauté peut se réunir et
              partager
            </li>
          </div>
        </section>
        {/* Ici j'ai section carousel */}
        <section className="md:h-3/4 bg-white md:mb-16">
          <div>
            <h1 className="text-center md:mt-24 text-6xl text-red-600 font-bold ">
              Notre Équipe
            </h1>
            <div className="flex justify-center items-center mt-8">
              <div className="bg-yellow-400 h-3 w-48"></div>
            </div>
            <div className="md:h-64 w-full pl-8 mt-8 grid grid-cols-1   sm:grid-cols-1   lg:flex justify-center mb-10 items-center">
              <div className="h-56 w-60 bg-white flex-col md:flex  items-center">
                <Image
                  src="/assets/fondatrice.png"
                  width={140}
                  height={140}
                  alt="img"
                  className="ml-12"
                />
                <h1 className="text-2xl font-bold text-center mt-3">
                  Marie Okoumé
                </h1>
                <p className="text-center ">Fondatrice & Propriétaire</p>
              </div>
              <div className="h-56 w-60 bg-white flex-col   items-center">
                <Image
                  src="/assets/chefcuisto.jpg"
                  width={140}
                  height={140}
                  alt="img"
                  className="ml-12"
                />
                <h1 className="text-2xl font-bold text-center mt-3">
                  Jean-Pierre Ndong
                </h1>
                <p className="text-center mt-5">Chef Exécutif</p>
              </div>
              <div className="h-56 w-60 bg-white flex-col justify-center  items-center">
                <Image
                  src="/assets/respoclient.png"
                  width={140}
                  height={140}
                  alt="img"
                  className="ml-12 "
                />
                <h1 className="text-2xl font-bold text-center mt-3">
                  Sophie Moussavou
                </h1>
                <p className="text-center mt-5">Responsable Service Client</p>
              </div>
            </div>
          </div>
        </section>
        {/* Ici j'ai une section Philosophie */}
        <section className="bg-white flex-col justify-center items-center md:mt-20 ">
          <div className="md:mt-10">
            <h1 className="text-center pt-4 md:mt-24 text-2xl pb-3 lg:text-6xl  text-red-600 font-bold ">
              Philosophie
            </h1>
             <div className="flex justify-center items-center mt-2">
              <div className="bg-yellow-400 h-3 mb-4  w-48"></div>
            </div> 
          </div>
          <div className="bg-slate-400 rounded-xl flex flex-col md:flex-row justify-around  p-3 gap-4 items-center md:h-2/4 md:mx-20 md:mt-32 md:mb-16 ">
            <div className="h-52  bg-yellow-500 w-full rounded-xl text-center text-xl">
              <h1 className="text-red-700 text-center font-bold mt-4">
                Authenticité
              </h1>
              <p>
                Nous croyons en la préservation des traditions culinaires
                gabonaises, en utilisant des ingrédients locaux et des méthodes
                de préparation ancestrales.
              </p>
            </div>
            <div className="h-52 bg-yellow-500 w-full rounded-xl text-center text-xl">
              <h1 className="text-red-700 text-center font-bold mt-4">
                Communauté
              </h1>
              <p>
                Notre restaurant est plus qu`un lieu de restauration; c`est un
                espace de partage et de connexion pour notre communauté.
              </p>
            </div>
            <div className="h-52 bg-yellow-500 w-full rounded-xl text-center text-xl">
              <h1 className="text-red-700 text-center font-bold mt-4">
                Durabilité
              </h1>
              <p>
                Nous nous engageons à adopter des pratiques durables, en
                soutenant les producteurs locaux et en minimisant notre impact
                environnemental.
              </p>
            </div>
            <div className="h-52 bg-yellow-500 w-full rounded-xl text-center text-xl">
              <h1 className="text-red-700 text-center font-bold mt-4">
                Passion
              </h1>
              <p>
                Chaque plat que nous servons est préparé avec passion et
                dévouement, reflétant notre amour pour la cuisine gabonaise.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
         
    </div>
  );
}
