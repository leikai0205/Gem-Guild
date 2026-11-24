// cards-data.js - 100% 正統《璀璨寶石》官方數值與配方表（寶可夢大師版）
const GEM_TYPES = ['ruby', 'sapphire', 'emerald', 'diamond', 'onyx'];

// 1. 10 隻稀有寶可夢夥伴（皇家貴族卡）- 正統規則：5張雙色各4 + 5張三色各3，皆為 +3 分
const POKEMON_NOBLES = [
    { id: 'n113', name: '吉利蛋', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png', req: { ruby: 4, emerald: 4 } },
    { id: 'n122', name: '魔牆人偶', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png', req: { sapphire: 4, diamond: 4 } },
    { id: 'n139', name: '多刺菊石獸', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png', req: { sapphire: 4, emerald: 4 } },
    { id: 'n140', name: '化石盔', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png', req: { ruby: 4, onyx: 4 } },
    { id: 'n132', name: '百變怪', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png', req: { diamond: 4, onyx: 4 } },
    { id: 'n137', name: '多邊獸', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png', req: { diamond: 3, sapphire: 3, onyx: 3 } },
    { id: 'n143', name: '卡比獸', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png', req: { sapphire: 3, emerald: 3, diamond: 3 } },
    { id: 'n149', name: '快龍', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png', req: { ruby: 3, onyx: 3, emerald: 3 } },
    { id: 'n150', name: '超夢', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png', req: { diamond: 3, onyx: 3, ruby: 3 } },
    { id: 'n151', name: '夢幻', points: 3, img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png', req: { ruby: 3, emerald: 3, sapphire: 3 } }
];

// 2. 90 張資源卡專屬寶可夢圖鑑編號對應表
const POKEMON_DATABASE = {
    ruby: { // 紅卡 = 火/毒
        l1: [4, 58, 77, 37, 32, 29, 126, 136],
        l2: [5, 59, 78, 38, 33, 30],
        l3: [6, 31, 34, 146]
    },
    sapphire: { // 藍卡 = 水/冰
        l1: [7, 60, 72, 86, 129, 120, 134, 98],
        l2: [8, 61, 73, 87, 130, 121],
        l3: [9, 131, 62, 144]
    },
    emerald: { // 綠卡 = 草/蟲
        l1: [1, 43, 10, 13, 46, 102, 123, 127],
        l2: [2, 44, 11, 14, 47, 103],
        l3: [3, 45, 12, 15]
    },
    diamond: { // 米黃卡 = 超能力/電/一般
        l1: [63, 96, 25, 81, 100, 135, 16, 115],
        l2: [64, 97, 26, 82, 101, 17],
        l3: [65, 18, 125, 145]
    },
    onyx: { // 黑卡 = 幽靈/格鬥/岩石/地面
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


// 3. 90 張發展卡：依照整理表逐張設定
// 每筆資料格式：[分數, 白色, 藍色, 綠色, 紅色, 黑色]
// 白色 = diamond（遊戲黃色）
// 黑色 = onyx（遊戲紫色）
//
// 每種永久顏色：
// L1：8 張、L2：6 張、L3：4 張

const CARD_COST_ORDER = [
    'diamond',
    'sapphire',
    'emerald',
    'ruby',
    'onyx'
];

// 每種永久顏色的 18 張卡牌資料
const CARD_DATA_BY_BONUS = {

    // 白色永久卡（遊戲黃色）
    diamond: [
        // Level 1
        [0, 0, 3, 0, 0, 0],
        [1, 0, 0, 4, 0, 0],
        [0, 0, 0, 0, 2, 1],
        [0, 0, 2, 0, 0, 2],
        [0, 3, 1, 0, 0, 1],
        [0, 0, 2, 2, 0, 1],
        [0, 0, 1, 1, 1, 1],
        [0, 0, 1, 2, 1, 1],

        // Level 2
        [2, 0, 0, 0, 5, 0],
        [3, 6, 0, 0, 0, 0],
        [2, 0, 0, 0, 5, 3],
        [2, 0, 0, 1, 4, 2],
        [1, 0, 0, 3, 2, 2],
        [1, 2, 3, 0, 3, 0],

        // Level 3
        [4, 0, 0, 0, 0, 7],
        [4, 3, 0, 0, 3, 6],
        [3, 0, 3, 3, 5, 3],
        [5, 3, 0, 0, 0, 7]
    ],

    // 藍色永久卡
    sapphire: [
        // Level 1
        [0, 0, 0, 0, 0, 3],
        [1, 0, 0, 0, 4, 0],
        [0, 1, 0, 0, 0, 2],
        [0, 0, 0, 2, 0, 2],
        [0, 0, 1, 3, 1, 0],
        [0, 1, 0, 2, 2, 0],
        [0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 2, 1],

        // Level 2
        [2, 0, 5, 0, 0, 0],
        [3, 0, 6, 0, 0, 0],
        [2, 5, 3, 0, 0, 0],
        [2, 2, 0, 0, 1, 4],
        [1, 0, 2, 2, 3, 0],
        [1, 0, 2, 3, 0, 3],

        // Level 3
        [4, 7, 0, 0, 0, 0],
        [4, 6, 3, 0, 0, 3],
        [3, 3, 0, 3, 3, 5],
        [5, 7, 3, 0, 0, 0]
    ],

    // 綠色永久卡
    emerald: [
        // Level 1
        [0, 0, 0, 0, 3, 0],
        [1, 0, 0, 0, 0, 4],
        [0, 2, 1, 0, 0, 0],
        [0, 0, 2, 0, 2, 0],
        [0, 1, 3, 1, 0, 0],
        [0, 0, 1, 0, 2, 2],
        [0, 1, 1, 0, 1, 1],
        [0, 1, 1, 0, 1, 2],

        // Level 2
        [2, 0, 0, 5, 0, 0],
        [3, 0, 0, 6, 0, 0],
        [2, 0, 5, 3, 0, 0],
        [2, 4, 2, 0, 0, 1],
        [1, 2, 3, 0, 0, 2],
        [1, 3, 0, 2, 3, 0],

        // Level 3
        [4, 0, 7, 0, 0, 0],
        [4, 3, 6, 3, 0, 0],
        [3, 5, 0, 3, 3, 3],
        [5, 0, 7, 3, 0, 0]
    ],

    // 紅色永久卡
    ruby: [
        // Level 1
        [0, 3, 0, 0, 0, 0],
        [1, 4, 0, 0, 0, 0],
        [0, 0, 2, 1, 0, 0],
        [0, 2, 0, 0, 2, 0],
        [0, 1, 0, 0, 1, 3],
        [0, 2, 0, 1, 0, 2],
        [0, 1, 1, 1, 0, 1],
        [0, 2, 1, 1, 0, 1],

        // Level 2
        [2, 0, 0, 0, 0, 5],
        [3, 0, 0, 0, 6, 0],
        [2, 3, 0, 0, 0, 5],
        [2, 1, 4, 2, 0, 0],
        [1, 2, 0, 0, 2, 3],
        [1, 0, 3, 0, 2, 3],

        // Level 3
        [4, 0, 0, 7, 0, 0],
        [4, 0, 3, 6, 3, 0],
        [3, 3, 5, 3, 0, 3],
        [5, 0, 0, 7, 3, 0]
    ],

    // 黑色永久卡（遊戲紫色）
    onyx: [
        // Level 1
        [0, 0, 0, 3, 0, 0],
        [1, 0, 4, 0, 0, 0],
        [0, 0, 0, 2, 1, 0],
        [0, 2, 0, 2, 0, 0],
        [0, 0, 0, 1, 3, 1],
        [0, 2, 2, 0, 1, 0],
        [0, 1, 1, 1, 1, 0],
        [0, 1, 2, 1, 1, 0],

        // Level 2
        [2, 5, 0, 0, 0, 0],
        [3, 0, 0, 0, 0, 6],
        [2, 0, 0, 5, 3, 0],
        [2, 0, 1, 4, 2, 0],
        [1, 3, 2, 2, 0, 0],
        [1, 3, 0, 3, 0, 2],

        // Level 3
        [4, 0, 0, 0, 7, 0],
        [4, 0, 0, 3, 6, 3],
        [3, 3, 3, 5, 3, 0],
        [5, 0, 0, 0, 7, 3]
    ]
};


function buildFullDeck() {
    let idCounter = 1;
    const cards = [];

    // 沿用原本的寶可夢分配與圖片
    GEM_TYPES.forEach((bonus) => {

        const pokemonGroups = POKEMON_DATABASE[bonus];

        const pokemonIds = [
            ...pokemonGroups.l1,
            ...pokemonGroups.l2,
            ...pokemonGroups.l3
        ];

        const cardRows = CARD_DATA_BY_BONUS[bonus];

        cardRows.forEach((row, index) => {

            const points = row[0];

            const level =
                index < 8 ? 1 :
                index < 14 ? 2 : 3;

            const pId = pokemonIds[index];

            const cost = {};

            CARD_COST_ORDER.forEach((color, colorIndex) => {
                const amount = row[colorIndex + 1];

                if (amount > 0) {
                    cost[color] = amount;
                }
            });

            cards.push({
                id: `c${idCounter++}`,
                level,
                bonus,
                points,
                cost,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
        });
    });

    return shuffle(cards);
}

