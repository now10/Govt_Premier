/**
 * Premier Lancer Executive Portal - Educational Demo
 * Professional-grade JavaScript for teaching purposes
 */

class PLXPortal {
    constructor() {
        this.version = '4.2.1';
        this.demoMode = true;
        this.userData = {
            name: 'John Demo',
            membership: 'PLX-STUDENT-2024',
            tier: 'VIP Executive'
        };
        this.init();
    }
    
    init() {
        console.log(`%cPremier Lancer Portal v${this.version}`, 
            'color: #00CCFF; font-size: 16px; font-weight: bold;');
        console.log('%c⚠️ EDUCATIONAL DEMO - For learning purposes only', 
            'color: #F59E0B; font-size: 12px;');
        
        this.setupEventListeners();
        this.simulateLoading();
    }
    
    setupEventListeners() {
        // Form validation for educational purposes
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        });
        
        // Interactive elements
        document.addEventListener('click', this.handleClicks.bind(this));
    }
    
    simulateLoading() {
        // Simulate API loading states
        const loadingElements = document.querySelectorAll('.skeleton');
        setTimeout(() => {
            loadingElements.forEach(el => {
                el.classList.remove('skeleton');
                el.innerHTML = '<i class="fas fa-check-circle"></i> Data loaded successfully';
            });
        }, 1500);
    }
    
    handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;
        
        // Educational validation
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                this.showFieldError(field, 'This field is required');
                isValid = false;
            }
        });
        
        if (isValid) {
            this.simulateAPICall(form);
        }
    }
    
    showFieldError(field, message) {
        // Professional error display
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        errorDiv.style.cssText = `
            color: #EF4444;
            font-size: 12px;
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        `;
        
        field.style.borderColor = '#EF4444';
        field.parentNode.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.remove();
            field.style.borderColor = '';
        }, 3000);
    }
    
    simulateAPICall(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Professional loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        // Simulate API delay
        setTimeout(() => {
            // Success simulation
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
            submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
            
            // Show success message
            this.showNotification('Request processed successfully', 'success');
            
            // Reset button after delay
            setTimeout(() => {
                if (form.id === 'withdrawalForm') {
                    window.location.href = 'dashboard.html?withdrawal=success';
                }
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 1500);
            
        }, 2000);
    }
    
    showNotification(message, type = 'info') {
        const colors = {
            success: '#10B981',
            error: '#EF4444',
            warning: '#F59E0B',
            info: '#3B82F6'
        };
        
        const notification = document.createElement('div');
        notification.className = 'portal-notification';
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${colors[type]}CC;
                backdrop-filter: blur(10px);
                color: white;
                padding: 15px 25px;
                border-radius: var(--radius-md);
                z-index: 1000;
                animation: slideIn 0.3s ease;
                border: 1px solid rgba(255, 255, 255, 0.2);
                max-width: 350px;
                display: flex;
                align-items: center;
                gap: 12px;
            ">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 
                                 type === 'error' ? 'exclamation-circle' : 
                                 type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
                <div>
                    <div style="font-weight: 600; margin-bottom: 4px;">
                        ${type.charAt(0).toUpperCase() + type.slice(1)}
                    </div>
                    <div style="font-size: 14px;">${message}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification.firstElementChild);
        
        setTimeout(() => {
            notification.firstElementChild.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    handleClicks(e) {
        // Professional click handlers for educational purposes
        if (e.target.classList.contains('copy-data')) {
            this.copyToClipboard(e.target.dataset.value);
            this.showNotification('Copied to clipboard', 'success');
        }
        
        if (e.target.classList.contains('view-details')) {
            this.showDetailsModal(e.target.dataset.id);
        }
    }
    
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).catch(err => {
            console.error('Educational: Clipboard API error simulation', err);
        });
    }
    
    showDetailsModal(id) {
        // Modal simulation for educational purposes
        alert(`Educational: Modal would show details for record ${id}\n\nIn a real application, this would:\n1. Fetch detailed data from API\n2. Display in a modal with animations\n3. Include action buttons\n4. Have proper error handling`);
    }
}

// Currency formatting utilities
const CurrencyFormatter = {
    format: (amount, currency = 'USD') => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    },
    
    formatCrypto: (amount, symbol = 'BTC') => {
        return `${parseFloat(amount).toFixed(8)} ${symbol}`;
    }
};

// Date formatting utilities
const DateFormatter = {
    formatDate: (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        }).format(new Date(date));
    },
    
    relativeTime: (date) => {
        const now = new Date();
        const diff = now - new Date(date);
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return 'Just now';
    }
};

// Initialize portal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.PLXPortal = new PLXPortal();
    
    // Add global CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});

// Export utilities for educational purposes
window.CurrencyFormatter = CurrencyFormatter;
window.DateFormatter = DateFormatter;