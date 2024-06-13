# next-amplify-hands-on

<img src="./images/th.jpg" />

Next.js(App Router)のSSRをAWS Amplifyにデプロイするハンズオンです。
10分ほどで終わります。
目的はAmplifyの雰囲気を掴むためなので詳しい解説は行なっていません。

## 事前準備
- AWSアカウントにログインできること
- 多少の課金を許容できること(無料利用枠がないと普通に課金されます)
- 推奨環境
  - node.js:21.7.3
  - m1 mac sonoma 14.4.1

## (1)Next.jsプロジェクトを作成する
時短のためこのディレクトリをコピーしてください。

### 一からやりたい人向け

```
# nextアプリを作成する(なんか聞かれたらyを連打)
npx create-next-app@latest
# アプリに移動
cd next-amplify-hands-on
# 開発サーバー起動
npm run dev
```
[http://localhost:3000/](http://localhost:3000/)で立ち上がります。

チュートリアルのままだとSSGになっちゃう？
ようなので、SSRになるようなpage.tsxを書いておきます。

今回は、[jsonplaceholder](https://jsonplaceholder.typicode.com/users)という無料のAPIを使います。

ちなみに[localhost:3000](localhost:3000)でみるとこんな感じで表示されているはずです。

<img src="./images/スクリーンショット 2024-06-13 6.56.10.png" />


ビルドします。

```
# ビルドする
npm run build
```
これでSSRのNext.jsプロジェクトが立ち上がったはずです。
すると`.next`ディレクトリが出来上がります。
こいつをAmplifyにデプロイしてあげるイメージです。

## (2)いつものAWSアカウントからAmplifyコンソールを開きます。
Amplifyのコンソールを開いたら、
新しいアプリの作成ボタンを押します。
<img src="./images/スクリーンショット 2024-06-12 22.11.26.png" />

次にgithubを選択します。

<img src="./images/スクリーンショット 2024-06-13 6.57.59.png" />

認証が必要と言われるのでぽちぽちしていきます。

<img src="./images/スクリーンショット 2024-06-13 6.58.39.png" />

必要なリポジトリだけ許可するようにします。

<img src="./images/スクリーンショット 2024-06-13 8.06.44.png" />

すると、Amplifyの画面でリポジトリが選択できるようになっています。

<img src="./images/スクリーンショット 2024-06-13 8.08.00.png" />

フレームワークは自動的にNext.jsと検出されて、設定は勝手に反映されます。特にいじる必要はないです。

<img src="./images/スクリーンショット 2024-06-13 8.08.13.png" />

今回は環境変数なども設定しないので、デフォルトのまま『次へ』を押します。

<img src="./images/スクリーンショット 2024-06-13 8.08.48.png"/>

すると、一度確認ページに遷移します。
問題ないはずなので、保存してデプロイボタンを押します。
割とすぐにデプロイされます。

<img src="./images/スクリーンショット 2024-06-13 8.09.11.png" />

<br>
.
<br>
.
<br>
デプロイ中~~~
<br>
.
<br>
.
<br>
<img src="./images/スクリーンショット 2024-06-13 8.09.43.png" />

<br>
.
<br>
.
<br>
完了！！！！
<br>
.
<br>
.
<br>
ステータスがデプロイ済みになっています。
<img src="./images/スクリーンショット 2024-06-13 8.14.15.png" />

デプロイされたURLにアクセスボタンを押して、アクセスしてみます。
<br>
.
<br>
きました！！
デプロイ成功です！！
.
<br>
<img src="./images/スクリーンショット 2024-06-13 8.43.37.png" />

### まとめ
SSRはS3にデプロイできないので、AWSをつかうとなるとAmplifyの選択肢は有力だと思います！


## 参考資料
- [Next.js Installation](https://nextjs.org/docs/getting-started/installation)
- [Amplify を使用した Next.js アプリケーションのデプロイ](https://docs.aws.amazon.com/ja_jp/amplify/latest/userguide/deploy-nextjs-app.html)
- [AWS Amplify の料金](https://aws.amazon.com/jp/amplify/pricing/)


========= 以下は、Next.jsの元からあったREADME =========


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
