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
        mehndi: {
            en: {
                title: "Mehndi Ceremony - Detailed Ritual Guide",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">What is Mehndi?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">The Mehndi ceremony is a joyous pre-wedding ritual where intricate henna designs are applied to the bride's hands and feet. This ancient tradition symbolizes beauty, joy, spiritual awakening, and the bond between the couple. The darker the henna color, the deeper the love between the bride and groom is believed to be.</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Ceremony Timeline</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>3:00 PM - Arrival & Welcome:</strong> Guests arrive and are welcomed with traditional greetings. Light refreshments are served.</li>
                            <li><strong>3:30 PM - Henna Application Begins:</strong> Professional henna artists start applying intricate designs to the bride's hands and feet. This process takes 2-3 hours.</li>
                            <li><strong>4:00 PM - Family Mehndi:</strong> Close family members and friends also get henna applied on their hands as a symbol of celebration.</li>
                            <li><strong>5:00 PM - Music & Dance:</strong> Traditional music begins, and guests join in celebratory dances. The atmosphere is festive and joyful.</li>
                            <li><strong>6:00 PM - Dinner:</strong> Traditional vegetarian dinner is served. The bride remains seated while henna dries.</li>
                            <li><strong>7:30 PM - Henna Removal:</strong> Once dried, the henna paste is gently removed, revealing the beautiful designs underneath.</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Key Rituals & Traditions</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;"><strong>🎨 Hidden Name Tradition:</strong> The groom's name is often hidden within the intricate henna patterns. The groom must find his name on the wedding night - a playful tradition that adds fun to the ceremony.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🙏 Blessings:</strong> Elders bless the bride and apply a small dot of henna on her palm, symbolizing good fortune and prosperity.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>💃 Dancing:</strong> Women perform traditional dances around the bride, celebrating her transition into married life.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🎁 Gifts:</strong> The bride receives gifts from family members, typically jewelry, clothes, or household items for her new home.</p>
                        </div>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">What to Expect as a Guest</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li>This is a women-centric ceremony, though men are welcome to attend</li>
                            <li>You can get henna applied on your hands (optional but encouraged!)</li>
                            <li>Traditional music and dancing throughout the evening</li>
                            <li>Photography is welcome - capture the beautiful moments</li>
                            <li>The ceremony is conducted in a mix of English, Hindi, and Telugu</li>
                            <li>Feel free to ask questions - family members are happy to explain traditions</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Cultural Significance</h3>
                        <p style="font-size: 18px; line-height: 1.8;">Mehndi represents the strength of the bond between the couple. The intricate patterns symbolize the complexity and beauty of married life. The ceremony brings both families together in celebration, creating lasting memories before the main wedding day.</p>
                    </div>
                `
            },
            te: {
                title: "మెహెంది వేడుక - వివరణాత్మక చట్టం గైడ్",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">మెహెంది అంటే ఏమిటి?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">మెహెంది వేడుక అనేది ఒక ఆనందకరమైన వివాహ పూర్వ చట్టం, ఇక్కడ వధువు చేతులు మరియు పాదాలకు సంక్లిష్టమైన హెన్నా డిజైన్‌లు వర్తింపజేయబడతాయి. ఈ ప్రాచీన సంప్రదాయం అందం, ఆనందం, ఆధ్యాత్మిక మేల్కొలుపు మరియు జంట మధ్య బంధాన్ని సూచిస్తుంది.</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">వేడుక టైమ్‌లైన్</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>3:00 PM - రాక మరియు స్వాగతం:</strong> అతిథులు వస్తారు మరియు సంప్రదాయ స్వాగతాలతో స్వాగతించబడతారు.</li>
                            <li><strong>3:30 PM - హెన్నా అప్లికేషన్ ప్రారంభం:</strong> నిపుణులైన హెన్నా కళాకారులు వధువు చేతులు మరియు పాదాలకు సంక్లిష్టమైన డిజైన్‌లను వర్తింపజేయడం ప్రారంభిస్తారు.</li>
                            <li><strong>4:00 PM - కుటుంబ మెహెంది:</strong> సన్నిహిత కుటుంబ సభ్యులు మరియు స్నేహితులు కూడా వేడుక చిహ్నంగా తమ చేతులకు హెన్నా వర్తింపజేసుకుంటారు.</li>
                            <li><strong>5:00 PM - సంగీతం మరియు నృత్యం:</strong> సంప్రదాయ సంగీతం ప్రారంభమవుతుంది మరియు అతిథులు వేడుక నృత్యాలలో పాల్గొంటారు.</li>
                            <li><strong>6:00 PM - భోజనం:</strong> సంప్రదాయ శాకాహార భోజనం వడ్డించబడుతుంది.</li>
                            <li><strong>7:30 PM - హెన్నా తొలగింపు:</strong> ఎండిన తర్వాత, హెన్నా పేస్ట్‌ను నాజూకుగా తీసివేస్తారు.</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">ప్రధాన చట్టాలు మరియు సంప్రదాయాలు</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;"><strong>🎨 దాచిన పేరు సంప్రదాయం:</strong> వరుడి పేరు తరచుగా సంక్లిష్టమైన హెన్నా నమూనాలలో దాచబడుతుంది.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🙏 ఆశీర్వాదాలు:</strong> పెద్దలు వధువును ఆశీర్వదిస్తారు మరియు ఆమె అరచేతిపై హెన్నా చిన్న బిందువును వర్తింపజేస్తారు.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>💃 నృత్యం:</strong> మహిళలు వధువు చుట్టూ సంప్రదాయ నృత్యాలను ప్రదర్శిస్తారు.</p>
                        </div>
                    </div>
                `
            },
            hi: {
                title: "मेहंदी समारोह - विस्तृत रिवाज गाइड",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">मेहंदी क्या है?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">मेहंदी समारोह एक आनंददायक पूर्व-विवाह अनुष्ठान है जहां दुल्हन के हाथों और पैरों पर जटिल मेंहदी डिजाइन लगाए जाते हैं। यह प्राचीन परंपरा सुंदरता, आनंद, आध्यात्मिक जागृति और दंपति के बीच के बंधन का प्रतीक है।</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">समारोह समयसारिणी</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>3:00 PM - आगमन और स्वागत:</strong> मेहमान आते हैं और पारंपरिक अभिवादन के साथ स्वागत किया जाता है।</li>
                            <li><strong>3:30 PM - मेंहदी लगाना शुरू:</strong> पेशेवर मेंहदी कलाकार दुल्हन के हाथों और पैरों पर जटिल डिजाइन लगाना शुरू करते हैं।</li>
                            <li><strong>4:00 PM - परिवार की मेहंदी:</strong> करीबी परिवार के सदस्य और दोस्त भी अपने हाथों पर मेंहदी लगवाते हैं।</li>
                            <li><strong>5:00 PM - संगीत और नृत्य:</strong> पारंपरिक संगीत शुरू होता है और मेहमान उत्सव नृत्य में शामिल होते हैं।</li>
                            <li><strong>6:00 PM - रात्रिभोज:</strong> पारंपरिक शाकाहारी रात्रिभोज परोसा जाता है।</li>
                            <li><strong>7:30 PM - मेंहदी हटाना:</strong> सूखने के बाद, मेंहदी पेस्ट को धीरे से हटा दिया जाता है।</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">मुख्य रीति-रिवाज</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;"><strong>🎨 छुपा हुआ नाम परंपरा:</strong> दूल्हे का नाम अक्सर जटिल मेंहदी पैटर्न में छुपाया जाता है।</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🙏 आशीर्वाद:</strong> बुजुर्ग दुल्हन को आशीर्वाद देते हैं और उसकी हथेली पर मेंहदी का एक छोटा बिंदु लगाते हैं।</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>💃 नृत्य:</strong> महिलाएं दुल्हन के चारों ओर पारंपरिक नृत्य करती हैं।</p>
                        </div>
                    </div>
                `
            }
        },
        sangeet: {
            en: {
                title: "Sangeet Night - Detailed Ritual Guide",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">What is Sangeet?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Sangeet (meaning "music" in Sanskrit) is a vibrant musical celebration where both families come together to sing, dance, and perform. This is one of the most fun and energetic pre-wedding events, filled with laughter, music, and friendly competition between the bride's and groom's families.</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Ceremony Timeline</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>6:00 PM - Arrival & Welcome:</strong> Guests arrive in their finest festive attire. Welcome drinks and appetizers are served.</li>
                            <li><strong>6:30 PM - Opening Performance:</strong> The evening begins with a traditional welcome dance by the bride's family.</li>
                            <li><strong>7:00 PM - Family Performances:</strong> Both families take turns performing choreographed dances. This is the highlight of the evening!</li>
                            <li><strong>8:00 PM - Couple's Performance:</strong> The bride and groom perform a special dance together, often a surprise for the families.</li>
                            <li><strong>8:30 PM - Open Dance Floor:</strong> All guests are invited to join the dance floor. DJ plays a mix of traditional and modern music.</li>
                            <li><strong>9:00 PM - Dinner Buffet:</strong> Extensive buffet dinner with both vegetarian and non-vegetarian options.</li>
                            <li><strong>10:00 PM - Continued Celebration:</strong> Music and dancing continue late into the night.</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Key Traditions & Performances</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;"><strong>🎭 Family Dance Battles:</strong> The bride's and groom's families compete with choreographed dance performances. Each family tries to outdo the other with creativity, energy, and humor!</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🎤 Singing:</strong> Family members sing traditional songs and modern Bollywood hits, celebrating the couple's union.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>💃 Group Dances:</strong> Large group performances featuring cousins, aunts, uncles, and friends dancing together in harmony.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🎁 Gifts & Blessings:</strong> Family members present gifts to the couple and offer blessings for their future together.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>📸 Photo Sessions:</strong> Multiple photo opportunities throughout the evening with professional photographers capturing every moment.</p>
                        </div>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">What to Expect as a Guest</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>Dress to Impress:</strong> This is the most glamorous event - wear your best festive attire with sequins, bright colors, and comfortable dancing shoes!</li>
                            <li><strong>Join the Fun:</strong> Don't be shy! Everyone is encouraged to dance and participate. No prior experience needed.</li>
                            <li><strong>Family Performances:</strong> Watch amazing choreographed dances by both families. These are often rehearsed for weeks!</li>
                            <li><strong>Food & Drinks:</strong> Enjoy a lavish buffet with traditional and fusion cuisine. Bar service available.</li>
                            <li><strong>Photography:</strong> Professional photographers will be capturing moments. Feel free to take your own photos and videos.</li>
                            <li><strong>Late Night:</strong> The celebration goes on until late - be prepared for an energetic evening!</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Cultural Significance</h3>
                        <p style="font-size: 18px; line-height: 1.8;">Sangeet symbolizes the coming together of two families. Through music and dance, both sides express joy, welcome each other, and celebrate the union. It's a time to let loose, have fun, and create beautiful memories before the more formal wedding ceremony. The friendly competition between families strengthens bonds and creates lasting friendships.</p>
                    </div>
                `
            },
            te: {
                title: "సంగీత రాత్రి - వివరణాత్మక చట్టం గైడ్",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">సంగీతం అంటే ఏమిటి?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">సంగీతం (సంస్కృతంలో "సంగీతం" అని అర్థం) అనేది రెండు కుటుంబాలు కలిసి పాడడానికి, నృత్యం చేయడానికి మరియు ప్రదర్శించడానికి వచ్చే శక్తివంతమైన సంగీత వేడుక. ఇది అత్యంత సరదాగా మరియు శక్తివంతమైన వివాహ పూర్వ ఈవెంట్‌లలో ఒకటి.</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">వేడుక టైమ్‌లైన్</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>6:00 PM - రాక మరియు స్వాగతం:</strong> అతిథులు వారి అత్యుత్తమ వేడుక దుస్తులలో వస్తారు.</li>
                            <li><strong>6:30 PM - ప్రారంభ ప్రదర్శన:</strong> వధువు కుటుంబం ద్వారా సంప్రదాయ స్వాగత నృత్యంతో సాయంత్రం ప్రారంభమవుతుంది.</li>
                            <li><strong>7:00 PM - కుటుంబ ప్రదర్శనలు:</strong> రెండు కుటుంబాలు కోరియోగ్రాఫ్ చేసిన నృత్యాలను ప్రదర్శించడానికి మారుతాయి.</li>
                            <li><strong>8:00 PM - జంట ప్రదర్శన:</strong> వధువు మరియు వరుడు కలిసి ప్రత్యేక నృత్యాన్ని ప్రదర్శిస్తారు.</li>
                            <li><strong>8:30 PM - ఓపెన్ డాన్స్ ఫ్లోర్:</strong> అన్ని అతిథులు డాన్స్ ఫ్లోర్‌లో చేరడానికి ఆహ్వానించబడతారు.</li>
                            <li><strong>9:00 PM - భోజనం:</strong> విస్తృతమైన బఫే భోజనం.</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">ప్రధాన సంప్రదాయాలు</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;"><strong>🎭 కుటుంబ నృత్య పోరాటాలు:</strong> వధువు మరియు వరుడు కుటుంబాలు కోరియోగ్రాఫ్ చేసిన నృత్య ప్రదర్శనలతో పోటీపడతాయి.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🎤 పాడటం:</strong> కుటుంబ సభ్యులు సంప్రదాయ పాటలు మరియు ఆధునిక బాలీవుడ్ హిట్‌లను పాడతారు.</p>
                        </div>
                    </div>
                `
            },
            hi: {
                title: "संगीत रात - विस्तृत रिवाज गाइड",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">संगीत क्या है?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">संगीत (संस्कृत में "संगीत" का अर्थ) एक जीवंत संगीत उत्सव है जहां दोनों परिवार गाने, नृत्य करने और प्रदर्शन करने के लिए एक साथ आते हैं। यह सबसे मजेदार और ऊर्जावान पूर्व-विवाह कार्यक्रमों में से एक है।</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">समारोह समयसारिणी</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>6:00 PM - आगमन और स्वागत:</strong> मेहमान अपने सबसे अच्छे उत्सव कपड़ों में आते हैं।</li>
                            <li><strong>6:30 PM - उद्घाटन प्रदर्शन:</strong> शाम दुल्हन के परिवार द्वारा पारंपरिक स्वागत नृत्य से शुरू होती है।</li>
                            <li><strong>7:00 PM - परिवार के प्रदर्शन:</strong> दोनों परिवार नृत्य प्रदर्शन करने के लिए बारी-बारी से आते हैं।</li>
                            <li><strong>8:00 PM - दंपति का प्रदर्शन:</strong> दुल्हन और दूल्हा एक साथ एक विशेष नृत्य करते हैं।</li>
                            <li><strong>8:30 PM - खुला नृत्य मंच:</strong> सभी मेहमान नृत्य मंच में शामिल होने के लिए आमंत्रित हैं।</li>
                            <li><strong>9:00 PM - रात्रिभोज:</strong> व्यापक बुफे रात्रिभोज।</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">मुख्य परंपराएं</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;"><strong>🎭 परिवार नृत्य प्रतियोगिता:</strong> दुल्हन और दूल्हे के परिवार नृत्य प्रदर्शन के साथ प्रतिस्पर्धा करते हैं।</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🎤 गायन:</strong> परिवार के सदस्य पारंपरिक गीत और आधुनिक बॉलीवुड हिट गाते हैं।</p>
                        </div>
                    </div>
                `
            }
        },
        muhurtham: {
            en: {
                title: "The Muhurtham - Detailed Ritual Guide",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">What is Muhurtham?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Muhurtham (also called Vivaham or Wedding) is the sacred wedding ceremony conducted according to ancient Vedic traditions. This is the most important and auspicious day, where the couple officially becomes husband and wife through a series of meaningful rituals performed in the presence of family, friends, and the sacred fire (Agni).</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Ceremony Timeline</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>8:00 AM - Pre-Ceremony Preparations:</strong> The couple begins their day with prayers and blessings from elders. Traditional attire is donned.</li>
                            <li><strong>9:00 AM - Baraat Arrival:</strong> The groom arrives in a grand procession (Baraat) with family and friends, often on a decorated horse or in a luxury car, accompanied by music and dancing.</li>
                            <li><strong>9:30 AM - Milni (Family Meeting):</strong> Both families formally meet and exchange garlands. This is a beautiful moment of unity.</li>
                            <li><strong>10:00 AM - Mandap Entry:</strong> The couple enters the sacred wedding mandap (altar) where the main ceremony will take place.</li>
                            <li><strong>10:30 AM - Kanyadaan:</strong> The bride's parents give away their daughter to the groom, symbolizing the transfer of responsibility.</li>
                            <li><strong>11:00 AM - Mangalsutra & Sindoor:</strong> The groom ties the sacred Mangalsutra (necklace) around the bride's neck and applies Sindoor (vermilion) in her hair parting - symbols of marriage.</li>
                            <li><strong>11:30 AM - Saptapadi (Seven Steps):</strong> The most important ritual - the couple takes seven sacred steps around the fire, each step representing a vow for their married life.</li>
                            <li><strong>12:00 PM - Aashirvad (Blessings):</strong> Elders bless the couple, showering them with rice, flowers, and good wishes.</li>
                            <li><strong>12:30 PM - Ceremony Conclusion:</strong> The wedding is complete! The couple is now officially married.</li>
                            <li><strong>1:00 PM - Reception & Lunch:</strong> Grand reception with traditional lunch served to all guests.</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Key Rituals Explained</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8; margin-bottom: 15px;"><strong>🔥 Agni (Sacred Fire):</strong> The fire is considered a witness to the marriage. All vows are made in its presence, making them sacred and binding.</p>
                            
                            <p style="font-size: 18px; line-height: 1.8; margin-bottom: 15px;"><strong>👰 Kanyadaan:</strong> Literally means "giving away the daughter." The bride's parents place her hand in the groom's hand, entrusting him with her care and happiness.</p>
                            
                            <p style="font-size: 18px; line-height: 1.8; margin-bottom: 15px;"><strong>💍 Mangalsutra:</strong> A sacred necklace tied by the groom around the bride's neck. It symbolizes their eternal bond and is worn by the bride throughout her married life.</p>
                            
                            <p style="font-size: 18px; line-height: 1.8; margin-bottom: 15px;"><strong>🔴 Sindoor:</strong> Red vermilion powder applied in the bride's hair parting. It's a visible sign of her married status and is considered auspicious.</p>
                            
                            <p style="font-size: 18px; line-height: 1.8; margin-bottom: 15px;"><strong>👣 Saptapadi (Seven Steps):</strong> The couple takes seven steps together, each step representing a vow:</p>
                            <ol style="margin-left: 20px; margin-top: 10px; font-size: 16px; line-height: 1.8;">
                                <li>First step: For nourishment and sharing of responsibilities</li>
                                <li>Second step: For strength and health</li>
                                <li>Third step: For prosperity and wealth</li>
                                <li>Fourth step: For happiness and harmony</li>
                                <li>Fifth step: For children and family</li>
                                <li>Sixth step: For long life together</li>
                                <li>Seventh step: For friendship and eternal companionship</li>
                            </ol>
                            
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>🙏 Aashirvad:</strong> Elders bless the couple by showering rice, flowers, and offering prayers for their happiness, prosperity, and long life together.</p>
                        </div>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">What to Expect as a Guest</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>Formal Attire Required:</strong> This is the most formal event. Wear traditional Indian attire in rich colors (red, gold, royal blue, maroon).</li>
                            <li><strong>Arrive Early:</strong> Ceremony starts promptly. Arrive 30 minutes early to find seating and witness all rituals.</li>
                            <li><strong>Respectful Behavior:</strong> This is a sacred ceremony. Maintain silence during prayers and key rituals. Photography is allowed but be discreet.</li>
                            <li><strong>Seating:</strong> Guests are seated around the mandap. Elders and close family sit closest to the couple.</li>
                            <li><strong>Duration:</strong> The ceremony lasts 3-4 hours. Be prepared to sit for extended periods (cushions provided).</li>
                            <li><strong>Language:</strong> Ceremony is conducted in Sanskrit, Hindi, Telugu, and English. A priest will explain key moments.</li>
                            <li><strong>Reception:</strong> After the ceremony, enjoy a grand reception with traditional lunch and photo opportunities with the couple.</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Cultural Significance</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 15px;">Muhurtham is not just a wedding - it's a sacred union blessed by the gods, witnessed by fire, and celebrated by the community. Every ritual has deep meaning:</p>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li>The fire (Agni) is considered a divine witness, making the marriage sacred and eternal</li>
                            <li>The seven steps (Saptapadi) represent the couple's commitment to support each other through all aspects of life</li>
                            <li>Kanyadaan symbolizes the trust and responsibility transferred from parents to the groom</li>
                            <li>The entire ceremony emphasizes the spiritual, emotional, and social union of two individuals and their families</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">Tips for First-Time Attendees</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;">If this is your first Indian wedding ceremony, don't worry! Here's what you need to know:</p>
                            <ul style="font-size: 18px; line-height: 2; margin-left: 20px; margin-top: 15px;">
                                <li>Remove shoes before entering the mandap area (if required)</li>
                                <li>It's okay to ask questions - family members are happy to explain</li>
                                <li>Follow the lead of other guests for when to stand, sit, or participate</li>
                                <li>Take photos during appropriate moments (not during prayers)</li>
                                <li>Enjoy the beautiful traditions and the joyous atmosphere!</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            te: {
                title: "ముహూర్తం - వివరణాత్మక చట్టం గైడ్",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">ముహూర్తం అంటే ఏమిటి?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">ముహూర్తం (వివాహం లేదా వివాహం అని కూడా పిలుస్తారు) అనేది ప్రాచీన వేద సంప్రదాయాల ప్రకారం నిర్వహించబడే పవిత్ర వివాహ వేడుక. ఇది అత్యంత ముఖ్యమైన మరియు శుభకరమైన రోజు.</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">వేడుక టైమ్‌లైన్</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>8:00 AM - వేడుకకు ముందు సిద్ధతలు:</strong> జంట పెద్దల ఆశీర్వాదాలతో తమ రోజును ప్రారంభిస్తుంది.</li>
                            <li><strong>9:00 AM - బరాత్ రాక:</strong> వరుడు కుటుంబం మరియు స్నేహితులతో గొప్ప ఊరేగింపులో (బరాత్) వస్తాడు.</li>
                            <li><strong>9:30 AM - మిల్ని:</strong> రెండు కుటుంబాలు అధికారికంగా కలుసుకుంటాయి మరియు పూలమాలలను మారుకుంటాయి.</li>
                            <li><strong>10:00 AM - మండప ప్రవేశం:</strong> జంట పవిత్ర వివాహ మండపంలోకి ప్రవేశిస్తుంది.</li>
                            <li><strong>10:30 AM - కన్యాదానం:</strong> వధువు తల్లిదండ్రులు తమ కుమార్తెను వరుడికి అప్పగిస్తారు.</li>
                            <li><strong>11:00 AM - మంగళసూత్రం మరియు సిందూరం:</strong> వరుడు వధువు మెడ చుట్టూ పవిత్ర మంగళసూత్రాన్ని కట్టి, ఆమె జుట్టు విభజనలో సిందూరాన్ని వర్తింపజేస్తాడు.</li>
                            <li><strong>11:30 AM - సప్తపది:</strong> అత్యంత ముఖ్యమైన చట్టం - జంట అగ్ని చుట్టూ ఏడు పవిత్ర అడుగులు వేస్తుంది.</li>
                            <li><strong>12:00 PM - ఆశీర్వాదం:</strong> పెద్దలు జంటను ఆశీర్వదిస్తారు.</li>
                            <li><strong>1:00 PM - రిసెప్షన్ మరియు భోజనం:</strong> అన్ని అతిథులకు సంప్రదాయ భోజనంతో గొప్ప రిసెప్షన్.</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">ప్రధాన చట్టాలు</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;"><strong>🔥 అగ్ని:</strong> అగ్నిని వివాహానికి సాక్షిగా పరిగణిస్తారు.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>👰 కన్యాదానం:</strong> వధువు తల్లిదండ్రులు ఆమె చేతిని వరుడి చేతిలో ఉంచుతారు.</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>👣 సప్తపది:</strong> జంట కలిసి ఏడు అడుగులు వేస్తుంది, ప్రతి అడుగు ఒక ప్రమాణాన్ని సూచిస్తుంది.</p>
                        </div>
                    </div>
                `
            },
            hi: {
                title: "मुहूर्त - विस्तृत रिवाज गाइड",
                content: `
                    <div style="max-width: 800px; margin: 0 auto;">
                        <h3 style="color: var(--champagne-gold); margin-top: 20px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">मुहूर्त क्या है?</h3>
                        <p style="font-size: 18px; line-height: 1.8; margin-bottom: 20px;">मुहूर्त (विवाह या शादी भी कहा जाता है) प्राचीन वैदिक परंपराओं के अनुसार आयोजित पवित्र विवाह समारोह है। यह सबसे महत्वपूर्ण और शुभ दिन है।</p>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">समारोह समयसारिणी</h3>
                        <ul style="font-size: 18px; line-height: 2; margin-left: 20px;">
                            <li><strong>8:00 AM - समारोह पूर्व तैयारी:</strong> दंपति बुजुर्गों के आशीर्वाद के साथ अपना दिन शुरू करते हैं।</li>
                            <li><strong>9:00 AM - बारात आगमन:</strong> दूल्हा परिवार और दोस्तों के साथ भव्य जुलूस (बारात) में आता है।</li>
                            <li><strong>9:30 AM - मिलनी:</strong> दोनों परिवार औपचारिक रूप से मिलते हैं और मालाओं का आदान-प्रदान करते हैं।</li>
                            <li><strong>10:00 AM - मंडप प्रवेश:</strong> दंपति पवित्र विवाह मंडप में प्रवेश करता है।</li>
                            <li><strong>10:30 AM - कन्यादान:</strong> दुल्हन के माता-पिता अपनी बेटी को दूल्हे को सौंपते हैं।</li>
                            <li><strong>11:00 AM - मंगलसूत्र और सिंदूर:</strong> दूल्हा दुल्हन की गर्दन के चारों ओर पवित्र मंगलसूत्र बांधता है और उसके बालों में सिंदूर लगाता है।</li>
                            <li><strong>11:30 AM - सप्तपदी:</strong> सबसे महत्वपूर्ण अनुष्ठान - दंपति अग्नि के चारों ओर सात पवित्र कदम उठाते हैं।</li>
                            <li><strong>12:00 PM - आशीर्वाद:</strong> बुजुर्ग दंपति को आशीर्वाद देते हैं।</li>
                            <li><strong>1:00 PM - रिसेप्शन और भोजन:</strong> सभी मेहमानों के लिए पारंपरिक भोजन के साथ भव्य रिसेप्शन।</li>
                        </ul>
                        
                        <h3 style="color: var(--champagne-gold); margin-top: 30px; border-bottom: 2px solid var(--champagne-gold); padding-bottom: 10px;">मुख्य अनुष्ठान</h3>
                        <div style="background: var(--gold-light); padding: 20px; border-radius: 12px; margin: 20px 0;">
                            <p style="font-size: 18px; line-height: 1.8;"><strong>🔥 अग्नि:</strong> अग्नि को विवाह का दिव्य साक्षी माना जाता है।</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>👰 कन्यादान:</strong> दुल्हन के माता-पिता उसका हाथ दूल्हे के हाथ में रखते हैं।</p>
                            <p style="font-size: 18px; line-height: 1.8; margin-top: 15px;"><strong>👣 सप्तपदी:</strong> दंपति एक साथ सात कदम उठाते हैं, प्रत्येक कदम एक वचन का प्रतीक है।</p>
                        </div>
                    </div>
                `
            }
        },
        general: {
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
                    <p><strong>మెహెంది:</strong> వధువు చేతులు మరియు పాదాలకు సంక్లిష్టమైన డిజైన్‌లు వర్తింపజేయబడే హెన్నా వేడుక.</p>
                    <p><strong>సంగీతం:</strong> కుటుంబాలు కలిసి పాడడానికి, నృత్యం చేయడానికి మరియు జరుపుకోవడానికి వచ్చే సంగీత సాయంత్రం.</p>
                    <p><strong>ముహూర్తం:</strong> వేద సంప్రదాయాల ప్రకారం నిర్వహించబడే పవిత్ర వివాహ వేడుక.</p>
                `
            },
            hi: {
                title: "रिवाज गाइड",
                content: `
                    <h3 style="color: var(--champagne-gold); margin-top: 20px;">समारोह को समझना</h3>
                    <p><strong>मेहंदी:</strong> हिना समारोह जहां दुल्हन के हाथों और पैरों पर जटिल डिजाइन लगाए जाते हैं।</p>
                    <p><strong>संगीत:</strong> एक संगीत सायंकाल जहां परिवार गाने, नृत्य करने और जश्न मनाने के लिए एक साथ आते हैं।</p>
                    <p><strong>मुहूर्त:</strong> वैदिक परंपराओं के अनुसार आयोजित पवित्र विवाह समारोह।</p>
                `
            }
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
        const lang = currentLang.value;
        
        // Get the event type from the parent timeline item
        const timelineItem = button.closest('.timeline-item');
        const eventType = timelineItem ? timelineItem.getAttribute('data-event') : null;
        
        if (isDressCode) {
            const content = contentData.dressCode[lang];
            modalTitle.textContent = content.title;
            modalBody.innerHTML = content.content;
        } else {
            // Ritual Guide - event-specific
            if (eventType && contentData.ritualGuide[eventType] && contentData.ritualGuide[eventType][lang]) {
                const content = contentData.ritualGuide[eventType][lang];
                modalTitle.textContent = content.title;
                modalBody.innerHTML = content.content;
            } else {
                // Fallback to general guide
                const content = contentData.ritualGuide.general[lang];
                modalTitle.textContent = content.title;
                modalBody.innerHTML = content.content;
            }
        }
        
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

// RSVP Form Functionality
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');
const decreaseGuests = document.getElementById('decreaseGuests');
const increaseGuests = document.getElementById('increaseGuests');
const numGuests = document.getElementById('numGuests');
const cancelBtn = document.querySelector('.rsvp-cancel-btn');

// Guest counter functionality
if (decreaseGuests && increaseGuests && numGuests) {
    decreaseGuests.addEventListener('click', () => {
        const current = parseInt(numGuests.value);
        if (current > 1) {
            numGuests.value = current - 1;
        }
    });

    increaseGuests.addEventListener('click', () => {
        const current = parseInt(numGuests.value);
        if (current < 20) {
            numGuests.value = current + 1;
        }
    });
}

// Form submission
if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(rsvpForm);
        const data = {
            name: formData.get('guestName'),
            email: formData.get('guestEmail'),
            phone: formData.get('guestPhone'),
            numGuests: formData.get('numGuests'),
            events: formData.getAll('events'),
            dietaryRestrictions: formData.get('dietaryRestrictions'),
            message: formData.get('message')
        };
        
        // In production, this would send to a backend API
        console.log('RSVP Data:', data);
        
        // Show success message
        rsvpForm.style.display = 'none';
        rsvpSuccess.style.display = 'block';
        
        // Scroll to success message
        rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Optional: Reset form after 5 seconds (for demo purposes)
        setTimeout(() => {
            rsvpForm.reset();
            rsvpForm.style.display = 'flex';
            rsvpSuccess.style.display = 'none';
        }, 10000);
    });
}

// Clear form button
if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
        if (confirm(getLocalizedText(
            'Are you sure you want to clear the form?',
            'మీరు ఖచ్చితంగా ఫారమ్‌ను క్లియర్ చేయాలనుకుంటున్నారా?',
            'क्या आप वाकई फॉर्म साफ करना चाहते हैं?'
        ))) {
            rsvpForm.reset();
            numGuests.value = 1;
        }
    });
}

// Initialize - ensure English is set as default
updateLanguage('en');
updateActiveNav();
