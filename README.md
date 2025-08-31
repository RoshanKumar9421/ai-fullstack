<h1 align="center">🚀 Quick AI</h1>
<p align="center">
  <b>Your all-in-one AI-powered content creation platform</b><br>
  <img src="https://img.shields.io/badge/AI-Powered-blueviolet?style=flat-square" alt="AI Powered" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
</p>

---

## ✨ Features

- 📝 **AI Article Writer:** Generate high-quality articles on any topic.
- 🏷️ **Blog Title Generator:** Create catchy blog titles with AI.
- 🎨 **AI Image Generation:** Produce stunning images in various styles.
- 🖼️ **Background/Object Removal:** Effortlessly remove backgrounds or objects from images.
- 📄 **Resume Reviewer:** Get AI-powered feedback on your resume.
- 🌐 **Community:** Share and discover public creations.
- 📊 **User Dashboard:** Manage your creations and track usage.
- 💎 **Premium Plan:** Unlock advanced features with a premium subscription.

---

## 🛠️ Tech Stack

| Frontend         | Backend           | AI & Cloud         | Deployment |
|------------------|-------------------|--------------------|------------|
| React, Vite      | Node.js, Express  | OpenAI, Gemini     | Vercel     |
| Tailwind CSS     | PostgreSQL (Neon) | ClipDrop, Cloudinary|            |
| Clerk (Auth)     | Multer            |                    |            |

---

## 🚀 Getting Started

### 1. **Clone the Repository**
```sh
git clone <repo-url>
cd ai
```

### 2. **Install Dependencies**
```sh
cd client && npm install
cd ../server && npm install
```

### 3. **Set Up Environment Variables**
- Copy `.env.example` in both `client/` and `server/` to `.env` and fill in your keys.

### 4. **Run the App Locally**
```sh
# In separate terminals:
cd client && npm run dev
cd server && npm start
```
- Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
ai/
├── client/         # React frontend
├── server/         # Express backend
├── vercel.json     # Vercel deployment config
├── README.md
└── .gitignore
```

---

## ☁️ Deployment

- Ready for [Vercel](https://vercel.com/) deployment.
- Set all required environment variables in the Vercel dashboard.

---

## 📜 License

MIT License

---

<p align="center">
  <b>Made with ❤️ by Roshan
