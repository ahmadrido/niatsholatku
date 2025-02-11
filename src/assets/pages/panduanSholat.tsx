import Navigation from "../components/Navigation";

const PanduanSholat = () => {
  return (
    <div className="bg-main h-full min-h-screen">
      <Navigation />
      <h1 className="md:text-3xl text-xl px-5 mt-5 text-blue-400 font-bold"><a href="/"><i className="fa-solid fa-book"></i> Panduan Sholat</a></h1>
      <div className="p-5 mx-auto">

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">1. Niat Sholat</h2>
          <p className="text-gray-400">
            Niat dilakukan di dalam hati sebelum takbiratul ihram. Niat menunjukkan
            tujuan untuk melaksanakan sholat.
          </p>
        </section>

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">2. Takbiratul Ihram</h2>
          <p className="text-gray-400">
            Mengangkat kedua tangan setinggi telinga sambil mengucapkan:
          </p>
          <p className="italic text-center text-yellow-300 mt-2">
            "Allahu Akbar"
          </p>
        </section>

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">3. Membaca Al-Fatihah dan Surat Pendek</h2>
          <p className="text-gray-400">
            Setelah takbiratul ihram, baca Surah Al-Fatihah diikuti dengan surat
            pendek dari Al-Qur'an.
          </p>
        </section>

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">4. Rukuk</h2>
          <p className="text-gray-400">
            Membungkuk dengan tangan di lutut sambil mengucapkan:
          </p>
          <p className="italic text-center text-yellow-300 mt-2">
            "Subhana rabbiyal 'azim wabihamdih" (3x)
          </p>
        </section>

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">5. I'tidal</h2>
          <p className="text-gray-400">
            Berdiri tegak kembali sambil mengucapkan:
          </p>
          <p className="italic text-center text-yellow-300 mt-2">
            "Sami'allahu liman hamidah, rabbana lakal hamd"
          </p>
        </section>

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">6. Sujud</h2>
          <p className="text-gray-400">
            Bersujud sambil mengucapkan:
          </p>
          <p className="italic text-center text-yellow-300 mt-2">
            "Subhana rabbiyal a'la wabihamdih" (3x)
          </p>
        </section>

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">7. Duduk di Antara Dua Sujud</h2>
          <p className="text-gray-400">
            Duduk sejenak sambil membaca:
          </p>
          <p className="italic text-center text-yellow-300 mt-2">
            "Rabbighfirli, warhamni, wajburni, warfa'ni, warzuqni, wahdini,
            wa'afini, wa'fu anni"
          </p>
        </section>

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">8. Tasyahud Akhir</h2>
          <p className="text-gray-400">
            Duduk dengan tenang dan membaca tasyahud akhir:
          </p>
          <p className="italic text-center text-yellow-300 mt-2">
            "At-tahiyyaatu al-mubaarakaatu al-shalawaatu al-thoyyibaatu lillahi. Assalaamu 'alaika ayyuhannabiyyu wa rahmatullahi wa barakaatuhu. As-Salaamu 'alainaa wa 'alaa 'ibaadillahi as-shoolihin. Asyhadu an laa ilaaha illa Allah wa Asyhadu anna muhammadarrasuulullah. Allahumma Sholli 'ala Sayyidinaa Muhammad. Wa 'ala aali sayyidina Muhammad, Kamaa shollayta 'ala sayyidina Ibrahim. Wa 'ala aali sayyidina Ibrahim. Wa Baarik 'ala sayyidina Muhammad wa 'ala aali sayyidina Muhammad. Kamaa baarakta 'ala sayyidinaa Ibrahim, wa 'ala sayyidina Ibrahim, innaka hamiidun majiid."
          </p>
        </section>

        <section className="bg-gray-900 shadow-gray-500 text-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">9. Salam</h2>
          <p className="text-gray-400">
            Mengakhiri sholat dengan mengucapkan salam ke kanan dan kiri:
          </p>
          <p className="italic text-center text-yellow-300 mt-2">
            "Assalamu'alaikum warahmatullah"
          </p>
        </section>
      </div>
    </div>
  );
};

export default PanduanSholat;