document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check local storage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);

    let clickCount = 0;
    let lastClickTime = 0;

    themeToggle.addEventListener('click', () => {
        const currentTime = new Date().getTime();

        // Triple click detection for Party Mode
        if (currentTime - lastClickTime < 500) {
            clickCount++;
        } else {
            clickCount = 1;
        }
        lastClickTime = currentTime;

        if (clickCount === 3) {
            // Party Mode
            setTheme('party');
            clickCount = 0;
        } else if (clickCount === 1) {
            // Normal Toggle (wait briefly to see if it's a multi-click)
            setTimeout(() => {
                if (clickCount === 1) {
                    const currentTheme = body.getAttribute('data-theme');
                    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
                    setTheme(newTheme);
                }
            }, 250);
        }
    });

    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }



    // --- Typing Animation ---
    const roles = ["sudo rm -rf", "sudo apt update && sudo apt upgrade -y", "ctf player", "blue team operator", "security researcher"];
    const typingText = document.getElementById('typing-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing animation
    setTimeout(type, 1000);

    // --- Experience Counter ---
    const startDate = new Date('2022-01-023'); // Assume start date
    const counterElement = document.getElementById('experience-counter');

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;
        const years = diff / (1000 * 60 * 60 * 24 * 365.25); // Precise years
        counterElement.textContent = years.toFixed(8);
        requestAnimationFrame(updateCounter);
    }

    updateCounter();

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill bars if this is the skills section
                if (entry.target.id === 'skills') {
                    const progressBars = document.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        bar.style.width = width;
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section'); // Add base class for CSS
        observer.observe(section);
    });

    // --- Scroll Progress Indicator ---
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // --- Experience Tabs ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const jobPanels = document.querySelectorAll('.job-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            jobPanels.forEach(p => p.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            const target = btn.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Animate hamburger to X (optional, simple toggle for now)
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});
