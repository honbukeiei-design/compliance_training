# コンプライアンス研修 10シナリオ版

GitHub Pagesでそのまま公開できる静的Web教材です。

## 構成

- `index.html` : 研修画面
- `assets/main.js` : 10本のシナリオ、選択肢、フィードバック、読み物解説
- `assets/style.css` : 画面デザイン、キャラクター演出、レスポンシブ対応
- `assets/characters/` : キャラクター画像
- `assets/backgrounds/` : シナリオ背景画像
- `assets/ui/` : 〇・×・情報アイコン

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作成します。
2. このZipを展開し、中身をリポジトリ直下にアップロードします。
3. GitHubの `Settings` → `Pages` を開きます。
4. `Build and deployment` の Source を `Deploy from a branch` にします。
5. Branch を `main`、フォルダを `/root` にして保存します。
6. 数分後、表示されたURLから研修を開けます。

## 編集ポイント

シナリオ本文を変更する場合は、`assets/main.js` の `scenarios` 配列を編集してください。
キャラクターを差し替える場合は、`assets/characters/` に画像を追加し、各シナリオの `chars` または選択肢後の画像パスを変更してください。

## 今回の追加内容

- 既存4シナリオを10シナリオへ増強
- 各シナリオに読み物として使える長めの解説を追加
- 選択後に〇・×表示、キャラクター表情変更、解説表示
- 新規キャラクターとして業者・患者のSVG素材を追加
- 背景画像をSVGで追加し、GitHub Pages単体で実行可能化
