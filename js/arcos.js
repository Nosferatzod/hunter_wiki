// Dados dos arcos da história
const arcs = [
    {
        id: "hunter-exam",
        title: "Arco do Exame Hunter",
        episodes: "1-21",
        description: "O Exame Hunter é um teste rigoroso que avalia as habilidades dos participantes em várias áreas. Gon conhece Killua, Kurapika e Leorio durante esta jornada.",
        keyEvents: [
            "Primeira Fase: Corrida de longa distância",
            "Segunda Fase: Culinária e caça",
            "Terceira Fase: Torre dos Truques",
            "Quarta Fase: Caça às tags",
            "Fase Final: Duelos de um contra um"
        ],
        characters: ["Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio", "Hisoka", "Illumi"],
        image: "../assets/images/arcs/exame.webp"
    },
    {
        id: "zoldyck",
        title: "Arco da Família Zoldyck",
        episodes: "22-26",
        description: "Após o exame, Killua é levado de volta para sua família. Gon, Kurapika e Leorio viajam para a Mansão Zoldyck para resgatá-lo.",
        keyEvents: [
            "Viagem para a Montanha Kukuroo",
            "Testes dos portões da mansão",
            "Encontro com a família Zoldyck",
            "Canary e os servos da mansão",
            "Fuga de Killua"
        ],
        characters: ["Killua Zoldyck", "Gon Freecss", "Silva Zoldyck", "Zeno Zoldyck", "Milluki Zoldyck", "Canary"],
        image: "../assets/images/arcs/familia_killua.jpg"
    },
    {
        id: "heavens-arena",
        title: "Arco do Céu da Arena",
        episodes: "27-36",
        description: "Gon e Killua viajam para a Torre Celestial para treinar e ganhar experiência em batalhas, onde aprendem sobre Nen.",
        keyEvents: [
            "Chegada à Torre Celestial",
            "Batalhas nos andares inferiores",
            "Encontro com Wing",
            "Introdução ao sistema Nen",
            "Treinamento de Nen básico",
            "Batalha contra Hisoka"
        ],
        characters: ["Gon Freecss", "Killua Zoldyck", "Wing", "Zushi", "Hisoka"],
        image: "../assets/images/arcs/arena.png"
    },
    {
        id: "yorkshin",
        title: "Arco de Yorknew",
        episodes: "37-58",
        description: "Kurapika se junta aos Phantom Troupe para vingar seu clã, enquanto Gon e Killua participam de um leilão negro.",
        keyEvents: [
            "Leilão Negro de Yorknew",
            "Kurapika se torna guarda-costas",
            "Confronto com os Phantom Troupe",
            "Poderes de Nen de Kurapika revelados",
            "Negociação com os Spiders",
            "Resgate de Gon e Killua"
        ],
        characters: ["Kurapika", "Gon Freecss", "Killua Zoldyck", "Leorio", "Chrollo Lucilfer", "Hisoka", "Membros do Phantom Troupe"],
        image: "../assets/images/arcs/york.jpg"
    },
    {
        id: "greed-island",
        title: "Arco de Greed Island",
        episodes: "59-75",
        description: "Gon e Killua entram no jogo Greed Island para encontrar pistas sobre o paradeiro de Ging Freecss.",
        keyEvents: [
            "Entrada no jogo Greed Island",
            "Aprendizado de Nen avançado",
            "Missões e cartas especiais",
            "Encontro com Bisky",
            "Treinamento intensivo",
            "Batalha contra os Jogadores Bomber"
        ],
        characters: ["Gon Freecss", "Killua Zoldyck", "Biscuit Krueger", "Genthru", "Outros jogadores"],
        image: "../assets/images/arcs/island.webp"
    },
    {
        id: "chimera-ant",
        title: "Arco das Formigas Chimera",
        episodes: "76-136",
        description: "Uma espécie mortal de formigas ameaça a humanidade, levando a uma das batalhas mais intensas da série.",
        keyEvents: [
            "Aparição das Formigas Chimera",
            "Nascimento do Rei",
            "Invasão ao Palácio",
            "Evolução de Gon e Killua",
            "Batalha de Netero contra o Rei",
            "Sacrifício final"
        ],
        characters: ["Gon Freecss", "Killua Zoldyck", "Isaac Netero", "Neferpitou", "Menthuthuyoupi", "Shaiapouf", "Meruem"],
        image: "../assets/images/arcs/formigas.webp"
    },
    {
        id: "election",
        title: "Arco da Eleição do 13º Presidente",
        episodes: "137-148",
        description: "Após os eventos das Formigas Chimera, a Associação Hunter precisa eleger um novo presidente.",
        keyEvents: [
            "Morte de Netero",
            "Eleição para novo presidente",
            "Gon em estado crítico",
            "Alluka e Nanika reveladas",
            "Conflitos políticos",
            "Resolução do arco de Gon"
        ],
        characters: ["Gon Freecss", "Killua Zoldyck", "Leorio", "Kurapika", "Pariston Hill", "Cheadle", "Alluka Zoldyck"],
        image: "../assets/images/arcs/votacao.webp"
    },
    {
        id: "dark-continent",
        title: "Arco do Continente Negro (Mangá)",
        episodes: "N/A (Mangá)",
        description: "Uma expedição é formada para viajar ao perigoso Continente Negro, enquanto Kurapika protege o príncipe Woble.",
        keyEvents: [
            "Expedição ao Continente Negro",
            "Conflito entre os príncipes de Kakin",
            "Kurapika como guarda-costas",
            "Revelações sobre o Dark Continent",
            "Participação dos Zodíacos",
            "Desenvolvimento do sistema de sucessão"
        ],
        characters: ["Kurapika", "Leorio", "Ging Freecss", "Pariston Hill", "Príncipe Woble", "Membros dos Zodíacos"],
        image: "../assets/images/arcs/negro.webp"
    }
];

// Carregar detalhes do arco no modal
document.addEventListener('DOMContentLoaded', function() {
    const arcModal = document.getElementById('arcModal');
    
    arcModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget;
        const arcId = button.getAttribute('data-arc');
        const arc = arcs.find(a => a.id === arcId);
        
        if (!arc) return;
        
        document.getElementById('arcModalTitle').textContent = arc.title;
        
        const modalBody = document.getElementById('arcModalBody');
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <img src="${arc.image}" alt="${arc.title}" class="img-fluid mb-3 rounded">
                    <div class="arc-info">
                        <p><strong>Episódios:</strong> ${arc.episodes}</p>
                    </div>
                </div>
                <div class="col-md-8">
                    <h4>Sinopse</h4>
                    <p>${arc.description}</p>
                    
                    <h4 class="mt-4">Eventos Principais</h4>
                    <ul>
                        ${arc.keyEvents.map(event => `<li>${event}</li>`).join('')}
                    </ul>
                    
                    <h4 class="mt-4">Personagens Relevantes</h4>
                    <div class="arc-characters">
                        ${arc.characters.map(char => `
                            <span class="badge bg-primary me-1 mb-1">${char}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    });
});