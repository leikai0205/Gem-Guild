// pokedex-data.js
// Pokémon Guild - 寶可夢圖鑑資料
// 共 100 筆，資料依照原始 Markdown 表格整理。
// id 使用三位數（例如 001）；查詢函式也接受 1、001 或 0001。

const POKEDEX_DATA = {
    "001": {"id":"001","name":"妙蛙種子","types":["草","毒"],"height":"0.7m","weight":"6.9kg","gender":"♂ / ♀","category":"種子寶可夢","abilities":["茂盛"],"description":"在出生後的一段時間內，牠會吸收背上種子裡儲存著的營養成長。"},
    "002": {"id":"002","name":"妙蛙草","types":["草","毒"],"height":"1m","weight":"13kg","gender":"♂ / ♀","category":"種子寶可夢","abilities":["茂盛"],"description":"沐浴在陽光下越久，身體內會湧出越多力量，背上的花苞也會漸漸成長。"},
    "003": {"id":"003","name":"妙蛙花","types":["草","毒"],"height":"2m","weight":"100kg","gender":"♂ / ♀","category":"種子寶可夢","abilities":["茂盛"],"description":"由於能將沐浴的陽光轉換成能量，夏天會變得更強。"},
    "004": {"id":"004","name":"小火龍","types":["火"],"height":"0.6m","weight":"8.5kg","gender":"♂ / ♀","category":"蜥蜴寶可夢","abilities":["猛火"],"description":"尾巴上燃燒的火焰是小火龍生命力的象徵。在牠沒有活力時，火勢會變弱。"},
    "005": {"id":"005","name":"火恐龍","types":["火"],"height":"1.1m","weight":"19kg","gender":"♂ / ♀","category":"火焰寶可夢","abilities":["猛火"],"description":"當揮動燃燒著的尾巴時，周圍的溫度會不斷上升，讓對手陷入痛苦。"},
    "006": {"id":"006","name":"噴火龍","types":["火","飛行"],"height":"1.7m","weight":"90.5kg","gender":"♂ / ♀","category":"火焰寶可夢","abilities":["猛火"],"description":"當噴火龍憤怒至極時，尾巴前端就會燃起藍白色的火焰。"},
    "007": {"id":"007","name":"傑尼龜","types":["水"],"height":"0.5m","weight":"9kg","gender":"♂ / ♀","category":"小龜寶可夢","abilities":["激流"],"description":"出生後背部會鼓起形成堅硬的甲殼。能從口中吐出強而有力的泡沫。"},
    "008": {"id":"008","name":"卡咪龜","types":["水"],"height":"1m","weight":"22.5kg","gender":"♂ / ♀","category":"龜寶可夢","abilities":["激流"],"description":"蓬蓬鬆鬆的長尾巴被視為是長壽的象徵。特別深受老年人喜愛。"},
    "009": {"id":"009","name":"水箭龜","types":["水"],"height":"1.6m","weight":"85.5kg","gender":"♂ / ♀","category":"甲殼寶可夢","abilities":["激流"],"description":"為了讓自己能夠抵擋噴射水流時的後座力，於是會刻意增加體重。"},
    "010": {"id":"010","name":"綠毛蟲","types":["蟲"],"height":"0.3m","weight":"2.9kg","gender":"♂ / ♀","category":"蟲寶寶寶可夢","abilities":["鱗粉"],"description":"會從頭部的觸角釋放出強烈的氣味來趕走敵人，藉此保護自己。"},
    "011": {"id":"011","name":"鐵甲蛹","types":["蟲"],"height":"0.7m","weight":"9.9kg","gender":"♂ / ♀","category":"蛹寶可夢","abilities":["蛻皮"],"description":"雖然幾乎不動，但牠的內部正在忙碌地準備進化。"},
    "012": {"id":"012","name":"巴大蝶","types":["蟲","飛行"],"height":"1.1m","weight":"32kg","gender":"♂ / ♀","category":"蝴蝶寶可夢","abilities":["複眼"],"description":"翅膀上的鱗粉具有防水功能，因此即使在雨天也能飛翔。"},
    "013": {"id":"013","name":"獨角蟲","types":["蟲","毒"],"height":"0.3m","weight":"3.2kg","gender":"♂ / ♀","category":"毛毛蟲寶可夢","abilities":["鱗粉"],"description":"頭上的尖角有毒，會用來保護自己。"},
    "014": {"id":"014","name":"鐵殼蛹","types":["蟲","毒"],"height":"0.6m","weight":"10kg","gender":"♂ / ♀","category":"蛹寶可夢","abilities":["蛻皮"],"description":"身體被堅硬的外殼包覆，正在等待進化。"},
    "015": {"id":"015","name":"大針蜂","types":["蟲","毒"],"height":"1m","weight":"29.5kg","gender":"♂ / ♀","category":"毒蜂寶可夢","abilities":["蟲之預感"],"description":"擁有三根毒針，會以高速飛行攻擊敵人。"},
    "016": {"id":"016","name":"波波","types":["一般","飛行"],"height":"0.3m","weight":"1.8kg","gender":"♂ / ♀","category":"小鳥寶可夢","abilities":["銳利目光"],"description":"性情溫和，不喜歡戰鬥。遇到危險時會拍動翅膀揚起沙塵。"},
    "017": {"id":"017","name":"比比鳥","types":["一般","飛行"],"height":"1.1m","weight":"30kg","gender":"♂ / ♀","category":"鳥寶可夢","abilities":["銳利目光"],"description":"會在廣大的領域內飛翔，尋找獵物。"},
    "018": {"id":"018","name":"大比鳥","types":["一般","飛行"],"height":"1.5m","weight":"39.5kg","gender":"♂ / ♀","category":"鳥寶可夢","abilities":["銳利目光"],"description":"能以每小時２公里的速度飛行，強健的翅膀能掀起強風。"},
    "025": {"id":"025","name":"皮卡丘","types":["電"],"height":"0.4m","weight":"6kg","gender":"♂ / ♀","category":"鼠寶可夢","abilities":["靜電"],"description":"臉頰兩側有小小的電力袋，受到威脅時會放出電力。"},
    "026": {"id":"026","name":"雷丘","types":["電"],"height":"0.8m","weight":"30kg","gender":"♂ / ♀","category":"鼠寶可夢","abilities":["靜電"],"description":"會將電力儲存在體內，放出的電擊最高可達十萬伏特。"},
    "029": {"id":"029","name":"尼多蘭","types":["毒"],"height":"0.4m","weight":"7kg","gender":"♀","category":"毒針寶可夢","abilities":["毒刺","鬥爭心"],"description":"人們認為牠是為了保護自己嬌小的身體才演化出了威力強大的毒針。生氣時會從角的尖端噴出劇毒。"},
    "030": {"id":"030","name":"尼多娜","types":["毒"],"height":"0.8m","weight":"20kg","gender":"♀","category":"毒針寶可夢","abilities":["毒刺","鬥爭心"],"description":"和夥伴及家人在一起的時候，會收起尖刺以避免傷到彼此。一旦離開夥伴似乎就會變得不安。"},
    "031": {"id":"031","name":"尼多后","types":["毒","地面"],"height":"1.3m","weight":"60kg","gender":"♀","category":"鑽錐寶可夢","abilities":["毒刺","鬥爭心"],"description":"擅長利用長滿堅硬鱗片的身體將對手撞飛的攻擊。在保護孩子的時候會發揮最強的力量。"},
    "032": {"id":"032","name":"尼多朗","types":["毒"],"height":"0.5m","weight":"9kg","gender":"♂","category":"毒針寶可夢","abilities":["毒刺","鬥爭心"],"description":"牽動耳朵的肌肉十分發達，可以隨意將耳朵轉動到任何方向。是無論多小的聲音也不會漏聽的寶可夢。"},
    "033": {"id":"033","name":"尼多力諾","types":["毒"],"height":"0.9m","weight":"19.5kg","gender":"♂","category":"毒針寶可夢","abilities":["毒刺","鬥爭心"],"description":"有著比鑽石還要堅硬的角。感覺到敵人的氣息時，背上的刺會一起豎起來全力迎敵。"},
    "034": {"id":"034","name":"尼多王","types":["毒","地面"],"height":"1.4m","weight":"62kg","gender":"♂","category":"鑽錐寶可夢","abilities":["毒刺","鬥爭心"],"description":"粗壯的尾巴揮出的一擊有著能將堅固鐵塔折斷的驚人破壞力。一旦鬧了起來就無人能擋。"},
    "037": {"id":"037","name":"六尾","types":["火"],"height":"0.6m","weight":"9.9kg","gender":"♂ / ♀","category":"狐狸寶可夢","abilities":["引火"],"description":"遭到比自己強大的對手襲擊時，會假裝受傷來迷惑對手，然後趁機逃走。"},
    "038": {"id":"038","name":"九尾","types":["火"],"height":"1.1m","weight":"19.9kg","gender":"♂ / ♀","category":"狐狸寶可夢","abilities":["引火"],"description":"傳聞牠的９根尾巴，每一根都蘊藏著不同的神秘力量。"},
    "043": {"id":"043","name":"走路草","types":["草","毒"],"height":"0.5m","weight":"5.4kg","gender":"♂ / ♀","category":"雜草寶可夢","abilities":["葉綠素"],"description":"別名謎行草。據說每到夜裡，牠會用２條根走上長達３００公尺的距離。"},
    "044": {"id":"044","name":"臭臭花","types":["草","毒"],"height":"0.8m","weight":"8.6kg","gender":"♂ / ♀","category":"雜草寶可夢","abilities":["葉綠素"],"description":"從口中緩緩滲出的不是口水，而是類似花蜜的汁液，被牠用來引誘獵物接近。"},
    "045": {"id":"045","name":"霸王花","types":["草","毒"],"height":"1.2m","weight":"18.6kg","gender":"♂ / ♀","category":"花寶可夢","abilities":["葉綠素"],"description":"當花苞隨著「砰！」的聲響綻放後，就會開始散播能引起過敏反應的毒花粉。"},
    "046": {"id":"046","name":"派拉斯","types":["蟲","草"],"height":"0.3m","weight":"5.4kg","gender":"♂ / ♀","category":"蘑菇寶可夢","abilities":["孢子","乾燥皮膚"],"description":"不知是因為濕氣不夠還是營養不足，阿羅拉的派拉斯背上的蘑菇長得都不怎麼樣。"},
    "047": {"id":"047","name":"派拉斯特","types":["蟲","草"],"height":"1m","weight":"29.5kg","gender":"♂ / ♀","category":"蘑菇寶可夢","abilities":["孢子","乾燥皮膚"],"description":"本體是背上的蘑菇，底下的蟲子幾乎已經死亡。一旦蘑菇脫落，牠就再也不會動了。"},
    "050": {"id":"050","name":"地鼠","types":["地面"],"height":"0.2m","weight":"0.8kg","gender":"♂ / ♀","category":"鼴鼠寶可夢","abilities":["沙隱","沙穴"],"description":"在大約１公尺深的地底挖洞前進，靠啃食樹根之類的東西生存。偶爾會到地面上露個臉。"},
    "051": {"id":"051","name":"三地鼠","types":["地面"],"height":"0.7m","weight":"33.3kg","gender":"♂ / ♀","category":"鼴鼠寶可夢","abilities":["沙隱","沙穴"],"description":"三顆頭會輪流活動，是為了讓周圍的土變得更鬆更好挖。"},
    "056": {"id":"056","name":"猴怪","types":["格鬥"],"height":"0.5m","weight":"28kg","gender":"♂ / ♀","category":"豬猴寶可夢","abilities":["幹勁","憤怒穴位"],"description":"在樹上群居的寶可夢。和夥伴走散的猴怪會因為按捺不住寂寞而動不動就生氣。"},
    "057": {"id":"057","name":"火爆猴","types":["格鬥"],"height":"1m","weight":"32kg","gender":"♂ / ♀","category":"豬猴寶可夢","abilities":["幹勁","憤怒穴位"],"description":"光是感覺到他方的視線都會暴怒起來，然後去追和牠對到眼的傢伙。"},
    "058": {"id":"058","name":"卡蒂狗","types":["火"],"height":"0.7m","weight":"19kg","gender":"♂ / ♀","category":"小狗寶可夢","abilities":["威嚇","引火"],"description":"能毫不畏懼地去對抗比自己更強更大的對手。性格非常勇敢可靠。"},
    "059": {"id":"059","name":"風速狗","types":["火"],"height":"1.9m","weight":"155kg","gender":"♂ / ♀","category":"傳說寶可夢","abilities":["威嚇","引火"],"description":"根據過去的畫軸記載，牠在草原上奔馳的姿態擄獲了眾多人心。"},
    "060": {"id":"060","name":"蚊香蝌蚪","types":["水"],"height":"0.6m","weight":"12.4kg","gender":"♂ / ♀","category":"蝌蚪寶可夢","abilities":["儲水","濕氣"],"description":"腹部的漩渦是透過皮膚可以看到的部分內臟。在牠進食後可以明顯看到。"},
    "061": {"id":"061","name":"蚊香君","types":["水"],"height":"1m","weight":"20kg","gender":"♂ / ♀","category":"蝌蚪寶可夢","abilities":["儲水","濕氣"],"description":"２條腿很發達，雖然可以在陸地上生活，但不知為何更喜歡生活在水裡。"},
    "062": {"id":"062","name":"蚊香泳士","types":["水","格鬥"],"height":"1.3m","weight":"54kg","gender":"♂ / ♀","category":"蝌蚪寶可夢","abilities":["儲水","濕氣"],"description":"擅長運用全身所有的肌肉展現躍動感十足的泳技，但不知為何卻生活在陸地上。"},
    "063": {"id":"063","name":"凱西","types":["超能力"],"height":"0.9m","weight":"19.5kg","gender":"♂ / ♀","category":"念力寶可夢","abilities":["同步","精神力"],"description":"即使在睡夢中也會使出各式各樣的超能力，所以很難分辨牠是不是醒著。"},
    "064": {"id":"064","name":"勇基拉","types":["超能力"],"height":"1.3m","weight":"56.5kg","gender":"♂ / ♀","category":"念力寶可夢","abilities":["同步","精神力"],"description":"會盯著銀湯匙瞧，來增強並釋放精神力量。換成金湯匙似乎就沒用了。"},
    "065": {"id":"065","name":"胡地","types":["超能力"],"height":"1.5m","weight":"48kg","gender":"♂ / ♀","category":"念力寶可夢","abilities":["同步","精神力"],"description":"手中的湯匙是胡地用超能力製造出來的，是全世界獨一無二的作品。"},
    "066": {"id":"066","name":"腕力","types":["格鬥"],"height":"0.8m","weight":"19.5kg","gender":"♂ / ♀","category":"怪力寶可夢","abilities":["毅力","無防守"],"description":"全身都是肌肉，雖然體型只有小孩那麼大，卻可以扔飛１００個大人。"},
    "067": {"id":"067","name":"豪力","types":["格鬥"],"height":"1.5m","weight":"70.5kg","gender":"♂ / ♀","category":"怪力寶可夢","abilities":["毅力","無防守"],"description":"因為肉體非常強韌，所以戴著力量限制腰帶來控制力量。"},
    "068": {"id":"068","name":"怪力","types":["格鬥"],"height":"1.6m","weight":"130kg","gender":"♂ / ♀","category":"怪力寶可夢","abilities":["毅力","無防守"],"description":"能夠迅速活動４隻手臂，從各種角度毫不停歇地使出拳擊或手刀。"},
    "072": {"id":"072","name":"瑪瑙水母","types":["水","毒"],"height":"0.9m","weight":"45.5kg","gender":"♂ / ♀","category":"水母寶可夢","abilities":["恆淨之軀","污泥漿"],"description":"退潮之後，能見到被留在沙灘上而曬得乾巴巴的瑪瑙水母。"},
    "073": {"id":"073","name":"毒刺水母","types":["水","毒"],"height":"1.6m","weight":"55kg","gender":"♂ / ♀","category":"水母寶可夢","abilities":["恆淨之軀","污泥漿"],"description":"罕見地大量出現時，周圍海域的魚寶可夢會一隻不剩地全部消失。"},
    "074": {"id":"074","name":"小拳石","types":["岩石","地面"],"height":"0.4m","weight":"20kg","gender":"♂ / ♀","category":"岩石寶可夢","abilities":["堅硬腦袋","結實"],"description":"不動的時候怎麼看都是個小石頭。要是因此不小心一腳踩上去，牠是會猛揮拳頭大發雷霆的。"},
    "075": {"id":"075","name":"隆隆石","types":["岩石","地面"],"height":"1m","weight":"105kg","gender":"♂ / ♀","category":"岩石寶可夢","abilities":["堅硬腦袋","結實"],"description":"因為走路也走不快，所以會翻滾來移動。途中有什麼牠都不在意。"},
    "076": {"id":"076","name":"隆隆岩","types":["岩石","地面"],"height":"1.4m","weight":"300kg","gender":"♂ / ♀","category":"重量級寶可夢","abilities":["堅硬腦袋","結實"],"description":"身上覆蓋著像岩盤般堅硬的殼。隨著１年１次的蛻皮，身體會變得越來越大。"},
    "077": {"id":"077","name":"小火馬","types":["火"],"height":"1m","weight":"30kg","gender":"♂ / ♀","category":"火馬寶可夢","abilities":["逃跑","引火"],"description":"剛出生的時候不擅長奔跑，但隨著和夥伴們不斷地賽跑，會逐漸鍛鍊出強健的腳力。"},
    "078": {"id":"078","name":"烈焰馬","types":["火"],"height":"1.7m","weight":"95kg","gender":"♂ / ♀","category":"火馬寶可夢","abilities":["逃跑","引火"],"description":"任由燃燒的鬃毛隨風飄揚，以每小時２４０公里的速度在大草原上自在奔馳。"},
    "081": {"id":"081","name":"小磁怪","types":["電","鋼"],"height":"0.3m","weight":"6kg","gender":"","category":"磁鐵寶可夢","abilities":["磁力","結實"],"description":"從左右兩邊的組件發出的電磁波能阻礙重力，使牠浮在空中。"},
    "082": {"id":"082","name":"三合一磁怪","types":["電","鋼"],"height":"1m","weight":"60kg","gender":"","category":"磁鐵寶可夢","abilities":["磁力","結實"],"description":"３隻小磁怪因著強烈的磁力而結合。只要靠近牠就會發生強烈的耳鳴。"},
    "086": {"id":"086","name":"小海獅","types":["水"],"height":"1.1m","weight":"90kg","gender":"♂ / ♀","category":"海獅寶可夢","abilities":["厚脂肪","濕潤之軀"],"description":"頭上有著非常堅硬的突起部分。能夠用頭錘撞破冰山來開路前進。"},
    "087": {"id":"087","name":"白海獅","types":["水","冰"],"height":"1.7m","weight":"120kg","gender":"♂ / ♀","category":"海獅寶可夢","abilities":["厚脂肪","濕潤之軀"],"description":"會在水溫變低的夜晚為了尋找食物而四處游動。白天會在淺海的海底睡覺。"},
    "092": {"id":"092","name":"鬼斯","types":["幽靈","毒"],"height":"1.3m","weight":"0.1kg","gender":"♂ / ♀","category":"氣體狀寶可夢","abilities":["飄浮"],"description":"會用氣體狀的身體纏住獵物，再從皮膚緩緩地注入毒素，使對手變得虛弱。"},
    "093": {"id":"093","name":"鬼斯通","types":["幽靈","毒"],"height":"1.6m","weight":"0.1kg","gender":"♂ / ♀","category":"氣體狀寶可夢","abilities":["飄浮"],"description":"喜歡躲在黑暗中伸出氣體構成的手去拍人的肩膀。一旦被接觸到，身體便會抖個不停。"},
    "094": {"id":"094","name":"耿鬼","types":["幽靈","毒"],"height":"1.5m","weight":"40.5kg","gender":"♂ / ♀","category":"影子寶可夢","abilities":["詛咒之軀"],"description":"會潛進獵物的影子裡，然後靜靜地等待奪取性命的機會到來。"},
    "096": {"id":"096","name":"催眠貘","types":["超能力"],"height":"1m","weight":"32.4kg","gender":"♂ / ♀","category":"催眠寶可夢","abilities":["不眠","預知夢"],"description":"能記住所有自己吃下的夢。由於小孩的夢更加美味，因此幾乎不吃大人的夢。"},
    "097": {"id":"097","name":"引夢貘人","types":["超能力"],"height":"1.6m","weight":"75.6kg","gender":"♂／♀","category":"催眠寶可夢","abilities":["不眠","預知夢"],"description":"據說牠和對手對到眼時，就會使出催眠術等各式各樣的超能力。"},
    "098": {"id":"098","name":"大鉗蟹","types":["水"],"height":"0.4m","weight":"6.5kg","gender":"♂／♀","category":"清水蟹寶可夢","abilities":["怪力鉗","硬殼盔甲"],"description":"能在海邊找到牠。巨大的鉗子即使斷掉也會再長出來。"},
    "100": {"id":"100","name":"霹靂電球","types":["電"],"height":"0.5m","weight":"10.4kg","gender":"","category":"球寶可夢","abilities":["隔音","靜電"],"description":"靠著翻滾身體來移動，如果地面凹凸不平，就會受到衝擊而爆炸。"},
    "101": {"id":"101","name":"頑皮雷彈","types":["電"],"height":"1.2m","weight":"66.6kg","gender":"","category":"球寶可夢","abilities":["隔音","靜電"],"description":"雖然儲存的電能越多，移動的速度也會變得越快，但同時也會變得更容易爆炸。"},
    "102": {"id":"102","name":"蛋蛋","types":["草","超能力"],"height":"0.4m","weight":"2.5kg","gender":"♂／♀","category":"蛋寶可夢","abilities":["葉綠素"],"description":"若以為是蛋而去觸摸牠，就會被不斷聚集而來的蛋蛋的夥伴集體攻擊。"},
    "103": {"id":"103","name":"椰蛋樹","types":["草","超能力"],"height":"2m","weight":"120kg","gender":"♂／♀","category":"椰子寶可夢","abilities":["葉綠素"],"description":"被稱為會走路的熱帶雨林。每個果實都有自己的臉，而且各有各的思想。"},
    "106": {"id":"106","name":"飛腿郎","types":["格鬥"],"height":"1.5m","weight":"49.8kg","gender":"♂","category":"踢腿寶可夢","abilities":["柔軟","捨身"],"description":"在踢技命中的瞬間，會讓腳底的肌肉變硬，使威力提升至極限。"},
    "107": {"id":"107","name":"快拳郎","types":["格鬥"],"height":"1.4m","weight":"50.2kg","gender":"♂","category":"拳擊寶可夢","abilities":["銳利目光","鐵拳"],"description":"會左右使出組合拳把敵手逼入絕境，再以時速高達５００公里的直拳一口氣打倒對方。"},
    "111": {"id":"111","name":"獨角犀牛","types":["地面","岩石"],"height":"1m","weight":"115kg","gender":"♂／♀","category":"尖尖寶可夢","abilities":["避雷針","堅硬腦袋"],"description":"雖然會把半徑１０公里的範圍當作地盤，但跑著跑著似乎就會忘記自己的地盤在哪裡。"},
    "112": {"id":"112","name":"鑽角犀獸","types":["地面","岩石"],"height":"1.9m","weight":"120kg","gender":"♂／♀","category":"鑽錐寶可夢","abilities":["避雷針","堅硬腦袋"],"description":"角的威力足以粉碎鑽石原石。會與夥伴碰撞彼此的角，藉此來打磨打亮它。"},
    "113": {"id":"113","name":"吉利蛋","types":["一般"],"height":"1.1m","weight":"34.6kg","gender":"♀","category":"蛋寶可夢","abilities":["自然回復","天恩"],"description":"心地很善良的寶可夢，會生出營養滿分的蛋分給受傷的寶可夢和人類。"},
    "115": {"id":"115","name":"袋獸","types":["一般"],"height":"2.2m","weight":"80kg","gender":"♀","category":"親子寶可夢","abilities":["早起","膽量"],"description":"把自己的孩子放進腹部的袋子裡保護，會毫不留情地狠狠教訓傷害自己孩子的傢伙。"},
    "120": {"id":"120","name":"海星星","types":["水"],"height":"0.8m","weight":"34.5kg","gender":"","category":"星形寶可夢","abilities":["發光","自然回復"],"description":"在各地都流傳著星星落到海中之後變成了海星星的民間傳說。"},
    "121": {"id":"121","name":"寶石海星","types":["水","超能力"],"height":"1.1m","weight":"80kg","gender":"","category":"謎寶可夢","abilities":["發光","自然回復"],"description":"閃耀的核心被人們稱為海中寶石。有人把它變成昂貴的飾品，在暗地裡偷偷買賣。"},
    "122": {"id":"122","name":"魔牆人偶","types":["超能力","妖精"],"height":"1.3m","weight":"54.5kg","gender":"♂／♀","category":"屏障寶可夢","abilities":["隔音","過濾"],"description":"會用手指在空中描繪出看不見的牆壁，阻擋敵人的攻擊。"},
    "123": {"id":"123","name":"飛天螳螂","types":["蟲","飛行"],"height":"1.5m","weight":"56kg","gender":"♂／♀","category":"螳螂寶可夢","abilities":["蟲之預感","技術高手"],"description":"會用鋒利的鐮刀割開草叢前進。因為動作實在太快，甚至無法用肉眼看清。"},
    "125": {"id":"125","name":"電擊獸","types":["電"],"height":"1.1m","weight":"30kg","gender":"♂／♀","category":"電擊寶可夢","abilities":["靜電"],"description":"身體隨時都在放電，所以只要靠近牠，頭髮就會倒豎起來。"},
    "126": {"id":"126","name":"鴨嘴火獸","types":["火"],"height":"1.3m","weight":"44.5kg","gender":"♂／♀","category":"吐火寶可夢","abilities":["火焰之軀"],"description":"在火山口附近被發現。會從口中吐出火焰。體溫高達１２００度。"},
    "127": {"id":"127","name":"凱羅斯","types":["蟲"],"height":"1.5m","weight":"55kg","gender":"♂／♀","category":"鍬形蟲寶可夢","abilities":["怪力鉗","破格"],"description":"會和鍬農炮蟲爭奪地盤。不知為何，在阿羅拉這裡，牠和赫拉克羅斯的關係相當不錯。"},
    "129": {"id":"129","name":"鯉魚王","types":["水"],"height":"0.9m","weight":"10kg","gender":"♂／♀","category":"魚寶可夢","abilities":["悠游自如"],"description":"沒力量的可憐寶可夢。偶爾跳得比較高時，也只是勉強高過２公尺而已。"},
    "130": {"id":"130","name":"暴鯉龍","types":["水","飛行"],"height":"6.5m","weight":"235kg","gender":"♂／♀","category":"凶惡寶可夢","abilities":["威嚇"],"description":"性情非常粗暴，據說一旦暴鯉龍開始大鬧，就會有持續一個月不停止的情況。"},
    "131": {"id":"131","name":"拉普拉斯","types":["水","冰"],"height":"2.5m","weight":"220kg","gender":"♂／♀","category":"乘載寶可夢","abilities":["儲水","硬殼盔甲"],"description":"會把人類載在背上渡過大海。據說在牠心情好的時候，還會用美妙的叫聲來唱歌。"},
    "132": {"id":"132","name":"百變怪","types":["一般"],"height":"0.3m","weight":"4kg","gender":"","category":"變身寶可夢","abilities":["柔軟"],"description":"雖然可以變身得很完美，但一旦被逗笑，就會因鬆懈而解除變身。"},
    "134": {"id":"134","name":"水伊布","types":["水"],"height":"1m","weight":"29kg","gender":"♂／♀","category":"吐泡寶可夢","abilities":["儲水"],"description":"雖然棲息在水邊，但由於尾巴上有像是魚的鰭，因此有的人會把牠誤認成人魚。"},
    "135": {"id":"135","name":"雷伊布","types":["電"],"height":"0.8m","weight":"24.5kg","gender":"♂／♀","category":"雷寶可夢","abilities":["蓄電"],"description":"會把細胞發出的微弱電流都集中起來釋放強力的電擊。"},
    "136": {"id":"136","name":"火伊布","types":["火"],"height":"0.9m","weight":"25kg","gender":"♂／♀","category":"火寶可夢","abilities":["引火"],"description":"會將吸入的空氣送進體內的火囊轉化成１７００度的火焰後再吐出來。"},
    "137": {"id":"137","name":"多邊獸","types":["一般"],"height":"0.8m","weight":"36.5kg","gender":"","category":"虛擬寶可夢","abilities":["複製","下載"],"description":"人工創造的寶可夢。沒有呼吸，因此被期待在任何地方都能大展身手。"},
    "139": {"id":"139","name":"多刺菊石獸","types":["岩石","水"],"height":"1m","weight":"35kg","gender":"♂／♀","category":"漩渦寶可夢","abilities":["悠游自如","硬殼盔甲"],"description":"被認為是因為身上沉重的殼而滅絕的古代寶可夢。似乎是章魚桶的遠祖。"},
    "140": {"id":"140","name":"化石盔","types":["岩石","水"],"height":"0.5m","weight":"11.5kg","gender":"♂／♀","category":"甲殼寶可夢","abilities":["悠游自如","戰鬥盔甲"],"description":"３億年前十分常見的寶可夢。據說在某個地區至今仍偶爾能看見活著的化石盔。"},
    "142": {"id":"142","name":"化石翼龍","types":["岩石","飛行"],"height":"1.8m","weight":"59kg","gender":"♂／♀","category":"化石寶可夢","abilities":["堅硬腦袋","壓迫感"],"description":"由琥珀中殘留的基因還原而來。性情比想像中更加兇暴，甚至還出現了犧牲者。"},
    "143": {"id":"143","name":"卡比獸","types":["一般"],"height":"2.1m","weight":"460kg","gender":"♂／♀","category":"瞌睡寶可夢","abilities":["免疫","厚脂肪"],"description":"除了睡著時之外，總是不斷在進食。是個一天能吃光４００公斤食物的大胃王。"},
    "144": {"id":"144","name":"急凍鳥","types":["冰","飛行"],"height":"1.7m","weight":"55.4kg","gender":"","category":"冰凍寶可夢","abilities":["壓迫感"],"description":"操縱冰的傳說的鳥寶可夢。因為拍動翅膀就能冷卻空氣，所以據說急凍鳥飛過的地方就會下雪。"},
    "145": {"id":"145","name":"閃電鳥","types":["電","飛行"],"height":"1.6m","weight":"52.6kg","gender":"","category":"電擊寶可夢","abilities":["壓迫感"],"description":"操縱電的傳說的鳥寶可夢。平時生活在雷雲之中。被雷電擊中時體內會湧現出力量。"},
    "146": {"id":"146","name":"火焰鳥","types":["火","飛行"],"height":"2m","weight":"60kg","gender":"","category":"火焰寶可夢","abilities":["壓迫感"],"description":"操縱火的傳說的鳥寶可夢。據說受傷時會鑽進火山口的熔岩裡，燃燒全身來治癒身上的傷口。"},
    "149": {"id":"149","name":"快龍","types":["龍","飛行"],"height":"2.2m","weight":"210kg","gender":"♂／♀","category":"龍寶可夢","abilities":["精神力"],"description":"在廣大海洋的某處，似乎存在著只群居著快龍的島。"},
    "150": {"id":"150","name":"超夢","types":["超能力"],"height":"2m","weight":"122kg","gender":"","category":"基因寶可夢","abilities":["壓迫感"],"description":"透過操作基因製造出的寶可夢。人類的科技可以造出牠的身體，卻無法造出一顆溫柔的心。"},
    "151": {"id":"151","name":"夢幻","types":["超能力"],"height":"0.4m","weight":"4kg","gender":"","category":"新種寶可夢","abilities":["同步"],"description":"據說牠有著所有寶可夢的基因。因為可以隨心所欲地隱形，所以就算接近人類也完全不會被察覺。"}
};

// 將圖鑑編號統一轉成三位數格式。
// 例如：1、001、0001 都會轉成 "001"。
function normalizePokedexId(id) {
    if (id === null || id === undefined || String(id).trim() === "") return "";
    const number = Number(String(id).trim());
    if (!Number.isInteger(number) || number < 0) return "";
    return String(number).padStart(3, "0");
}

// 依圖鑑編號取得資料；找不到時回傳 null。
function getPokedexEntry(id) {
    const normalizedId = normalizePokedexId(id);
    return POKEDEX_DATA[normalizedId] || null;
}

// 讓遊戲其他程式可以讀取。
if (typeof window !== "undefined") {
    window.POKEDEX_DATA = POKEDEX_DATA;
    window.getPokedexEntry = getPokedexEntry;
}
