// Foodpanda Clone - Main JavaScript
class FoodpandaClone {
    constructor() {
        this.restaurants = [
            {
                id: 1,
                name: "Pizza Palace",
                cuisine: "Italian, Pizza",
                rating: 4.5,
                deliveryTime: "25-35 min",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 2,
                name: "Burger Hub",
                cuisine: "American, Fast Food",
                rating: 4.3,
                deliveryTime: "20-30 min",
                image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 3,
                name: "Sizzling Steak",
                cuisine: "BBQ, Steakhouse",
                rating: 4.7,
                deliveryTime: "30-40 min",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 4,
                name: "Asian Delight",
                cuisine: "Chinese, Thai",
                rating: 4.4,
                deliveryTime: "25-35 min",
                image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 5,
                name: "Mediterranean Breeze",
                cuisine: "Mediterranean, Healthy",
                rating: 4.6,
                deliveryTime: "30-40 min",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 6,
                name: "Desert Oasis",
                cuisine: "Desserts, Bakery",
                rating: 4.8,
                deliveryTime: "15-25 min",
                image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
        ];
        
        this.init();
    }

    init() {
        this.initializeAnimations();
        this.initializeEventListeners();
        this.populateRestaurants();
        this.startCounterAnimations();
        this.initializeScrollEffects();
    }

    initializeAnimations() {
        // Add initial animation classes
        const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .search-container, .stats, .food-card');
        animatedElements.forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.animationDelay = `${index * 0.2}s`;
        });

        // Trigger animations on load
        setTimeout(() => {
            animatedElements.forEach(el => {
                el.classList.add('visible');
            });
        }, 100);
    }

    initializeEventListeners() {
        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.nav');
        
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
                mobileMenuToggle.innerHTML = nav.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
        }

        // Navigation smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            });
        });

        // Search functionality
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', this.handleSearch.bind(this));
        }

        // Order buttons
        document.querySelectorAll('.card-btn, .deal-button').forEach(btn => {
            btn.addEventListener('click', this.handleOrder.bind(this));
        });

        // Login button
        const loginBtn = document.querySelector('.btn-login');
        if (loginBtn) {
            loginBtn.addEventListener('click', this.handleLogin.bind(this));
        }
    }

    initializeScrollEffects() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });

        // Nav link active state on scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    populateRestaurants() {
        const grid = document.querySelector('.restaurants-grid');
        if (!grid) return;

        grid.innerHTML = this.restaurants.map(restaurant => `
            <div class="restaurant-card fade-in">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
                <div class="restaurant-info">
                    <h3 class="restaurant-name">${restaurant.name}</h3>
                    <div class="restaurant-cuisine">
                        <i class="fas fa-utensils"></i>
                        <span>${restaurant.cuisine}</span>
                    </div>
                    <div class="restaurant-footer">
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <span>${restaurant.rating}</span>
                        </div>
                        <div class="delivery-time">${restaurant.deliveryTime}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    startCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const suffix = counter.textContent.includes('K') ? 'K+' : '+';
            let count = 0;
            const increment = target / 50;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.textContent = Math.floor(count) + suffix;
                    setTimeout(updateCount, 30);
                } else {
                    counter.textContent = target + suffix;
                }
            };
            
            // Start counter when element is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCount();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }

    handleSearch() {
        const searchInput = document.querySelector('.search-input');
        const address = searchInput.value.trim();
        
        if (!address) {
            this.showNotification('Please enter your delivery address', 'warning');
            searchInput.focus();
            return;
        }

        // Show loading state
        const searchBtn = document.querySelector('.search-btn');
        const originalText = searchBtn.innerHTML;
        searchBtn.innerHTML = '<div class="loading"></div>';
        searchBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            searchBtn.innerHTML = originalText;
            searchBtn.disabled = false;
            this.showNotification(`Searching for restaurants near ${address}...`, 'success');
        }, 1500);
    }

    handleOrder(e) {
        const button = e.currentTarget;
        const card = button.closest('.food-card, .deal-card');
        const itemName = card.querySelector('h3').textContent;
        
        // Add to cart animation
        button.innerHTML = '<div class="loading"></div>';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = 'Added to Cart! <i class="fas fa-check"></i>';
            this.showNotification(`${itemName} added to your cart!`, 'success');
            
            setTimeout(() => {
                button.innerHTML = 'Order Now <i class="fas fa-shopping-cart"></i>';
                button.disabled = false;
            }, 2000);
        }, 1000);
    }

    handleLogin() {
        this.showNotification('Login functionality coming soon!', 'info');
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            max-width: 400px;
            transform: translateX(400px);
            transition: transform 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            warning: 'exclamation-triangle',
            error: 'times-circle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    getNotificationColor(type) {
        const colors = {
            success: 'linear-gradient(135deg, #4CAF50, #45a049)',
            warning: 'linear-gradient(135deg, #ff9800, #f57c00)',
            error: 'linear-gradient(135deg, #f44336, #d32f2f)',
            info: 'linear-gradient(135deg, #2196F3, #1976D2)'
        };
        return colors[type] || colors.info;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FoodpandaClone();
});

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        font-size: 1rem;
        opacity: 0.8;
        transition: opacity 0.3s;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
`;
document.head.appendChild(notificationStyles);