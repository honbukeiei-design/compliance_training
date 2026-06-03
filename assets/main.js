const BASE = "assets/";
const state = { index: -1, locked: false };

const scenarios = [
  {
    title: "1. 相手の受け止め方を考える",
    location: "ナースステーション",
    bg: "backgrounds/nurse_station.svg",
    question: "夜勤明けの看護師が、申し送りの準備に時間をかけています。表情は硬く、何度もメモを見返しており、普段より明らかに余裕がありません。\n\nあなたは先輩職員として、どのように声をかけますか？",
    message: "相手の状況や気持ちに寄り添うことが、信頼関係づくりの第一歩です。",
    reading: "医療現場では、職員一人ひとりが多くの情報を扱い、限られた時間の中で判断を求められます。疲労や不安がある状態では、普段ならできる確認や報告が難しくなることもあります。\n\nそのような場面で必要なのは、単に注意することではなく、相手が安心して状況を説明できる環境をつくることです。職員同士が早めに相談できる職場は、ミスの予防や患者安全にもつながります。",
    chars: ["characters/doctor_neutral.png","characters/nurse_worried.png","characters/office_neutral.png"],
    focus: 1,
    choices: [
      ["「なんでこんなこともできないの？」と強く指摘する", "bad", "相手を責める表現は、萎縮や相談しづらさにつながります。本人に改善してほしい気持ちがあっても、人格を否定するような言い方は避けましょう。", ["characters/doctor_stern.png","characters/nurse_sad.png","characters/office_neutral.png"]],
      ["「少し大変そうだけど、困っていることはない？」と状況を確認する", "good", "相手の状態を確認し、必要な支援につなげる姿勢が大切です。何ができていないかだけでなく、なぜ難しくなっているのかを一緒に確認しましょう。", ["characters/doctor_neutral.png","characters/nurse_happy.png","characters/office_neutral.png"]]
    ]
  },
  {
    title: "2. パワハラの境界線",
    location: "会議室",
    bg: "backgrounds/meeting_room.svg",
    question: "上司が、部下のミスについて指導しようとしています。周囲には他の職員もおり、本人はすでに緊張した表情をしています。\n\nあなたが上司の立場なら、どのように指導しますか？",
    message: "指導は人格ではなく、事実・原因・再発防止に向けます。",
    reading: "パワーハラスメントは、単に怒鳴ることだけを指すものではありません。立場の優位性を背景に、相手の人格を傷つけたり、必要な範囲を超えて精神的苦痛を与えたりする行為は、職場環境を悪化させます。\n\n一方で、業務上必要な指導そのものが禁止されているわけではありません。大切なのは、指導の目的が業務改善にあること、言葉が人格否定になっていないこと、場所や方法に配慮されていることです。",
    chars: ["characters/manager_stern.png","characters/staff_worried.png","characters/office_neutral.png"],
    focus: 0,
    choices: [
      ["人前で「こんなミスをするなんて信じられない」と強く叱責する", "bad", "公開叱責は心理的安全性を下げ、パワハラリスクを高めます。本人だけでなく、周囲にも失敗を隠した方がよいという空気を生む恐れがあります。", ["characters/manager_angry.png","characters/staff_sad.png","characters/office_neutral.png"]],
      ["別室で、事実・原因・再発防止策を落ち着いて確認する", "good", "場所・言葉・目的を整理した指導が望ましい対応です。ミスの原因を一緒に確認し、本人の成長と組織の安全につなげましょう。", ["characters/manager_stern.png","characters/staff_happy.png","characters/office_neutral.png"]]
    ]
  },
  {
    title: "3. 患者・来院者からの高圧的要求",
    location: "外来受付",
    bg: "backgrounds/reception.svg",
    question: "来院者が受付で大声を出し、「今すぐ診ろ」「責任者を出せ」と強く要求しています。周囲の患者も不安そうに見ています。\n\nあなたはどのように対応しますか？",
    message: "危険時は安全確保を優先し、複数人・組織対応につなげます。",
    reading: "医療機関では、患者や家族が不安や焦りを抱えて来院することがあります。その気持ちに配慮することは大切ですが、暴言、脅迫、長時間の拘束、過度な要求などを無制限に受け入れる必要はありません。\n\n職員が安全に働ける環境を守ることは、安定した医療提供の前提です。対応に迷う場面では、個人で抱え込まず、上司や関係部署と連携することが重要です。",
    chars: ["characters/visitor_angry.png","characters/nurse_worried.png","characters/security_neutral.png"],
    focus: 0,
    choices: [
      ["「そんな言い方をされても困ります」と感情的に言い返す", "bad", "感情的な反論は事態を悪化させます。職員個人の判断だけで対応を続けると、安全上のリスクも高まります。", ["characters/visitor_angry.png","characters/nurse_sad.png","characters/security_neutral.png"]],
      ["落ち着いて対応し、複数人対応・警告・記録・上司報告につなげる", "good", "説明、警告、対応の打ち切り、報告、記録といった手順を意識します。威圧的な言動が続く場合は組織として対応しましょう。", ["characters/visitor_neutral.png","characters/nurse_happy.png","characters/security_neutral.png"]]
    ]
  },
  {
    title: "4. 個人情報の取り扱い",
    location: "カルテ管理室",
    bg: "backgrounds/karte_room.svg",
    question: "電子カルテの画面と、患者氏名が記載されたリストが机上にあります。あなたは急ぎの用件で、数分だけ席を離れる必要があります。\n\nどのように対応しますか？",
    message: "電子情報と紙情報の両方を守ることが、医療倫理の基本です。",
    reading: "医療機関では、病名、検査結果、家族構成、連絡先など、非常に機微な情報を扱います。これらの情報は、患者本人にとって重大なプライバシーに関わるものです。\n\n情報漏えいは、悪意ある行為だけでなく、画面の表示、書類の置き忘れ、会話の聞こえ漏れなど、日常の小さな不注意からも発生します。日々の基本動作を徹底することが、患者からの信頼を守る第一歩です。",
    chars: ["characters/office_neutral.png","characters/nurse_neutral.png","characters/doctor_neutral.png"],
    focus: 0,
    choices: [
      ["短時間なので、画面も紙資料もそのままにして離席する", "bad", "短時間でも漏えいリスクがあります。少しだけだから大丈夫という油断が、情報漏えいにつながることがあります。", ["characters/office_neutral.png","characters/nurse_sad.png","characters/doctor_stern.png"]],
      ["画面をロックし、紙資料を伏せる、または所定の場所に保管する", "good", "画面ロックと紙資料管理をセットで行うのが適切です。見られない、持ち出されない、置き忘れない基本を徹底しましょう。", ["characters/office_neutral.png","characters/nurse_happy.png","characters/doctor_neutral.png"]]
    ]
  },
  {
    title: "5. SNSへの投稿と職業倫理",
    location: "休憩室",
    bg: "backgrounds/break_room.svg",
    question: "休憩中、同僚がスマートフォンで写真を撮りながら、「今日の外来、すごく混んでて大変だった。ちょっとSNSに書こうかな」と話しています。写真の端には、掲示物や職場の様子が少し写っています。\n\nあなたはどう声をかけますか？",
    message: "SNSは、意図せず個人情報や職場情報を外部に出してしまう危険があります。",
    reading: "SNSでは、投稿者が想定していない範囲まで情報が広がることがあります。一度拡散された情報を完全に削除することは困難です。\n\n特に医療機関では、患者の来院事実そのものが個人情報にあたる場合があります。写真に氏名が写っていなくても、背景、時間帯、診療内容、関係者のコメントなどから個人が推測される可能性があります。職員個人の投稿であっても、組織全体の信用に影響することを意識する必要があります。",
    chars: ["characters/nurse_neutral.png","characters/staff_worried.png","characters/counselor_neutral.png"],
    focus: 1,
    choices: [
      ["「名前が写っていなければ大丈夫じゃない？」と言う", "bad", "氏名が写っていなくても、日時、場所、診療科、状況などから個人や出来事が推測される場合があります。匿名なら大丈夫と安易に判断するのは危険です。", ["characters/nurse_sad.png","characters/staff_sad.png","characters/counselor_neutral.png"]],
      ["「患者さんや院内情報が推測される可能性があるから、投稿は控えた方がいい」と伝える", "good", "SNS投稿は、情報の一部だけでも拡散されると取り返しがつきません。投稿前に、患者情報、職場情報、内部事情が含まれていないか確認しましょう。", ["characters/nurse_happy.png","characters/staff_happy.png","characters/counselor_neutral.png"]]
    ]
  },
  {
    title: "6. 職員間のうわさ話と守秘義務",
    location: "廊下",
    bg: "backgrounds/hallway.svg",
    question: "廊下で同僚が、ある患者について「あの人、前にもトラブルがあったらしいよ」と話し始めました。周囲には他の患者や面会者が通っています。\n\nあなたはどう対応しますか？",
    message: "守秘義務は、カルテや書類だけでなく、何気ない会話にも関わります。",
    reading: "医療機関では、多職種が連携するために情報共有が不可欠です。しかし、すべての情報を誰とでも話してよいわけではありません。\n\n「業務に必要か」「その場で話すべきか」「聞こえる範囲に第三者がいないか」を意識する必要があります。患者に関する情報は、職員にとっては日常的な業務情報であっても、本人にとっては極めて私的な情報です。廊下、エレベーター、休憩室、食堂などでの会話には特に注意が必要です。",
    chars: ["characters/staff_worried.png","characters/nurse_neutral.png","characters/visitor_neutral.png"],
    focus: 0,
    choices: [
      ["興味本位で話を聞き続ける", "bad", "業務に必要のない情報を興味本位で共有することは、守秘義務の観点から問題があります。周囲に聞こえる場所での会話は特に注意が必要です。", ["characters/staff_sad.png","characters/nurse_sad.png","characters/visitor_angry.png"]],
      ["「ここでは話さない方がいいですね。必要な情報なら所定の場で確認しましょう」と伝える", "good", "必要な情報共有とうわさ話は区別しましょう。業務上必要な場合は、適切な場所と方法で、必要最小限の範囲にとどめて共有します。", ["characters/staff_happy.png","characters/nurse_happy.png","characters/visitor_neutral.png"]]
    ]
  },
  {
    title: "7. 物品・経費の適正使用",
    location: "事務室",
    bg: "backgrounds/office_room.svg",
    question: "部署で使うために購入した備品が余っています。同僚が「少し余っているし、自宅で使ってもいいかな」と話しています。\n\nあなたはどう対応しますか？",
    message: "少額であっても、公私混同は組織の信頼を損なう原因になります。",
    reading: "コンプライアンスは、大きな不正だけを防ぐものではありません。日常の小さな判断の積み重ねが、組織の信頼を支えています。\n\n備品、消耗品、交通費、研修費、時間外勤務の申請などは、いずれも適正なルールに基づいて扱う必要があります。「誰も見ていない」「少額だから問題ない」という考え方は危険です。公的性格のある組織では、説明責任を果たせる行動が求められます。",
    chars: ["characters/office_neutral.png","characters/staff_worried.png","characters/manager_stern.png"],
    focus: 1,
    choices: [
      ["「少しぐらいなら問題ないと思う」と答える", "bad", "金額が小さくても、組織の物品を私的に利用することは不適切です。少しだけという感覚が、コンプライアンス違反の入口になることがあります。", ["characters/office_neutral.png","characters/staff_sad.png","characters/manager_angry.png"]],
      ["「病院の経費で購入したものだから、私的に使うのは避けよう」と伝える", "good", "物品や経費は、目的に沿って適正に使用する必要があります。迷う場合は、自分たちで判断せず、上司や担当部署に確認しましょう。", ["characters/office_neutral.png","characters/staff_happy.png","characters/manager_stern.png"]]
    ]
  },
  {
    title: "8. 利益相反と業者対応",
    location: "面談室",
    bg: "backgrounds/interview_room.svg",
    question: "取引業者から、商品の説明後に「いつもお世話になっているので、個人的に使ってください」と商品券を渡されそうになりました。\n\nあなたはどう対応しますか？",
    message: "業者との関係では、公平性と透明性が重要です。",
    reading: "医療機関では、医薬品、医療機器、委託業務、備品購入など、多くの外部業者と関わります。その中で職員個人が金品や便宜を受けると、契約や選定の公正性に疑念が生じます。\n\nたとえ判断に影響していなくても、「影響したように見える」こと自体が組織の信用を損ないます。利益相反を避けるためには、個人的な関係で判断せず、ルールに基づいて対応することが重要です。",
    chars: ["characters/vendor_neutral.svg","characters/doctor_neutral.png","characters/manager_stern.png"],
    focus: 0,
    choices: [
      ["「少額だから問題ない」と受け取る", "bad", "少額であっても、個人的な利益供与を受けることは不適切と判断される可能性があります。本人にそのつもりがなくても、公平性を疑われることがあります。", ["characters/vendor_smile.svg","characters/doctor_stern.png","characters/manager_angry.png"]],
      ["受け取りを断り、必要に応じて上司や担当部署に報告する", "good", "受け取らない、記録する、報告するという対応が基本です。業者との関係は、個人ではなく組織として透明性を持って管理しましょう。", ["characters/vendor_neutral.svg","characters/doctor_neutral.png","characters/manager_stern.png"]]
    ]
  },
  {
    title: "9. インシデント報告と隠さない文化",
    location: "病棟",
    bg: "backgrounds/ward_room.svg",
    question: "投薬準備の際、薬剤名を確認している途中で、別の患者の薬と取り違えそうになりました。実際には投与前に気づき、患者への影響はありませんでした。\n\nあなたはどうしますか？",
    message: "患者に影響がなかった場合でも、ヒヤリ・ハットの共有は安全文化の重要な一部です。",
    reading: "インシデントやヒヤリ・ハットの報告は、職員を罰するためのものではありません。むしろ、現場で起きている危険の芽を見つけ、重大事故を防ぐための重要な仕組みです。\n\n「今回は大丈夫だった」「自分の不注意だから言いにくい」と感じる場面ほど、報告が大切です。安全な組織とは、ミスをしない人だけで構成される組織ではなく、ミスや危険を早く共有し、改善できる組織です。",
    chars: ["characters/nurse_worried.png","characters/doctor_neutral.png","characters/patient_neutral.svg"],
    focus: 0,
    choices: [
      ["患者に影響がなかったので、報告せずに終わらせる", "bad", "影響がなかった事例でも、次回は重大事故につながる可能性があります。報告しないことで、組織として原因を把握し改善する機会を失います。", ["characters/nurse_sad.png","characters/doctor_stern.png","characters/patient_worried.svg"]],
      ["上司に報告し、所定の手順でヒヤリ・ハットとして共有する", "good", "早期の報告と共有は、患者安全を守るために重要です。個人を責めるのではなく、仕組みや環境を改善する視点で対応します。", ["characters/nurse_happy.png","characters/doctor_neutral.png","characters/patient_neutral.svg"]]
    ]
  },
  {
    title: "10. 相談・通報しやすい職場づくり",
    location: "相談室",
    bg: "backgrounds/counseling_room.svg",
    question: "同僚が「上司の言動がつらいけれど、相談したら自分が不利になるかもしれない」と話しています。\n\nあなたはどのように対応しますか？",
    message: "問題は早い段階で相談されることが重要です。相談者を孤立させない姿勢も大切です。",
    reading: "コンプライアンス違反やハラスメントの問題は、早期に相談されるほど対応の選択肢が広がります。しかし、相談する側は「不利益を受けるのではないか」「周囲に知られるのではないか」と不安を抱えています。\n\nそのため、職場には相談しやすい雰囲気と、相談者を守る仕組みが必要です。また、相談を受けた側も、安易に内容を広めたり、本人の了承なく話を進めたりしないよう注意が必要です。信頼できる窓口につなぐことが、適切な初期対応になります。",
    chars: ["characters/staff_worried.png","characters/counselor_neutral.png","characters/manager_stern.png"],
    focus: 0,
    choices: [
      ["「我慢するしかないよ。あまり大ごとにしない方がいい」と言う", "bad", "我慢を促す対応は、問題の長期化や深刻化につながる可能性があります。相談しようとする人を孤立させないことが大切です。", ["characters/staff_sad.png","characters/counselor_neutral.png","characters/manager_angry.png"]],
      ["「一人で抱え込まないで、相談窓口や信頼できる上司に相談しよう」と伝える", "good", "相談先を示し、本人が安心して行動できるよう支えることが重要です。相談内容は慎重に扱い、本人の意思や安全に配慮してつなげましょう。", ["characters/staff_happy.png","characters/counselor_neutral.png","characters/manager_stern.png"]]
    ]
  }
];

const $ = id => document.getElementById(id);
const ids = ["charLeft","charCenter","charRight"];
const pos = ["pos-left","pos-center","pos-right"];

function setCharacters(charList, focusIndex){
  ids.forEach((id, idx) => {
    const el = $(id);
    el.src = BASE + charList[idx];
    el.className = "character " + pos[idx];
    if (idx === focusIndex) el.classList.add("focus","pulse","speaking");
    else el.classList.add("dim");
  });
}

function startTraining(){
  state.index = 0;
  state.locked = false;
  $("startBtn").style.display = "none";
  loadScenario();
}

function loadScenario(){
  if (state.index >= scenarios.length) {
    showComplete();
    return;
  }

  state.locked = false;
  const s = scenarios[state.index];
  $("stage").style.backgroundImage = `url('${BASE}${s.bg}')`;
  $("locationBadge").textContent = s.location;
  $("progressText").textContent = `${state.index + 1} / ${scenarios.length}`;
  $("chapter").textContent = s.title;
  $("question").textContent = s.question;
  $("messageBubble").querySelector("span").textContent = s.message;
  $("bubbleIcon").src = BASE + "ui/info.png";
  $("readingText").textContent = "選択後に、この場面で考えるポイントを表示します。";
  setCharacters(s.chars, s.focus);

  const choices = $("choices");
  choices.innerHTML = "";
  s.choices.forEach((choice) => {
    const b = document.createElement("button");
    b.className = "choiceBtn";
    b.innerHTML = `<span>${choice[0]}</span><strong>›</strong>`;
    b.onclick = () => choose(choice, b);
    choices.appendChild(b);
  });
}

function choose(choice, selectedButton){
  if (state.locked) return;
  state.locked = true;

  document.querySelectorAll(".choiceBtn").forEach(b => b.disabled = true);
  selectedButton.classList.add(choice[1] === "good" ? "goodSelected" : "badSelected");

  const result = choice[1];
  const feedback = choice[2];
  const resultChars = choice[3];
  const s = scenarios[state.index];

  $("messageBubble").querySelector("span").textContent = feedback;
  $("bubbleIcon").src = BASE + "ui/" + (result === "good" ? "good.png" : "bad.png");
  $("readingText").textContent = s.reading;
  setCharacters(resultChars, result === "good" ? 1 : s.focus);

  const focused = $(ids[result === "good" ? 1 : s.focus]);
  focused.classList.remove("reaction-good","reaction-bad");
  focused.classList.add(result === "good" ? "reaction-good" : "reaction-bad");

  $("judgement").textContent = result === "good" ? "〇" : "×";
  $("judgement").style.background = result === "good" ? "rgba(0,150,90,.52)" : "rgba(170,0,0,.55)";
  $("judgement").style.display = "flex";

  setTimeout(() => { $("judgement").style.display = "none"; }, 1050);

  const next = document.createElement("button");
  next.id = "nextBtn";
  next.type = "button";
  next.textContent = state.index + 1 >= scenarios.length ? "研修を終了する" : "次のシナリオへ";
  next.onclick = () => { state.index += 1; loadScenario(); };
  $("choices").appendChild(next);
}

function showComplete(){
  $("stage").style.backgroundImage = `url('${BASE}backgrounds/counseling_room.svg')`;
  $("locationBadge").textContent = "完了";
  $("progressText").textContent = "完了";
  $("chapter").textContent = "研修終了";
  $("question").innerHTML = "全シナリオが終了しました。<br>日常業務の中で、法令遵守だけでなく、相手の受け止め方・心理的安全性・患者安全・組織への影響を意識して行動しましょう。";
  $("choices").innerHTML = '<div class="completeBox">お疲れさまでした。もう一度実施する場合は、下のボタンを押してください。</div>';
  $("startBtn").textContent = "もう一度実施する";
  $("startBtn").style.display = "block";
  $("messageBubble").querySelector("span").textContent = "コンプライアンスは、安心して働き、信頼される医療を提供するための行動基準です。";
  $("bubbleIcon").src = BASE + "ui/good.png";
  $("readingText").textContent = "この研修では、ハラスメント、カスタマーハラスメント、個人情報、SNS、守秘義務、経費、利益相反、インシデント報告、相談・通報を扱いました。どのテーマにも共通するのは、一人で抱え込まず、必要なときに記録し、相談し、組織として対応することです。";
  setCharacters(["characters/doctor_neutral.png","characters/nurse_happy.png","characters/office_neutral.png"], 1);
}

function init(){
  $("progressText").textContent = "開始前";
  $("startBtn").addEventListener("click", startTraining);
  setCharacters(["characters/doctor_neutral.png","characters/nurse_worried.png","characters/office_neutral.png"], 1);
}

window.addEventListener("DOMContentLoaded", init);
