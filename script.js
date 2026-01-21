// Language Toggle Functionality
const languageButtons = document.querySelectorAll('.lang-btn');
const currentLang = { value: 'en' };

languageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        languageButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the language from data-lang attribute
        const lang = button.getAttribute('data-lang');
        currentLang.value = lang;
        
        // Update all text elements
        updateLanguage(lang);
    });
});

function updateLanguage(lang) {
    // Get all elements with data attributes for translation
    const elements = document.querySelectorAll('[data-en], [data-te], [data-hi]');
    
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update "What is this?" buttons based on their current state
    document.querySelectorAll('.what-is-this-btn').forEach(btn => {
        const explanation = document.getElementById(`explanation-${btn.getAttribute('data-event')}`);
        if (explanation && explanation.style.display === 'block') {
            btn.textContent = getLocalizedText('Hide', 'దాచు', 'छुपाएं');
        } else {
            btn.textContent = getLocalizedText('What is this?', 'ఇది ఏమిటి?', 'यह क्या है?');
        }
    });
}

// Modal Functionality
const modal = document.getElementById('infoModal');
const closeModal = document.querySelector('.close');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// Dress Code and Ritual Guide Content
const contentData = {
    dressCode: {
        en: {
            title: "Dress Code",
            content: `
                <h3 style="color: var(--champagne-gold); margin-top: 20px;">Traditional Attire Recommended</h3>
                <p><strong>For Women:</strong> Sarees, Lehengas, or Anarkali suits in vibrant colors. Gold and marigold orange accessories are encouraged.</p>
                <p><strong>For Men:</strong> Kurta-Pyjama, Sherwani, or traditional dhoti-kurta. Colors: Royal blue, gold, or white.</p>
                <p><strong>Note:</strong> Comfortable footwear is recommended as ceremonies may involve sitting on the floor.</p>
            `
        },
        te: {
            title: "దుస్తులు కోడ్",
            content: `
                <h3 style="color: var(--champagne-gold); margin-top: 20px;">సంప్రదాయ దుస్తులు సిఫార్సు చేయబడ్డాయి</h3>
                <p><strong>మహిళలకు:</strong> సారీలు, లేహెంగాలు, లేదా అనార్కలి సూట్లు ప్రకాశవంతమైన రంగులలో. బంగారు మరియు మరిగోల్డ్ ఆరెంజ్ అలంకరణలు ప్రోత్సహించబడతాయి.</p>
                <p><strong>పురుషులకు:</strong> కుర్తా-పైజామా, షెర్వాని, లేదా సంప్రదాయ ధోతి-కుర్తా. రంగులు: రాయల్ బ్లూ, బంగారు, లేదా తెలుపు.</p>
                <p><strong>గమనిక:</strong> వేడుకలు నేలపై కూర్చోవడాన్ని కలిగి ఉండవచ్చు కాబట్టి సౌకర్యవంతమైన పాదరక్షలు సిఫార్సు చేయబడతాయి.</p>
            `
        },
        hi: {
            title: "ड्रेस कोड",
            content: `
                <h3 style="color: var(--champagne-gold); margin-top: 20px;">पारंपरिक पोशाक की सिफारिश</h3>
                <p><strong>महिलाओं के लिए:</strong> साड़ी, लहंगा, या अनारकली सूट जीवंत रंगों में। सोने और गेंदे के नारंगी सामान को प्रोत्साहित किया जाता है।</p>
                <p><strong>पुरुषों के लिए:</strong> कुर्ता-पजामा, शेरवानी, या पारंपरिक धोती-कुर्ता। रंग: रॉयल ब्लू, सोना, या सफेद।</p>
                <p><strong>नोट:</strong> आरामदायक जूते की सिफारिश की जाती है क्योंकि समारोहों में फर्श पर बैठना शामिल हो सकता है।</p>
            `
        }
    },
    ritualGuide: {
        en: {
            title: "Ritual Guide",
            content: `
                <h3 style="color: var(--champagne-gold); margin-top: 20px;">Understanding the Ceremony</h3>
                <p><strong>Mehndi:</strong> The henna ceremony where intricate designs are applied to the bride's hands and feet. It's a joyful pre-wedding celebration with music and dance.</p>
                <p><strong>Sangeet:</strong> A musical evening where families come together to sing, dance, and celebrate. Both families perform traditional and modern dances.</p>
                <p><strong>Muhurtham:</strong> The sacred wedding ceremony conducted according to Vedic traditions. The couple exchanges vows and takes the seven steps (Saptapadi) around the sacred fire.</p>
                <p><strong>What to Expect:</strong> Ceremonies are conducted in a mix of English and traditional languages. Elders will guide you through each step.</p>
            `
        },
        te: {
            title: "చట్టం గైడ్",
            content: `
                <h3 style="color: var(--champagne-gold); margin-top: 20px;">వేడుకను అర్థం చేసుకోవడం</h3>
                <p><strong>మెహెంది:</strong> వధువు చేతులు మరియు పాదాలకు సంక్లిష్టమైన డిజైన్‌లు వర్తింపజేయబడే హెన్నా వేడుక. ఇది సంగీతం మరియు నృత్యంతో కూడిన ఆనందకరమైన వివాహ పూర్వ వేడుక.</p>
                <p><strong>సంగీతం:</strong> కుటుంబాలు కలిసి పాడడానికి, నృత్యం చేయడానికి మరియు జరుపుకోవడానికి వచ్చే సంగీత సాయంత్రం. రెండు కుటుంబాలు సంప్రదాయ మరియు ఆధునిక నృత్యాలను ప్రదర్శిస్తాయి.</p>
                <p><strong>ముహూర్తం:</strong> వేద సంప్రదాయాల ప్రకారం నిర్వహించబడే పవిత్ర వివాహ వేడుక. జంట ప్రమాణాలు మారుకుంటుంది మరియు పవిత్ర అగ్ని చుట్టూ ఏడు అడుగులు (సప్తపది) వేస్తుంది.</p>
                <p><strong>ఏమి ఆశించాలి:</strong> వేడుకలు ఇంగ్లీష్ మరియు సంప్రదాయ భాషల మిశ్రమంలో నిర్వహించబడతాయి. పెద్దలు ప్రతి దశలో మిమ్మల్ని మార్గనిర్దేశం చేస్తారు.</p>
            `
        },
        hi: {
            title: "रिवाज गाइड",
            content: `
                <h3 style="color: var(--champagne-gold); margin-top: 20px;">समारोह को समझना</h3>
                <p><strong>मेहंदी:</strong> हिना समारोह जहां दुल्हन के हाथों और पैरों पर जटिल डिजाइन लगाए जाते हैं। यह संगीत और नृत्य के साथ एक आनंददायक पूर्व-विवाह उत्सव है।</p>
                <p><strong>संगीत:</strong> एक संगीत सायंकाल जहां परिवार गाने, नृत्य करने और जश्न मनाने के लिए एक साथ आते हैं। दोनों परिवार पारंपरिक और आधुनिक नृत्य करते हैं।</p>
                <p><strong>मुहूर्त:</strong> वैदिक परंपराओं के अनुसार आयोजित पवित्र विवाह समारोह। दंपति प्रतिज्ञाओं का आदान-प्रदान करते हैं और पवित्र अग्नि के चारों ओर सात कदम (सप्तपदी) लेते हैं।</p>
                <p><strong>क्या उम्मीद करें:</strong> समारोह अंग्रेजी और पारंपरिक भाषाओं के मिश्रण में आयोजित किए जाते हैं। बुजुर्ग आपको प्रत्येक चरण के माध्यम से मार्गदर्शन करेंगे।</p>
            `
        }
    }
};

// "What is this?" button functionality
document.querySelectorAll('.what-is-this-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const eventType = button.getAttribute('data-event');
        const explanation = document.getElementById(`explanation-${eventType}`);
        
        if (explanation.style.display === 'none' || !explanation.style.display) {
            explanation.style.display = 'block';
            button.textContent = getLocalizedText('Hide', 'దాచు', 'छुपाएं');
        } else {
            explanation.style.display = 'none';
            button.textContent = getLocalizedText('What is this?', 'ఇది ఏమిటి?', 'यह क्या है?');
        }
    });
});

// Add event listeners to all action buttons
document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const isDressCode = button.classList.contains('dress-code');
        const type = isDressCode ? 'dressCode' : 'ritualGuide';
        const lang = currentLang.value;
        
        const content = contentData[type][lang];
        modalTitle.textContent = content.title;
        modalBody.innerHTML = content.content;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal when clicking the X
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Voice Recorder Simulation
const recordBtn = document.querySelector('.record-btn');
let isRecording = false;

recordBtn.addEventListener('click', () => {
    if (!isRecording) {
        isRecording = true;
        recordBtn.textContent = getLocalizedText('Stop Recording', 'రికార్డింగ్ ఆపండి', 'रिकॉर्डिंग रोकें');
        recordBtn.style.background = 'var(--marigold-orange)';
        
        // Simulate recording (in real implementation, this would use Web Audio API)
        setTimeout(() => {
            isRecording = false;
            recordBtn.textContent = getLocalizedText('Record Message', 'సందేశాన్ని రికార్డ్ చేయండి', 'संदेश रिकॉर्ड करें');
            recordBtn.style.background = 'var(--royal-blue)';
            
            // Show success message
            alert(getLocalizedText(
                'Voice message recorded! Thank you for your blessing.',
                'వాయిస్ సందేశం రికార్డ్ చేయబడింది! మీ ఆశీర్వాదానికి ధన్యవాదాలు.',
                'आवाज़ संदेश रिकॉर्ड किया गया! आपके आशीर्वाद के लिए धन्यवाद।'
            ));
        }, 3000);
    } else {
        isRecording = false;
        recordBtn.textContent = getLocalizedText('Record Message', 'సందేశాన్ని రికార్డ్ చేయండి', 'संदेश रिकॉर्ड करें');
        recordBtn.style.background = 'var(--royal-blue)';
    }
});

// Helper function to get localized text
function getLocalizedText(en, te, hi) {
    const lang = currentLang.value;
    if (lang === 'te') return te;
    if (lang === 'hi') return hi;
    return en;
}

// Video placeholder click handlers
document.querySelectorAll('.video-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', () => {
        alert(getLocalizedText(
            'Video playback would start here. In production, this would load the actual video message.',
            'వీడియో ప్లేబ్యాక్ ఇక్కడ ప్రారంభమవుతుంది. ఉత్పాదనలో, ఇది వాస్తవ వీడియో సందేశాన్ని లోడ్ చేస్తుంది.',
            'वीडियो प्लेबैक यहां शुरू होगा। प्रोडक्शन में, यह वास्तविक वीडियो संदेश लोड करेगा।'
        ));
    });
});

// Reel video click handler
const reelPlaceholder = document.querySelector('.reel-placeholder');
if (reelPlaceholder) {
    reelPlaceholder.addEventListener('click', () => {
        alert(getLocalizedText(
            'Sangeet Highlights video would play here. Ready by 10:00 AM next day - your biggest selling point over traditional photographers!',
            'సంగీత హైలైట్స్ వీడియో ఇక్కడ ప్లే అవుతుంది. తదుపరి రోజు ఉదయం 10:00 గంటలకు సిద్ధంగా ఉంది - సంప్రదాయ ఫోటోగ్రాఫర్‌ల కంటే మీ అతిపెద్ద విక్రయ బిందువు!',
            'संगीत हाइलाइट्स वीडियो यहां चलेगा। अगले दिन सुबह 10:00 बजे तक तैयार - पारंपरिक फोटोग्राफरों पर आपका सबसे बड़ा विक्रय बिंदु!'
        ));
    });
}

// Live stream button handler
const streamBtn = document.querySelector('.stream-btn');
if (streamBtn) {
    streamBtn.addEventListener('click', () => {
        alert(getLocalizedText(
            'Live stream would open here. In production, this would connect to YouTube or Zoom.',
            'లైవ్ స్ట్రీమ్ ఇక్కడ తెరుచుకుంటుంది. ఉత్పాదనలో, ఇది YouTube లేదా Zoomకి కనెక్ట్ అవుతుంది.',
            'लाइव स्ट्रीम यहां खुलेगा। प्रोडक्शन में, यह YouTube या Zoom से कनेक्ट होगा।'
        ));
    });
}

// Payment button handlers
document.querySelectorAll('.payment-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const method = e.target.closest('.payment-card').querySelector('h3').textContent;
        alert(getLocalizedText(
            `Redirecting to ${method}... In production, this would open the payment app.`,
            `${method}కు మళ్లించబడుతోంది... ఉత్పాదనలో, ఇది చెల్లింపు యాప్‌ను తెరుస్తుంది.`,
            `${method} पर रीडायरेक्ट हो रहा है... प्रोडक्शन में, यह पेमेंट ऐप खोलेगा।`
        ));
    });
});

// Smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items and other sections
document.querySelectorAll('.timeline-item, .payment-card, .merch-item, .video-placeholder').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Bottom Navigation Active State
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === `#${current}`) {
            item.classList.add('active');
        }
    });
}

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// Smooth scroll for nav items
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize - ensure English is set as default
updateLanguage('en');
updateActiveNav();
