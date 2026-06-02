const BASE = "assets/";
const state = { index: -1, locked: false };

const scenarios = [
  {
    title: "1. 相手の受け止め方を考える",
    location: "ナースステーション",
    bg: "backgrounds/nurse_station.png",
    question: "疲れている部下に対して、\nあなたはどのように声をかけますか？",
    message: "相手の状況や気持ちに寄り添うことが、信頼関係づくりの第一歩です。",
    chars: ["characters/doctor_neutral.png","characters/nurse_worried.png","characters/office_neutral.png"],
    focus: 1,
    choices: [
      ["「なんでできないの？」と指摘する", "bad", "相手を責める表現は、萎縮や相談しづらさにつながります。", ["characters/doctor_stern.png","characters/nurse_sad.png","characters/office_neutral.png"]],
      ["「困っていることはない？」と状況を確認する", "good", "相手の状態を確認し、支援につなげる姿勢が重要です。", ["characters/doctor_neutral.png","characters/nurse_happy.png","characters/office_neutral.png"]]
    ]
  },
  {
    title: "2. パワハラの境界線",
    location: "会議室",
    bg: "backgrounds/meeting_room.png",
    question: "目の前で上司が部下のミスを指導しようとしています。\n周囲には他の職員もいます。",
    message: "指導は人格ではなく、事実・原因・再発防止に向けます。",
    chars: ["characters/manager_stern.png","characters/staff_worried.png","characters/office_neutral.png"],
    focus: 0,
    choices: [
      ["人前で強く叱責する", "bad", "公開叱責は心理的安全性を下げ、パワハラリスクを高めます。", ["characters/manager_angry.png","characters/staff_sad.png","characters/office_neutral.png"]],
      ["別室で事実・原因・再発防止を確認する", "good", "場所・言葉・目的を整理した指導が望ましい対応です。", ["characters/manager_stern.png","characters/staff_happy.png","characters/office_neutral.png"]]
    ]
  },
  {
    title: "3. 患者からの高圧的要求",
    location: "外来受付",
    bg: "backgrounds/reception.png",
    question: "来院者が大声で理不尽な要求を続けています。\nあなたはどう対応しますか？",
    message: "危険時は安全確保を優先し、複数人・組織対応につなげます。",
    chars: ["characters/visitor_angry.png","characters/nurse_worried.png","characters/security_neutral.png"],
    focus: 0,
    choices: [
      ["感情的に言い返す", "bad", "感情的な反論は事態を悪化させます。安全確保と報告が必要です。", ["characters/visitor_angry.png","characters/nurse_sad.png","characters/security_neutral.png"]],
      ["説明・警告・打ち切り・報告を行う", "good", "対応限界を明確にし、記録と組織対応につなげます。", ["characters/visitor_neutral.png","characters/nurse_happy.png","characters/security_neutral.png"]]
    ]
  },
  {
    title: "4. 個人情報の取り扱い",
    location: "カルテ管理室",
    bg: "backgrounds/karte_room.png",
    question: "電子カルテと患者リストが見える状態です。\n席を離れる必要があります。",
    message: "電子情報と紙情報の両方を守ることが、医療倫理の基本です。",
    chars: ["characters/office_neutral.png","characters/nurse_neutral.png","characters/doctor_neutral.png"],
    focus: 0,
    choices: [
      ["短時間なのでそのまま離席する", "bad", "短時間でも漏えいリスクがあります。画面ロックと紙資料管理が必要です。", ["characters/office_neutral.png","characters/nurse_sad.png","characters/doctor_stern.png"]],
      ["画面をロックし、紙資料を伏せる", "good", "画面ロックと紙資料管理をセットで行うのが適切です。", ["characters/office_neutral.png","characters/nurse_happy.png","characters/doctor_neutral.png"]]
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
  setCharacters(s.chars, s.focus);

  const choices = $("choices");
  choices.innerHTML = "";
  s.choices.forEach((choice) => {
    const b = document.createElement("button");
    b.className = "choiceBtn";
    b.innerHTML = `<span>${choice[0]}</span><strong>›</strong>`;
    b.onclick = () => choose(choice);
    choices.appendChild(b);
  });
}

function choose(choice){
  if (state.locked) return;
  state.locked = true;

  document.querySelectorAll(".choiceBtn").forEach(b => b.disabled = true);

  const result = choice[1];
  const feedback = choice[2];
  const resultChars = choice[3];
  const s = scenarios[state.index];

  $("messageBubble").querySelector("span").textContent = feedback;
  setCharacters(resultChars, result === "good" ? 1 : s.focus);

  const focused = $(ids[result === "good" ? 1 : s.focus]);
  focused.classList.remove("reaction-good","reaction-bad");
  focused.classList.add(result === "good" ? "reaction-good" : "reaction-bad");

  $("judgement").textContent = result === "good" ? "〇" : "×";
  $("judgement").style.background = result === "good" ? "rgba(0,150,90,.52)" : "rgba(170,0,0,.55)";
  $("judgement").style.display = "flex";

  setTimeout(() => {
    $("judgement").style.display = "none";
  }, 1100);

  setTimeout(() => {
    state.index += 1;
    loadScenario();
  }, 2600);
}

function showComplete(){
  $("progressText").textContent = "完了";
  $("chapter").textContent = "研修終了";
  $("question").innerHTML = "全シナリオが終了しました。<br>日常業務の中で、法令遵守だけでなく、相手の受け止め方・心理安全性・組織への影響を意識して行動しましょう。";
  $("choices").innerHTML = '<div class="completeBox">お疲れさまでした。もう一度実施する場合は、下のボタンを押してください。</div>';
  $("startBtn").textContent = "もう一度実施する";
  $("startBtn").style.display = "block";
  $("messageBubble").querySelector("span").textContent = "コンプライアンスは、安心して働き、信頼される医療を提供するための行動基準です。";
  setCharacters(["characters/doctor_neutral.png","characters/nurse_happy.png","characters/office_neutral.png"], 1);
}

function init(){
  $("progressText").textContent = "開始前";
  setCharacters(["characters/doctor_neutral.png","characters/nurse_worried.png","characters/office_neutral.png"], 1);
}

window.addEventListener("DOMContentLoaded", init);
