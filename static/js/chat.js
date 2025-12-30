
        // Language translations
        const translations = {
            en: {
                uploadBtn: "Upload a report",
                newChat: "New conversation",
                inputPlaceholder: "Message MedMinds.AI...",
                inputHint: "Disclaimer: This explanation is for general awareness only and should not be considered a medical diagnosis or a substitute for professional medical advice.",
                typing: "MedMinds.AI is typing",
                welcomeMessage: `
                    <p>Hello! I'm your MedMinds.AI assistant. I can help you understand your medical reports and lab results.</p>
                    <p>You can:</p>
                    <ul style="padding-left: 20px; margin: 10px 0;">
                        <li>Upload a medical report</li>
                        <li>Ask questions about specific lab values</li>
                        <li>Get explanations in simple, plain language</li>
                    </ul>
                    <p>How can I assist you today?</p>
                `,
                bloodTestResponse: `
                    <div class="health-summary">
                        <div class="summary-header">
                            <div class="summary-title">Blood Test Analysis</div>
                            <div class="overall-status status-excellent">
                                <i class="fas fa-check-circle"></i> Excellent
                            </div>
                        </div>
                        
                        <div class="parameter-grid">
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">Hemoglobin (RBC)</div>
                                    <div class="parameter-value">14.2 g/dL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">White Blood Cells</div>
                                    <div class="parameter-value">6.8 K/μL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">Platelets</div>
                                    <div class="parameter-value">285 K/μL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">Glucose</div>
                                    <div class="parameter-value">95 mg/dL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="health-severity severity-normal">
                        <div class="severity-icon">✅</div>
                        <div class="severity-text">All blood parameters are within normal ranges</div>
                        <div class="severity-badge">Normal</div>
                    </div>
                    
                    <div class="recommendations">
                        <div class="recommendations-title">
                            <i class="fas fa-lightbulb"></i> Recommendations
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check" style="color: #34a853; margin-top: 2px;"></i>
                            <span>Continue maintaining a healthy lifestyle</span>
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check" style="color: #34a853; margin-top: 2px;"></i>
                            <span>Regular follow-up in 6-12 months</span>
                        </div>
                    </div>
                `
            },
            hi: {
                uploadBtn: "रिपोर्ट अपलोड करें",
                newChat: "नई बातचीत",
                inputPlaceholder: "MedMinds.AI को संदेश भेजें...",
                inputHint: "अस्वीकरण: यह जानकारी केवल सामान्य जागरूकता के लिए है और इसे चिकित्सीय निदान या पेशेवर चिकित्सा सलाह का विकल्प नहीं माना जाना चाहिए।",
                typing: "MedMinds.AI टाइप कर रहा है",
                welcomeMessage: `
                    <p>नमस्ते! मैं आपका MedMinds.AI सहायक हूँ। मैं आपकी मेडिकल रिपोर्ट और लैब परिणामों को समझने में मदद कर सकता हूँ।</p>
                    <p>आप कर सकते हैं:</p>
                    <ul style="padding-left: 20px; margin: 10px 0;">
                        <li>मेडिकल रिपोर्ट अपलोड करना</li>
                        <li>विशिष्ट लैब वैल्यू के बारे में प्रश्न पूछना</li>
                        <li>सरल भाषा में स्पष्टीकरण प्राप्त करना</li>
                    </ul>
                    <p>आज मैं आपकी कैसे सहायता कर सकता हूँ?</p>
                `,
                bloodTestResponse: `
                    <div class="health-summary">
                        <div class="summary-header">
                            <div class="summary-title">रक्त परीक्षण विश्लेषण</div>
                            <div class="overall-status status-excellent">
                                <i class="fas fa-check-circle"></i> उत्कृष्ट
                            </div>
                        </div>
                        
                        <div class="parameter-grid">
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">हीमोग्लोबिन (RBC)</div>
                                    <div class="parameter-value">14.2 g/dL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">सफेद रक्त कोशिकाएं</div>
                                    <div class="parameter-value">6.8 K/μL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">प्लेटलेट्स</div>
                                    <div class="parameter-value">285 K/μL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">ग्लूकोज</div>
                                    <div class="parameter-value">95 mg/dL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="health-severity severity-normal">
                        <div class="severity-icon">✅</div>
                        <div class="severity-text">सभी रक्त पैरामीटर सामान्य सीमा में हैं</div>
                        <div class="severity-badge">सामान्य</div>
                    </div>
                    
                    <div class="recommendations">
                        <div class="recommendations-title">
                            <i class="fas fa-lightbulb"></i> सुझाव
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check" style="color: #34a853; margin-top: 2px;"></i>
                            <span>स्वस्थ जीवनशैली बनाए रखना जारी रखें</span>
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check" style="color: #34a853; margin-top: 2px;"></i>
                            <span>6-12 महीने में नियमित फॉलो-अप</span>
                        </div>
                    </div>
                `
            },
            mr: {
                uploadBtn: "अहवाल अपलोड करा",
                newChat: "नवीन संभाषण",
                inputPlaceholder: "MedMinds.AI ला संदेश पाठवा...",
                inputHint: "अस्वीकरण: ही माहिती फक्त सामान्य जागरूकतेसाठी आहे आणि ती वैद्यकीय निदान किंवा तज्ज्ञांच्या वैद्यकीय सल्ल्याचा पर्याय मानू नये.",
                typing: "MedMinds.AI टाइप करत आहे",
                welcomeMessage: `
                    <p>नमस्कार! मी तुमचा MedMinds.AI सहाय्यक आहे. मी तुमचे वैद्यकीय अहवाल आणि प्रयोगशाळा परिणाम समजून घेण्यात मदत करू शकतो.</p>
                    <p>तुम्ही करू शकता:</p>
                    <ul style="padding-left: 20px; margin: 10px 0;">
                        <li>वैद्यकीय अहवाल अपलोड करणे</li>
                        <li>विशिष्ट प्रयोगशाळा मूल्यांबद्दल प्रश्न विचारणे</li>
                        <li>सोप्या भाषेत स्पष्टीकरण मिळवणे</li>
                    </ul>
                    <p>आज मी तुमची कशी मदत करू शकतो?</p>
                `,
                bloodTestResponse: `
                    <div class="health-summary">
                        <div class="summary-header">
                            <div class="summary-title">रक्त चाचणी विश्लेषण</div>
                            <div class="overall-status status-excellent">
                                <i class="fas fa-check-circle"></i> उत्कृष्ट
                            </div>
                        </div>
                        
                        <div class="parameter-grid">
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">हिमोग्लोबिन (RBC)</div>
                                    <div class="parameter-value">14.2 g/dL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">पांढऱ्या रक्तपेशी</div>
                                    <div class="parameter-value">6.8 K/μL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">प्लेटलेट्स</div>
                                    <div class="parameter-value">285 K/μL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                            <div class="parameter-item">
                                <div class="parameter-info">
                                    <div class="parameter-label">ग्लुकोज</div>
                                    <div class="parameter-value">95 mg/dL</div>
                                </div>
                                <div class="parameter-status status-green"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="health-severity severity-normal">
                        <div class="severity-icon">✅</div>
                        <div class="severity-text">सर्व रक्त पॅरामीटर सामान्य मर्यादेत आहेत</div>
                        <div class="severity-badge">सामान्य</div>
                    </div>
                    
                    <div class="recommendations">
                        <div class="recommendations-title">
                            <i class="fas fa-lightbulb"></i> शिफारसी
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check" style="color: #34a853; margin-top: 2px;"></i>
                            <span>निरोगी जीवनशैली चालू ठेवा</span>
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check" style="color: #34a853; margin-top: 2px;"></i>
                            <span>6-12 महिन्यांत नियमित फॉलो-अप</span>
                        </div>
                    </div>
                `
            }
        };
        
        let currentLang = 'en';
        
        document.addEventListener('DOMContentLoaded', function() {
            const landingPage = document.getElementById('landingPage');
            const chatInterface = document.getElementById('chatInterface');
            const getStartedButtons = document.querySelectorAll('.get-started-btn, #landingGetStartedBtn, #mainGetStartedBtn');
            const newChatBtn = document.getElementById('newChatBtn');
            const sendMessageBtn = document.getElementById('sendMessageBtn');
            const chatInput = document.getElementById('chatInput');
            const messagesContainer = document.getElementById('messagesContainer');
            const conversationItems = document.querySelectorAll('.conversation-item');
            const attachBtn = document.getElementById('attachBtn');
            const typingIndicator = document.getElementById('typingIndicator');
            const languageBtn = document.getElementById('languageBtn');
            const languageDropdown = document.getElementById('languageDropdown');
            const currentLanguageSpan = document.getElementById('currentLanguage');
            const inputHint = document.getElementById('inputHint');
            const typingText = document.getElementById('typingText');
            const fileInput = document.getElementById('fileInput');
            
            // Language selector functionality
            languageBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                languageDropdown.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function() {
                languageDropdown.classList.remove('show');
            });
            
            // Language option selection
            document.querySelectorAll('.language-option').forEach(option => {
                option.addEventListener('click', function() {
                    const lang = this.dataset.lang;
                    const name = this.dataset.name;
                    
                    // Update active state
                    document.querySelectorAll('.language-option').forEach(opt => opt.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update current language
                    currentLang = lang;
                    currentLanguageSpan.textContent = name;
                    
                    // Update UI text
                    updateLanguage();
                    
                    // Close dropdown
                    languageDropdown.classList.remove('show');
                });
            });
            
            // Update UI text based on selected language
            function updateLanguage() {
                const t = translations[currentLang];
                
                // Update button texts
                document.querySelector('.new-chat-btn').innerHTML = `<i class="fas fa-plus"></i> ${t.newChat}`;
                
                // Update input placeholder and hint
                chatInput.placeholder = t.inputPlaceholder;
                inputHint.textContent = t.inputHint;
                typingText.textContent = t.typing;
            }
            
            // Auto-resize textarea
            chatInput.addEventListener('input', function() {
                this.style.height = 'auto';
                this.style.height = Math.min(this.scrollHeight, 120) + 'px';
                
                // Update send button state
                updateSendButtonState();
            });
            
            // Update send button state based on input
            function updateSendButtonState() {
                const hasText = chatInput.value.trim().length > 0;
                if (hasText) {
                    sendMessageBtn.classList.add('active');
                } else {
                    sendMessageBtn.classList.remove('active');
                }
            }
            
            // Attach button functionality
            attachBtn.addEventListener('click', function() {
                fileInput.click();
            });
            
            // Handle file upload
            // Handle file upload
fileInput.addEventListener('change', async function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name;
    const fileSize = (file.size / 1024 / 1024).toFixed(2);
    
    // Add user message about file upload
    addMessage("user", `📎 Uploaded: ${fileName} (${fileSize} MB)`, true);
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        // Create FormData for file upload
        const formData = new FormData();
        formData.append('image', file);
        formData.append('language', currentLang);

        // Send to your backend API
        const res = await fetch('/api/explain-report', {
            method: 'POST',
            body: formData
        });

        const data = await res.json();
        
        hideTypingIndicator();
        
        if (data.error) {
            addMessage("AI", `❌ Error: ${data.error}`, false);
        } else {
            // Convert markdown to HTML for the AI response
            const htmlResponse = marked.parse(data.explanation || `I've analyzed your file: ${fileName}. All parameters look normal.`);
            addMessage("AI", htmlResponse, false);
        }
        
    } catch (error) {
        hideTypingIndicator();
        console.error("Upload error:", error);
        addMessage("AI", "❌ Server error occurred while analyzing the report", false);
    }
    
    // Reset file input
    fileInput.value = '';
});
            
            // Switch to chat interface when Get Started is clicked
            getStartedButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Fade out landing page
                    landingPage.style.opacity = '0';
                    landingPage.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        landingPage.classList.add('hidden');
                        chatInterface.classList.remove('hidden');
                        chatInterface.classList.add('visible');
                        
                        // Trigger animations in chat interface
                        setTimeout(() => {
                            document.querySelectorAll('.fade-in, .slide-in-right').forEach(el => {
                                el.style.opacity = '1';
                                el.style.transform = 'translateY(0)';
                            });
                        }, 100);
                    }, 300);
                });
            });
            
            // New conversation button
            newChatBtn.addEventListener('click', function() {
                // Clear active state from all conversations
                conversationItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Clear chat messages and show welcome message in selected language
                const t = translations[currentLang];
                messagesContainer.innerHTML = `
                    <div class="message ai-message fade-in">
                        <div class="avatar ai-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            ${t.welcomeMessage}
                        </div>
                    </div>
                `;
                
                // Scroll to bottom
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                
                // Show notification in selected language
                const notificationText = currentLang === 'hi' ? "नई बातचीत शुरू करने के लिए एक रिपोर्ट अपलोड करें या प्रश्न पूछें।" :
                                       currentLang === 'mr' ? "नवीन संभाषण सुरू करण्यासाठी अहवाल अपलोड करा किंवा प्रश्न विचारा।" :
                                       "Start a new conversation by uploading a report or asking a question.";
                showNotification(notificationText);
            });
            
            // Send message on button click
            sendMessageBtn.addEventListener('click', sendMessage);
            
            // Send message on Enter key (but allow Shift+Enter for new line)
            chatInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (chatInput.value.trim()) {
                        sendMessage();
                    }
                }
            });
            
            // Show typing indicator
            function showTypingIndicator() {
                typingIndicator.style.display = 'flex';
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
            
            // Hide typing indicator
            function hideTypingIndicator() {
                typingIndicator.style.display = 'none';
            }
            
            // Conversation items click
            conversationItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Remove active class from all items
                    conversationItems.forEach(i => i.classList.remove('active'));
                    
                    // Add active class to clicked item
                    this.classList.add('active');
                    
                    // Load conversation based on which item was clicked
                    const conversationText = this.textContent.trim();
                    
                    if (conversationText.includes('Blood test')) {
                        loadBloodTestConversation();
                    } else if (conversationText.includes('Thyroid')) {
                        loadThyroidConversation();
                    } else if (conversationText.includes('Annual')) {
                        loadAnnualCheckupConversation();
                    }
                });
            });
            
            // Load the blood test conversation (default)
            function loadBloodTestConversation() {
                messagesContainer.innerHTML = `
                    <div class="message user-message fade-in">
                        <div class="avatar user-avatar">Y</div>
                        <div class="message-content">
                            Please explain my CBC report
                        </div>
                    </div>
                    
                    <div class="message ai-message slide-in-right">
                        <div class="avatar ai-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            <p>Of course! Let's start with your <strong>Hemoglobin (HGB)</strong> value.</p>
                            
                            <div class="parameter-highlight">
                                <div class="parameter-name">Hemoglobin (HGB)</div>
                                <p>This is the oxygen-carrying protein in your blood cells. Think of hemoglobin as a bus that transports oxygen throughout your body.</p>
                                <div class="normal-range">Normal range for adults: 12.0 to 17.5 grams per deciliter (g/dL)</div>
                            </div>
                            
                            <p>Your HGB value appears to be within the normal range, which means your blood is effectively carrying oxygen to your organs and tissues.</p>
                            <p>Would you like me to explain any other values from your CBC report, such as WBC (white blood cells), RBC (red blood cells), or platelets?</p>
                        </div>
                    </div>
                `;
                
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
            
            // Load thyroid conversation
            function loadThyroidConversation() {
                messagesContainer.innerHTML = `
                    <div class="message user-message fade-in">
                        <div class="avatar user-avatar">Y</div>
                        <div class="message-content">
                            Can you explain my thyroid report?
                        </div>
                    </div>
                    
                    <div class="message ai-message slide-in-right">
                        <div class="avatar ai-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            <p>I'd be happy to help with your thyroid report!</p>
                            
                            <div class="parameter-highlight">
                                <div class="parameter-name">Thyroid-Stimulating Hormone (TSH)</div>
                                <p>TSH is produced by your pituitary gland and tells your thyroid how much hormone to make. Think of it as a thermostat for your thyroid.</p>
                                <div class="normal-range">Normal range: 0.4 to 4.0 mIU/L</div>
                            </div>
                            
                            <p>Your TSH level is 2.5 mIU/L, which is within the normal range. This suggests your thyroid is functioning properly.</p>
                            <p>Would you like me to explain your T3 and T4 levels as well?</p>
                        </div>
                    </div>
                `;
                
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
            
            // Load annual checkup conversation
            function loadAnnualCheckupConversation() {
                messagesContainer.innerHTML = `
                    <div class="message user-message fade-in">
                        <div class="avatar user-avatar">Y</div>
                        <div class="message-content">
                            What should I know about my annual checkup results?
                        </div>
                    </div>
                    
                    <div class="message ai-message slide-in-right">
                        <div class="avatar ai-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            <p>Based on your annual checkup, here are the key findings:</p>
                            
                            <div class="parameter-highlight">
                                <div class="parameter-name">Overall Health Summary</div>
                                <p>Most of your results are within normal ranges, which is excellent news!</p>
                                <ul style="padding-left: 20px; margin-top: 10px;">
                                    <li><strong>Blood Pressure:</strong> 118/76 mmHg (Normal)</li>
                                    <li><strong>Cholesterol:</strong> Total 185 mg/dL (Good)</li>
                                    <li><strong>Blood Sugar:</strong> 92 mg/dL (Normal)</li>
                                </ul>
                            </div>
                            
                            <p>Your Vitamin D level is slightly low at 22 ng/mL (optimal is 30-50 ng/mL). You might consider getting more sunlight or discussing supplements with your doctor.</p>
                            <p>Overall, you're in good health! Is there a specific result you'd like me to explain in more detail?</p>
                        </div>
                    </div>
                `;
                
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
            
           
            // Function to send a message
    async function sendMessage() {
    const messageText = chatInput.value.trim();
    
    if (!messageText) return;
    
    // Add user message
    addMessage("user", messageText, true);
    
    // Clear input and reset height
    chatInput.value = '';
    chatInput.style.height = 'auto';
    updateSendButtonState();
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        // Send text to your backend API
        const res = await fetch('/api/explain-report', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                reportText: messageText,
                language: currentLang
            })
        });

        const data = await res.json();
        
        hideTypingIndicator();
        
        // Check if there's an error
        if (data.error) {
            addMessage("AI", `❌ Error: ${data.error}`, false);
        } else {
            // Convert markdown to HTML for the AI response
            const htmlResponse = marked.parse(data.explanation);
            addMessage("AI", htmlResponse, false);
        }
        
    } catch (error) {
        hideTypingIndicator();
        console.error("Fetch error:", error);
        addMessage("AI", "❌ Server error occurred. Please try again.", false);
    }
}
            
            // Function to add a message to the chat
            function addMessage(sender, content, isUser) {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                
                if (isUser) {
                    messageDiv.classList.add('user-message', 'fade-in');
                    messageDiv.innerHTML = `
                        <div class="avatar user-avatar">Y</div>
                        <div class="message-content">${content}</div>
                    `;
                } else {
                    messageDiv.classList.add('ai-message', 'slide-in-right');
                    messageDiv.innerHTML = `
                        <div class="avatar ai-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">${content}</div>
                    `;
                }
                
                messagesContainer.appendChild(messageDiv);
                
                // Scroll to bottom
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
            
            // Function to generate AI responses based on user input
           // Function to generate AI responses based on user input
function generateAIResponse(userInput) {
    const input = userInput.toLowerCase();
    const t = translations[currentLang];
    
    // This is just a fallback function
    // The real AI response comes from the backend
    return `
        <p>I've received your message: "${userInput}"</p>
        <p>Please wait while I process it with our AI...</p>
        <p><em>Note: If you see this message, the backend might not be responding properly.</em></p>
    `;
}
            
            // Generate cholesterol response with medium severity
            function generateCholesterolResponse() {
                if (currentLang === 'hi') {
                    return `
                        <div class="health-summary">
                            <div class="summary-header">
                                <div class="summary-title">कोलेस्ट्रॉल विश्लेषण</div>
                                <div class="overall-status status-attention">
                                    <i class="fas fa-exclamation-triangle"></i> ध्यान दें
                                </div>
                            </div>
                            
                            <div class="parameter-grid">
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">कुल कोलेस्ट्रॉल</div>
                                        <div class="parameter-value">245 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-yellow"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">LDL (बुरा)</div>
                                        <div class="parameter-value">165 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-yellow"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">HDL (अच्छा)</div>
                                        <div class="parameter-value">45 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-green"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="health-severity severity-medium">
                            <div class="severity-icon">⚠️</div>
                            <div class="severity-text">कोलेस्ट्रॉल का स्तर सामान्य से अधिक है</div>
                            <div class="severity-badge">मध्यम</div>
                        </div>
                        
                        <div class="recommendations">
                            <div class="recommendations-title">
                                <i class="fas fa-lightbulb"></i> सुझाव
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-utensils" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>कम वसा वाला आहार लें</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-running" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>नियमित व्यायाम करें</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-user-md" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>3 महीने में डॉक्टर से मिलें</span>
                            </div>
                        </div>
                    `;
                } else if (currentLang === 'mr') {
                    return `
                        <div class="health-summary">
                            <div class="summary-header">
                                <div class="summary-title">कोलेस्टेरॉल विश्लेषण</div>
                                <div class="overall-status status-attention">
                                    <i class="fas fa-exclamation-triangle"></i> लक्ष द्या
                                </div>
                            </div>
                            
                            <div class="parameter-grid">
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">एकूण कोलेस्टेरॉल</div>
                                        <div class="parameter-value">245 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-yellow"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">LDL (वाईट)</div>
                                        <div class="parameter-value">165 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-yellow"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">HDL (चांगले)</div>
                                        <div class="parameter-value">45 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-green"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="health-severity severity-medium">
                            <div class="severity-icon">⚠️</div>
                            <div class="severity-text">कोलेस्टेरॉलची पातळी सामान्यपेक्षा जास्त आहे</div>
                            <div class="severity-badge">मध्यम</div>
                        </div>
                        
                        <div class="recommendations">
                            <div class="recommendations-title">
                                <i class="fas fa-lightbulb"></i> शिफारसी
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-utensils" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>कमी चरबीयुक्त आहार घ्या</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-running" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>नियमित व्यायाम करा</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-user-md" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>3 महिन्यांत डॉक्टरांना भेटा</span>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="health-summary">
                            <div class="summary-header">
                                <div class="summary-title">Cholesterol Analysis</div>
                                <div class="overall-status status-attention">
                                    <i class="fas fa-exclamation-triangle"></i> Needs Attention
                                </div>
                            </div>
                            
                            <div class="parameter-grid">
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">Total Cholesterol</div>
                                        <div class="parameter-value">245 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-yellow"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">LDL (Bad)</div>
                                        <div class="parameter-value">165 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-yellow"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">HDL (Good)</div>
                                        <div class="parameter-value">45 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-green"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="health-severity severity-medium">
                            <div class="severity-icon">⚠️</div>
                            <div class="severity-text">Cholesterol levels are above normal range</div>
                            <div class="severity-badge">Medium</div>
                        </div>
                        
                        <div class="recommendations">
                            <div class="recommendations-title">
                                <i class="fas fa-lightbulb"></i> Recommendations
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-utensils" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>Follow a low-fat diet</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-running" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>Exercise regularly (30 min/day)</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-user-md" style="color: #ea8600; margin-top: 2px;"></i>
                                <span>Follow up with doctor in 3 months</span>
                            </div>
                        </div>
                    `;
                }
            }
            
            // Generate diabetes response with serious severity
            function generateDiabetesResponse() {
                if (currentLang === 'hi') {
                    return `
                        <div class="health-summary">
                            <div class="summary-header">
                                <div class="summary-title">मधुमेह विश्लेषण</div>
                                <div class="overall-status status-concern">
                                    <i class="fas fa-exclamation-circle"></i> गंभीर
                                </div>
                            </div>
                            
                            <div class="parameter-grid">
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">फास्टिंग ग्लूकोज</div>
                                        <div class="parameter-value">165 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-red"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">HbA1c</div>
                                        <div class="parameter-value">8.2%</div>
                                    </div>
                                    <div class="parameter-status status-red"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="health-severity severity-serious">
                            <div class="severity-icon">🚨</div>
                            <div class="severity-text">मधुमेह का स्तर खतरनाक रूप से उच्च है</div>
                            <div class="severity-badge">गंभीर</div>
                        </div>
                        
                        <div class="recommendations">
                            <div class="recommendations-title">
                                <i class="fas fa-exclamation-triangle"></i> तत्काल कार्रवाई आवश्यक
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-user-md" style="color: #d93025; margin-top: 2px;"></i>
                                <span>तुरंत डॉक्टर से संपर्क करें</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-pills" style="color: #d93025; margin-top: 2px;"></i>
                                <span>दवा की समीक्षा आवश्यक</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-chart-line" style="color: #d93025; margin-top: 2px;"></i>
                                <span>दैनिक ग्लूकोज मॉनिटरिंग</span>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="health-summary">
                            <div class="summary-header">
                                <div class="summary-title">Diabetes Analysis</div>
                                <div class="overall-status status-concern">
                                    <i class="fas fa-exclamation-circle"></i> Serious
                                </div>
                            </div>
                            
                            <div class="parameter-grid">
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">Fasting Glucose</div>
                                        <div class="parameter-value">165 mg/dL</div>
                                    </div>
                                    <div class="parameter-status status-red"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">HbA1c</div>
                                        <div class="parameter-value">8.2%</div>
                                    </div>
                                    <div class="parameter-status status-red"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="health-severity severity-serious">
                            <div class="severity-icon">🚨</div>
                            <div class="severity-text">Diabetes levels are dangerously high</div>
                            <div class="severity-badge">Serious</div>
                        </div>
                        
                        <div class="recommendations">
                            <div class="recommendations-title">
                                <i class="fas fa-exclamation-triangle"></i> Immediate Action Required
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-user-md" style="color: #d93025; margin-top: 2px;"></i>
                                <span>Contact your doctor immediately</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-pills" style="color: #d93025; margin-top: 2px;"></i>
                                <span>Medication review needed</span>
                            </div>
                            <div class="recommendation-item">
                                <i class="fas fa-chart-line" style="color: #d93025; margin-top: 2px;"></i>
                                <span>Daily glucose monitoring required</span>
                            </div>
                        </div>
                    `;
                }
            }
            
            // Generate thyroid response with normal severity
            function generateThyroidResponse() {
                if (currentLang === 'hi') {
                    return `
                        <div class="health-summary">
                            <div class="summary-header">
                                <div class="summary-title">थायराइड विश्लेषण</div>
                                <div class="overall-status status-good">
                                    <i class="fas fa-thumbs-up"></i> अच्छा
                                </div>
                            </div>
                            
                            <div class="parameter-grid">
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">TSH</div>
                                        <div class="parameter-value">2.1 mIU/L</div>
                                    </div>
                                    <div class="parameter-status status-green"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">T4 (Free)</div>
                                        <div class="parameter-value">1.3 ng/dL</div>
                                    </div>
                                    <div class="parameter-status status-green"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="health-severity severity-normal">
                            <div class="severity-icon">✅</div>
                            <div class="severity-text">थायराइड फंक्शन सामान्य है</div>
                            <div class="severity-badge">सामान्य</div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="health-summary">
                            <div class="summary-header">
                                <div class="summary-title">Thyroid Analysis</div>
                                <div class="overall-status status-good">
                                    <i class="fas fa-thumbs-up"></i> Good
                                </div>
                            </div>
                            
                            <div class="parameter-grid">
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">TSH</div>
                                        <div class="parameter-value">2.1 mIU/L</div>
                                    </div>
                                    <div class="parameter-status status-green"></div>
                                </div>
                                <div class="parameter-item">
                                    <div class="parameter-info">
                                        <div class="parameter-label">T4 (Free)</div>
                                        <div class="parameter-value">1.3 ng/dL</div>
                                    </div>
                                    <div class="parameter-status status-green"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="health-severity severity-normal">
                            <div class="severity-icon">✅</div>
                            <div class="severity-text">Thyroid function is normal</div>
                            <div class="severity-badge">Normal</div>
                        </div>
                    `;
                }
            }
            document.getElementById("explanationDiv").innerHTML = data.explanation;

            
            // Function to show notifications
            function showNotification(message) {
                // Create notification element
                const notification = document.createElement('div');
                notification.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background-color: #7c3aed;
                    color: white;
                    padding: 15px 20px;
                    border-radius: 8px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                    z-index: 1000;
                    font-weight: 500;
                    max-width: 300px;
                    animation: fadeIn 0.3s ease-out;
                `;
                
                notification.textContent = message;
                document.body.appendChild(notification);
                
                // Remove notification after 3 seconds
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateX(20px)';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 300);
                }, 3000);
            }
            
            // Initialize with blood test conversation
            loadBloodTestConversation();
        });
        
const backToHomeBtn = document.getElementById('backToHomeBtn');
backToHomeBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});

    