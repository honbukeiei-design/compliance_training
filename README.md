# 役割別レイアウト調整版

以下3ファイルを必ずセットで差し替えてください。

- index.html
- assets/main.js
- assets/style.css

## 重要

今回の修正では `index.html` の構造も変更しています。
`main.js` と `style.css` だけを差し替えると、役割ラベルやサイズ変更が正しく表示されません。

## 修正内容

- 3者がいるシナリオでは、以下の見え方にしました。
  - あなた：大きめ表示、黄色ラベル、軽い強調アニメーション
  - 行為者：小さめ表示、赤系ラベル
  - 受ける者：小さめ表示、青系ラベル
  - 支援・相談先：控えめ表示、グレー系ラベル
- 場所名表示と「あなた」の立場表示がかぶらないよう、上部を `sceneHeader` として分離しました。
- `security_neutral.png` / `security_stern.png` は情報管理・セキュリティ確認が自然な場面で表示するよう再構成しました。
- `patient_neutral.png` / `patient_worried.png` は、患者さんが実際に関係する場面で表示するよう再構成しました。

## 画像ファイルについて

`security_stern.png` をまだ配置していない場合は、以前の追加キャラクターZipに含まれているものを `assets/characters/` に入れてください。
今回のZipにも念のため `assets/characters/security_stern.png` を同梱しています。
