 // Animation for steps
    document.addEventListener('DOMContentLoaded', function() {
        // Animate steps on scroll
        const steps = document.querySelectorAll('.step');
        
        const stepObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, {
            threshold: 0.3
        });
        
        steps.forEach(step => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(20px)';
            step.style.transition = 'all 0.5s ease-out';
            stepObserver.observe(step);
        });
        
        // Add hover effects to step numbers
        steps.forEach(step => {
            const stepNumber = step.querySelector('.step-number');
            
            step.addEventListener('mouseenter', () => {
                stepNumber.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            step.addEventListener('mouseleave', () => {
                stepNumber.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    });

    // Medical Terms Section Functionality
class MedicalTermsSection {
    constructor() {
        this.tabButtons = document.querySelectorAll('.tab-btn');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.termCards = document.querySelectorAll('.term-card');
        
        this.init();
    }
    
    init() {
        this.setupTabs();
        this.setupTermCardAnimations();
        this.setupScrollAnimations();
        this.setupHoverEffects();
    }
    
    setupTabs() {
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                this.tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.transform = 'translateY(0)';
                });
                
                this.tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                button.style.transform = 'translateY(-2px)';
                
                const activeContent = document.getElementById(tabId);
                if (activeContent) {
                    activeContent.classList.add('active');
                    
                    // Animate term cards in the active tab
                    this.animateTermCardsInTab(activeContent);
                }
            });
        });
    }
    
    setupTermCardAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        this.termCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease-out';
            observer.observe(card);
        });
    }
    
    setupScrollAnimations() {
        // Animate section title on scroll
        const sectionTitle = document.querySelector('.medical-terms-section .section-title');
        if (sectionTitle) {
            const titleObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                    }
                });
            }, { threshold: 0.1 });
            
            titleObserver.observe(sectionTitle);
        }
        
        // Parallax effect for term cards
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const section = document.querySelector('.medical-terms-section');
            
            if (section) {
                const rect = section.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
                
                if (isInView) {
                    this.termCards.forEach((card, index) => {
                        const speed = 0.5 + (index * 0.05);
                        const yPos = (scrolled * speed * 0.05);
                        card.style.transform = `translateY(${yPos}px)`;
                    });
                }
            }
        });
    }
    
    setupHoverEffects() {
        this.termCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const rangeElement = card.querySelector('.term-range');
                if (rangeElement) {
                    rangeElement.classList.add('pulse-animation');
                }
            });
            
            card.addEventListener('mouseleave', () => {
                const rangeElement = card.querySelector('.term-range');
                if (rangeElement) {
                    rangeElement.classList.remove('pulse-animation');
                    rangeElement.style.animation = 'none';
                    setTimeout(() => {
                        rangeElement.style.animation = '';
                    }, 10);
                }
            });
        });
    }
    
    animateTermCardsInTab(tabContent) {
        const cardsInTab = tabContent.querySelectorAll('.term-card');
        
        cardsInTab.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Public method to switch to a specific tab
    switchToTab(tabName) {
        const tabButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (tabButton) {
            tabButton.click();
        }
    }
    
    // Public method to get current active tab
    getActiveTab() {
        const activeButton = document.querySelector('.tab-btn.active');
        return activeButton ? activeButton.getAttribute('data-tab') : null;
    }
    
    // Public method to search terms
    searchTerms(searchQuery) {
        const searchTerm = searchQuery.toLowerCase();
        let foundResults = false;
        
        this.termCards.forEach(card => {
            const termName = card.querySelector('.term-name').textContent.toLowerCase();
            const termAbbr = card.querySelector('.term-abbreviation').textContent.toLowerCase();
            const termDesc = card.querySelector('.term-description').textContent.toLowerCase();
            
            const matches = termName.includes(searchTerm) || 
                           termAbbr.includes(searchTerm) || 
                           termDesc.includes(searchTerm);
            
            if (matches) {
                card.style.display = 'block';
                foundResults = true;
                
                // Highlight matching text
                this.highlightText(card, searchTerm);
            } else {
                card.style.display = 'none';
            }
        });
        
        return foundResults;
    }
    
    highlightText(element, searchTerm) {
        const texts = element.querySelectorAll('.term-name, .term-abbreviation, .term-description');
        
        texts.forEach(textElement => {
            const originalHTML = textElement.innerHTML;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedHTML = originalHTML.replace(regex, '<mark style="background-color: #ffeb3b; padding: 2px 4px; border-radius: 3px;">$1</mark>');
            textElement.innerHTML = highlightedHTML;
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const medicalTerms = new MedicalTermsSection();
    
    // Make it globally accessible if needed
    window.MedicalTerms = medicalTerms;
    
    // Example usage:
    // Switch to thyroid tests tab: MedicalTerms.switchToTab('thyroid-tests');
    // Search for terms: MedicalTerms.searchTerms('hemoglobin');
});

// Search functionality
function setupMedicalSearch() {
    const searchInput = document.createElement('div');
    searchInput.innerHTML = `
        <div class="medical-search-container" style="max-width: 600px; margin: 0 auto 40px;">
            <div style="position: relative;">
                <input type="text" id="medical-search-input" 
                       placeholder="Search for medical terms (e.g., hemoglobin, TSH, creatinine...)" 
                       style="width: 100%; padding: 16px 50px 16px 20px; border: 2px solid #e5e7eb; 
                              border-radius: 12px; font-size: 16px; transition: all 0.3s;"
                       onkeyup="filterMedicalTerms(this.value)">
                <i class="fas fa-search" style="position: absolute; right: 20px; top: 50%; 
                    transform: translateY(-50%); color: #6b7280; font-size: 18px;"></i>
            </div>
            <div id="search-results" style="margin-top: 10px; font-size: 14px; color: #6b7280;"></div>
        </div>
    `;
    
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
        tabsContainer.parentNode.insertBefore(searchInput, tabsContainer);
    }
}

// Filter function
function filterMedicalTerms(searchQuery) {
    if (!window.MedicalTerms) return;
    
    const resultsElement = document.getElementById('search-results');
    
    if (searchQuery.length < 2) {
        resultsElement.textContent = '';
        // Show all cards
        document.querySelectorAll('.term-card').forEach(card => {
            card.style.display = 'block';
            // Remove highlights
            const marks = card.querySelectorAll('mark');
            marks.forEach(mark => {
                const parent = mark.parentNode;
                while (mark.firstChild) {
                    parent.insertBefore(mark.firstChild, mark);
                }
                parent.removeChild(mark);
            });
        });
        return;
    }
    
    const found = window.MedicalTerms.searchTerms(searchQuery);
    
    if (found) {
        resultsElement.textContent = `Found matching terms for "${searchQuery}"`;
        resultsElement.style.color = '#137333';
    } else {
        resultsElement.textContent = `No results found for "${searchQuery}"`;
        resultsElement.style.color = '#d93025';
    }
}

// Initialize search if needed
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment to enable search functionality
    // setupMedicalSearch();
});

