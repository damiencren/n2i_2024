import ChatbotWidget from "@/components/chatbotWidget";
import HeroSection from "@/components/heroSection";
import Section from "@/components/section";
import Image from "next/image";

const HomePage = () => {

  return (
    <main>
      <ChatbotWidget />
      <HeroSection />
      <Section
        id="coeur"
        title="Le Cœur : Système Circulatoire Océanique"
        desc="Le cœur humain, en pompant le sang dans tout le corps, assure la distribution de l’oxygène et des nutriments essentiels à chaque cellule. De manière analogue, les courants marins, tels que la pompe thermohaline, régulent le transfert de chaleur et de nutriments dans les océans. Ces courants, comparables à des artères océaniques, jouent un rôle clé dans la régulation du climat global en transportant l’eau chaude des régions tropicales vers les pôles et l’eau froide vers l’équateur."
        fonct1="Une circulation fluide des courants maintient des températures stables et favorise la biodiversité."
        fonct2="La perturbation des courants marins peut entraîner des changements climatiques extrêmes, comme des hivers rigoureux ou des sécheresses."
        src="/circulation.jpg"
        sens={true}
        color="#0693E3"
      />
      <Section
        id="poumons"
        title="Les Poumons : Échanges Gazeux Océaniques"
        desc="Les poumons permettent à l’organisme d’absorber l’oxygène et d’expulser le dioxyde de carbone (CO₂), tout comme l’océan absorbe ce gaz grâce au phytoplancton et libère de l’oxygène. En effet, les micro-organismes marins, souvent surnommés les 'poumons de la planète', produisent plus de la moitié de l’oxygène terrestre via la photosynthèse. L’océan joue également un rôle essentiel dans la régulation des gaz à effet de serre en stockant une part importante du CO₂ atmosphérique."
        fonct1="L'océan régule les gaz atmosphériques, limitant le réchauffement climatique et produisant de l'oxygène."
        fonct2="Une absorption excessive de CO₂ provoque l'acidification des océans, mettant en danger les coraux et la vie marine."
        src="/respi.png"
        sens={false}
        color="#0693E3"
      />
      <Image src="/wave_deep.svg" className='w-full h-1/4 object-cover' alt="wave" width={400} height={200} />
      <Section
        id="bacteries"
        title="Les Bactéries : Micro-organismes et Écosystèmes Océaniques"
        desc="Les bactéries du microbiote humain, présentes notamment dans l’intestin, jouent un rôle fondamental dans la digestion et l’immunité. Dans l’océan, les micro-organismes tels que les bactéries marines et le phytoplancton remplissent une fonction similaire en recyclant les nutriments essentiels, comme l’azote et le carbone, et en soutenant la chaîne alimentaire. Ces 'bactéries océaniques' sont à la base de la vie marine et participent activement à la production d’oxygène et à la décomposition des matières organiques."
        fonct1="Les micro-organismes marins assurent un équilibre écologique en recyclant les nutriments et en soutenant les écosystèmes marins."
        fonct2="La pollution, l’eutrophisation ou les marées noires peuvent provoquer des déséquilibres graves, entraînant des zones mortes où l’oxygène est insuffisant pour la vie."
        src="/bacte.jpg"
        sens={true}
        color="#1e2f82"
      />
      <Section
        id="peau"
        title="La Peau : Autorégulation et Protection Océanique"
        desc="La peau protège le corps humain des agressions extérieures et régule la température interne grâce à la transpiration et aux échanges thermiques. De la même manière, l’océan agit comme une immense peau planétaire, régulant la température globale et maintenant un équilibre crucial de la salinité. L’interaction entre les apports en eau douce (pluies, fonte des glaciers) et l’évaporation joue un rôle clé dans cette régulation, garantissant des conditions favorables à la vie marine."
        fonct1="Des variations équilibrées de température et de salinité permettent aux écosystèmes marins de prospérer et au climat de rester stable."
        fonct2="Une augmentation de la température océanique ou un déséquilibre de la salinité peut perturber la circulation des courants, exacerber les phénomènes climatiques extrêmes et affecter la biodiversité marine."
        src="/peau_illust.png"
        sens={false}
        color="#1e2f82"
      />
    </main>


  );
};

export default HomePage;