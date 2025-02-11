import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
import Shubuh from "/audio/shubuh.mp3";
import Dzuhur from "/audio/dzuhur.mp3";
import Ashar from "/audio/ashar.mp3";
import Maghrib from "/audio/maghrib.mp3";
import Isya from "/audio/isya.mp3";

interface NiatSholat {
  id: string;
  title: string;
  niat: string;
  latin: string;
  artinya: string;
  audio: any;
}

const DataNiatSholatFardhu: NiatSholat[] = [
  {
    id: "subuh",
    title: "Niat Sholat Subuh",
    niat: "اُصَلِّيْ فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ اْلقِبْلَةِ اَدَاءً لِلَّهِ تَعَالَى",
    latin: "Usholli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    artinya: "Aku niat melakukan shalat fardu subuh 2 rakaat menghadap kiblat karena Allah ta'ala.",
    audio: Shubuh,
  },
  {
    id: "dzuhur",
    title: "Niat Sholat Dzuhur",
    niat: "اُصَلِّيْ فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
    latin: "Usholli fardhodh dhuhri arba'a raka'atin mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    artinya: "Aku niat melakukan shalat fardu dzuhur 4 rakaat menghadap kiblat karena Allah ta'ala.",
    audio: Dzuhur,
  },
  {
    id: "ashar",
    title: "Niat Sholat Ashar",
    niat: "اُصَلِّيْ فَرْضَ الْعَصْرِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
    latin: "Usholli fardhol 'ashri arba'a raka'atin mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    artinya: "Aku niat melakukan shalat fardu ashar 4 rakaat menghadap kiblat karena Allah ta'ala.",
    audio: Ashar,
  },
  {
    id: "maghrib",
    title: "Niat Sholat Maghrib",
    niat: "اُصَلِّيْ فَرْضَ الْمَغْرِبِ ثَلَاثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
    latin: "Usholli fardhol maghribi tsalaasa raka'atin mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    artinya: "Aku niat melakukan shalat fardu maghrib 3 rakaat menghadap kiblat karena Allah ta'ala.",
    audio: Maghrib,
  },
  {
    id: "isya",
    title: "Niat Sholat Isya",
    niat: "اُصَلِّيْ فَرْضَ الْعِشَاءِ أَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لِلّٰهِ تَعَالَى",
    latin: "Usholli fardhol 'isyaa-i arba'a raka'atin mustaqbilal qiblati adaa-an lillaahi ta'aala.",
    artinya: "Aku niat melakukan shalat fardu isya 4 rakaat menghadap kiblat karena Allah ta'ala.",
    audio: Isya,
  },
];

const NiatSholatFardhu = () => {
  const [selectedNiat, setSelectedNiat] = useState<null | NiatSholat>(null);

  const openModal = (niat: NiatSholat) => {
    setSelectedNiat(niat);
    window.location.hash = niat.id; // Tambahkan hash ke URL saat modal dibuka
  };

  const closeModal = () => {
    setSelectedNiat(null);
    history.replaceState(null, '', '/niat-sholat-fardhu'); // Menghapus hash di URL
  };

  // 🔄 Fungsi untuk membuka modal saat hash berubah
  const handleHashChange = () => {
    const hash = window.location.hash.substring(1); 
    const niatMatch = DataNiatSholatFardhu.find(
      (niat) => niat.id.toLowerCase() === hash.toLowerCase()
    );
    if (niatMatch) {
      setSelectedNiat(niatMatch);
    } else {
      setSelectedNiat(null);
    }
  };

  useEffect(() => {
    handleHashChange(); // Cek hash saat pertama kali dimuat
    window.addEventListener('hashchange', handleHashChange); // Dengarkan perubahan hash
    return () => {
      window.removeEventListener('hashchange', handleHashChange); // Cleanup listener saat komponen dilepas
    };
  }, []);

  return (
    <div className="bg-main h-full min-h-screen">
      <Navigation />
      <h1 className="md:text-3xl text-xl px-5 mt-5 text-yellow-400 font-bold"><a href="/"><i className="fa-solid fa-mosque"></i> Niat Sholat Fardhu</a></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {DataNiatSholatFardhu.map((niat) => (
          <div
            key={niat.id}
            onClick={() => openModal(niat) }
            className="card flex items-center justify-center"
          >
            <div className="p-5 text-center rounded-lg bg-gray-900 hover:bg-gray-800 shadow-md shadow-gray-500 hover:text-gray-400 cursor-pointer text-white w-full">
              <h1 className="text-2xl font-bold">{niat.title}</h1>
              <p className="text-gray-400 my-2">
                <span className="font-bold text-yellow-400">Niat:</span> {niat.niat}
              </p>
              <p className="text-gray-400 line-clamp-1">
                <span className="font-bold text-yellow-400">Latin:</span> {niat.latin}
              </p>
              <p className="text-gray-400 line-clamp-1 mt-2">
                <span className="font-bold text-yellow-400">Artinya:</span> {niat.artinya}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedNiat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-96 md:w-xl relative">
            <button
              className="absolute top-2 right-2 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-red-500"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-center text-yellow-500 mb-4">{selectedNiat.title}</h2>
            <p className="text-xl text-center text-gray-800 dark:text-gray-200">{selectedNiat.niat}</p>
            <p className="italic text-center text-gray-600 dark:text-gray-400 mt-2">{selectedNiat.latin}</p>
            <p className="text-center text-gray-700 dark:text-gray-300 mt-4">{selectedNiat.artinya}</p>
            <audio controls className="w-full mt-4">
              <source src={selectedNiat.audio} type="audio/mpeg" />
              Browser Anda tidak mendukung pemutar audio.
            </audio>
          </div>
        </div>
      )}
    </div>
  );
};

export default NiatSholatFardhu;
