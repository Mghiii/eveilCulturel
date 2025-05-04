import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import Galerie from "./pages/Galerie";
import Remerciments from "./pages/Remerciments";
import DetailsProject from "./pages/DetailsProject";
import Apropos from "./pages/Apropos";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const carouselImages = useMemo(
    () => [
      { id: 1, image: "/images/imageCarosel/1.jpg" },
      { id: 2, image: "/images/imageCarosel/2.jpg" },
      { id: 3, image: "/images/imageCarosel/3.jpg" },
      { id: 4, image: "/images/imageCarosel/4.png" },
      { id: 5, image: "/images/imageCarosel/5.jpg" },
      { id: 6, image: "/images/imageCarosel/6.jpg" },
      { id: 7, image: "/images/imageCarosel/7.jpg" },
      { id: 8, image: "/images/imageCarosel/8.png" },
      { id: 9, image: "/images/imageCarosel/9.jpg" },
      { id: 10, image: "/images/imageCarosel/10.jpeg" },
      { id: 11, image: "/images/imageCarosel/11.jpg" },
    ],
    []
  );

  const studentProjects = [
    {
      id: 1,
      name: "reda El farissi",
      projectTitle: "Représentation d'Agadir",
      image: "/images/students/reda.png",
      tags: ["Histoire", "Patrimoine"],
      projet: "https://tagadir-culture.vercel.app/",
    },
    {
      id: 2,
      name: "Yousra Derdour",
      projectTitle: "Zellige Moderne",
      image: "/images/students/yousra.jpeg",
      tags: ["Art traditionnel", "Innovation"],
      projet:
        "https://drive.google.com/file/d/1wJDBSaSV6hfVYeZvvPGRESL9D18lKAat/view",
    },
    {
      id: 3,
      name: "Soulaimane Bouiboukirn",
      projectTitle: "Marché pour les Enchères d’Œuvres d’Art",
      image: "/images/students/soulaiman.jpeg",
      tags: ["Ecommerce", "EnchèresArt"],
      projet: "https://bidding-ecommerce.vercel.app",
    },
    {
      id: 4,
      name: "Yassine Rachid",
      projectTitle: "Patrimoine Marocain",
      image: "/images/students/yassinRachid.jpeg",
      tags: ["Art", "Patrimoine", "Tradition"],
      projet: "https://projetculture.vercel.app/",
    },
    {
      id: 5,
      name: "Mohammed Mimoun",
      projectTitle: "Peinture Luminescente",
      image: "/images/students/youssef.jpg",
      tags: ["Art expérimental", "Science"],
    },
    {
      id: 6,
      name: "Amina Belhaj",
      projectTitle: "Tissage Digital",
      image: "/images/students/amina.jpg",
      tags: ["Artisanat", "Innovation"],
    },
    {
      id: 7,
      name: "Karim Bensaid",
      projectTitle: "Architecture Paramétrique",
      image: "/images/students/karim.jpg",
      tags: ["Design", "Algorithmes"],
    },
    {
      id: 8,
      name: "Nadia Cherif",
      projectTitle: "Photographie Holographique",
      image: "/images/students/nadia.jpg",
      tags: ["Technologie", "Art visuel"],
    },
    {
      id: 9,
      name: "Omar Drissi",
      projectTitle: "Robots Danseurs",
      image: "/images/students/omar.jpg",
      tags: ["Robotique", "Performance"],
    },
    {
      id: 10,
      name: "Houda El Fassi",
      projectTitle: "Réalité Virtuelle Artistique",
      image: "/images/students/houda.jpg",
      tags: ["VR", "Immersion"],
    },
    {
      id: 11,
      name: "Zakaria Nouri",
      projectTitle: "Génération Algorithmique de Poésie",
      image: "/images/students/zakaria.jpg",
      tags: ["Littérature", "IA"],
    },
    {
      id: 12,
      name: "Salma Rahmouni",
      projectTitle: "Mode Intelligente",
      image: "/images/students/salma.jpg",
      tags: ["Design", "Technologie"],
    },
    {
      id: 13,
      name: "Adnane Tazi",
      projectTitle: "Installation Sonore Urbaine",
      image: "/images/students/adnane.jpg",
      tags: ["Art public", "Audio"],
    },
    {
      id: 14,
      name: "Imane El Mansouri",
      projectTitle: "Cinéma Généré par IA",
      image: "/images/students/imane.jpg",
      tags: ["Film", "Intelligence Artificielle"],
    },
    {
      id: 15,
      name: "Mehdi Berrada",
      projectTitle: "Sculpture Cinétique",
      image: "/images/students/mehdi2.jpg",
      tags: ["Mouvement", "Mécanique"],
    },
    {
      id: 16,
      name: "Noura Aknin",
      projectTitle: "Peinture Biochimique",
      image: "/images/students/noura.jpg",
      tags: ["Science", "Art expérimental"],
    },
    {
      id: 17,
      name: "Amine Kettani",
      projectTitle: "Jeu Vidéo Artistique",
      image: "/images/students/amine.jpg",
      tags: ["Game Design", "Narration"],
    },
    {
      id: 18,
      name: "Sara El Fenni",
      projectTitle: "Design d'Interface Poétique",
      image: "/images/students/sara.jpg",
      tags: ["UX", "Créativité"],
    },
    {
      id: 19,
      name: "Hamza Belahrach",
      projectTitle: "Projection Mapping Architectural",
      image: "/images/students/hamza.jpg",
      tags: ["Lumière", "Espace"],
    },
    {
      id: 20,
      name: "Lina Maroufi",
      projectTitle: "Céramique Algorithmique",
      image: "/images/students/lina.jpg",
      tags: ["Artisanat", "Modélisation"],
    },
    {
      id: 21,
      name: "Anas Jamal",
      projectTitle: "Théâtre Robotique",
      image: "/images/students/anas.jpg",
      tags: ["Performance", "Technologie"],
    },
    {
      id: 22,
      name: "Rania El Amrani",
      projectTitle: "Peinture Data",
      image: "/images/students/rania.jpg",
      tags: ["Visualisation", "Big Data"],
    },
    {
      id: 23,
      name: "Bilal Cherkaoui",
      projectTitle: "Design Sonore Urbain",
      image: "/images/students/bilal.jpg",
      tags: ["Espace public", "Audio"],
    },
    {
      id: 24,
      name: "Yasmina Naji",
      projectTitle: "Mode Réactive",
      image: "/images/students/yasmina.jpg",
      tags: ["Textile intelligent", "Capteurs"],
    },
    {
      id: 25,
      name: "Hicham El Ghandouri",
      projectTitle: "Art des Algorithmes Génétiques",
      image: "/images/students/hicham.jpg",
      tags: ["Évolution", "IA"],
    },
    {
      id: 26,
      name: "Nada Bennis",
      projectTitle: "Installation Interactive",
      image: "/images/students/nada.jpg",
      tags: ["Participation", "Technologie"],
    },
    {
      id: 27,
      name: "Othmane Kharraz",
      projectTitle: "Sculpture Nanotechnologique",
      image: "/images/students/othmane.jpg",
      tags: ["Micro-échelle", "Science"],
    },
    {
      id: 28,
      name: "Ghita Lamrani",
      projectTitle: "Danse Digitale",
      image: "/images/students/ghita.jpg",
      tags: ["Mouvement", "Capture"],
    },
    {
      id: 29,
      name: "Adil Benjelloun",
      projectTitle: "Architecture Bio-inspirée",
      image: "/images/students/adil.jpg",
      tags: ["Nature", "Design"],
    },
    {
      id: 30,
      name: "Meryem El Asri",
      projectTitle: "Peinture Interactive",
      image: "/images/students/meryem.jpg",
      tags: ["Art numérique", "Interaction"],
    },
    {
      id: 31,
      name: "Walid Akkaoui",
      projectTitle: "Musique Quantique",
      image: "/images/students/walid.jpg",
      tags: ["Science", "Son"],
    },
    {
      id: 32,
      name: "Hafsa El Moutawakil",
      projectTitle: "Design Olfactif",
      image: "/images/students/hafsa.jpg",
      tags: ["Odeur", "Expérience"],
    },
    {
      id: 33,
      name: "Reda El Fassi",
      projectTitle: "Art Cryptographique",
      image: "/images/students/reda.jpg",
      tags: ["Sécurité", "Visualisation"],
    },
    {
      id: 34,
      name: "Zineb El Ouazzani",
      projectTitle: "Réalité Mixte Narrative",
      image: "/images/students/zineb.jpg",
      tags: ["MR", "Storytelling"],
    },
    {
      id: 35,
      name: "Khalid Amrani",
      projectTitle: "Sculpture Magnétique",
      image: "/images/students/khalid.jpg",
      tags: ["Physique", "Art dynamique"],
    },
  ];

  const themes = [
    {
      title: "Arts et métiers d'art",
      icon: "🎨",
      description: "Exploration des techniques artisanales traditionnelles",
    },
    {
      title: "Outils numériques et patrimoine",
      icon: "💻",
      description: "Technologies modernes pour la préservation du patrimoine",
    },
    {
      title: "Innovation et patrimoine",
      icon: "✨",
      description: "Nouvelles approches pour valoriser notre héritage culturel",
    },
    {
      title: "Identité culturelle numérique",
      icon: "🌐",
      description: "Comment le numérique transforme notre identité culturelle",
    },
    {
      title: "Art numérique",
      icon: "🖥️",
      description: "Créations artistiques à l'ère digitale",
    },
    {
      title: "Influences culturelles",
      icon: "🤝",
      description: "Métissage des cultures au Maroc et en Afrique",
    },
    {
      title: "Patrimoine et technologie",
      icon: "🏛️",
      description:
        "Sauvegarde du patrimoine grâce aux innovations technologiques",
    },
    {
      title: "Culinaire marocain",
      icon: "🍲",
      description: "Patrimoine gastronomique et innovations",
    },
  ];

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  images={carouselImages}
                  students={studentProjects}
                  themes={themes}
                />
              }
            />
            <Route path="/AllProjects" element={<AllProjects />} />
            <Route path="/Remerciments" element={<Remerciments />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/DetailsProject/:id" element={<DetailsProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
