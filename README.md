# 都道府県別総人口推移

[![Deploy Next.js site to Pages](https://github.com/aratama/prefecture-chart/actions/workflows/nextjs.yml/badge.svg)](https://github.com/aratama/prefecture-chart/actions/workflows/nextjs.yml)

RESAS API から人口データを取得してグラフに表示するウェブアプリです。

## デモ

以下の URL を開くとデモを閲覧できます。

https://aratama.github.io/prefecture-chart/

## 開発サーバーの起動

まずプロジェクトのルートに `.env` ファイルを作成し、以下のように RESAS の API キーを環境変数 `NEXT_PUBLIC_RESAS_API_KEY` として設定してください。

```
NEXT_PUBLIC_RESAS_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

ローカル環境で開発サーバーを起動するには、以下のコマンドを実行してください。

```bash
npm run dev
```

開発サーバーが起動したら、ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

# 単体テスト

単体テストを実施するには、以下のコマンドを実行してください。

```bash
$ npm test
```

また、テストのカバレッジのレポートは以下のコマンドで見ることができます。

```bash
$ npm run test:coverage
```

# デプロイ

デプロイ先は GitHub Pages になっています。
`.github/workflows/nextjs.yml`に GitHub のワークフローが定義されており、リポジトリに push すれば GitHub Pages へデプロイされます。
ビルドの前に GitHub Actions の環境シークレットに `NEXT_PUBLIC_RESAS_API_KEY` という名前で RESAS の API キーを設定しておく必要があることに注意してください。
