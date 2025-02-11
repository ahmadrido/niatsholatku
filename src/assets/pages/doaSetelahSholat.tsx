import Navigation from "../components/Navigation";

interface DoaSetelahSholatItem {
    id: number,
    arab: string,
    latin: string,
    artinya: string
}

const doaSetelahSholat: DoaSetelahSholatItem[] = [
    {
        id: 1,
        arab: "بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. اَلْحَمْدُ ِللهِ رَبِّ الْعَالَمِيْنَ. حَمْدًا يُوَافِىْ نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ. يَارَبَّنَالَكَ الْحَمْدُ وَلَكَ الشُّكْرُ كَمَا يَنْبَغِىْ لِجَلاَلِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ",
        latin: "Bismillaahirrahmaanirrahiim. Alhamdulillaahi rabbil 'aalamiin. Hamdayyu-waafii ni'amahuuwayukaafi’u maziidah. Yaa rabbanaa lakalhamdu wa lakasy syukruka-maa yambaghiilijalaaliwajhika wa 'azhiimisul-thaanik.",
        artinya: "Dengan nama Allah Yang Maha Pengasih Lagi Maha Penyayang. Segala puji bagi Allah Tuhan Semesta Alam. Pujian yang sebanding dengan nikmat-nikmatNya dan menjamin tambahannya. Wahai Tuhan kami, bagi-Mu-lah segala puji, dan bagi-Mu-lah segala syukur, sebagaimana layak bagi keluhuran zat-Mu dan keagungan kekuasaan-Mu."
    },
    {
        id: 2,
        arab: "اَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلى آلِ سَيِّدِنَا مُحَمَّدٍ. صَلاَةً تُنْجِيْنَابِهَا مِنْ جَمِيْعِ اْلاَهْوَالِ وَاْلآفَاتِ. وَتَقْضِىْ لَنَابِهَا جَمِيْعَ الْحَاجَاتِ.وَتُطَهِّرُنَا بِهَا مِنْ جَمِيْعِ السَّيِّئَاتِ. وَتَرْفَعُنَابِهَا عِنْدَكَ اَعْلَى الدَّرَجَاتِ. وَتُبَلِّغُنَا بِهَا اَقْصَى الْغَيَاتِ مِنْ جَمِيْعِ الْخَيْرَاتِ فِى الْحَيَاةِ وَبَعْدَ الْمَمَاتِ اِنَّهُ سَمِيْعٌ قَرِيْبٌ مُجِيْبُ الدَّعَوَاتِ وَيَاقَاضِىَ الْحَاجَاتِ",
        latin: "Allaahumma shalliwasallim 'ala sayyidinaa muhammadiw wa 'ala aali sayyidinaa muhammad shalaatan tun jihnaa bihatsa min jamii’il ahwaali wal aafaat. Wa taqdhii lanaa bihaa jamii'al hajaat. Wa tuthahhirunaa bihaa min jamits sayyi'aat. Wa atarfa 'unaabihaa 'indaka 'aladdarajaat. Wa tuballighunaa bihaa aqshal ghaayaati minjamii'il khairaatifil hayaati wa ba’dal mamaat. Innahu samii'un qariibum mujiibudda'awaat wayaa qaadhiyal hajaat",
        artinya: "Wahai Allah, limpahkanlah rahmat dan kesejahteraan kepada penghulu kami, Nabi Muhammad dan keluarganya, yaitu rahmat yang dapat menyelamatkan kami dari segala ketakutan dan penyakit, yang dapat memenuhi segala kebutuhan kami, yang dapat mensucikan diri kami dari segala keburukan, yang dapat mengangkat derajat kami ke derajat tertinggi di sisi-Mu, dan dapat menyampaikan kami kepada tujuan maksimal dari segala kebaikan, baik semasa hidup maupun sesudah mati. Sesungguhnya Dia (Allah) Maha Mendengar, Maha Dekat, lagi Maha Memperkenankan segala doa dan permohonan. Wahai Dzat yang Maha Memenuhi segala kebutuhan Hamba-Nya."
    },
    {
        id: 3,
        arab: "اَللّٰهُمَّ اِنَّا نَسْئَلُكَ سَلاَمَةً فِى الدِّيْنِ وَالدُّنْيَا وَاْلآخِرَةِ وَعَافِيَةً فِى الْجَسَدِ وَصِحَّةً فِى الْبَدَنِ وَزِيَادَةً فِى الْعِلْمِ وَبَرَكَةً فِى الرِّزْقِ وَتَوْبَةً قَبْلَ الْمَوْتِ وَرَحْمَةً عِنْدَ الْمَوْتِ وَمَغْفِرَةً بَعْدَ الْمَوْتِ. اَللّٰهُمَّ هَوِّنْ عَلَيْنَا فِىْ سَكَرَاتِ الْمَوْتِ وَالنَّجَاةَ مِنَ النَّارِ وَالْعَفْوَ عِنْدَ الْحِسَابِ",
        latin: "Allaahumma innaa nas'aluka salaamatan fiddiini waddun-yaa wa aakhirah. Wa 'aafiyatan fil jasadi wa shihhatan fil badani wa ziyaadatan fil'ilmi wa barakatan firrizqi wa taubatan qablal maut wa rahmatan 'indalmaut wa maghfiratan ba'dal maut. Allaahumma hawwin 'alainaa fii sakaraatil maut wan najaata minannaari wal 'afwa 'indal hisaab.",
        artinya: "Wahai Allah! Sesungguhnya kami memohon kepadaMu, kesejahteraan dalam agama, dunia dan akhirat, keafiatan jasad, kesehatan badan, tambahan ilmu, keberkahan rezeki, taubat sebelum datang maut, rahmat pada saat datang maut, dan ampunan setelah datang maut. Wahai Allah! Permudahkanlah kami dalam menghadapi sakaratul maut, (Berilah kami) keselamatan dari api neraka, dan ampunan pada saat dilaksanakan hisab."
    },
    {
        id: 4,
        arab: "اَللّٰهُمَّ اِنَّا نَعُوْذُبِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْهَرَمِ وَعَذَابِ الْقَبْرِ",
        latin: "Allaahumma innaa na 'uudzubika minal'ajzi wal kasali wal bukhli wal harami wa 'adzaabil qabri",
        artinya: "Wahai Allah! Sesungguhnya kami berlindung kepadaMu dari sifat lemah, malas, kikir, pikun dan dari azab kubur"
    },
    {
        id: 5,
        arab: "اَللّٰهُمَّ اِنَّا نَعُوْذُبِكَ مِنْ عِلْمٍ لاَيَنْفَعُ وَمِنْ قَلْبٍ لاَيَخْشَعُ وَمِنْ نَفْسٍ لاَتَشْبَعُ وَمِنْ دَعْوَةٍ لاَيُسْتَجَابُ لَهَا",
        latin: "Allahummaa innaa na'uudzubika min'ilmin laa yanfa'u wa min qalbii laa yakhsya'u wa min nafsin laa tasyaba'u wa min da'watin laa yustajaabu lahaa",
        artinya: "Wahai Allah! Sesungguhnya kami berlindung kepadaMu dari ilmu yang tidak bermanfaat, dari hati yang tidak khusyu', dari jiwa yang tidak kenal puas, dan dari doa yang tak terkabul."
    },
    {
        id: 6,
        arab: "رَبَّنَااغْفِرْلَنَا ذُنُوْبَنَا وَلِوَالِدِيْنَا وَلِمَشَايِخِنَا وَلِمُعَلِّمِيْنَا وَلِمَنْ لَهُ حَقٌّ عَلَيْنَا وَلِمَنْ اَحَبَّ وَاَحْسَنَ اِلَيْنَا وَلِكَافَّةِ الْمُسْلِمِيْنَ اَجْمَعِيْنَ",
        latin: "Rabbanagh firlanaa dzunuubanaa wa liwaalidiinaa walimasyaayikhinaa wa limu'alli-miinaa wa liman lahuu haqqun 'alainaa wa liman ahabba wa ahsana ilainaa wa likaaffatil mus limiin ajma'iin",
        artinya: "Wahai Tuhan Kami, ampunilah dosa-dosa kami, dosa-dosa orang tua kami, para sesepuh kami, para guru kami, orang-orang yang mempunyai hak atas kami, orang-orang yang cinta dan berbuat baik kepada kami, dan seluruh umat islam."
    },
    {
        id: 7,
        arab: "رَبَّنَا تَقَبَّلْ مِنَّا اِنَّكَ اَنْتَ السَّمِيْعُ الْعَلِيْمُ وَتُبْ عَلَيْنَا اِنَّكَ اَنْتَ التَّوَّابُ الرَّحِيْمُ",
        latin: "Rabbanaa taqabbal minnaa innaka antas samii'ul 'aliim, wa tub'alainaa innaka antat tawwabur rahiim",
        artinya: "Wahai Tuhan kami, perkenankanlah (permohonan) dari kami, sesungguhnya Engkau Maha Mendengar Lagi Maha Mengetahui. Dan terimalah taubat kami, sesungguhnya Engkau Maha Menerima Taubat lagi Maha Penyayang."
    },
    {
        id: 8,
        arab: "رَبَّنَا أَتِنَا فِى الدُّنْيَا حَسَنَةً وَفِي اْلأَخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        latin: "Rabbanaa aatinaa fiduunnyaa hasanah, wa fil aakhirati hasanah, waqinaa 'adzaa ban naar",
        artinya: "Ya Tuhan kami, berilah kami kebaikan hidup di dunia dan kebaikan hidup di akhirat, dan jagalah kami dari siksa api neraka."
    },
    {
        id: 9,
        arab: "وَصَلَّى اللهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلَّمَ وَالْحَمْدُ ِللهِ رَبِّ الْعَالَمِيْنَ",
        latin: "Washallallahu 'alaa sayyidinaa muhammadin wa'alaa aalihiwa shahbihiiwa sallam, wal hamdu lillaahirabbil 'aalamiin",
        artinya: "Semoga Allah memberikan rahmat dan kesejahteraan kepada penghulu kami, Nabi Muhammad, keluarga dan sahabatnya dan segala puji bagi Allah, Tuhan Semesta Alam"
    },
]

const DoaSetelahSholat = () => {
    return (
        <>
            <div className="bg-main h-full min-h-screen">
                <Navigation />
                    <h1 className="md:text-3xl text-xl px-5 mt-5 text-red-400 font-bold"><a href="/"><i className="fa-regular fa-star"></i> Doa Setelah Sholat</a></h1>

                <div className="gap-4 p-5">
                    <div className="space-y-6">
                    {doaSetelahSholat.map((doa, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg shadow-md shadow-gray-500 overflow-hidden">
                        <div className="p-6">
                            <div className="space-y-4">
                            <div className="text-right">
                                <p className="md:text-2xl text-xl leading-loose text-white font-arabic">
                                {doa.arab}
                                </p>
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-sm text-gray-300 italic text-justify">
                                {doa.latin}
                                </p>
                                
                                <div className="border-t pt-4">
                                <p className="text-gray-400 text-sm text-justify">
                                    <span className="font-bold text-red-400">Artinya: </span>
                                    {doa.artinya}
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
             </div>
        </>
    )
}

export default DoaSetelahSholat