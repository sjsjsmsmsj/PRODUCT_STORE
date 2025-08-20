# 🛍️ Product Store

Một ứng dụng CRUD đơn giản để quản lý sản phẩm (Create, Read, Update, Delete)  
Sử dụng **React + Chakra UI + Zustand** cho frontend và **Express + MongoDB** cho backend.

---

## 🚀 Tính năng
- Xem danh sách sản phẩm
- Thêm sản phẩm mới
- Sửa sản phẩm với Modal
- Xóa sản phẩm với confirm
- Toast thông báo kết quả thao tác
- UI thân thiện với **Chakra UI**

---

## 🛠️ Công nghệ sử dụng

### Frontend
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/) (UI Components)
- [Zustand](https://github.com/pmndrs/zustand) (state management)
- [React Router](https://reactrouter.com/) (điều hướng)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

## 📂 Cấu trúc thư mục

```bash
project/
│── backend/          # API server
│   ├── models/       # Mongoose models
│   ├── routes/       # Express routes
│   └── server.js     # Entry point
│
│── frontend/         # React app
│   ├── src/
│   │   ├── components/   # React components (ProductCard, etc.)
│   │   ├── store/        # Zustand store
│   │   ├── pages/        # Page components
│   │   └── App.jsx
│   └── package.json
│
└── README.md

⚙️ Cài đặt & chạy
1. Clone repo
git clone https://github.com/your-username/product-store.git
cd product-store

2. Cài đặt backend
cd backend
npm install


Tạo file .env trong thư mục backend:

PORT=3000
MONGO_URI=mongodb://localhost:27017/product_store


Chạy server:

npm run dev

3. Cài đặt frontend
cd frontend
npm install
npm run dev


Mở http://localhost:5173
 để xem app.

📸 Demo giao diện

Trang danh sách sản phẩm

Hiển thị tất cả sản phẩm từ database

Modal Update

Cho phép chỉnh sửa thông tin sản phẩm

Toast

Hiển thị thông báo sau khi thêm/sửa/xóa

📌 Ghi chú

Nếu muốn deploy, có thể dùng Vercel/Netlify cho frontend và Render/Heroku cho backend.

Mặc định backend chạy port 5000, frontend chạy port 5173.

✨ Tác giả

👤 Lâm Gia Thịnh


---

👉 Bạn có muốn mình viết thêm **ảnh minh họa**

<p align="center">
  <img src="https://github.com/sjsjsmsmsj/PRODUCT_STORE/blob/main/show.png?raw=true" alt="Demo" width="600"/>
</p>

