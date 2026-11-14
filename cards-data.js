// cards-data.js - 寶可夢大師對戰版完整資料庫 (90張資源卡 + 10張皇家貴族卡)
const GEM_TYPES = ['ruby', 'sapphire', 'emerald', 'diamond', 'onyx'];

// 1. 10 隻稀有寶可夢夥伴（皇家貴族卡）資料定義 - 完全不重複且精準對應
const POKEMON_NOBLES = [
    { id: 'n113', name: '吉利蛋', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png', req: { ruby: 4, emerald: 4 } },
    { id: 'n122', name: '魔牆人偶', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png', req: { sapphire: 4, diamond: 4 } },
    { id: 'n139', name: '多刺菊石獸', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png', req: { sapphire: 4, emerald: 4 } },
    { id: 'n140', name: '化石盔', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png', req: { ruby: 4, onyx: 4 } },
    { id: 'n132', name: '百變怪', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', req: { diamond: 4, onyx: 4 } },
    { id: 'n137', name: '多邊獸', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png', req: { diamond: 4, sapphire: 4 } },
    { id: 'n143', name: '卡比獸', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png', req: { sapphire: 3, emerald: 3, diamond: 3 } },
    { id: 'n149', name: '快龍', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png', req: { ruby: 4, onyx: 3 } },
    { id: 'n150', name: '超夢', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', req: { diamond: 4, onyx: 4 } },
    { id: 'n151', name: '夢幻', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png', req: { ruby: 3, emerald: 3, sapphire: 3 } }
];

// 2. 90 張資源卡專屬寶可夢圖鑑編號對應表
const POKEMON_DATABASE = {
    ruby: { // 紅寶石 = 火/毒
        l1: [4, 58, 77, 37, 32, 29, 126, 136],
        l2: [5, 59, 78, 38, 33, 30],
        l3: [6, 31, 34, 146]
    },
    sapphire: { // 藍寶石 = 水/冰
        l1: [7, 60, 72, 86, 129, 120, 134, 98],
        l2: [8, 61, 73, 87, 130, 121],
        l3: [9, 144, 62, 131]
    },
    emerald: { // 綠寶石 = 草/蟲
        l1: [1, 43, 10, 13, 46, 102, 123, 127],
        l2: [2, 44, 11, 14, 47, 103],
        l3: [3, 45, 12, 15]
    },
    diamond: { // 鑽石 = 超能力/電/一般
        l1: [63, 96, 25, 81, 100, 135, 16, 115],
        l2: [64, 97, 26, 82, 101, 17],
        l3: [65, 145, 125, 18]
    },
    onyx: { // 黑瑪瑙 = 幽靈/格鬥/岩石/地面
        l1: [92, 56, 66, 74, 111, 50, 106, 107],
        l2: [93, 57, 67, 75, 112, 51],
        l3: [94, 68, 76, 142]
    }
};

function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// 3. 建立 90 張資源卡牌庫
function buildFullDeck() {
    let idCounter = 1;
    const cards = [];

    // L1 初階卡 (共 40 張)
    const l1Templates = [
        { pts: 0, cost: [0, 1, 1, 1, 1] }, 
        { pts: 0, cost: [0, 0, 2, 1, 0] }, 
        { pts: 1, cost: [0, 0, 4, 0, 0] },
        { pts: 0, cost: [2, 0, 0, 0, 2] }
    ];
    GEM_TYPES.forEach((bonus) => {
        const pList = POKEMON_DATABASE[bonus].l1;
        pList.forEach((pId, idx) => {
            const tpl = l1Templates[idx % l1Templates.length];
            const costObj = {};
            const costTypes = GEM_TYPES.filter(g => g !== bonus);
            costTypes.forEach((g, cIdx) => { if (cIdx < 2) costObj[g] = (idx % 2) + 1; });
            cards.push({ 
                id: `c${idCounter}`, level: 1, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    // L2 中階卡 (共 30 張)
    const l2Templates = [
        { pts: 1, cost: [0, 2, 2, 3, 0] }, 
        { pts: 2, cost: [0, 0, 5, 0, 0] }, 
        { pts: 3, cost: [6, 0, 0, 0, 0] }
    ];
    GEM_TYPES.forEach((bonus) => {
        const pList = POKEMON_DATABASE[bonus].l2;
        pList.forEach((pId, idx) => {
            const tpl = l2Templates[idx % l2Templates.length];
            const costObj = {};
            const costTypes = GEM_TYPES.filter(g => g !== bonus);
            costTypes.forEach((g, cIdx) => { if (cIdx < 2) costObj[g] = (idx % 3) + 2; });
            cards.push({ 
                id: `c${idCounter}`, level: 2, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    // L3 頂級卡 (共 20 張)
    const l3Templates = [
        { pts: 3, cost: [0, 3, 3, 5, 3] }, 
        { pts: 4, cost: [0, 0, 0, 7, 0] }, 
        { pts: 5, cost: [3, 0, 0, 7, 0] },
        { pts: 5, cost: [3, 3, 3, 3, 0] }
    ];
    GEM_TYPES.forEach((bonus) => {
        const pList = POKEMON_DATABASE[bonus].l3;
        pList.forEach((pId, idx) => {
            const tpl = l3Templates[idx % l3Templates.length];
            const costObj = {};
            const costTypes = GEM_TYPES.filter(g => g !== bonus);
            costTypes.forEach((g, cIdx) => { if (cIdx < 2) costObj[g] = (idx % 2) + 4; });
            cards.push({ 
                id: `c${idCounter}`, level: 3, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    return shuffle(cards);
}
