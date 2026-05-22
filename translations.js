// Database of 12 Elite Reciters with official MP3 Server Endpoints
const recitersData = [
    { id: 1, name: "عبد الباسط عبد الصمد", server: "https://server7.mp3quran.net/basit/" },
    { id: 2, name: "مشاري العفاسي", server: "https://server8.mp3quran.net/afs/" },
    { id: 3, name: "ناصر القطامي", server: "https://server6.mp3quran.net/qtm/" },
    { id: 4, name: "ماهر المعيقلي", server: "https://server12.mp3quran.net/maher/" },
    { id: 5, name: "سعود الشريم", server: "https://server7.mp3quran.net/shur/" },
    { id: 6, name: "ياسر الدوسري", server: "https://server11.mp3quran.net/yasser/" },
    { id: 7, name: "أحمد العجمي", server: "https://server10.mp3quran.net/ajm/" },
    { id: 8, name: "سعد الغامدي", server: "https://server7.mp3quran.net/s_gmd/" },
    { id: 9, name: "فارس عباد", server: "https://server8.mp3quran.net/frs_a/" },
    { id: 10, name: "عبد الرحمن السديس", server: "https://server11.mp3quran.net/sds/" },
    { id: 11, name: "محمود خليل الحصري", server: "https://server13.mp3quran.net/husr/" },
    { id: 12, name: "محمد صديق المنشاوي", server: "https://server11.mp3quran.net/minsh/" }
];

// أسماء السور الـ 114 بالترتيب الصحيح للمصحف الشريف
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

// توليد مصفوفة السور الـ 114 ديناميكياً مع التنسيق الرقمي المناسب للسيرفر (001, 002, ... 114)
const surahsData = surahNames.map((name, index) => {
    const surahId = String(index + 1).padStart(3, '0'); // يحول 1 إلى 001 و 12 إلى 012
    return {
        id: surahId,
        name: name,
        interpretations: {
            badini: `سۆره‌تا (${name}): خاندن و گوهلێبوونا سۆره‌تێ دگه‌ل واتا و ته‌فسیرا كوردی بادینی یا په‌یوه‌ندیدار.`,
            sorani: `سورەتی (${name}): خوێندنەوە و بیستنی سورەتەکە هاوڕێ لەگەڵ واتا و تەفسیری کوردی سۆرانی.`,
            ar: `سورة (${name}): الاستماع والتلاوة مع التفسير والتدبر في آيات الله الكريمة.`,
            en: `Surah ${name}: Listen, read, and explore the context and translation of this chapter.`
        }
    };
});

// ملاحضة: يمكنك لاحقاً وضع نصوص التفاسير الكاملة لكل سورة داخل كائن مخصص أو استدعائها من API خارجي.

// UI Core Strings Translation Engine
const uiTranslations = {
    badini: { reciters: "قاریئێن قورئانێ", surahs: "سوره‌تێن پیرۆز", details: "تەفسیر و واتا ب زمانێ كوردی (بادینی)", placeholder: "سۆره‌ته‌كێ و قاریئه‌كێ هه‌لبژێره‌ بۆ ده‌ستپێكرنا گوهلێبوونێ." },
    sorani: { reciters: "قورئانخوێنەکان", surahs: "سورەتە پیرۆزەکان", details: "تەفسیر و واتا بە زمانی کوردی (سۆرانی)", placeholder: "سورەتێک و قورئانخوێنێک هەڵبژێرە بۆ دەستپێکردنی بیستن." },
    ar: { reciters: "قراء القرآن الكريم", surahs: "سور القرآن الكريم", details: "التفسير ومعاني الكلمات باللغة العربية", placeholder: "اختر السورة والقارئ لبدء الاستماع وعرض التفسير." },
    en: { reciters: "Holy Reciters", surahs: "Surahs List", details: "Interpretation & Surah Context", placeholder: "Select a Surah and a Reciter to start listening and view details." }
};