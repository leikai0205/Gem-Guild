// cards-data.js - 90 張精靈球資源卡資料庫
const GEM_TYPES = ['diamond', 'sapphire', 'emerald', 'ruby', 'onyx'];

// 輔助函式：根據等級與索引自動分配寶可夢編號 (1 ~ 150，避開 10 隻稀有寶可夢)
function getPokemonIdForCard(level, index) {
    const skippedIds = [131, 132, 137, 142, 143, 144, 145, 146, 150, 151];
    let candidate = 0;
    if (level === 1) {
        candidate = (index * 3) % 120 + 1; // 1 ~ 120 的初階
    } else if (level === 2) {
        candidate = (index * 4) % 130 + 10; // 中階範圍
    } else {
        candidate = (index * 5) % 145 + 5; // 高階範圍
    }
    while (skippedIds.includes(candidate)) {
        candidate = (candidate % 150) + 1;
    }
    return candidate;
}

function buildFullDeck() {
    let idCounter = 1;
    const cards = [];

    // --- LEVEL 1 初階卡片 (共 40 張) ---
    const l1Templates = [
        { pts: 0, cost: [0, 1, 1, 1, 1] }, 
        { pts: 0, cost: [0, 0, 2, 1, 0] }, 
        { pts: 1, cost: [0, 0, 4, 0, 0] },
        { pts: 0, cost: [2, 0, 0, 0, 2] }
    ];
    GEM_TYPES.forEach((bonus, gIdx) => {
        l1Templates.forEach((tpl, tIdx) => {
            const costObj = {};
            tpl.cost.forEach((amt, cIdx) => { if (amt > 0) costObj[GEM_TYPES[(gIdx + cIdx) % 5]] = amt; });
            const pId = getPokemonIdForCard(1, idCounter);
            cards.push({ 
                id: `c${idCounter}`, level: 1, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    // --- LEVEL 2 中階卡片 (共 30 張) ---
    const l2Templates = [
        { pts: 1, cost: [0, 2, 2, 3, 0] }, 
        { pts: 2, cost: [0, 0, 5, 0, 0] }, 
        { pts: 3, cost: [6, 0, 0, 0, 0] }
    ];
    GEM_TYPES.forEach((bonus, gIdx) => {
        l2Templates.forEach((tpl) => {
            const costObj = {};
            tpl.cost.forEach((amt, cIdx) => { if (amt > 0) costObj[GEM_TYPES[(gIdx + cIdx) % 5]] = amt; });
            const pId = getPokemonIdForCard(2, idCounter);
            cards.push({ 
                id: `c${idCounter}`, level: 2, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    // --- LEVEL 3 頂級卡片 (共 20 張) ---
    const l3Templates = [
        { pts: 3, cost: [0, 3, 3, 5, 3] }, 
        { pts: 4, cost: [0, 0, 0, 7, 0] }, 
        { pts: 5, cost: [3, 0, 0, 7, 0] },
        { pts: 5, cost: [3, 3, 3, 3, 0] }
    ];
    GEM_TYPES.forEach((bonus, gIdx) => {
        l3Templates.forEach((tpl) => {
            const costObj = {};
            tpl.cost.forEach((amt, cIdx) => { if (amt > 0) costObj[GEM_TYPES[(gIdx + cIdx) % 5]] = amt; });
            const pId = getPokemonIdForCard(3, idCounter);
            cards.push({ 
                id: `c${idCounter}`, level: 3, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    return cards;
}
