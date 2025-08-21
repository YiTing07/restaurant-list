## Restaurant List 餐廳清單

一個以 React 打造的餐廳清單與收藏應用。支援關鍵字搜尋、分頁瀏覽、收藏清單與餐廳詳細資訊 Modal，收藏資料透過 `localStorage` 保存。UI 採用 Bootstrap 5 與 Bootstrap Icons，路由採用 React Router。

---

## 功能特色

- **關鍵字搜尋**：可依餐廳「名稱」或「類別」搜尋（不分大小寫）。
- **分頁瀏覽**：每頁顯示 8 筆餐廳卡片。
- **收藏清單**：一鍵加入/移除收藏，於 `Favorite` 頁集中檢視與管理，資料存於 `localStorage`。
- **詳細資訊 Modal**：點擊餐廳圖片可開啟 Modal，查看圖片、類別、地址、描述等資訊。
- **導覽列與橫幅**：提供首頁與收藏頁導覽，並顯示橫幅圖。
- **純前端專案**：資料來源為 `src/assets/jsons/restaurants.json`。

---

## 快速開始

### 需求
- Node.js 18+（建議）
- npm 9+（或使用 pnpm/yarn 亦可自行調整）

### 安裝與啟動
```bash
git clone https://github.com/YiTing07/restaurant-list.git
cd restaurant-list
npm install
npm start
```

- 產生正式版建置：
```bash
npm run build
```
- 執行測試：
```bash
npm test
```

> 本專案以 Create React App（`react-scripts`）建立與建置。

---

## 專案結構
```text
restaurant-list/
  public/
  src/
    assets/
      images/
      jsons/
        restaurants.json        # 餐廳資料（示例資料）
    components/
      Header/
      Pagination/
      RestaurantList/
      RestaurantModal/
      Searchbar/
    context/
      FavoritesContext.jsx      # 收藏清單 Context，含 localStorage 同步
    pages/
      Home.jsx                  # 首頁（搜尋 + 餐廳清單）
      Favorite.jsx              # 收藏頁（顯示/移除收藏）
    App.js                      # 路由配置與 Context Provider
    index.js                    # 入口，載入 Bootstrap 與樣式
```

---

## 主要技術

- **React 19**（`react`, `react-dom`）
- **React Router DOM 7**（路由）
- **Bootstrap 5、Bootstrap Icons**（UI 樣式與圖示）
- **Context API + localStorage**（收藏清單狀態與永續化）
- **Create React App（react-scripts）**

---

## 重要路由與元件

- **路由**（見 `src/App.js`）
  - `/`：首頁 `Home`
  - `/favorite`：收藏頁 `Favorite`

- **`Header`**：頂部導覽列與橫幅，提供 Home / Favorite 導覽。
- **`Searchbar`**：受控式輸入欄位與搜尋按鈕（按下按鈕觸發搜尋）。
- **`RestaurantList`**：
  - 分頁顯示餐廳卡片（每頁 8 筆）。
  - 收藏按鈕（整合 `FavoritesContext`）。
  - 點擊圖片開啟 **`RestaurantModal`**。
- **`RestaurantModal`**：顯示餐廳名稱、類別、地址、描述與圖片。
- **`Pagination`**：切換頁碼的 UI 元件。
- **`FavoritesContext`**：提供 `favoriteList` 與 `toggleFavorite`，並在變更時同步至 `localStorage`。

---

## 使用說明

1. 進入首頁後，在搜尋框輸入餐廳名稱或類別關鍵字，按下搜尋按鈕。
2. 點擊餐廳卡片圖片可查看詳細資訊 Modal。
3. 點擊「收藏/已收藏」按鈕切換收藏狀態。
4. 於導覽列進入 `Favorite` 頁面查看或移除收藏的餐廳。

---

## 指令一覽（Scripts）

```bash
npm start   # 啟動開發伺服器
npm test    # 啟動測試（watch 模式）
npm run build  # 產生正式版建置輸出到 build/
npm run eject  # 彈出 CRA 設定（不可逆）
```

---

## 授權

未特別指定，預設以學習與示範用途為主。

---

歡迎提交 Issue 或 Pull Request，一起改進功能與使用體驗。
