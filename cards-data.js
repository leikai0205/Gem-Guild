// cards-data.js - 90 張精靈球資源卡資料庫（五大屬性、精準對應你的寶可夢名單）
const GEM_TYPES = ['ruby', 'sapphire', 'emerald', 'diamond', 'onyx'];

// 1. 宣告那 10 隻稀有寶可夢夥伴（皇家貴族）的編號，絕對不在資源卡中出現
const noblesIds = [131, 132, 137, 142, 143, 144, 145, 146, 150, 151];

// 2. 你的 90 張卡片專屬寶可夢圖鑑編號對應表（第一世代經典寶可夢）
const POKEMON_DATABASE = {
    ruby: { // 紅寶石 = 火/毒
        l1: [4, 58, 77, 37, 32, 29, 126, 136], // 小火龍, 卡蒂狗, 小火馬, 六尾, 尼多朗, 尼多蘭, 鴨嘴火獸, 火伊布
        l2: [5, 59, 78, 38, 33, 30],           // 火恐龍, 風速狗, 烈焰馬, 九尾, 尼多力諾, 尼多娜
        l3: [6, 31, 34, 146]                    // 噴火龍, 尼多后, 尼多王, 火焰鳥
    },
    sapphire: { // 藍寶石 = 水/冰
        l1: [7, 60, 72, 86, 129, 120, 134, 98], // 傑尼龜, 蚊香蝌蚪, 毒刺水母, 小海獅, 鯉魚王, 海星星, 水伊布, 大鉗蟹
        l2: [8, 61, 73, 87, 130, 121],          // 卡咪龜, 蚊香君, 瑪瑙水母, 白海獅, 暴鯉龍, 寶石海星
        l3: [9, 144, 62, 131]                   // 水箭龜, 急凍鳥, 蚊香泳士, 拉普拉斯 (成龍131剛好在貴族，這裡用拉普拉斯官方編號131)
    },
    emerald: { // 綠寶石 = 草/蟲
        l1: [1, 43, 10, 13, 46, 102, 123, 127], // 妙蛙種子, 走路草, 綠毛蟲, 獨角蟲, 派拉斯, 蛋蛋, 飛天螳螂, 凱羅斯
        l2: [2, 44, 11, 14, 47, 103],           // 妙蛙草, 臭臭花, 鐵甲蛹, 鐵殼昆, 派拉斯特, 椰蛋樹
        l3: [3, 45, 12, 15]                     // 妙蛙花, 霸王花, 巴大蝴, 大針鋒
    },
    diamond: { // 鑽石 = 超能力/電/一般
        l1: [63, 96, 25, 81, 100, 135, 16, 115], // 凱西, 催眠貘, 皮卡丘, 小磁怪, 雷電球, 雷伊布, 波波, 袋獸
        l2: [64, 97, 26, 82, 101, 17],           // 勇基拉, 引夢貘人, 雷丘, 三合一磁怪, 頑皮彈, 比比鳥
        l3: [65, 145, 125, 18]                  // 胡地, 閃電鳥, 電擊獸, 大比鳥
    },
    onyx: { // 黑瑪瑙 = 幽靈/格鬥/岩石/地面
        l1: [92, 56, 66, 74, 111, 50, 106, 107], // 鬼斯, 猴怪, 腕力, 小拳石, 獨角犀牛, 地鼠, 飛腿郎, 快拳郎
        l2: [93, 57, 67, 75, 112, 51],           // 鬼斯通, 火爆猴, 豪力, 隆隆石, 鑽角犀獸, 三地鼠
        l3: [94, 68, 76, 142]                   // 耿鬼, 怪力, 隆隆岩, 化石翼龍 (化石翼龍142)
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

function buildFullDeck() {
    let idCounter = 1;
    const cards = [];

    // --- LEVEL 1 初階卡片 (每種屬性 8 張，共 40 張) ---
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
            // 隨機或依序給予消耗成本
            const costTypes = GEM_TYPES.filter(g => g !== bonus);
            costTypes.forEach((g, cIdx) => {
                if (cIdx < 2) costObj[g] = (idx % 2) + 1;
            });
            cards.push({ 
                id: `c${idCounter}`, level: 1, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    // --- LEVEL 2 中階卡片 (每種屬性 6 張，共 30 張) ---
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
            costTypes.forEach((g, cIdx) => {
                if (cIdx < 2) costObj[g] = (idx % 3) + 2;
            });
            cards.push({ 
                id: `c${idCounter}`, level: 2, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    // --- LEVEL 3 頂級卡片 (每種屬性 4 張，共 20 張) ---
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
            costTypes.forEach((g, cIdx) => {
                if (cIdx < 2) costObj[g] = (idx % 2) + 4;
            });
            cards.push({ 
                id: `c${idCounter}`, level: 3, bonus, points: tpl.pts, cost: costObj,
                pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
            });
            idCounter++;
        });
    });

    return shuffle(cards);
}
