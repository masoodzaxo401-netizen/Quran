// Database Matrix with 15 Elite Reciters Endpoints
const recitersData = [
    { id: 1, name: "عبد الباسط عبد الصمد", server: "https://server7.mp3quran.net/basit/" },
    { id: 2, name: "مشاري بن راشد العفاسي", server: "https://server8.mp3quran.net/afs/" },
    { id: 3, name: "ناصر القطامي", server: "https://server6.mp3quran.net/qtm/" },
    { id: 4, name: "ماهر المعيقلي", server: "https://server12.mp3quran.net/maher/" },
    { id: 5, name: "سعود الشريم", server: "https://server7.mp3quran.net/shur/" },
    { id: 6, name: "ياسر الدوسري", server: "https://server11.mp3quran.net/yasser/" },
    { id: 7, name: "أحمد بن علي العجمي", server: "https://server10.mp3quran.net/ajm/" },
    { id: 8, name: "سعد الغامدي", server: "https://server7.mp3quran.net/s_gmd/" },
    { id: 9, name: "فارس عباد", server: "https://server8.mp3quran.net/frs_a/" },
    { id: 10, name: "عبد الرحمن السديس", server: "https://server11.mp3quran.net/sds/" },
    { id: 11, name: "محمود خليل الحصري", server: "https://server13.mp3quran.net/husr/" },
    { id: 12, name: "محمد صديق المنشاوي", server: "https://server10.mp3quran.net/minsh/" }, 
    { id: 13, name: "إدريس أبكر", server: "https://server6.mp3quran.net/abkr/" },
    { id: 14, name: "خالد الجليل", server: "https://server10.mp3quran.net/jleel/" },
    { id: 15, name: "هزاع البلوشي", server: "https://server11.mp3quran.net/hazza/" }
];

const surahNames = [
    "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس", "هود", 
    "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه", "الأنبياء", "الحج", 
    "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم", "لقمان", "السجدة", "الأحزاب", 
    "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر", "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", 
    "الأحقاف", "محمد", "الفتح", "الحجرات", "ق", "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", 
    "الحديد", "المجادلة", "الحشر", "الممتحنة", "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", 
    "الملك", "القلم", "الحاقة", "المعارج", "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", 
    "النبأ", "النازعات", "عبس", "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", 
    "الغاشية", "الفجر", "البلد", "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", 
    "الزلزلة", "العاديات", "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", 
    "الكافرون", "النصر", "المسد", "الإخلاص", "الفلق", "الناس"
];

const surahsData = surahNames.map((name, index) => {
    const surahId = String(index + 1).padStart(3, '0');
    return {
        id: surahId,
        name: name,
        interpretations: {
            badini: `سۆره‌تا (${name}): خاندن و گوهلێبوونا سۆره‌تێ دگه‌ل واتا و ته‌فسیرا كوردی بادینی یا په‌يوه‌نديدار. هه‌روه‌سا دكارن غوهداريا ده‌نگێ قاريئێن خودان شيان بكه‌ن.`,
            sorani: `سورەتی (${name}): خوێندنەوە و بیستنی سورەتەکە هاوڕێ لەگەڵ واتا و تەفسیری کوردی سۆرانی شیکارکراو و ڕوونکردنەوەی فەرمی.`,
            ar: `سورة (${name}): الاستماع والتلاوة المباركة مع التفسير الميسر والتدبر الكامل في آيات الله الكريمة ومقاصدها السامية.`,
            en: `Surah ${name}: High-fidelity recitation access, paired with full interpretive context, textual translations, and detailed chapter metadata.`
        },
        versesDataStructure: [
            {
                vId: 1,
                ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                translations: {
                    badini: "ب ناڤێ خودێ مه‌زن و دلۆڤان.",
                    sorani: "بە ناوی خوای بەخشندەی میهرەبان.",
                    ar: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                    en: "In the name of Allah, the Entirely Merciful, the Especially Merciful."
                }
            },
            {
                vId: 2,
                ar: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                translations: {
                    badini: "سپاس و حه‌مد بۆ خودێ خودانێ هه‌مي جيهانان.",
                    sorani: "ستایش بۆ خوای پەروەردگاری جیهانیان.",
                    ar: "الحمد لله رب العالمين والثناء عليه سبحانه.",
                    en: "All praise is due to Allah, Lord of the worlds."
                }
            },
            {
                vId: 3,
                ar: "الرَّحْمَٰنِ الرَّحِيمِ",
                translations: {
                    badini: "ئه‌وێ گه‌له‌كێ ب به‌خشیش و دلۆڤان.",
                    sorani: "کە بەخشندە و میهرەبانە.",
                    ar: "الرحمن بجميع خلقه، الرحيم بالمؤمنين.",
                    en: "The Entirely Merciful, the Especially Merciful."
                }
            },
            {
                vId: 4,
                ar: "مَالِكِ يَوْمِ الدِّينِ",
                translations: {
                    badini: "پاشا و خودانێ رۆژا قيامه‌تێ.",
                    sorani: "خاوەنی ڕۆژی پاداشت و سزا.",
                    ar: "مالك يوم الجزاء والحساب.",
                    en: "Sovereign of the Day of Recompense."
                }
            },
            {
                vId: 5,
                ar: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
                translations: {
                    badini: "ئه‌م ب ته‌نێ ته‌ دپه‌رێسين و ب ته‌نێ ژ ته‌ هاريکاريێ دخوازیـن.",
                    sorani: "تەنها تۆ دەپەرستین و تەنها لە تۆش هاوکاری دەخوازین.",
                    ar: "نعبدك وحدك ولا نشرك بك، ومنك نطلب العون.",
                    en: "It is You we worship and You we ask for help."
                }
            },
            {
                vId: 6,
                ar: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
                translations: {
                    badini: "مه‌ ڕێنيشانى ڕێكا ڕاست و درست بكه‌ى.",
                    sorani: "ڕێنماییمان بکە بۆ ڕێگای ڕاست.",
                    ar: "دلنا وأرشدنا وثبتنا على الطريق المستقيم.",
                    en: "Guide us to the straight path."
                }
            },
            {
                vId: 7,
                ar: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
                translations: {
                    badini: "ڕێكا وان كه‌سان ئه‌وێن ته‌ نیعمه‌ت دایێ، نه‌ ڕێكا وان كه‌سێن غه‌زه‌ب لێ هاتیه‌ كرن و نه‌ يا به‌رزه‌بوويان.",
                    sorani: "ڕێگای ئەو کەسانەی کە بەهرەمەندت کردوون، نە ئەو کەسانەی غەزەبیان لێگیراوە و نە ونبوان.",
                    ar: "طريق الذين أنعمت عليهم، غير طريق المغضوب عليهم ولا الضالين.",
                    en: "The path of those upon whom You have bestowed favor, not of those who have earned Your anger or of those who are astray."
                }
            }
        ]
    };
});

const uiTranslations = {
    badini: { 
        reciters: "قاریئێن قورئانێ", 
        surahs: "سوره‌تێن پیرۆز", 
        details: "تەفسير و واتا ب زمانێ كوردی (بادینی)", 
        versesTitle: "ئایەتا نوکە و وەرگێڕان",
        hadithTitle: "فەرموودەیا پێغەمبەری (ص)",
        placeholder: "سۆره‌ته‌كێ و قاریئه‌كێ هه‌لبژێره‌ بۆ ده‌ستپێكرنا گوهلێبوونێ." 
    },
    sorani: { 
        reciters: "قورئانخوێنەکان", 
        surahs: "سورەتە پیرۆزەکان", 
        details: "تەفسیر و واتا بە زمانی کوردی (سۆرانی)", 
        versesTitle: "ئایەتی ئێستا و وەرگێڕانی هاوكات",
        hadithTitle: "فەرموودەی پێغەمبەر (د.خ)",
        placeholder: "سورەتێک و قورئانخوێنێک هەڵبژێرە بۆ دەستپێکردنی بیستن." 
    },
    ar: { 
        reciters: "قراء القرآن الكريم", 
        surahs: "سور القرآن الكريم", 
        details: "التفسير ومعاني الكلمات باللغة العربية", 
        versesTitle: "الآية الحالية والترجمة المتزامنة",
        hadithTitle: "الحديث النبوي الشريف",
        placeholder: "اختر السورة والقارئ لبدء الاستماع وعرض التفسير والآيات المتزامنة." 
    },
    en: { 
        reciters: "Holy Reciters", 
        surahs: "Surahs List", 
        details: "Interpretation & Surah Context", 
        versesTitle: "Current Verse & Live Translation",
        hadithTitle: "Prophetic Traditions (Hadith)",
        placeholder: "Select a Surah and a Reciter to start listening and view live synced details." 
    }
};