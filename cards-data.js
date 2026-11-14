// cards-data.js - 90 張精靈球資源卡資料庫（90張圖片完全獨立、不重複、避開貴族）
const GEM_TYPES = ['diamond', 'sapphire', 'emerald', 'ruby', 'onyx'];

// 1. 宣告那 10 隻稀有寶可夢夥伴（皇家貴族）的編號，絕對不在資源卡中出現
const noblesIds = [131, 132, 137, 142, 143, 144, 145, 146, 150, 151];

// 2. 自動產生 1 到 150 之中，扣掉貴族後的可用寶可夢編號清單（共有 140 隻）
const availablePokemonIds = [];
for (let i = 1; i <= 150; i++) {
    if (!noblesIds.includes(i)) {
        availablePokemonIds.push(i);
    }
}

// 為了讓每次進遊戲時順序都有一點點新鮮感，可以稍微打散這 140 隻的順序
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const uniquePokemonPool = shuffleArray(availablePokemonIds);

function buildFullDeck() {
    let idCounter = 1;
    let poolIndex = 0;
    const cards = [];

    // 輔助函式：從 140 隻不重複清單中依序拿出一隻專屬寶可夢編號
    function getUniquePokeId() {
        if (poolIndex >= uniquePokemonPool.length) {
            poolIndex = 0; // 若超過 140 隻則循環（不過 90 張卡小於 140 隻，絕對夠用不重複）
        }
        return uniquePokemonPool[poolIndex++];
    }

    // --- LEVEL 1 初階卡片 (共 40 張) ---
    const l1Templates = [
        { pts: 0, cost: [0, 1, 1, 1, 1] }, 
        { pts: 0, cost: [0, 0, 2, 1, 0] }, 
        { pts: 1, cost: [0, 0, 4, 0, 0] },
        { pts: 0, cost: [2, 0, 0, 0, 2] }
    ];
    GEM_TYPES.forEach((bonus, gIdx) => {
        l1Templates.forEach((tpl) => {
            const costObj = {};
            tpl.cost.forEach((amt, cIdx) => { if (amt > 0) costObj[GEM_TYPES[(gIdx + cIdx) % 5]] = amt; });
            const pId = getUniquePokeId();
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
            const pId = getUniquePokeId();
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
            const pId = getUniquePokeId();
            cards.push({ 
                id: `c${idCounter}`, level: 3, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    return cards;
}
