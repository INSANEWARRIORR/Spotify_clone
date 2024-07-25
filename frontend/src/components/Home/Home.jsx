import Layout from "../../Layout/Layout";
import Card from "../Card/Card";
import SongBar from "../MasterBar/SongBar";
import { useEffect } from "react";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Context";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    mp3: new Audio("/assets/mp3/Ae Dil Hai Mushkil.mp3"),
    img: "/assets/Ae Dil Hai Mushkil.webp",
  },

  {
    id: Math.random() * Date.now(),
    title: "Blinding Lights",
    artist: "The Weekends",
    mp3: new Audio("/assets/mp3/Blinding Light.mp3"),
    img: "/assets/the-weeknd-blinding-lights.webp",
  },

  {
    id: Math.random() * Date.now(),
    title: "Daaku",
    artist: "Badshah",
    mp3: new Audio("/assets/mp3/Daaku.mp3"),
    img: "/assets/Daaku.jpg",
  },

  {
    id: Math.random() * Date.now(),
    title: "Grateful",
    artist: "Neffex",
    mp3: new Audio("/assets/mp3/Grateful.mp3"),
    img: "/assets/Neffex.webp",
  },

  {
    id: Math.random() * Date.now(),
    title: "Lemonade",
    artist: "Diljit Dosanjh",
    mp3: new Audio("/assets/mp3/Lemonade.mp3"),
    img: "/assets/Diljit-Dosanjh.webp",
  },

  {
    id: Math.random() * Date.now(),
    title: "Pehle bhi Main",
    artist: "Vishal Mishra",
    mp3: new Audio("/assets/mp3/Pehle Bhi Main.mp3"),
    img: "/assets/Pehle-Bhi-Main.webp",
  },
  {
    id: Math.random() * Date.now(),
    title: "Sarkaare",
    artist: "King",
    mp3: new Audio("/assets/mp3/Sarkaare.mp3"),
    img: "/assets/King.webp",
  },
  {
    id: Math.random() * Date.now(),
    title: "Thunder",
    artist: "Imagine Dragons",
    mp3: new Audio("/assets/mp3/Thunder.mp3"),
    img: "/assets/Imagine dragon.webp",
  },
];
const Home = () => {
  const { getUser } = useGlobalContext();
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Layout>
      <Navbar />
      <div className="tertiary_bg ml-2 px-4 py-4 home">
        <div className="flex justify-between mb-4 pt-4 items-center ">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span className="hover:underline cursor-pointer">Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span className="hover:underline cursor-pointer">Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
