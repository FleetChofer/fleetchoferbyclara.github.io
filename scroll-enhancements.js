/**
 * FleetChofer by Clara - Scroll Enhancements
 * Mejoras de scroll snapping, transiciones sutiles y optimizaciones móvil
 * 2026
 */

(function() {
    'use strict';

    // Detectar si es dispositivo móvil
    const isMobile = () => {
        return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Configuración de scroll snapping
    const initScrollSnapping = () => {
        // En móvil, desactivar scroll snapping para mejor UX
        if (isMobile()) {
            document.documentElement.style.scrollSnapType = 'none';
            return;
        }

        // En desktop, activar scroll snapping
        document.documentElement.style.scrollSnapType = 'y mandatory';
    };

    // Observador de intersección para transiciones
    const initIntersectionObserver = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Agregar clase de visibilidad
                    entry.target.classList.add('in-view');
                    
                    // Opcional: dejar de observar después de que sea visible
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observar elementos animados
        const animatedElements = document.querySelectorAll(
            '.hero-content, .hero-image, .stats-grid, .descripcion-contenido, ' +
            '.features-grid, .roles-grid, .security-content, .security-features, ' +
            '.pilot-content, .doc-management-card, .cta-content, .contact-grid, ' +
            '.footer-content, .feature-card, .role-card, .security-item, .contact-card'
        );

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    };

    // Suavizar scroll en navegación interna
    const initSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // Optimizar animaciones para móvil
    const optimizeForMobile = () => {
        if (isMobile()) {
            // Reducir duración de animaciones
            const style = document.createElement('style');
            style.textContent = `
                @media (max-width: 768px) {
                    @keyframes floatImage {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                    
                    .hero-image img {
                        animation: floatImage 5s ease-in-out infinite !important;
                    }
                    
                    @keyframes securityScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    
                    .security-track {
                        animation: securityScroll 60s linear infinite !important;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    };

    // Manejar cambios de tamaño de ventana
    const handleResize = () => {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                initScrollSnapping();
            }, 250);
        });
    };

    // Inicializar cuando el DOM esté listo
    const init = () => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initScrollSnapping();
                initIntersectionObserver();
                initSmoothScrolling();
                optimizeForMobile();
                handleResize();
            });
        } else {
            initScrollSnapping();
            initIntersectionObserver();
            initSmoothScrolling();
            optimizeForMobile();
            handleResize();
        }
    };

    // Ejecutar inicialización
    init();

    // Exponer funciones globales si es necesario
    window.FleetChoferScroll = {
        isMobile,
        initScrollSnapping,
        initIntersectionObserver
    };
})();
