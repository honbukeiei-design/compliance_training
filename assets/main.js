const C = 'assets/characters/';
const B = 'assets/backgrounds/';

const scenarios = [
  {
    location:'病棟スタッフステーション', bg:'hospital.svg', title:'第1問：SNSへの投稿',
    question:'休憩中、同僚が「今日の病棟、すごく忙しかった」とSNSに投稿しようとしています。画面には患者さんの氏名は写っていませんが、ナースコール表示や病室番号が一部見えています。あなたならどう対応しますか。',
    chars:{left:'nurse_neutral.png', center:'staff_worried.png', right:'security_neutral.png'},
    choices:[
      {text:'氏名が写っていなければ問題ないので、そのまま投稿してもらう。'},
      {text:'個人が特定される可能性があるため投稿を控えるよう伝え、必要に応じて上司へ相談する。', correct:true, after:{center:'staff_happy.png'}},
      {text:'投稿後に問題になったら削除すればよいと伝える。'}],
    reading:'氏名がなくても、病室番号、日時、診療科、写真の背景、会話の内容などが組み合わさると、患者さんや職員が特定されることがあります。医療機関では「外部に出してよい情報か」ではなく、「外部に出したときに誰かの信頼や安全を損なわないか」で判断することが大切です。迷う場合は投稿しない、または上司や担当部署へ確認しましょう。'
  },
  {
    location:'診察室', bg:'hospital.svg', title:'第2問：説明と同意',
    question:'患者さんが検査内容について不安そうにしています。医師は急いでおり、説明が短くなりそうです。あなたが補助に入っている場合、どの対応が望ましいでしょうか。',
    chars:{left:'patient_worried.svg', center:'doctor_neutral.png', right:'nurse_worried.png'},
    choices:[
      {text:'患者さんが質問しなければ、理解しているものとして進める。'},
      {text:'不安や疑問を確認し、説明が不足している点は医師に共有して、患者さんが納得できるよう支援する。', correct:true, after:{right:'nurse_happy.png'}},
      {text:'詳しいことは専門職だけの責任なので、補助者は関わらない。'}],
    reading:'インフォームド・コンセントでは、患者さんが内容を理解し、納得して選択できることが重要です。説明する職種が限られる内容であっても、患者さんの不安に気づき、適切な担当者につなぐことはチーム医療の大切な役割です。'
  },
  {
    location:'廊下', bg:'corridor.svg', title:'第3問：個人情報の会話',
    question:'廊下で職員同士が患者さんの病状について話しています。周囲には面会者や業者の姿もあります。あなたならどうしますか。',
    chars:{left:'staff_worried.png', center:'nurse_neutral.png', right:'patient_neutral.svg'},
    choices:[
      {text:'業務上の会話なので、場所は気にしなくてよい。'},
      {text:'周囲に聞こえる可能性を伝え、スタッフステーションや相談室など適切な場所で話すよう促す。', correct:true, after:{left:'staff_happy.png'}},
      {text:'患者名を略せば、廊下で話しても問題ない。'}],
    reading:'医療情報は非常に機微な情報です。名前を伏せても、病室、診療科、家族構成、会話の流れで特定されることがあります。会話の場所、声量、資料の扱いを意識するだけで、漏えいリスクは大きく下げられます。'
  },
  {
    location:'事務室', bg:'office.svg', title:'第4問：USBメモリの使用',
    question:'急ぎの資料作成のため、患者情報を私物USBメモリに保存して自宅で作業しようと考えています。最も適切な対応はどれでしょうか。',
    chars:{left:'office_neutral.png', center:'staff_worried.png', right:'security_neutral.png'},
    choices:[
      {text:'短時間だけなら私物USBを使ってもよい。'},
      {text:'私物媒体への保存は避け、院内ルールに沿った承認済みの方法で作業する。', correct:true, after:{center:'staff_happy.png'}},
      {text:'ファイル名を分かりにくくすれば、私物USBでも安全である。'}],
    reading:'私物媒体は紛失、盗難、ウイルス感染、誤保存のリスクが高く、情報漏えいにつながりやすいものです。便利さよりも、承認された環境・手順・アクセス権限を優先することが、患者さんと組織を守ります。'
  },
  {
    location:'会議室', bg:'office.svg', title:'第5問：ハラスメントへの気づき',
    question:'上司が部下に対して、他の職員の前で強い口調の注意を繰り返しています。部下は萎縮しており、業務にも影響が出ています。あなたならどう行動しますか。',
    chars:{left:'manager_angry.png', center:'staff_sad.png', right:'counselor_neutral.png'},
    choices:[
      {text:'指導の一部なので、周囲は口を出さない。'},
      {text:'安全を確保しつつ状況を記録し、相談窓口や上位者へつなぐ。必要に応じて当事者にも声をかける。', correct:true, after:{left:'manager_stern.png', center:'staff_worried.png'}},
      {text:'その場を盛り上げる冗談として受け流す。'}],
    reading:'ハラスメントは、受け手の心身だけでなく、職場全体の安全文化を損ないます。注意や指導が必要な場面でも、人格を傷つける言い方や公開の場での威圧は適切ではありません。見かけた人が一人で抱え込まず、記録し、相談につなぐことが重要です。'
  },
  {
    location:'受付・会計窓口', bg:'hospital.svg', title:'第6問：金品・便宜の受け取り',
    question:'患者さんの家族から「いつもお世話になっているので」と商品券を渡されそうになりました。どう対応するのが適切でしょうか。',
    chars:{left:'patient_neutral.svg', center:'staff_worried.png', right:'manager_stern.png'},
    choices:[
      {text:'気持ちなので、個人的に受け取ってお礼を言う。'},
      {text:'お気持ちに感謝を伝えつつ、組織のルールとして受け取れないことを丁寧に説明する。', correct:true, after:{center:'staff_happy.png'}},
      {text:'他の職員に見られない場所で受け取る。'}],
    reading:'金品や過度な便宜の受け取りは、公平性への疑念や利益相反につながります。相手の気持ちを否定する必要はありません。感謝を伝えたうえで、組織のルールとして受け取れないことを丁寧に説明しましょう。'
  },
  {
    location:'電子カルテ端末', bg:'office.svg', title:'第7問：ID・パスワード管理',
    question:'同僚から「急いでいるので、あなたのIDで電子カルテを開いておいて」と頼まれました。最も望ましい対応はどれですか。',
    chars:{left:'nurse_worried.png', center:'security_neutral.png', right:'doctor_neutral.png'},
    choices:[
      {text:'信頼できる同僚なら、短時間だけIDを使わせる。'},
      {text:'IDの共有はできないと伝え、本人が自分のIDでログインできるよう支援する。', correct:true, after:{left:'nurse_happy.png'}},
      {text:'ログイン後にすぐ席を離れ、同僚に操作してもらう。'}],
    reading:'IDは「誰が、いつ、何を見たか」を確認するための重要な鍵です。共有すると、誤操作や不正閲覧が起きたときに責任の所在が不明確になります。急ぎの場面ほど、基本ルールを崩さないことが大切です。'
  },
  {
    location:'外部業者との打合せ', bg:'office.svg', title:'第8問：契約前の情報提供',
    question:'システム業者から「概算見積のため、実データを少し見せてほしい」と言われました。患者情報を含む一覧を送ってよいでしょうか。',
    chars:{left:'office_neutral.png', center:'security_neutral.png', right:'manager_stern.png'},
    choices:[
      {text:'見積に必要なら、メールで実データを送付する。'},
      {text:'目的、契約、権限、匿名化の要否を確認し、承認された手順で必要最小限の情報だけを扱う。', correct:true},
      {text:'口頭で「外部に漏らさないでください」と伝えれば十分である。'}],
    reading:'外部提供では、目的の明確化、契約・守秘義務、取扱範囲、保存期間、廃棄方法などの確認が欠かせません。見積段階では、実データではなくダミーデータや匿名化データで代替できないかをまず検討しましょう。'
  },
  {
    location:'夜間の病棟', bg:'corridor.svg', title:'第9問：ヒヤリ・ハット報告',
    question:'薬剤の確認でヒヤリとする場面がありました。患者さんへの影響はありませんでしたが、当事者は「大ごとにしたくない」と言っています。あなたならどうしますか。',
    chars:{left:'nurse_sad.png', center:'doctor_stern.png', right:'manager_stern.png'},
    choices:[
      {text:'患者さんに影響がなければ報告しない。'},
      {text:'個人を責めるためではなく再発防止のために、ルールに沿って速やかに報告する。', correct:true, after:{left:'nurse_happy.png', center:'doctor_neutral.png'}},
      {text:'当事者の希望を尊重し、口頭で周囲にだけ共有する。'}],
    reading:'ヒヤリ・ハット報告は、誰かを罰するためではなく、同じ状況が重大事故につながらないよう仕組みを改善するためのものです。小さな気づきが、次の患者安全につながります。'
  },
  {
    location:'研修のまとめ', bg:'hospital.svg', title:'第10問：迷ったときの行動',
    question:'日常業務で「この対応で本当に大丈夫かな」と迷う場面に出会いました。コンプライアンスの観点から、最も望ましい姿勢はどれでしょうか。',
    chars:{left:'staff_worried.png', center:'nurse_neutral.png', right:'counselor_neutral.png'},
    choices:[
      {text:'前例がありそうなら、自分の判断だけで進める。'},
      {text:'患者さん・職員・組織の信頼を守れるかを考え、迷ったら記録し、早めに相談する。', correct:true, after:{left:'staff_happy.png', center:'nurse_happy.png'}},
      {text:'問題が起きてから対応を考える。'}],
    reading:'コンプライアンスは、規程を暗記するだけのものではありません。迷ったときに立ち止まり、影響を想像し、相談できることが大切です。早めの相談は弱さではなく、患者さん・職員・組織を守るための専門的な行動です。'
  }
];

let current = -1;
let score = 0;
const total = scenarios.length;
const el = id => document.getElementById(id);
const $ = {
  stage: el('stage'), scene: el('sceneArea'), location: el('locationBadge'), progress: el('progressText'),
  title: document.querySelector('#trainingPanel h1'), chapter: el('chapter'), question: el('question'), choices: el('choices'),
  start: el('startBtn'), reading: el('readingText'), bubble: el('messageBubble').querySelector('span'), bubbleIcon: el('bubbleIcon'), judge: el('judgement'),
  left: el('charLeft'), center: el('charCenter'), right: el('charRight')
};

function pathFor(img){ return img ? C + img : ''; }
function setChars(chars={}){
  $.left.src = pathFor(chars.left); $.center.src = pathFor(chars.center); $.right.src = pathFor(chars.right);
}
function setSceneBg(file){ $.scene.style.setProperty('--scene-bg', `url('${B}${file}')`); }
function showJudge(ok){
  $.judge.className = ok ? 'show ok' : 'show ng';
  $.judge.textContent = ok ? '○' : '×';
  window.setTimeout(()=>{$.judge.className='';}, 900);
}
function loadScenario(i){
  current = i;
  const s = scenarios[i];
  $.location.textContent = s.location;
  $.progress.textContent = `${i+1} / ${total}`;
  $.title.textContent = 'コンプライアンス研修';
  $.chapter.textContent = s.title;
  $.question.textContent = s.question;
  $.reading.textContent = '選択後に解説を表示します。まずは自分ならどう対応するかを選んでください。';
  $.bubble.textContent = '場面をよく読み、最も信頼を守れる対応を選びましょう。';
  setSceneBg(s.bg);
  setChars(s.chars);
  $.choices.innerHTML = '';
  s.choices.forEach((choice, idx)=>{
    const btn = document.createElement('button');
    btn.type='button'; btn.className='choiceBtn'; btn.textContent = `${idx+1}. ${choice.text}`;
    btn.addEventListener('click',()=>answer(idx));
    $.choices.appendChild(btn);
  });
  $.start.textContent = '次へ';
  $.start.style.display = 'none';
}
function answer(idx){
  const s = scenarios[current];
  const choice = s.choices[idx];
  const correct = !!choice.correct;
  if(correct) score += 1;
  [...document.querySelectorAll('.choiceBtn')].forEach((btn,i)=>{
    btn.disabled = true;
    if(s.choices[i].correct) btn.classList.add('correct');
    if(i===idx && !correct) btn.classList.add('wrong');
  });
  const nextChars = Object.assign({}, s.chars, choice.after || {});
  if(!correct){
    if(nextChars.center && nextChars.center.includes('happy')) nextChars.center = s.chars.center;
  }
  setChars(nextChars);
  showJudge(correct);
  $.reading.textContent = s.reading;
  $.bubble.textContent = correct ? 'よい判断です。解説を読んで、判断の理由も確認しましょう。' : '惜しいです。赤い選択肢ではなく、緑の選択肢が望ましい対応です。理由を確認しましょう。';
  $.start.style.display = 'inline-block';
  $.start.textContent = current + 1 === total ? '結果を見る' : '次のシナリオへ';
}
function showResult(){
  $.location.textContent = '修了';
  $.progress.textContent = `${total} / ${total}`;
  $.chapter.textContent = '研修結果';
  $.question.innerHTML = `<div class="resultBox"><div class="resultScore">正答率：${score} / ${total}</div><div class="resultNote">お疲れさまでした。大切なのは満点を取ることだけではなく、迷ったときに立ち止まり、相談し、記録し、組織として安全な判断につなげることです。</div></div>`;
  $.choices.innerHTML = '';
  $.reading.textContent = '今回扱ったテーマは、個人情報保護、説明と同意、ハラスメント、利益相反、ID管理、外部提供、インシデント報告です。日々の小さな判断が、患者さんと職員からの信頼を支えます。';
  $.bubble.textContent = `最終結果は ${score} / ${total} です。日常業務でも、迷ったら早めに相談しましょう。`;
  setSceneBg('hospital.svg');
  setChars({left:'staff_happy.png', center:'nurse_happy.png', right:'doctor_neutral.png'});
  $.start.textContent = 'もう一度挑戦する';
  $.start.style.display = 'inline-block';
  current = -1;
}
$.start.addEventListener('click',()=>{
  if(current === -1 && $.start.textContent.includes('もう一度')){score = 0; loadScenario(0); return;}
  if(current === -1){score = 0; loadScenario(0); return;}
  if(current + 1 < total){loadScenario(current+1);} else {showResult();}
});
setChars({left:'staff_happy.png', center:'nurse_neutral.png', right:'doctor_neutral.png'});
setSceneBg('hospital.svg');
