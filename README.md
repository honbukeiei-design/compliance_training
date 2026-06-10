# 背景反映修正版 v5

背景ファイルを置き換えても画面が変わらない場合向けの修正版です。

## 差し替えるファイル

- index.html
- assets/background-fix.css
- assets/backgrounds/hospital.png
- assets/backgrounds/corridor.png
- assets/backgrounds/office.png
- assets/backgrounds/hospital.svg
- assets/backgrounds/corridor.svg
- assets/backgrounds/office.svg

## なぜこれが必要か

現在の画面では、背景が `style.css` の疑似要素 `#sceneArea::before` によって表示されています。
そのため、画像アセットだけを置き換えても、CSSやブラウザキャッシュの影響で古い見た目が残る場合があります。

今回の `background-fix.css` は `style.css` の後に読み込まれ、背景画像をPNGへ強制的に切り替えます。
また、既存の `main.js` が `hospital.svg` / `corridor.svg` / `office.svg` を指定していても反応するようにしています。

## 反映されない場合

GitHub Pagesでは反映まで数分かかることがあります。
スマホではURL末尾に `?v=5` を付けるか、ブラウザキャッシュを削除して確認してください。
