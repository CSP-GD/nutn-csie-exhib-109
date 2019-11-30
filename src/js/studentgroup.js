export let studentGroupJson = [
    {
        groupID: 0, //專題編號
        projectName: "教學機器人", //專題名稱
        imgSrc: require("../../studentgroup/00/img/專題照.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/00/pdf/專題海報.pdf"), //檔案連結
        fromLab: "知識本體應用暨軟體工程實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `學習時有時會遇到一些觀念不懂又錯過立即發問的時機而使整個學習進度落後，若有人能在有疑問時提供協助，重複指導困惑之處，必能讓學生有更大動力進行學習。故本專題應用ASUS Zenbo機器人，作為國小數學輔助的課程指導。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10459042", studentName: "田凱寧" }
        ],
        time: { start: "13:00", end: "13:07" }
    },
    /* 第一組 */
    {
        groupID: 1, //專題編號
        projectName: "智慧型產品管理系統", //專題名稱
        imgSrc: require("../../studentgroup/01/img/商品管理系統GUI.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/01/pdf/第一組109畢業專題展海報.pdf"), //檔案連結
        fromLab: "知識本體應用暨軟體工程實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `由於觀察到傳統商家管理商品的繁瑣，以及耗費許多人力成本，因此建立出一套商品管理系統，且主要有分兩個方向，第一，能用資料庫對商品做分類，第二，能將商品利用利潤以及銷售的好壞進行商機的分析，讓商家能夠對於商機好的商品做出分類，希望能提升整個商店的營運狀況。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10459044", studentName: "洪誠安" }
        ],
        time: { start: "13:07", end: "13:14" }
    },
    /* 第二組 */
    {
        groupID: 2, //專題編號
        projectName: "Deep Learning for Polyp Detection in Colonoscopy Images", //專題名稱
        imgSrc: require("../../studentgroup/02/img/image.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: "", //檔案連結
        fromLab: "智慧型機器人實驗室", //所屬實驗室
        summarys: ``, //專題摘要
        groupStudents: [
            { studentID: "S10559001", studentName: "徐偉倫" },
            { studentID: "S10559044", studentName: "洪于婕" }
        ],
        time: { start: "13:14", end: "13:21" }
    },
    /* 第三組 */
    {
        groupID: 3, //專題編號
        projectName: "應用資料探勘演算法於信用卡客戶違約資料的分析與預測", //專題名稱
        imgSrc: require("../../studentgroup/03/img/專題照片.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/03/pdf/專題海報3.pdf"), //檔案連結
        fromLab: "多媒體網路實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `我們將運用從UCI資料平台得到的信用卡客戶默認支付資料集，我們希望對它進行分析並找出擁有什麼樣特徵的客戶會違約；我們利用Python語言，並運用Cart決策樹演算法、KNN演算法、貝氏演算法、ANN演算法 針對不同性別、年齡、教育程度、過去數月付款情況……等等來對客戶是否違約來進行分析，經過各項研究進行參數調整分析並得到最佳結果的演算法，同時找出資料的規則，藉以供相關人士作參考，提高他們的便利性。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559002", studentName: "蘇政穎" },
            { studentID: "S10559004", studentName: "陳銘濡" }
        ],
        time: { start: "13:21", end: "13:28" }
    },
    /* 第四組 */
    {
        groupID: 4, //專題編號
        projectName: "基於openpose視力自動檢測", //專題名稱
        imgSrc: "", //專題截圖
        videoSrc: "", //專題影片
        fileSrc: "", //檔案連結
        fromLab: "資料系統實驗室", //所屬實驗室
        summarys: ``, //專題摘要
        groupStudents: [
            { studentID: "S10559003", studentName: "林迺航" },
            { studentID: "S10559022", studentName: "廖毅軒" }
        ],
        time: { start: "13:28", end: "13:35" }
    },
    /* 第五組 */
    {
        groupID: 5, //專題編號
        projectName: "以行動裝置實現表面粗糙度之量測", //專題名稱
        imgSrc: require("../../studentgroup/05/img/385120.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/05/pdf/海報(以行動裝置實現表面粗糙度之量測).pdf"), //檔案連結
        fromLab: "資料庫與資訊知識系統實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `在機械及鋼鐵製程中，表面粗糙度的即時量測是很重要的環節，如製品的摩擦力和耐磨性、零件與零件的契合度、物品耐用度都與表面粗糙程度有密切關聯。我們透過光學的方式，在手機上加裝放大倍率之物鏡，作為取得待測物體表面影像的方法，經影像處理後，進入卷積神經網路擷取影像特徵並做回歸，以預測出表面粗糙度(Ra)。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559005", studentName: "高嘉謙" },
            { studentID: "S10559006", studentName: "郭峻霖" }
        ],
        time: { start: "13:35", end: "13:42" }
    },
    /* 第六組 */
    {
        groupID: 6, //專題編號
        projectName: "應用ANN、KNN、CART決策樹以及貝氏分類於銀行客戶定存分析", //專題名稱
        imgSrc: require("../../studentgroup/06/img/專題照.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/06/pdf/專題海報_109第六組_丁吾心_羅宇宸.pdf"), //檔案連結
        fromLab: "多媒體網路實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `在資訊發達的時代，資料的收集和取得都已經變得相對容易，但是這些資料的處理與分析還是要依靠自己的努力，運用各式各樣的資訊探勘演算法，找出可信且具有意義的資訊，才能夠體現出這些資料的價值。我們運用從UCI的開放平台得到BankMarketing的資料集，對它進行分析並找出擁有什麼樣條件或特徵的客戶在營銷活動中是否定存；我們利用Python來進行分析，應用四種演算法來進行分析，經過各項研究調整分析得到最優的結果。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559007", studentName: "丁吾心" },
            { studentID: "S10559026", studentName: "羅宇宸" }
        ],
        time: { start: "13:42", end: "13:49" }
    },
    /* 第七組 */
    {
        groupID: 7, //專題編號
        projectName: "鋁結構受到動態拉伸載荷影響時估計鋁結構不同週期的裂縫長度", //專題名稱
        imgSrc: require("../../studentgroup/07/img/1573182602502.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: "", //檔案連結
        fromLab: "資料系統實驗室", //所屬實驗室
        summarys: ``, //專題摘要
        groupStudents: [
            { studentID: "S10559008", studentName: "游士玄" }
        ],
        time: { start: "14:00", end: "14:07" }
    },
    /* 第八組 */
    {
        groupID: 8, //專題編號
        projectName: "智慧教學機器人", //專題名稱
        imgSrc: require("../../studentgroup/08/img/85884.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/08/pdf/海報(1).pdf"), //檔案連結
        fromLab: "知識本體應用暨軟體工程實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `近年來，AI 人工智慧已經迅速的發展並廣泛的被應用，而其中興起了一種嶄新的教育方式，「人機共學」，透過人工智慧讓機器人輔助老師的教學，讓老師的角色從講課漸漸轉為引導學生，並且不再是讓同年級的學生用同一份試題，而是基於試題反應理論(Item Response Theory, IRT)所開發之適性評量系統，根據受試者作答反應即時 調整試題難易度，以達到有效評估學生學習狀況。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559009", studentName: "李原鋌" },
            { studentID: "S10559024", studentName: "李誌軒" },
            { studentID: "S10559030", studentName: "黃勝揮" }
        ],
        time: { start: "14:07", end: "14:14" }
    },
    /* 第九組 */
    {
        groupID: 9, //專題編號
        projectName: "行人軌跡預測自動避障駕駛系統", //專題名稱
        imgSrc: require("../../studentgroup/09/img/pic_3.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/09/pdf/第九組郭憲儒-吳柏賢-海報.pdf"), //檔案連結
        fromLab: "行動計算與網路實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `隨著科技的蓬勃發展，自動化汽車趨勢已不容小覷，隨之興起的自駕車概念，這些變化帶來的不只是單純的便利性，更重要的，是其背後所隱藏的許多道路安全議題。於是，我們將以Duckietown來加以模擬實際道路狀況，例如城市、街道，十字路口等。將鏡頭偵測到的道路情況送到Raspberry Pi並接著進一步的數據分析，預測道路上實際狀況，進而讓自駕車判斷出最安全路徑，達到路線分析與即時閃避障礙，藉此提升駕駛更安全的行車品質。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559010", studentName: "郭憲儒" },
            { studentID: "S10559021", studentName: "吳柏賢" }
        ],
        time: { start: "14:14", end: "14:21" }
    },
    /* 第十組 */
    {
        groupID: 10, //專題編號
        projectName: "具數位簽章之智慧型移動設備投票系統", //專題名稱
        imgSrc: require("../../studentgroup/10/img/專題照.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/10/pdf/951.pdf"), //檔案連結
        fromLab: "電腦輔助系統設計實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `本專題的主要目的是在實作一個投票系統。大部分的投票系統講求方便使用與快速設計，採取了匿名投票甚至不記名投票的方式來進行，但是這樣也造成了有心人士的灌票與重複投票。另一類的投票雖然在投票時會要求填上姓名與個人資料，但是仍然無法有效防範假冒他人資料或輸入虛假資料的情形。因此我們設計的投票系統將使用數位簽章的特性與技術，讓投票者的身份只能與他本人連結，並且投票的內容不會被他人惡意竄改，使投票結果更加的正確公正。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559012", studentName: "劉鎮維" },
            { studentID: "S10559045", studentName: "胡君愷" }
        ],
        time: { start: "14:21", end: "14:28" }
    },
    /* 第十一組 */
    {
        groupID: 11, //專題編號
        projectName: "基於群眾外包式的即時路邊停車格資訊系統", //專題名稱
        imgSrc: require("../../studentgroup/11/img/S__63496199.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/11/pdf/S10559013佘宜道.pdf"), //檔案連結
        fromLab: "多媒體與醫學影像實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `台灣由於地狹人稠，加上許多地方沒有完整方便的公共運輸，所以許多人都選擇自行開車，造成停車位一位難求的狀況。雖然現在已經有智慧停車格的出現，能夠整合資訊將空位的訊息提供給應用程式的使用者，但這需要耗費基礎建設的成本。本研究利用行動裝置的攝影機當作感測器，即時辨識出路旁的停車空位，結合GPS座標，即時上傳至資料庫，隨時更新路邊停車格空位資訊。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559013", studentName: "佘宜道" }
        ],
        time: { start: "14:28", end: "14:35" }
    },
    /* 第十二組 */
    {
        groupID: 12, //專題編號
        projectName: "四軸飛行器空拍條碼系統", //專題名稱
        imgSrc: require("../../studentgroup/12/img/IMG_0661.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/12/pdf/專題海報 改.pdf"), //檔案連結
        fromLab: "電腦輔助系統設計實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `由於四軸飛行器的應用靈活，可以去到我們人平常比較困難到達或是到不了的地方，我們將使用控制四軸飛行器進行倉庫的貨物管理，在比較大型的倉庫中使用人力揀貨速度慢且執行時間會花得更久，若我們能夠使用人為操控四軸飛行器，在倉庫的貨物管理上會大大的節省時間以及提高揀貨效率;我們讓每種貨物有自己的條碼可以讓四軸飛行器的空拍系統進行掃描，掃描後會進入到倉庫的資料庫中，再進行揀貨的動作。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559014", studentName: "廖御閎" },
            { studentID: "S10559027", studentName: "陳巍中" }
        ],
        time: { start: "14:35", end: "14:42" }
    },
    /* 第十三組 */
    {
        groupID: 13, //專題編號
        projectName: "今晚吃什麼APP－－基於群眾感測之餐廳推薦系統", //專題名稱
        imgSrc: require("../../studentgroup/13/img/pic.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/13/pdf/專題海報.jpg"), //檔案連結
        fromLab: "行動計算與網路實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `隨著網路通訊的成熟與普及，人們在日常生活中更加依賴行動裝置，連帶出現了各式新興的商業服務，許多企業便開始提供推播服務。推播服務能讓企業彈性運用且精準瞄準目標族群，不再侷限於傳統媒介，而對於使用者，更是能在這資訊爆炸的時代迅速地接收到需要的資訊。透過推播技術的即時性以及智慧型行動裝置的普及，如何利用現有技術造就生活的便利便是我們值得關注的議題。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559015", studentName: "周欣玄" },
            { studentID: "S10559018", studentName: "葉瓊斯" }
        ],
        time: { start: "14:42", end: "14:49" }
    },
    /* 第十四組 */
    {
        groupID: 14, //專題編號
        projectName: "基於腦波資料之人類情緒推論系統", //專題名稱
        imgSrc: require("../../studentgroup/14/img/messageImage_1574650417917.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/14/pdf/專題海報.pdf"), //檔案連結
        fromLab: "知識本體應用暨軟體工程實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `人類的情緒總讓人捉摸不定，情緒反應了我們的心理狀態，如果處理不好，很可能會造成心理疾病或社會問題，有些憂鬱症患者是屬於「陽光型憂鬱症」，因此單從表情及動作行為難以判斷一個人的內心狀態。我們希望藉由分析無法控制的腦波資訊來找出腦波訊號和情緒間的關聯，希望能及早避免憾事發生，並將此技術應用在各領域。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559016", studentName: "張維珊" },
            { studentID: "S10559036", studentName: "周晨瑋" }
        ],
        time: { start: "15:00", end: "15:07" }
    },
    /* 第十五組 */
    {
        groupID: 15, //專題編號
        projectName: "運用生成對抗網路發展適用於提升養殖池水下影像品質之研究", //專題名稱
        imgSrc: require("../../studentgroup/15/img/圖片1.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/15/pdf/運用生成對抗網路發展適用於提升養殖池水下影像品質之研究.pdf"), //檔案連結
        fromLab: "多媒體與醫學影像實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `現今智慧養殖已成為台灣養殖漁業轉型的重要契機，其中的水下影像自動分析是智慧養殖的關鍵技術之一，而水底影像的品質則攸關後續影像自動分析的成敗，由於養殖池水體通常存在藻類與懸浮物而導致水體混濁，造成所拍攝的影像模糊不清影響分析判斷。針對此一問題，本研究提出結合對比有限適應性直方圖等化(CLAHE)及生成對抗網路(GAN)技術的水下影像品質提升方法，使影像自動分析系統能較容易正確分析當下的魚類活動狀況為水產養殖智慧化貢獻一份心力。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559017", studentName: "趙云珮" }
        ],
        time: { start: "15:07", end: "15:14" }
    },
    /* 第十六組 */
    {
        groupID: 16, //專題編號
        projectName: "植基於深度學習之咖啡原豆瑕疵檢測系統", //專題名稱
        imgSrc: require("../../studentgroup/16/img/187878.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/16/pdf/海報3.0.pdf"), //檔案連結
        fromLab: "多媒體與醫學影像實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `所謂的瑕疵豆 (defective coffee beans) 就是品質不好、壞掉的咖啡豆。這些瑕疵豆會讓一杯咖啡產生令人不舒服的味道，像是霉味、腐敗或腐臭味、尖銳且刺激的酸等味道及口感。然而部分廠商，會把咖啡豆烘深一點，讓咖啡喝起來苦苦焦焦的，來掩蓋這些不好的味道。`
            },
            {
                index: 2, text: `近年來隨著消費者對咖啡品質的日益重視，咖啡豆的品質也變成人們挑選消費的依據。現在挑選瑕疵豆方法大多還是以人工為主，這種方式既耗費人力又耗時，且有品質不穩定的問題。因此，本專題希望開發出能自動篩選咖啡瑕疵豆的系統。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559019", studentName: "林萱" },
            { studentID: "S10559031", studentName: "蔡亞倫" }
        ],
        time: { start: "15:14", end: "15:21" }
    },
    /* 第十七組 */
    {
        groupID: 17, //專題編號
        projectName: "硬體模糊位元控制設計方法", //專題名稱
        imgSrc: require("../../studentgroup/17/img/專題照片.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/17/pdf/S10559020專題海報(修正的版本).pdf"), //檔案連結
        fromLab: "電腦輔助系統設計實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `本專題以純數位位元計算的電路設計模糊控制的硬體電路，並在顯示使用純數位化的擴展應用。此外，也設計了一個程式生成軟體，使用者可透過此軟體生成System Verilog程式檔，以寫對應模組，並可做更細部的調整，以使用Quartus專案編譯成數位電路。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559020", studentName: "連永立" }
        ],
        time: { start: "15:21", end: "15:28" }
    },
    /* 第十八組 */
    {
        groupID: 18, //專題編號
        projectName: "旅遊美食掃瞄器", //專題名稱
        imgSrc: "", //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/18/pdf/专题海报.pdf"), //檔案連結
        fromLab: "資料庫與資訊知識系統實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `大家在出國旅行的時候，容易看到各種各樣引人注目但卻未聞其名的美食，但由於語言不通又不方便詢問，因此就無法點餐想要的食物，假如可以透過手機應用拍攝食物照片獲取食物資訊，就能幫助觀光客在第一時間瞭解陌生食物的種種資料，點餐時準確的傳達所想要的陌生食物。 `
            },
            {
                index: 2, text: `本系統目標在無圖形處理器設備上運行時，可以即時地辨識食物，並且保有一定的準確率。由於食物種類繁多，在使用時，希望用戶可以簡單選擇食物的國家或地區後下載相對應的模型權重後再進行辨識，以基於機器學習的即時物件辨識技術結合用戶人為的主動預先分類來提高辨識的準確度。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559023", studentName: "鄭聖玄" },
            { studentID: "S10559043", studentName: "金鑒修" }
        ],
        time: { start: "15:28", end: "15:35" }
    },
    /* 第十九組 */
    {
        groupID: 19, //專題編號
        projectName: "應用資料探勘技術於青蛙叫聲資料分類", //專題名稱
        imgSrc: require("../../studentgroup/19/img/專題照.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/19/pdf/專題海報_109第十九組_黃祈緯.pdf"), //檔案連結
        fromLab: "多媒體網路實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `生態保育是台灣目前面臨的一個重要問題，考慮到這個原因，因此我們從UCI開放資料平台中的青蛙叫聲資料，利用Data Mining的方法，利用Python語言中的KNN、Naïve Bayes、決策樹及ANN演算法針對青蛙叫聲通過三角帶通濾波器產生的22個特徵，透過上述演算法分別進行分析，比較各個演算法的準確率及其所花費的時間，找出較適合的演算法以供有需要的人使用。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559025", studentName: "黃祈緯" },
        ],
        time: { start: "15:35", end: "15:42" }
    },
    /* 第二十組 */
    {
        groupID: 20, //專題編號
        projectName: "基於強化學習之格鬥遊戲即時反應操作AI設計", //專題名稱
        imgSrc: require("../../studentgroup/20/img/專題照.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/20/pdf/專題海報.pdf"), //檔案連結
        fromLab: "生物資訊實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `一般格鬥遊戲上，常有入門門檻過高與玩家間常出現嚴重的技術斷層等等問題，新手玩家連初級AI都打不贏，而老玩家面對高階AI卻依舊取得壓倒性勝利，這樣巨大的斷層會帶給格鬥遊戲的初學者巨大的挫敗感。`
            },
            {
                index: 2, text: `因此，本專題藉由強化學習方法訓練出能用於格鬥遊戲的AI，並利用調整獎勵來製作出不同風格、強度的模型，使得各種玩家都能充分享受格鬥遊戲帶來的樂趣。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559028", studentName: "黃仁鴻" },
        ],
        time: { start: "15:42", end: "15:49" }
    },
    /* 第二十一組 */
    {
        groupID: 21, //專題編號
        projectName: "停車場之移動裝置繳費系統", //專題名稱
        imgSrc: require("../../studentgroup/21/img/專題照.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/21/pdf/第二十一組專題海報.pdf"), //檔案連結
        fromLab: "電腦輔助系統設計實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `現今的停車場繳費模式大多已使用車牌辨識系統取代傳統的停車代幣，但仍是必須徒步至每個停車場的隨附自動繳費機才能繳費，不但費時費力還有需要排隊的問題，若是使用此系統以手機來完成繳費，便可省下許多時間及精力。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559032", studentName: "吳孟霖" }
        ],
        time: { start: "16:00", end: "16:07" }
    },
    /* 第二十二組 */
    {
        groupID: 22, //專題編號
        projectName: "仿無人機視角之橘樹果實數量計數研究", //專題名稱
        imgSrc: require("../../studentgroup/22/img/1574346284791.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/22/pdf/仿無人機視角之橘樹果實數量計數研究海報.pdf"), //檔案連結
        fromLab: "多媒體與醫學影像實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `台灣社會的人口老化與少子化，以及農村的人口外移已造成農村勞動力不足的問題，並影響到農業正常的發展。因此台灣農業正逐漸轉型中，將機器人應用到農業領域是一種趨勢，可以舒緩農業缺工的問題，且可以執行原本人類不易處理的工作。本研究仿無人機視角進行影像擷取，透過深度學習架構，偵測畫面中的主要橘子樹，並進一步對棵橘子樹計算樹上的橘子個數，透過此方式就能快速掌握果園內的橘子數量，提供給果農作銷售以及管理上的評估輔助。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559034", studentName: "楊明諺" }
        ],
        time: { start: "16:07", end: "16:14" }
    },
    /* 第二十三組 */
    {
        groupID: 23, //專題編號
        projectName: "透過深度學習進行社交軟體假新聞文字偵測辨識", //專題名稱
        imgSrc: "", //專題截圖
        videoSrc: "", //專題影片
        fileSrc: "", //檔案連結
        fromLab: "資料系統實驗室", //所屬實驗室
        summarys: ``, //專題摘要
        groupStudents: [
            { studentID: "S10559035", studentName: "楊政碩" },
            { studentID: "S10559039", studentName: "隋昊璟" }
        ],
        time: { start: "16:14", end: "16:21" }
    },
    /* 第二十四組 */
    {
        groupID: 24, //專題編號
        projectName: "基於深度學習進行人體姿態估計", //專題名稱
        imgSrc: require("../../studentgroup/24/img/photo_2019-11-19_19-50-32.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/24/pdf/海報最終版.pdf"), //檔案連結
        fromLab: "智慧型機器人實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `如阿凡達、猩球崛起等賣座電影，其特效的製作過程常需使用動作捕捉裝置協助取得動作資訊。專題中我們希望透過攝影機獲取的二維影像，結合卷積神經網路學習的技術，轉換成肢體關節點在三維空間中的位置，進而捕捉人體的姿態及動作，並應用到 3D 動畫中。專題中實作的系統可以較低的成本與操作門檻，達到昂貴的動作捕捉裝置之相似效果，讓此類型的應用在日常中也能簡易的實現。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559037", studentName: "張俞方" },
            { studentID: "S10559040", studentName: "施宣妤" }
        ],
        time: { start: "16:21", end: "16:28" }
    },
    /* 第二十五組 */
    {
        groupID: 25, //專題編號
        projectName: "Wi-Fi環境下人體行為識別系統", //專題名稱
        imgSrc: require("../../studentgroup/25/img/photo_2019-11-24_12-59-52.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/25/pdf/專題展海報_109級畢業專題海報_NUTN_CSIE_PRJ_109.pdf"), //檔案連結
        fromLab: "行動計算與網路實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `隨著科技的發展，人們對其所能帶來的便利給予了更多的期望，其中最受關注的一個議題便是我們能否使用機器取代人為的監控。那麼要如何同時滿足在精確識別室內人體行動的目標下又能相對地把成本控制在省時省力的範疇裡呢？`
            },
            {
                index: 2, text: `本課題將借由 Wi-Fi 訊號的評到狀態資訊來進行甄別。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559041", studentName: "呂玉嫻" }
        ],
        time: { start: "16:28", end: "16:35" }
    },
    /* 第二十六組 */
    {
        groupID: 26, //專題編號
        projectName: "智慧型行動載物機器人", //專題名稱
        imgSrc: require("../../studentgroup/26/img/photo_2019-11-11_19-02-18.jpg"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: "", //檔案連結
        fromLab: "智慧型機器人實驗室", //所屬實驗室
        summarys: ``, //專題摘要
        groupStudents: [
            { studentID: "S10559042", studentName: "于鶴瑤" }
        ],
        time: { start: "16:35", end: "16:42" }
    },
    /* 第二十七組 */
    {
        groupID: 27, //專題編號
        projectName: "利用深度學習偵測雞隻熱緊迫之研究", //專題名稱
        imgSrc: require("../../studentgroup/27/img/照片1.png"), //專題截圖
        videoSrc: "", //專題影片
        fileSrc: require("../../studentgroup/27/pdf/畢業專題展海報.pdf"), //檔案連結
        fromLab: "多媒體與醫學影像實驗室", //所屬實驗室
        summarys: [
            {
                index: 1, text: `台灣家禽業於農業產值中佔近13%比例，扮演重要角色。由於台灣位於亞熱帶地區，雞隻面臨高濕度及高溫度的環境，時常發生熱緊迫引起的福利問題。有鑑於雞舍環境中影響因素時常有交互作用存在，希望透過深度學習中電腦視覺的應用，針對雞舍影像提供雞隻熱緊迫更直接的判斷。`
            }
        ], //專題摘要
        groupStudents: [
            { studentID: "S10559046", studentName: "顏婷玉" }
        ],
        time: { start: "16:42", end: "16:49" }
    },
];