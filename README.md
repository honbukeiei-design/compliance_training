# 必ず差し替えるファイル

今回の修正では、以下3ファイルをセットで差し替えてください。

- index.html
- assets/main.js
- assets/style.css

前回は `main.js` と `style.css` のみだったため、手元の `index.html` が古い構造のままだと、
「あなたの立場」ラベル用の要素が存在せず、アクション表示が出ません。

## 修正内容

- `security_neutral.png` はシナリオ内の通常表示から外しました。
- 各シナリオで「誰があなたの立場か」を本文・吹き出し・画面上ラベルで明示しました。
- 「あなたの立場」の人物だけを強調表示し、軽い上下アニメーションを追加しました。
- `index.html` に actorCue 用の表示要素を追加しました。

## 置き換え方法

既存プロジェクトの同じ場所に、Zip内のファイルをそのまま上書きしてください。

- `index.html` → ルート直下
- `assets/main.js` → `assets/main.js`
- `assets/style.css` → `assets/style.css`

ブラウザで確認するときは、キャッシュの影響を避けるため、強制再読み込みしてください。
Windows: Ctrl + F5
Mac: Cmd + Shift + R
