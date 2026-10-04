# cra-template-boboReactTypeScript

自己做小練習時用的 React + TypeScript 起手模板。拿掉官方範本裡用不到的東西，預先放好 React Router、SCSS、ESLint、GitHub Pages 部署設定。

## 用法

```bash
npx degit Bobo100/cra-template-bobo-react-ts/template my-app
cd my-app
npm install
npm run dev   # http://localhost:3000
```

模板內容在 [`template/`](template):

| | |
|---|---|
| 建置 | Vite 8、TypeScript 5(`tsc -b && vite build`,輸出到 `dist/`) |
| 框架 | React 19、React Router 7(`basename` 取自 `import.meta.env.BASE_URL`) |
| 樣式 | SCSS(`src/css/`) |
| 檢查 | ESLint flat config(typescript-eslint、react-hooks、react-refresh),`npm run lint` |
| 部署 | `.github/workflows/deploy.yml`:push 到 `main` 時 build 並推到 `gh-pages`,PR 只跑 lint 與 build |

需要 Node.js 20.19 以上。

### 部署到 GitHub Pages(project page)

1. `vite.config.ts` 的 `base` 改成 `'/<repo 名稱>/'`
2. Repo 設定的 Pages 來源選 `gh-pages` 分支
3. `public/404.html` 會把直接開啟的子路徑導回 SPA(預設保留 1 層路徑，對應 project page)

## 舊版(Create React App)

2023 年的版本是發佈到 npm 的 CRA 模板([`cra-template-boboreacttypescript@0.2.2`](https://www.npmjs.com/package/cra-template-boboreacttypescript)),用法是 `npx create-react-app my-app --template cra-template-boboreacttypescript`。CRA 已停止維護，這個 repo 改成上面的 Vite 模板；舊版的檔案與「怎麼做自己的 CRA 模板」教學保留在 tag [`cra-0.2.2`](https://github.com/Bobo100/cra-template-bobo-react-ts/tree/cra-0.2.2)。
