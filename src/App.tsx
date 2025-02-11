import Navigation from "./assets/components/Navigation"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import { useState } from "react"
import MenuMain from "./assets/components/menu-main";
import CardMain from "./assets/components/cardMain";
import logo from "../public/images/logo.png"
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Cek apakah user sudah pernah melihat splash screen
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    
    if (!hasSeenSplash) {
      // Jika belum pernah melihat, tampilkan splash screen
      const timer = setTimeout(() => {
        setShowSplash(false);
        // Simpan ke localStorage bahwa user sudah melihat splash screen
        localStorage.setItem('hasSeenSplash', 'true');
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      // Jika sudah pernah melihat, langsung sembunyikan splash screen
      setShowSplash(false);
    }
  }, []);
  const [text2] = useTypewriter({
    words: ['NIATSHOLATKU'],
    loop: false,
  })
  
  if (!showSplash) return null;
  return (
    <div className="bg-main fixed inset-0 flex items-center justify-center bg-white" style={{zIndex: "999999"}}>
      <div className="space-y-6 text-center">
        <img src={logo} className="mx-auto w-3/4" alt="" />
        <p className="text-3xl font-bold text-white animate-pulse">
          {text2}<Cursor cursorColor='yellow' />
        </p>
      </div>
    </div>
  );
};


function App() {
  // const [darkMode, setDarkMode] = useState(false);

  const [text] = useTypewriter({
    words: ['"Sesungguhnya sholat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman." (QS. An-Nisa: 103)', '“Dan dirikanlah sholat, tunaikanlah zakat dan rukuklah beserta orang-orang yang rukuk.” (QS Al Baqarah 43).'],
    loop: true,
    delaySpeed: 2000
  })



  return (
    <div className="bg-main h-full min-h-screen">
      <LoadingScreen />
      <Navigation />

      <div className="p-5 text-white ">
          <div className="mt-5 md:h-52 bg-gray-900 rounded-xl p-5 text-center items-center flex flex-col justify-center shadow shadow-gray-500">
            <h1 className="md:text-3xl font-bold text-xl p-5">Selamat Datang di NiatSholatKu – Temukan Niat Sholat dengan Mudah</h1>
            <p className="font-bold text-xl text-gray-400 p-5">{ text }<Cursor cursorColor='blue' /></p>
          </div>

          <div className="mt-5 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
              <MenuMain Href="niat-sholat-fardhu" Color="text-yellow-400" Text="Niat Sholat Fardhu" Icon="fa-solid fa-mosque" />
              <MenuMain Href="niat-sholat-sunnah" Color="text-green-400" Text="Niat Sholat Sunnah" Icon="fa-regular fa-star" />
              <MenuMain Href="panduan-sholat" Color="text-blue-400" Text="Panduan Sholat" Icon="fa-solid fa-book" />
              <MenuMain Href="doa-setelah-sholat" Color="text-red-400" Text="Doa Setelah Sholat" Icon="fa-solid fa-hands" />
              <MenuMain Href="islami-news" Color="text-purple-400" Text="Berita Islami" Icon="fa-solid fa-pen" />
              <MenuMain Href="#tentangKami" Color="text-cyan-400" Text="Tentang Kami" Icon="fa-solid fa-circle-info" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardMain 
            url="https://islam.nu.or.id/sirah-nabawiyah/sejarah-shalat-dalam-islam-qkSQm" 
            Img="https://storage.nu.or.id/storage/post/16_9/mid/1615519553.jpg" 
            title="Sejarah Sholat dalam Islam" 
            description="“Shalat” bukanlah kata yang berasal dari agama Islam. Kata “shalat” telah digunakan oleh masyarakat Arab pra-Islam dengan pengertian doa dan istighfar. (M Khudari Bek, Tarikhut Tasyri Al-Islami, [Beirut, Darul Fikr: 1995 M/1415 H], 25-26)." />
            <CardMain 
            url="https://islamdigest.republika.co.id/berita/qz9pm0320/4-alasan-mengapa-umat-islam-harus-sholat-5-waktu" 
            Img="https://tse4.mm.bing.net/th?id=OIP.hDpvdSKYbi2bQXvgRNB1fAHaEK&pid=Api&P=0&h=180" 
            title="Mengapa Harus Sholat 5 Waktu?" 
            description="Setiap orang yang beriman wajib untuk menunaikan sholat lima waktu. Kewajiban sholat lima waktu tersebut banyak tertuang baik dalam Alquran atau pun hadits Rasulullah SAW." />
            <div className="flex justify-center items-center text-center">
              <h1 className="text-4xl font-bold text-gray-400 p-10">“Sholatlah sebelum kamu disholatkan”</h1>
            </div>
          </div>
      
      </div>
    </div>  
  )
}

export default App
