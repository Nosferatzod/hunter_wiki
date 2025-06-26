// nen.js - Arquivo completo
// Dados dos tipos de Nen
const nenTypes = [
    {
        type: "enhancer",
        name: "Reforço (強化系)",
        description: "Enhancers fortalecem e aumentam as propriedades naturais de objetos ou seu próprio corpo. São diretos, simples e determinados.",
        examples: ["Gon Freecss", "Uvogin", "Netero (parcialmente)"],
        percentage: "100% de eficiência",
        abilities: ["Aumento de força física", "Regeneração acelerada", "Reforço de objetos", "Ataques poderosos"],
        color: "var(--nen-enhancer)"
    },
    {
        type: "transmuter",
        name: "Transformação (変化系)",
        description: "Transmuters alteram as propriedades de sua aura para imitar algo mais. São caprichosos, imprevisíveis e muitas vezes mentirosos.",
        examples: ["Killua Zoldyck", "Hisoka", "Silva Zoldyck"],
        percentage: "80% de eficiência",
        abilities: ["Eletricidade (Killua)", "Goma elástica (Hisoka)", "Mudança de propriedades", "Imitação de elementos"],
        color: "var(--nen-transmuter)"
    },
    {
        type: "conjurer",
        name: "Materialização (具現化系)",
        description: "Conjurers criam objetos físicos e independentes a partir de sua aura. São detalhistas, metódicos e às vezes nervosos.",
        examples: ["Kurapika", "Kite", "Shizuku"],
        percentage: "60% de eficiência",
        abilities: ["Criação de armas", "Objetos com habilidades especiais", "Dimensões separadas", "Condições e restrições"],
        color: "var(--nen-conjurer)"
    },
    {
        type: "emitter",
        name: "Emissão (放出系)",
        description: "Emitters separam sua aura de seu corpo e a mantêm ativa à distância. São impacientes, temperamentais e não gostam de explicações longas.",
        examples: ["Leorio", "Razor", "Pokkle"],
        percentage: "80% de eficiência",
        abilities: ["Projéteis de aura", "Ataques à distância", "Teletransporte", "Criação de guardiões"],
        color: "var(--nen-emitter)"
    },
    {
        type: "manipulator",
        name: "Manipulação (操作系)",
        description: "Manipulators controlam objetos ou seres vivos com sua aura. São argumentativos, lógicos e seguem suas próprias regras.",
        examples: ["Illumi Zoldyck", "Shalnark", "Morel"],
        percentage: "60% de eficiência",
        abilities: ["Controle de pessoas/animais", "Manipulação de objetos", "Habilidades com condições", "Automatização"],
        color: "var(--nen-manipulator)"
    },
    {
        type: "specialist",
        name: "Especialização (特質系)",
        description: "Specialists possuem habilidades únicas que não se encaixam nas outras categorias. São carismáticos, independentes e misteriosos.",
        examples: ["Chrollo Lucilfer", "Neferpitou", "Meleoron"],
        percentage: "0% de eficiência em outros tipos",
        abilities: ["Habilidades únicas", "Roubo de habilidades", "Manipulação de memória", "Efeitos especiais"],
        color: "var(--nen-specialist)"
    }
];

// Técnicas básicas de Nen
const basicTechniques = [
    {
        name: "Ten (纏)",
        kanji: "纏",
        description: "Técnica básica de manter a aura próxima ao corpo. Protege o usuário e previne a perda de aura.",
        uses: [
            "Proteção contra ataques físicos",
            "Conservação de energia",
            "Base para todas as outras técnicas"
        ],
        level: "Básico"
    },
    {
        name: "Zetsu (絶)",
        kanji: "絶",
        description: "Cessa completamente o fluxo de aura, tornando o usuário quase indetectável para outros usuários de Nen.",
        uses: [
            "Esconder-se de inimigos",
            "Descansar e recuperar energia",
            "Surpreender oponentes"
        ],
        level: "Básico"
    },
    {
        name: "Ren (練)",
        kanji: "練",
        description: "Aumenta o fluxo e volume de aura, fortalecendo o usuário para combate.",
        uses: [
            "Aumentar poder ofensivo e defensivo",
            "Preparação para técnicas avançadas",
            "Intimidar oponentes"
        ],
        level: "Básico"
    },
    {
        name: "Hatsu (発)",
        kanji: "発",
        description: "Expressão única de Nen que varia de acordo com o tipo e personalidade do usuário.",
        uses: [
            "Habilidades únicas e personalizadas",
            "Combinação com outras técnicas",
            "Máxima expressão do potencial Nen"
        ],
        level: "Avançado"
    },
    {
        name: "In (隠)",
        kanji: "隠",
        description: "Esconde a aura ou objetos infundidos com aura, tornando-os invisíveis até para usuários de Nen.",
        uses: [
            "Esconder armas ou habilidades",
            "Emboscadas e ataques surpresa",
            "Proteção de objetos importantes"
        ],
        level: "Avançado"
    },
    {
        name: "En (円)",
        kanji: "円",
        description: "Estende a aura em um campo circular ao redor do usuário, detectando qualquer coisa dentro dele.",
        uses: [
            "Detecção de inimigos",
            "Monitoramento de área",
            "Defesa contra ataques surpresa"
        ],
        level: "Especialista"
    }
];

// Dados do quiz
const nenQuiz = [
    {
        question: "Como você descreveria sua personalidade?",
        options: [
            { text: "Direto e simples", type: "enhancer" },
            { text: "Caprichoso e imprevisível", type: "transmuter" },
            { text: "Lógico e analítico", type: "manipulator" },
            { text: "Criativo e detalhista", type: "conjurer" },
            { text: "Enérgico e impulsivo", type: "emitter" },
            { text: "Individualista e único", type: "specialist" }
        ]
    },
    {
        question: "Qual dessas habilidades você gostaria de ter?",
        options: [
            { text: "Super força e resistência", type: "enhancer" },
            { text: "Transformar minha aura em eletricidade", type: "transmuter" },
            { text: "Controlar a mente das pessoas", type: "manipulator" },
            { text: "Criar objetos mágicos do nada", type: "conjurer" },
            { text: "Atirar energia a distância", type: "emitter" },
            { text: "Uma habilidade única que ninguém mais tem", type: "specialist" }
        ]
    },
    {
        question: "Como você lida com problemas?",
        options: [
            { text: "Enfrento de frente com força", type: "enhancer" },
            { text: "Uso criatividade e improviso", type: "transmuter" },
            { text: "Analiso e crio uma estratégia", type: "manipulator" },
            { text: "Preparo algo com antecedência", type: "conjurer" },
            { text: "Ajo rápido e decisivamente", type: "emitter" },
            { text: "Uso uma abordagem não convencional", type: "specialist" }
        ]
    },
    {
        question: "Qual é seu estilo de luta preferido?",
        options: [
            { text: "Luta corpo a corpo", type: "enhancer" },
            { text: "Habilidades versáteis e adaptáveis", type: "transmuter" },
            { text: "Controle do campo de batalha", type: "manipulator" },
            { text: "Uso de armas e equipamentos", type: "conjurer" },
            { text: "Ataques à distância", type: "emitter" },
            { text: "Algo único que surpreende os outros", type: "specialist" }
        ]
    }
];

// Carregar tipos de Nen na página
document.addEventListener('DOMContentLoaded', function() {
    // Carregar tipos de Nen
    const nenTypesContainer = document.getElementById('nen-types');
    
    nenTypes.forEach(nenType => {
        const typeCard = document.createElement('div');
        typeCard.className = `col-md-6 nen-type-card ${nenType.type}-card mb-4`;
        typeCard.innerHTML = `
            <div class="nen-type-header" style="background-color: ${nenType.color}">
                <h4>${nenType.name}</h4>
            </div>
            <div class="nen-type-body">
                <p>${nenType.description}</p>
                <p><strong>Exemplos:</strong> ${nenType.examples.join(', ')}</p>
                <p><strong>Afinidade:</strong> ${nenType.percentage}</p>
                <p><strong>Habilidades comuns:</strong></p>
                <ul>
                    ${nenType.abilities.map(ability => `<li>${ability}</li>`).join('')}
                </ul>
            </div>
        `;
        nenTypesContainer.appendChild(typeCard);
    });
    
    // Carregar técnicas básicas
    const techniquesContainer = document.getElementById('nenTechniques');
    
    basicTechniques.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'accordion-item';
        techItem.innerHTML = `
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${tech.name.toLowerCase().replace(' ', '-')}">
                    ${tech.name} (${tech.kanji})
                </button>
            </h2>
            <div id="${tech.name.toLowerCase().replace(' ', '-')}" class="accordion-collapse collapse" data-bs-parent="#nenTechniques">
                <div class="accordion-body">
                    <p>${tech.description}</p>
                    <p><strong>Nível:</strong> ${tech.level}</p>
                    <p><strong>Principais usos:</strong></p>
                    <ul>
                        ${tech.uses.map(use => `<li>${use}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        techniquesContainer.appendChild(techItem);
    });
    
    // Configurar o quiz
    const quizModal = document.getElementById('nenQuizModal');
    
    quizModal.addEventListener('show.bs.modal', function() {
        const quizBody = document.getElementById('quizQuestions');
        quizBody.innerHTML = '';
        
        nenQuiz.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'mb-3';
            questionDiv.innerHTML = `
                <h6>${index + 1}. ${question.question}</h6>
                <div class="quiz-options">
                    ${question.options.map(option => `
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q${index}" id="q${index}-${option.type}" value="${option.type}">
                            <label class="form-check-label" for="q${index}-${option.type}">
                                ${option.text}
                            </label>
                        </div>
                    `).join('')}
                </div>
            `;
            quizBody.appendChild(questionDiv);
        });
    });
    
    // Submissão do quiz
    document.getElementById('submitQuiz').addEventListener('click', function() {
        const results = {};
        
        nenQuiz.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption) {
                const type = selectedOption.value;
                results[type] = (results[type] || 0) + 1;
            }
        });
        
        // Determinar o tipo com mais votos
        let maxType = 'enhancer';
        let maxCount = 0;
        
        for (const [type, count] of Object.entries(results)) {
            if (count > maxCount) {
                maxType = type;
                maxCount = count;
            }
        }
        
        // Mostrar resultado
        const resultNen = nenTypes.find(t => t.type === maxType);
        if (resultNen) {
            const quizBody = document.getElementById('quizQuestions');
            quizBody.innerHTML = `
                <div class="text-center">
                    <h4 style="color: ${resultNen.color}">Seu tipo de Nen é: ${resultNen.name}</h4>
                    <p>${resultNen.description}</p>
                    <p><strong>Personagens similares:</strong> ${resultNen.examples.join(', ')}</p>
                    <p><strong>Habilidades características:</strong></p>
                    <ul class="text-start">
                        ${resultNen.abilities.map(ability => `<li>${ability}</li>`).join('')}
                    </ul>
                    <button class="btn btn-primary mt-3" data-bs-dismiss="modal">Fechar</button>
                </div>
            `;
        }
    });

    // Círculo de Nen Interativo
    const nenCircle = document.querySelector('.nen-circle');
    const nenTypeName = document.getElementById('nen-type-name');
    const nenTypeDescription = document.getElementById('nen-type-description');
    const nenTypeExamples = document.getElementById('nen-type-examples');
    const nenTypeAbilities = document.getElementById('nen-type-abilities');

    // Posições dos tipos no círculo (ângulos em graus)
    const typePositions = [
        { type: "enhancer", angle: 0 },       // Topo
        { type: "transmuter", angle: 60 },    // Topo-direita
        { type: "conjurer", angle: 120 },     // Baixo-direita
        { type: "specialist", angle: 180 },   // Baixo
        { type: "manipulator", angle: 240 },  // Baixo-esquerda
        { type: "emitter", angle: 300 }       // Topo-esquerda
    ];

    // Criar elementos do círculo
    typePositions.forEach(pos => {
        const nenType = nenTypes.find(t => t.type === pos.type);
        if (!nenType) return;

        const element = document.createElement('div');
        element.className = `nen-type ${nenType.type}`;
        element.textContent = nenType.name.split(' ')[0]; // Mostra apenas o nome principal
        element.style.backgroundColor = nenType.color;
        
        // Posicionamento no círculo
        const radius = 120; // Raio do círculo
        const angleInRad = (pos.angle - 90) * Math.PI / 180; // -90 para começar no topo
        const x = radius * Math.cos(angleInRad);
        const y = radius * Math.sin(angleInRad);
        
        element.style.left = `calc(50% + ${x}px)`;
        element.style.top = `calc(50% + ${y}px)`;
        element.style.transform = 'translate(-50%, -50%)';
        
        // Atraso animação para criar efeito sequencial
        element.style.animationDelay = `${pos.angle/60 * 0.2}s`;
        
        // Evento de clique
        element.addEventListener('click', () => {
            // Atualizar painel de informações
            nenTypeName.textContent = nenType.name;
            nenTypeName.style.color = nenType.color;
            nenTypeDescription.textContent = nenType.description;
            
            // Exemplos de personagens
            nenTypeExamples.innerHTML = nenType.examples.map(ex => 
                `<span class="badge" style="background-color: ${nenType.color}">${ex}</span>`
            ).join(' ');
            
            // Habilidades
            nenTypeAbilities.innerHTML = nenType.abilities.map(ability => 
                `<li>${ability}</li>`
            ).join('');
            
            // Destaque no círculo
            document.querySelectorAll('.nen-type').forEach(el => {
                el.style.transform = 'translate(-50%, -50%)';
                el.style.zIndex = '1';
            });
            element.style.transform = 'translate(-50%, -50%) scale(1.2)';
            element.style.zIndex = '10';
        });
        
        nenCircle.appendChild(element);
    });

    // Selecionar o primeiro tipo por padrão
    setTimeout(() => {
        document.querySelector('.nen-type').click();
    }, 500);

    // Tooltips para dispositivos móveis
    if ('ontouchstart' in window) {
        document.querySelectorAll('.nen-type').forEach(el => {
            el.setAttribute('data-bs-toggle', 'tooltip');
            el.setAttribute('data-bs-placement', 'top');
            el.setAttribute('title', el.textContent);
        });
        
        // Inicialize tooltips do Bootstrap
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
});