// State Management
let currentLanguage = 'badini';
let selectedReciter = recitersData[0];
let selectedSurah = surahsData[0];
let isPlaying = false;

// DOM Elements
const audio = document.getElementById('main-audio');
const playBtn = document.getElementById('btn-play');
const progressBar = document.getElementById('progress-bar');
const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');

// Initializer
window.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupAudioListeners();
});

function initApp() {
    renderReciters();
    renderSurahs();
    switchLanguage(currentLanguage);
    updatePlayerUI();
    lucide.createIcons(); // Initialize Icons
}

// Render Lists Dynamically
function renderReciters() {
    const container = document.getElementById('reciters-list');
    container.innerHTML = '';
    recitersData.forEach(reciter => {
        const div = document.createElement('div');
        div.className = `item-node ${selectedReciter.id === reciter.id ? 'active' : ''}`;
        div.innerHTML = `<span>${reciter.name}</span><i data-lucide="music" style="width:16px;"></i>`;
        div.onclick = () => selectReciter(reciter);
        container.appendChild(div);
    });
}

function renderSurahs() {
    const container = document.getElementById('surahs-list');
    container.innerHTML = '';
    surahsData.forEach(surah => {
        const div = document.createElement('div');
        div.className = `item-node ${selectedSurah.id === surah.id ? 'active' : ''}`;
        div.innerHTML = `<span>${surah.name}</span><span style="font-size:0.8rem; color:var(--gold-primary);">#${surah.id}</span>`;
        div.onclick = () => selectSurah(surah);
        container.appendChild(div);
    });
}

// Selection Logic
function selectReciter(reciter) {
    selectedReciter = reciter;
    renderReciters();
    loadAudioTrack();
    lucide.createIcons();
}

function selectSurah(surah) {
    selectedSurah = surah;
    renderSurahs();
    loadAudioTrack();
    updateInterpretation();
    lucide.createIcons();
}

// Audio URL Assembly Engine (Assembling accurate target path)
function loadAudioTrack() {
    const audioUrl = `${selectedReciter.server}${selectedSurah.id}.mp3`;
    audio.src = audioUrl;
    if (isPlaying) {
        audio.play().catch(err => console.log("Audio play interrupted"));
    }
    updatePlayerUI();
}

// Language and UI Sync
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Toggle active class on lang buttons
    document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active'));
    
    // Adjust Layout Direction based on language property
    if (lang === 'en') {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    } else {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', lang === 'ar' ? 'ar' : 'ku');
    }

    // Dynamic UI Translation strings replacement
    document.getElementById('txt-reciters').innerText = uiTranslations[lang].reciters;
    document.getElementById('txt-surahs').innerText = uiTranslations[lang].surahs;
    document.getElementById('txt-details').innerText = uiTranslations[lang].details;

    updateInterpretation();
    updatePlayerUI();
}

function updateInterpretation() {
    const contentBox = document.getElementById('interpretation-content');
    if(selectedSurah && selectedSurah.interpretations[currentLanguage]) {
        contentBox.innerHTML = `<p>${selectedSurah.interpretations[currentLanguage]}</p>`;
    } else {
        contentBox.innerHTML = `<p class="placeholder-text">${uiTranslations[currentLanguage].placeholder}</p>`;
    }
}

function updatePlayerUI() {
    document.getElementById('current-surah').innerText = `سورة ${selectedSurah.name}`;
    document.getElementById('current-reciter').innerText = `القارئ: ${selectedReciter.name}`;
}

// Audio Core Mechanics and Control Events
function setupAudioListeners() {
    playBtn.addEventListener('click', togglePlay);
    
    audio.addEventListener('timeupdate', () => {
        if (!isNaN(audio.duration)) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            timeCurrent.innerText = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        timeTotal.innerText = formatTime(audio.duration);
    });

    progressBar.addEventListener('input', () => {
        if (!isNaN(audio.duration)) {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        }
    });

    audio.addEventListener('ended', () => {
        nextTrack();
    });

    document.getElementById('btn-next').addEventListener('click', nextTrack);
    document.getElementById('btn-prev').addEventListener('click', prevTrack);
}

function togglePlay() {
    if (audio.src === "" || audio.src.endsWith('/')) {
        loadAudioTrack();
    }
    if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = `<i data-lucide="play"></i>`;
    } else {
        audio.play().catch(e => console.log(e));
        playBtn.innerHTML = `<i data-lucide="pause"></i>`;
    }
    isPlaying = !isPlaying;
    lucide.createIcons();
}

function nextTrack() {
    let currentIndex = surahsData.findIndex(s => s.id === selectedSurah.id);
    let nextIndex = (currentIndex + 1) % surahsData.length;
    selectSurah(surahsData[nextIndex]);
}

function prevTrack() {
    let currentIndex = surahsData.findIndex(s => s.id === selectedSurah.id);
    let prevIndex = (currentIndex - 1 + surahsData.length) % surahsData.length;
    selectSurah(surahsData[prevIndex]);
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}