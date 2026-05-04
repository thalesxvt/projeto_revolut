document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
    const panels = document.querySelectorAll('.mega-panel');

    // Comportamento do fundo da Navbar ao rolar a página
    const handleScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Lógica do Mega Menu Dinâmico
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            // 1. Expande o header
            navbar.classList.add('expanded');

            // 2. Remove o estilo ativo de todos os links
            navItems.forEach(nav => nav.classList.remove('active'));

            // 3. Adiciona o estilo ativo (pílula cinza) no link atual
            this.classList.add('active');

            // 4. Lê qual painel deve abrir
            const targetPanelId = this.getAttribute('data-target');

            // 5. Esconde os outros painéis e mostra o correto
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === targetPanelId) {
                    panel.classList.add('active');
                }
            });
        });
    });

    // Encolher o menu ao tirar o mouse do cabeçalho completo
    navbar.addEventListener('mouseleave', () => {
        navbar.classList.remove('expanded');

        // Remove a cor cinza dos links e esconde os painéis
        navItems.forEach(nav => nav.classList.remove('active'));
        panels.forEach(panel => panel.classList.remove('active'));
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Código da Navbar continua existindo...

    // LÓGICA DE TRANSIÇÃO DO SCROLL (HERO -> SALARY)
    const magicSection = document.getElementById('magic-section');
    const morphBg = document.getElementById('morph-bg');
    const centerSlot = document.getElementById('center-slot');

    if (magicSection && morphBg && centerSlot) {
        window.addEventListener('scroll', () => {

            // O GATILHO: Rolar mais que 80px dispara a animação
            if (window.scrollY > 80) {
                magicSection.classList.add('morphed');

                // Manda a imagem gigante ir EXATAMENTE para o buraco da próxima seção
                morphBg.style.width = centerSlot.offsetWidth + 'px';
                morphBg.style.height = centerSlot.offsetHeight + 'px';
                morphBg.style.top = centerSlot.offsetTop + 'px';
                morphBg.style.left = centerSlot.offsetLeft + 'px';
                morphBg.style.borderRadius = '20px';
                morphBg.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            } else {
                // Se voltar ao topo, a imagem volta para Tela Cheia
                magicSection.classList.remove('morphed');

                morphBg.style.width = '100%';
                morphBg.style.height = '100%';
                morphBg.style.top = '0';
                morphBg.style.left = '0';
                morphBg.style.borderRadius = '0px';
                morphBg.style.boxShadow = 'none';
            }
        });
    }
});

let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Detecta a posição atual do scroll
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Se rolar para baixo E já passou de 100px: Esconde
        header.classList.add('nav-hidden');
    } else {
        // Se rolar para cima: Mostra
        header.classList.remove('nav-hidden');
    }

    // Atualiza a última posição para a próxima comparação
    lastScrollY = currentScrollY;
});

// Funcionalidade do Menu Hambúrguer Mobile
const mobileToggle = document.getElementById('mobile-toggle');
const navbar = document.getElementById('navbar');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        // Liga/desliga a classe que mostra os links
        navbar.classList.toggle('mobile-open');

        // Se abriu o menu e a página estiver no topo, força a cor de fundo branca
        if (navbar.classList.contains('mobile-open')) {
            navbar.classList.add('scrolled');
        } else if (window.scrollY === 0) {
            // Se fechou e está no topo, volta a ser transparente
            navbar.classList.remove('scrolled');
        }
    });
}

// === LÓGICA DO MENU SANFONA MOBILE (OVERLAY) ===
const mobileAccordionHeaders = document.querySelectorAll('.mobile-accordion-header');

mobileAccordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Pega o item pai (o <li> inteiro)
        const parentLi = header.parentElement;
        
        // Liga ou desliga a classe 'is-open'
        parentLi.classList.toggle('is-open');
    });
});

// === CONTROLE DO MENU MOBILE ===
const openMenuBtn = document.getElementById('openMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (openMenuBtn && closeMenuBtn && mobileMenu) {
    // Abrir o menu
    openMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('is-open');
        // Trava o site no fundo para o usuário não rolar a página enquanto o menu está aberto
        document.body.style.overflow = 'hidden'; 
    });

    // Fechar o menu
    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        // Destrava o site
        document.body.style.overflow = ''; 
    });
}

// === CONTROLE DE TRANSIÇÃO DOS CARTÕES (Físico vs Virtual) ===
const toggleBtns = document.querySelectorAll('.toggle-btn');
let currentCardSlide = 'physical'; // Começa no físico
let autoPlayInterval;

function switchCardSlide(targetSlide) {
    // 1. Remove a classe 'active' de todos os slides e botões
    document.getElementById('slide-physical').classList.remove('active');
    document.getElementById('slide-virtual').classList.remove('active');

    toggleBtns.forEach(btn => btn.classList.remove('active'));

    // 2. Adiciona a classe 'active' apenas no alvo
    document.getElementById(`slide-${targetSlide}`).classList.add('active');
    document.querySelector(`.toggle-btn[data-target="${targetSlide}"]`).classList.add('active');

    // 3. Atualiza o estado atual
    currentCardSlide = targetSlide;
}

function startAutoPlay() {
    // Roda a cada 8000ms (8 segundos)
    autoPlayInterval = setInterval(() => {
        const nextSlide = currentCardSlide === 'physical' ? 'virtual' : 'physical';
        switchCardSlide(nextSlide);
    }, 8000);
}

function resetAutoPlay() {
    // Se o usuário clicar manualmente, zera o cronômetro para não trocar rápido demais
    clearInterval(autoPlayInterval);
    startAutoPlay();
}

// Evento de Clique nos Botões
toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.target.dataset.target;
        if (target !== currentCardSlide) {
            switchCardSlide(target);
            resetAutoPlay(); // Reinicia o contador de 8 segundos
        }
    });
});

// Inicia a animação automática assim que a página carregar
startAutoPlay();

// === CONTROLE DE TRANSIÇÃO DA SEÇÃO SAVINGS ===
const savingsBtns = document.querySelectorAll('.savings-toggle-btn');
const savingsBgs = document.querySelectorAll('.savings-bg');
let currentSavingsIndex = 0;
let savingsInterval;

function switchSavingsSlide(index) {
    // 1. Esconde tudo e reseta os botões
    savingsBgs.forEach(bg => bg.classList.remove('active'));
    savingsBtns.forEach(btn => {
        btn.classList.remove('active');
        // Este comando força o navegador a reiniciar a animação CSS do zero
        void btn.offsetWidth;
    });

    // 2. Mostra a imagem alvo e ativa o botão alvo
    savingsBgs[index].classList.add('active');
    savingsBtns[index].classList.add('active');

    currentSavingsIndex = index;
}

function startSavingsAutoPlay() {
    // Roda a cada 8 segundos (8000ms) para bater certinho com o CSS
    savingsInterval = setInterval(() => {
        // Se estiver no 0 vai pro 1, do 1 pro 2, do 2 volta pro 0
        let nextIndex = (currentSavingsIndex + 1) % savingsBtns.length;
        switchSavingsSlide(nextIndex);
    }, 8000);
}

function resetSavingsAutoPlay() {
    clearInterval(savingsInterval);
    startSavingsAutoPlay();
}

// 3. Permite que o usuário clique nos botões
savingsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Pega o número do botão clicado (0, 1 ou 2) pelo atributo data-index
        const index = parseInt(e.target.getAttribute('data-index'));

        // Só troca se clicar em um botão diferente do atual
        if (index !== currentSavingsIndex) {
            switchSavingsSlide(index);
            resetSavingsAutoPlay(); // Reinicia o relógio de 8 segundos
        }
    });
});

// Inicia automaticamente
startSavingsAutoPlay();