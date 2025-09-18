// Vantyx Landing Page JavaScript

// Estado global para módulos
let openModuleIndex = null;

// Función para toggle de módulos (exactamente como en v0)
function toggleModule(element, index) {
    const description = element.querySelector('.module-description');
    const chevron = element.querySelector('.chevron-down');
    const isOpen = openModuleIndex === index;
    
    // Cerrar todos los módulos
    document.querySelectorAll('.feature-card').forEach(card => {
        card.classList.remove('open');
        card.querySelector('.module-description').classList.add('hidden');
        card.querySelector('.chevron-down').style.transform = 'rotate(0deg)';
    });
    
    // Abrir el módulo clickeado si no estaba abierto
    if (!isOpen) {
        element.classList.add('open');
        description.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
        openModuleIndex = index;
    } else {
        openModuleIndex = null;
    }
}

// Función para toggle FAQ (como en v0)
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    const isOpen = answer.classList.contains('open');
    
    // Cerrar todas las FAQ
    document.querySelectorAll('.faq-answer').forEach(faq => {
        faq.classList.remove('open');
    });
    document.querySelectorAll('.faq-icon').forEach(icon => {
        icon.classList.remove('rotated');
    });
    
    // Abrir la FAQ clickeada si no estaba abierta
    if (!isOpen) {
        answer.classList.add('open');
        icon.classList.add('rotated');
    }
}

// Función para toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark');
    // Guardar preferencia en localStorage
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
}

// Función para scroll suave a sección
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Animaciones al hacer scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Stagger animation para testimonios
function handleStaggerAnimations() {
    const staggerItems = document.querySelectorAll('.stagger-item');
    staggerItems.forEach((item, index) => {
        const elementTop = item.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        }
    });
}

// Función para abrir WhatsApp
function openWhatsApp() {
    window.open('https://wa.me/543794601984', '_blank');
}

// Función para enviar email
function sendEmail() {
    window.location.href = 'mailto:contacto@vantyx.net';
}

// Función para llamar
function makeCall() {
    window.location.href = 'tel:+543794601984';
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Configurar animaciones de scroll
    window.addEventListener('scroll', function() {
        handleScrollAnimations();
        handleStaggerAnimations();
    });
    
    // Ejecutar animaciones iniciales
    handleScrollAnimations();
    handleStaggerAnimations();
    
    // Configurar botones de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Configurar botones de acción
    const actionButtons = document.querySelectorAll('[onclick*="scrollToSection"]');
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            scrollToSection(sectionId);
        });
    });
    
    // Configurar botones de WhatsApp
    const whatsappButtons = document.querySelectorAll('[onclick*="openWhatsApp"]');
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });
    });
    
    // Configurar formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí puedes agregar la lógica para enviar el formulario
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        });
    }
    
    // Configurar lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Configurar smooth scrolling para todos los enlaces internos
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
});

// Función para mostrar/ocultar menú móvil
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Función para cerrar menú móvil al hacer clic en un enlace
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
}

// Configurar menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        
        // Cerrar menú al hacer clic en un enlace
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
});

// Función para mostrar notificación
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Función para validar formulario
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Función para resetear formulario
function resetForm(form) {
    form.reset();
    const errorFields = form.querySelectorAll('.border-red-500');
    errorFields.forEach(field => {
        field.classList.remove('border-red-500');
    });
}

// Exportar funciones para uso global
window.toggleModule = toggleModule;
window.toggleFaq = toggleFaq;
window.toggleTheme = toggleTheme;
window.scrollToSection = scrollToSection;
window.openWhatsApp = openWhatsApp;
window.sendEmail = sendEmail;
window.makeCall = makeCall;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.showNotification = showNotification;
window.validateForm = validateForm;
window.resetForm = resetForm;
