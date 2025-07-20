// Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle (would be expanded in a full implementation)
        document.querySelector('.fa-bars').addEventListener('click', function() {
            alert('Mobile menu would open here in a complete implementation');
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Newsletter form submission
        document.querySelector('.newsletter button').addEventListener('click', function() {
            const email = document.querySelector('.newsletter-input').value;
            if (email && email.includes('@')) {
                alert('Thank you for subscribing to our newsletter!');
                document.querySelector('.newsletter-input').value = '';
            } else {
                alert('Please enter a valid email address');
            }
        });

        // Collection card interaction
        document.querySelectorAll('.collection-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Parallax effect for hero section
        window.addEventListener('scroll', function() {
            const hero = document.querySelector('.hero');
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });

        // Current year for footer
        document.querySelector('footer p').textContent = 
            `© ${new Date().getFullYear()} LUXE Fashion. All rights reserved.`;
