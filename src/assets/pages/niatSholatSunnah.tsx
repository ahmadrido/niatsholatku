import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
import Dhuha from "/audio/dhuha.mp3";
import Tahajud from "/audio/tahajud.mp3";
import Witir from "/audio/witir.mp3";
import Tarawih from "/audio/tarawih.mp3";
import Rawatib from "/audio/rawatib.mp3";

interface NiatSholat {
  id: string;
  title: string;
  niat: string;
  latin: string;
  artinya: string;
  audio: any;
}

const DataNiatSholatSunnah: NiatSholat[] = [
  {
    id: "dhuha",
    title: "Niat Sholat Dhuha",
    niat: "اُصَلِّيْ سُنَّةَ الضُّحٰى رَكْعَتَيْنِ لِلّٰهِ تَعَالَى",
    latin: "Usholli sunnatadh dhuhaa rak'ataini lillaahi ta'aala.",
    artinya: "Aku niat shalat sunnah dhuha dua rakaat karena Allah ta'ala.",
    audio: Dhuha,
  },
  {
    id: "tahajud",
    title: "Niat Sholat Tahajud",
    niat: "اُصَلِّيْ سُنَّةَ التَهَجُّدِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى",
    latin: "Usholli sunnatat tahajjudi rak'ataini lillaahi ta'aala.",
    artinya: "Aku niat shalat sunnah tahajud dua rakaat karena Allah ta'ala.",
    audio: Tahajud,
  },
  {
    id: "witir",
    title: "Niat Sholat Witir",
    niat: "اُصَلِّيْ سُنَّةَ الْوِتْرِ رَكْعَةً لِلّٰهِ تَعَالَى",
    latin: "Usholli sunnatal witri rak'atan lillaahi ta'aala.",
    artinya: "Aku niat shalat sunnah witir satu rakaat karena Allah ta'ala.",
    audio: Witir,
  },
  {
    id: "tarawih",
    title: "Niat Sholat Tarawih",
    niat: "اُصَلِّيْ سُنَّةَ التَّرَاوِيْحِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى",
    latin: "Usholli sunnatatarawiihi rak'ataini lillaahi ta'aala.",
    artinya: "Aku niat shalat sunnah tarawih dua rakaat karena Allah ta'ala.",
    audio: Tarawih,
  },
  {
    id: "rawatib",
    title: "Niat Sholat Rawatib",
    niat: "اُصَلِّيْ سُنَّةَ الرَّوَاتِبِ رَكْعَتَيْنِ لِلّٰهِ تَعَالَى",
    latin: "Usholli sunnatar rawaatibi rak'ataini lillaahi ta'aala.",
    artinya: "Aku niat shalat sunnah rawatib dua rakaat karena Allah ta'ala.",
    audio: Rawatib,
  },
];

const NiatSholatSunnah = () => {
  const [selectedNiat, setSelectedNiat] = useState<null | NiatSholat>(null);

  const openModal = (niat: NiatSholat) => {
    setSelectedNiat(niat);
    window.location.hash = niat.id;
  };

  const closeModal = () => {
    setSelectedNiat(null);
    history.replaceState(null, '', '/niat-sholat-sunnah');
  };

  const handleHashChange = () => {
    const hash = window.location.hash.substring(1);
    const niatMatch = DataNiatSholatSunnah.find(
      (niat) => niat.id.toLowerCase() === hash.toLowerCase()
    );
    if (niatMatch) {
      setSelectedNiat(niatMatch);
    } else {
      setSelectedNiat(null);
    }
  };

  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="bg-main h-full min-h-screen">
      <Navigation />
      <h1 className="md:text-3xl text-xl px-5 mt-5 text-green-400 font-bold"><a href="/"><i className="fa-regular fa-star"></i> Niat Sholat Sunnah</a></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        {DataNiatSholatSunnah.map((niat) => (
          <div
            key={niat.id}
            onClick={() => openModal(niat)}
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

export default NiatSholatSunnah;
