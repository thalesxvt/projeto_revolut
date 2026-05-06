document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
    const panels = document.querySelectorAll('.mega-panel');

    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        navItems.forEach(item => {
            item.addEventListener('mouseenter', function () {
                navbar.classList.add('expanded');

                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');

                const targetPanelId = this.getAttribute('data-target');

                panels.forEach(panel => {
                    panel.classList.remove('active');
                    if (panel.id === targetPanelId) {
                        panel.classList.add('active');
                    }
                });
            });
        });

        navbar.addEventListener('mouseleave', () => {
            navbar.classList.remove('expanded');
            navItems.forEach(nav => nav.classList.remove('active'));
            panels.forEach(panel => panel.classList.remove('active'));
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const magicSection = document.getElementById('magic-section');
    const morphBg = document.getElementById('morph-bg');
    const centerSlot = document.getElementById('center-slot');
    const desktopMorphQuery = window.matchMedia('(min-width: 821px)');

    if (magicSection && morphBg && centerSlot) {
        const resetMorphInlineStyles = () => {
            morphBg.style.width = '';
            morphBg.style.height = '';
            morphBg.style.top = '';
            morphBg.style.left = '';
            morphBg.style.borderRadius = '';
            morphBg.style.boxShadow = '';
        };

        const updateMagicMorph = () => {
            if (!desktopMorphQuery.matches) {
                magicSection.classList.remove('morphed');
                resetMorphInlineStyles();
                return;
            }

            if (window.scrollY > 80) {
                magicSection.classList.add('morphed');

                morphBg.style.width = centerSlot.offsetWidth + 'px';
                morphBg.style.height = centerSlot.offsetHeight + 'px';
                morphBg.style.top = centerSlot.offsetTop + 'px';
                morphBg.style.left = centerSlot.offsetLeft + 'px';
                morphBg.style.borderRadius = '20px';
                morphBg.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            } else {
                magicSection.classList.remove('morphed');
                resetMorphInlineStyles();
            }
        };

        window.addEventListener('scroll', updateMagicMorph);
        window.addEventListener('resize', updateMagicMorph);
        if (desktopMorphQuery.addEventListener) {
            desktopMorphQuery.addEventListener('change', updateMagicMorph);
        } else {
            desktopMorphQuery.addListener(updateMagicMorph);
        }
        updateMagicMorph();
    }
});

let lastScrollY = window.scrollY;
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('nav-hidden');
        } else {
            header.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
    });
}

const mobileToggle = document.getElementById('mobile-toggle');
const navbar = document.getElementById('navbar');

if (mobileToggle && navbar) {
    mobileToggle.addEventListener('click', () => {
        navbar.classList.toggle('mobile-open');

        if (navbar.classList.contains('mobile-open')) {
            navbar.classList.add('scrolled');
        } else if (window.scrollY === 0) {
            navbar.classList.remove('scrolled');
        }
    });
}

const mobileAccordionHeaders = document.querySelectorAll('.mobile-accordion-header');

mobileAccordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('is-open');
    });
});

const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (openMenuBtn && closeMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
    });
}

const toggleBtns = document.querySelectorAll('.toggle-btn');
let currentCardSlide = 'physical';
let autoPlayInterval;

function switchCardSlide(targetSlide) {
    const physicalSlide = document.getElementById('slide-physical');
    const virtualSlide = document.getElementById('slide-virtual');
    const targetButton = document.querySelector(`.toggle-btn[data-target="${targetSlide}"]`);

    if (!physicalSlide || !virtualSlide || !targetButton) return;

    physicalSlide.classList.remove('active');
    virtualSlide.classList.remove('active');

    toggleBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(`slide-${targetSlide}`).classList.add('active');
    targetButton.classList.add('active');

    currentCardSlide = targetSlide;
}

function startAutoPlay() {
    if (!toggleBtns.length) return;

    autoPlayInterval = setInterval(() => {
        const nextSlide = currentCardSlide === 'physical' ? 'virtual' : 'physical';
        switchCardSlide(nextSlide);
    }, 8000);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.target.dataset.target;
        if (target !== currentCardSlide) {
            switchCardSlide(target);
            resetAutoPlay();
        }
    });
});

startAutoPlay();

const savingsBtns = document.querySelectorAll('.savings-toggle-btn');
const savingsBgs = document.querySelectorAll('.savings-bg');
let currentSavingsIndex = 0;
let savingsInterval;

function switchSavingsSlide(index) {
    if (!savingsBtns.length || !savingsBgs[index]) return;

    savingsBgs.forEach(bg => bg.classList.remove('active'));
    savingsBtns.forEach(btn => {
        btn.classList.remove('active');
        void btn.offsetWidth;
    });

    savingsBgs[index].classList.add('active');
    savingsBtns[index].classList.add('active');

    currentSavingsIndex = index;
}

function startSavingsAutoPlay() {
    if (!savingsBtns.length) return;

    savingsInterval = setInterval(() => {
        const nextIndex = (currentSavingsIndex + 1) % savingsBtns.length;
        switchSavingsSlide(nextIndex);
    }, 8000);
}

function resetSavingsAutoPlay() {
    clearInterval(savingsInterval);
    startSavingsAutoPlay();
}

savingsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'), 10);

        if (index !== currentSavingsIndex) {
            switchSavingsSlide(index);
            resetSavingsAutoPlay();
        }
    });
});

startSavingsAutoPlay();
