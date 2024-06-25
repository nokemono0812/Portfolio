function calcContentWidth(){
    let contentBox = document.getElementsByClassName("contents"),
    contentPhoto = document.getElementsByClassName("content_photo"),
    linkBtn = document.getElementsByClassName("linkBtn"),
    photos = document.getElementsByClassName("photo"),
    photoPickup = document.getElementById("photoPickup"),
    exps = document.getElementsByClassName("explain"),
    titles = document.getElementsByClassName("titles"),
    docW = document.getElementById("main").clientWidth,
    /*
    prof = document.getElementById("profile"),
    profPhoto = document.getElementById("prof_photo"),
    profText = document.getElementById("prof_text"),
    */
    icons = document.getElementsByClassName("icons"),
    contText = document.getElementById("content_text"),
    disp = document.getElementById("content_display"),
    clsBtn = document.getElementById("closeBtn"),
    contentW = 0;
    
    //実質メディアクエリ
    if(docW > 1540){
        document.getElementsByTagName("header")[0].style.fontSize = "30px";
        contentW = (docW - 120) / 5;
        contText.style.fontSize = "16px";
        for(let i = 0; i < titles.length; i ++){
            titles[i].style.fontSize = "22px";
        }
        for(let i = 0; i < contentPhoto.length; i ++){
            contentPhoto[i].style.width = "350px";
        }
        for(let i = 0; i < linkBtn.length; i ++){
            linkBtn[i].style.fontSize = "19px";
        }
        for(let i = 0; i < icons.length; i ++){
            icons[i].style.width = "55px";
            icons[i].style.height = "55px";
        }
        disp.style.padding = "20px";
    }
    else if(docW > 1030){
        document.getElementsByTagName("header")[0].style.fontSize = "27px";
        contentW = (docW - 120) / 5;
        contText.style.fontSize = "15px";
        for(let i = 0; i < titles.length; i ++){
            titles[i].style.fontSize = "21px";
        }
        for(let i = 0; i < contentPhoto.length; i ++){
            contentPhoto[i].style.width = "300px";
        }
        for(let i = 0; i < linkBtn.length; i ++){
            linkBtn[i].style.fontSize = "18px";
        }
        for(let i = 0; i < icons.length; i ++){
            icons[i].style.width = "52px";
            icons[i].style.height = "52px";
        }
        disp.style.padding = "20px";
    }
    else if(docW > 850){
        document.getElementsByTagName("header")[0].style.fontSize = "27px";
        contentW = (docW - 100) / 4;
        contText.style.fontSize = "14px";
        for(let i = 0; i < titles.length; i ++){
            titles[i].style.fontSize = "19px";
        }
        for(let i = 0; i < contentPhoto.length; i ++){
            contentPhoto[i].style.width = "240px";
        }
        for(let i = 0; i < linkBtn.length; i ++){
            linkBtn[i].style.fontSize = "16px";
        }
        for(let i = 0; i < icons.length; i ++){
            icons[i].style.width = "46px";
            icons[i].style.height = "46px";
        }
        disp.style.padding = "20px";
    }
    else if(docW > 500){
        document.getElementsByTagName("header")[0].style.fontSize = "27px";
        contentW = (docW - 100) / 4;
        contText.style.fontSize = "14px";
        for(let i = 0; i < titles.length; i ++){
            titles[i].style.fontSize = "18px";
        }
        for(let i = 0; i < contentPhoto.length; i ++){
            contentPhoto[i].style.width = "190px";
        }
        for(let i = 0; i < linkBtn.length; i ++){
            linkBtn[i].style.fontSize = "15px";
        }
        for(let i = 0; i < icons.length; i ++){
            icons[i].style.width = "39px";
            icons[i].style.height = "39px";
        }
        disp.style.padding = "15px";
    }
    else{
        document.getElementsByTagName("header")[0].style.fontSize = "22px";
        contentW = (docW - 80) / 3;
        contText.style.fontSize = "12px";
        for(let i = 0; i < titles.length; i ++){
            titles[i].style.fontSize = "16px";
        }
        for(let i = 0; i < contentPhoto.length; i ++){
            contentPhoto[i].style.width = "120px";
        }
        for(let i = 0; i < linkBtn.length; i ++){
            linkBtn[i].style.fontSize = "13px";
        }
        for(let i = 0; i < icons.length; i ++){
            icons[i].style.width = "33px";
            icons[i].style.height = "33px";
        }
        disp.style.padding = "10px";
    }

    //photoPickup.style.height = "calc(100vh - " + document.getElementById("header").clientHeight + ")";
    clsBtn.style.top = document.getElementById("header").clientHeight + "px";
    document.getElementById("pickupImg").style.margin = document.getElementById("header").clientHeight + 10 + "px 0 15px 0";
    
    for(let i = 0; i < contentBox.length; i ++){
        contentBox[i].style.width = contentW + "px";
        photos[i].style.height = contentW + "px";
        exps[i].style.fontSize = parseInt(contentW/9) + "px";
        //prof.style.width = (docW - 40 - 0) + "px";
        disp.style.width = (docW - 40 - 0) + "px";
    }

    let hSpace = document.getElementsByClassName("headerSpace");
    for(let i = 0; i < hSpace.length; i ++){
        hSpace[i].style.height = document.getElementById("header").clientHeight + "px";
        document.getElementById("main").style.height = "calc(100vh - " + document.getElementById("header").clientHeight + "px)";
    }
}
calcContentWidth();

window.addEventListener("resize", calcContentWidth);

let contents = [
    [
        [
            "WEBEAT:mania",
            ["img/webeat2.png","img/webeat3.png","img/webeat4.png","img/webeat5.png","img/webeat6.png"],
            'Canvasは用いず、HTML5とCSSで描画する本格的なPC向け音楽ゲームです。オープンβ版として現在も更新を続けています。<br>フレームワークやライブラリを一切使わず、バニラのJavaScriptによるDOM操作のみでゲームを制御しています。<br><br>WEB検索で出てくるリズムゲームの制作例はUnity等のゲームエンジンを使ったものがほとんどかつ、<br>開発開始当時の私のプログラミング能力も「配列が何なのかわからない」レベルであったため、とにかくアイデア任せで試行錯誤して作り上げた作品です。<br>この「やり方を見ずに自分でなんとかする」開発経験は、私のプログラミング力の強力な土台になっています。<p class="links"><div class="linkBtn" onclick="qr(0)">QRコード</div><a href="https://webeatmania.jp/" target="_blank"><div class="linkBtn">サイトを見る</div></a></p>※Safariなどwebkit系のブラウザでは一部レイアウトが崩れます。PC向けのChromium系ブラウザの使用を推奨。',
            "img/qr_web_1.png"
        ],
        [
            "カラオケ用曲管理アプリ GUIデモ",
            ["img/karaoke1.png","img/karaoke2.png","img/karaoke3.png","img/karaoke4.png"],
            'GUIの授業で制作した、カラオケで歌いたい曲をまとめて管理できるアプリのGUI。<br>実際にHTML/CSSとJavaScriptを使って動作デモ版を制作したので、一部機能を試すことができます。<br>誰もが扱いやすく、ポップでモダンなデザインを目指しました。<br>スマートフォンでの閲覧を前提に設計しているため、大きな画面だと横に伸びた表示になります。ご了承下さい。<p class="links"><div class="linkBtn" onclick="qr(1)">QRコード</div><a href="https://nokemono0812.github.io/GUI_final/" target="_blank"><div class="linkBtn">サイトを見る</div></a></p>',
            "img/qr_web_2.png"
        ],
        [
            "「ぼっちサークル」紹介サイト",
            ["img/bocchi1.png","img/bocchi2.png","img/bocchi3.png","img/bocchi4.png","img/bocchi5.png","img/bocchi6.png"],
            'WEBデザインの授業で制作した、仮想のサークルを紹介するWEBページ。<br>三人のグループで制作しており、CSSやJavaScriptを使ったレイアウトやアニメーションに関するコーディングを私が担当しました。<br>スマートフォンで閲覧することを前提に、アニメーションやレイアウトなど工夫を凝らして制作しました。<br>授業の性質上モバイル向けに設計されており、レスポンシブデザインに対応していないため、画面サイズによって表示が崩れる点が課題。<p class="links"><div class="linkBtn" onclick="qr(2)">QRコード</div><a href="https://bocchi.sakura.ne.jp/" target="_blank"><div class="linkBtn">サイトを見る</div></a></p>※PCでご覧いただく場合は、必ず開発者ツールのモバイル表示を使用してください。',
            "img/qr_web_3.png"
        ],
        [
            "SQUARE BOMB",
            ["img/square3.png","img/square6.png","img/square4.png","img/square7.png"],
            '人生で初めてゲーム作りに挑戦した作品。バニラのJavaScriptとHTML/CSSで実装し、BGMも自分で制作しました。<br>四角形を操作して、次々に炸裂する四角い爆発を避け続けるシンプルなゲームになっています。<br>ライフが１ずつ減少する通常の爆発に加え、麻痺や一撃必殺、更には回復などの友好的な爆発もあり、プレイヤーの瞬発力と判断力が問われます。<br>モバイル端末でのプレイにはまだ対応していませんが、タイトル画面の黄色い文字を10連続でタップすることで監視モードが起動し、ゲームの弾幕を眺めることができます。<p class="links"><div class="linkBtn" onclick="qr(3)">QRコード</div><a href="https://nokemono0812.github.io/square_bomb/" target="_blank"><div class="linkBtn">サイトを見る</div></a></p>※Chromium系ブラウザで実行することを推奨。',
            "img/qr_web_8.png"
        ],
        [
            "Processingドット絵作成ツール",
            ["img/p5dot1.png"],
            '自作ゲームのドット絵を作るためにp5.jsを利用して制作したドット絵作成ツール。<br>ドット絵は画像ではなく.pdeファイルとして出力されます。<br>大学に入ってプログラミングを学び始めた頃の作品なので、正直使いにくいです。<br>UIに関しては、個人的に古めかしいものが好きなので、昔ながらのPCソフトを意識したシンプルなデザインにしてみました。<p class="links"><div class="linkBtn" onclick="qr(4)">QRコード</div><a href="https://nokemono0812.github.io/ProcessingPixelArtMaker/" target="_blank"><div class="linkBtn">サイトを見る</div></a></p>',
            "img/qr_web_4.png"
        ],
        [
            "「なんでもよく姉」紹介サイト",
            ["img/nanndemo1.png","img/nanndemo2.png"],
            '大学１年の「課題発見」という授業で作成したWEBサイト。<br>この授業は日常に転がる「課題」とその解決策を班で考え発表するというもので、WEBサイトのデザインやコーディング全般を私が担当しました。<br>キャラクターなどの素材は他のメンバーが担当しています。'
        ],
        [
            "Progress Clock",
            ["img/progress1.png"],
            '一年がどれほど経過したのか、PCのプログレスバーのような見た目で可視化したいと思い作った作品。<br>成果として、時間が思ったよりも速く流れていることに気づくことができました。人生頑張ります。<p class="links"><div class="linkBtn" onclick="qr(6)">QRコード</div><a href="https://nokemono0812.github.io/Progress-clock/" target="_blank"><div class="linkBtn">サイトを見る</div></a></p>',
            "img/qr_web_7.png"
        ],
        [
            "大学のある一日",
            ["img/school_day1.png"],
            '大学２年の授業で作成したちょっとしたページ。<br>大学のある一日の心情をアホそうなタッチのイラストとともに時系列順に紹介。<br>練習も兼ねてJavaScriptやCSSを用いたアニメーションを多用しました。'
        ]
    ],
    [
        [
            "森の怒り（アクリル）",
            ["img/painting1.jpg"],
            '大学１年の授業で、「樹根」をモチーフに制作した作品。<br>森林破壊に憤る怪物をイメージして描いてみました。<br>画材はアクリルガッシュです。'
        ],
        [
            "ハエ（シャープペンシル:2B/0.5mm）",
            ["img/painting3.jpg"],
            'ハエが好きなので描きました。<br>シャープペンシルを使いこなせるようになりたかったので、シャープペンシル一本で完成させました。濃淡が微妙な点が課題。<br>カメラのようにぼかして奥行きを出す表現に拘りました。'
        ],
        [
            "カナヘビ（クレヨン）",
            ["img/painting2.jpg"],
            '小学生の頃使っていたクレヨンが偶然出てきたので何となく描いてみたカナヘビ。<br>昔は適当に線を引いていただけだったクレヨンが、久々に触ってみたらとにかく面白くて何だか新鮮な気分でした。<br>安いクレヨンなので伸びは悪かったですが、できる限りたくさんの色を重ねてみました。'
        ],
        [
            "ハムエッグ（油）",
            ["img/painting5.jpg"],
            '今のところ、人生最初で最後の油絵です。本当はまたやってみたいのですが、いかんせん画材が高くて...<br>油絵特有の混色にかなり戸惑いましたが、その分油絵にしかできない表現に気づくことができてとても有意義な体験でした。<br>個人的にはレタスの質感がうまくいった気がして気に入っています。'
        ],
        [
            "勉強（鉛筆）",
            ["img/painting6.jpg"],
            '勉強中の景色を描いた鉛筆画。<br>自主的に勉強しているのではなく、誰かに言われて、どこか監視されながら仕方なくやっている感じを表現したくて、何となく筆箱に目を生やしてみました。'
        ],
        [
            "岩（鉛筆）",
            ["img/iwa.jpg"],
            '大きな岩を恐竜にしてみました。<br>その大きさゆえに畏れられていますが、とても温厚で心優しい生き物です。'
        ],
        [
            "リンゴ（鉛筆）",
            ["img/painting7.jpg"],
            'デッサンのつもりで描いたリンゴ。<br>今までデッサンを教わる機会がなかったため、静物デッサン系の作品はこれしか残っていませんでした...'
        ],
        [
            "兄（シャープペンシル:2B/0.5mm）",
            ["img/painting4.jpg"],
            '「兄」という漢字を見ていたらふと思いついて描いてみた落書きです。<br>「兄という立場の重さを視覚化してみた」というやや壮大な設定を後付けしていますが、兄なんて実際は軽いものです。どう考えても弟の方が大変。'
        ]
    ],
    [
        [
            "つばめ（Processing）",
            ["img/visual1.png","img/visual2.png","img/visual3.png"],
            'Processingの再帰処理を扱う課題で制作した作品。<br>我が子の為にエサを集めるツバメと、為す術なく連れ去られようとしている芋虫を表現しました。<br>配置は全てランダムで、パラメータを変更することで分岐回数を増減させることも可能です。'
        ],
        [
            "ウォータークロック（Processing）",
            ["img/waterclock_2.png","img/waterclock_1.png"],
            '時間と共に変動するヴィジュアル特化の時計。<br>直線的な図形と円だけで、なめらかな水の動きを表現しています。<br>二次関数的を用いた波の表現や、一定時間おきに水が注がれる表現に特に拘って制作しました。<br>アニメーションありきの作品なので是非動いているところを見ていただきたいです。下のリンクから是非！<p class="links"><div class="linkBtn" onclick="qr(1)">QRコード</div><a href="https://nokemono0812.github.io/Water-Clock/" target="_blank"><div class="linkBtn">サイトを見る</div></a></p>※最適化せずにp5.jsに移植したので時間が正確ではなくバグも多いです。申し訳ありません。',
            "img/qr_visual_1.png"
        ],
        [
            "宇宙（Processing）",
            ["img/space.png"],
            'Processingを学び始めた初期の作品。<br>円の明度を変えながら少しずつずらすことで滑らかな影を表現しています。'
        ]
    ],
    [
        [
            "自作ゲーム用BGM集",
            [],
            '自作のゲームにて使用するための音源です。<br>家にDAWがないので、musicLineというAndroid向けのmidi編集アプリで作曲しています。<br>アプリの出力音質の上限が128kbpsであるため、少し音質が悪いですがご了承を...'
        ],
        [
            "宿命（WEBEAT edit.）",
            [],
            '<p>使用ゲーム：「WEBEAT:mania（v0.8で収録予定）」<br>BPM：205</p><p><audio src="audio/syukumei.mp3" controls loop="1"></audio></p>'
        ],
        [
            "RETRØ TIMEMACHINE",
            [],
            '<p>使用ゲーム：「WEBEAT:mania（v0.8で収録予定）」<br>BPM：185</p><p><audio src="audio/retro_timemachine.mp3" controls loop="1"></audio></p>'
        ],
        [
            "終点（WEBEAT edit.）",
            [],
            '<p>使用ゲーム：「WEBEAT:mania」「SQUARE BOMB!!」<br>BPM：180</p><p><audio src="audio/syuten.mp3" controls loop="1"></audio></p>'
        ],
        [
            "F1N4L D35TRUCT10N",
            [],
            '<p>使用ゲーム：「SQUARE BOMB!!（~v2.9）」<br>BPM：180</p><p><audio src="audio/final_destruction.mp3" controls loop="1"></audio></p>'
        ]
    ],
    [
        [
            "自己紹介",
            [],
            '千葉県松戸市在住の、自然と生き物をこよなく愛するごく普通の大学生です。<br>昔から絵を描くこととものづくりが好きで、落書きと工作で家を散らかしてばかりだったそうです。申し訳ない...<br><br>大学に入ってからプログラミングという新しいお友達ができ、コツコツと制作を進めています。<br>最近はブラウザゲーム開発（主に「<a onclick="showContents(0)">WEBEAT:mania</a>」）に集中しています。<br>楽曲の追加や機能追加など満足のいくところまでやり切りたいですし、アップデートも半永久的に続けていこうと思っています。'
        ],
        [
            "できること（PC）",
            [],
            '<p><img class="icons" src="img/vscode.png"><img class="icons" src="img/js.svg"><img class="icons" src="img/processing.png"><img class="icons" src="img/python.png"><img class="icons" src="img/clipstudio.jpeg"><img class="icons" src="img/figma.png"><img class="icons" src="img/ai.png"><img class="icons" src="img/cubase.png"><img class="icons" src="img/unity.png"></p><ul><li>Visual Studio Code 得意度100%</li><li>JavaScript 得意度100%</li><li>Processing 得意度80%</li><li>Python 得意度70%</li><li>CLIP STUDIO PAINT 得意度70%</li><li>Figma 得意度65%</li><li>Adobe Illustrator 得意度55%</li><li>Cubase 得意度40%</li><li>Unity 得意度30%</li></ul>その他PHPなどのWEB開発系はある程度できます。'
        ],
        [
            "できること（イラスト）",
            [],
            '<ul><li>昆虫や虫系クリーチャー 得意度100%</li><li>両生/爬虫類や爬虫類系クリーチャー 得意度90%</li><li>宇宙船 得意度90%</li><li>風景 得意度70%</li><li>人物 得意度10%（練習中）</li></ul>'
        ],
        [
            "ヒストリー",
            [],
            '<ul><li>2003/8月 誕生</li><li>2004/8月? この頃絵を描きはじめる（母談）</li><li>2010/4月 都内の公立小学校に入学</li><li>2011/1月 松戸市内の公立小学校に転校</li><li>2016/4月 松戸市内の公立中学校に入学</li><li>2019/4月 芝浦工業大学柏高等学校入学</li><li>2019/7月 情報の授業でHTMLとCSSを少しだけ学び、興味を持つ</li><li>2022/3月 芝浦工業大学柏高等学校卒業</li><li>2022/4月 武蔵野美術大学デザイン情報学科入学</li><li>2026/3月 武蔵野美術大学デザイン情報学科卒業見込み</li></ul>'
        ],
        [
            "コンタクト",
            [],
            'X（旧Twitter）：<a href="https://x.com/hal_03_/" target="_blank">@hal_03_</a>'
        ]
    ]
];

let contentNow = 0;
function showContents(n){
    contentNow = n;
    document.cookie = "content=" + n;
    for(let i = 0; i < 5; i ++){
        document.getElementsByClassName("contents")[i].removeAttribute("id");
    }
    document.getElementsByClassName("contents")[n].setAttribute("id", "lock");
    let display = document.getElementById("content_text"),
    article = contents[n];

    display.innerHTML = "";

    for(let i = 0; i < article.length; i ++){
        let title = article[i][0],
        tab1 = "",
        tab2 = article[i][2];
        if(article[i][1].length > 0){
            for(let j = 0; j < article[i][1].length; j ++){
                tab1 += '<img class="content_photo" src="' + article[i][1][j] + '" onclick="pickup(this)"></img>';
            }
        }
        if(i == article.length - 1){
            display.innerHTML += '<div class="titles">' + title + '</div><p>' + tab1 + '</p><p>' + tab2 + '</p>';
        }
        else{
            display.innerHTML += '<div class="titles">' + title + '</div><p>' + tab1 + '</p><p>' + tab2 + '</p><hr color="gray" size="1">';
        }
    }

    calcContentWidth();
}
let defaultContent = 0;
if(document.cookie.split("=").length == 2){
    defaultContent = document.cookie.split("=")[1];
}
showContents(defaultContent);

function pickup(image){
    let obj = document.getElementById("photoPickup");
    obj.classList.add("show");
    let obj2 = document.getElementById("pickupImg");
    obj2.setAttribute("src", image.src);
    obj2.style.width = "60vw";
    obj2.style.display = "block";
    document.getElementById("closeBtn").style.display = "block";
}

function closePickup(){
    document.getElementById("photoPickup").classList.remove("show");
    document.getElementById("pickupImg").style.display = "none";
    document.getElementById("closeBtn").style.display = "none";
}

function qr(n){
    let obj = document.getElementById("photoPickup");
    obj.classList.add("show");
    let obj2 = document.getElementById("pickupImg");
    obj2.setAttribute("src", contents[contentNow][n][3]);
    obj2.style.width = "300px";
    obj2.style.display = "block";
    document.getElementById("closeBtn").style.display = "block";
}

document.getElementById("photoPickup").addEventListener("click", function(){
    closePickup();
});
document.getElementById("pickupImg").addEventListener("click", function(event){
    event.stopPropagation();
});