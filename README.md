## TypeScript 15
## Chapter 15: Context API with React and TypeScript
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Starter Code
        (1)在 terminal 輸入 npm create vite@latest
        (2)設定專案名稱
        (3)選取框架 React，變體選擇 TypeScript
        (4)開啟專案資料夾
        (5)在 terminal 輸入 npm i，安裝
        (6)在 terminal 輸入 npm run dev，執行
        (7)刪除 App.css
        (8)新增 counter.tsx
        (9)修改 App.tsx

###  4. Extracting initial state & types
        (1)新增資料夾 context
        (2)新增 CounterContext.tsx
        (3)匯入 createContext
        (4)設定 StateType 為 initState 的類型，修改 typeof initState

###  5. useCounterContext hook & type
        (1)宣告 useCounterContext
        (2)匯入 useReducer
        (3)匯入 ChangeEvent
        (4)回傳 state, increment, decrement 和 handleTextInput
        (5)設定 UseCounterContextType 類型

###  6. Create Context with initial context state
        (1)匯出 CounterContext
        (2)宣告 initContextState
        (3)使用 initContextState 作為匯出的參數

###  7. Context Provider
        (1)匯出 CounterProvider
        (2)匯入 ReactElement
        (3)設定 ChildrenType 類型，回傳 CounterContext.Provider
        (4)設定 value

###  8. useCallback
        (1)匯入 useCallback
        (2)使用 useCallback
        (3)匯出 initState

###  9. Applying the Provider
        (1)匯入 CounterProvider
        (2)匯入 initState
        (3)加入 CounterProvider 元素
        (4)修改 ChildrenType 類型

### 10. Custom hooks to deliver context
        CounterContext.tsx
        (1)設定 UseCounterHookType 類型
        (2)匯出 useCounter
        (3)匯入 useContext
        (4)使用 useContext
        (5)設定 UseCounterTextHookType 類型
        (6)匯出 useCounter
        (7)使用 useContext

        Counter.tsx
        (8)移除 useReducer 和 ChangeEvent
        (9)匯入 useCounter
        (10)匯入 useCounterText
        (11)使用 useCounter
        (12)使用 useCounterText

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
