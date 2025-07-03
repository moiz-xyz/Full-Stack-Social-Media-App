# Community Forum & Q&A Site Tutorial

<div align="center">
  <br />
  <a href="https://youtu.be/_sSTzz13tVY" target="_blank">
    <img src="https://github.com/machadop1407/social-media-vite-supabase/blob/main/public/thumb.png" alt="Project Banner">
  </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </div>
  <h3 align="center">Build a Modern Social Media Website</h3>
  <div align="center">
    Follow along with our detailed tutorial on 
    <a href="https://youtu.be/_sSTzz13tVY" target="_blank"><b>YouTube</b></a>
  </div>
  <br />
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Code Snippets](#code-snippets)
6. [Assets & More](#assets--more)

## 🚀 Introduction

In this video tutorial, you'll learn how to build a fully featured community forum and Q&amp;A site using modern web technologies. We’ll cover everything from real-time interactions and GitHub authentication to stunning glassy UI elements with glowing gradient effects. This project is perfect for developers who want to dive into building dynamic, interactive, and beautifully designed web applications.

Watch the tutorial on [YouTube](https://youtu.be/_sSTzz13tVY).

## ⚙️ Tech Stack

- **React** for building the user interface
- **Vite** for fast development and build processes
- **TypeScript** for type safety and modern JavaScript features
- **Supabase** for backend services including authentication, real-time data, and storage
- **Tailwind CSS** for rapid and responsive styling

## ⚡️ Features

- **User Authentication via GitHub:**  
  Securely sign in with GitHub and display user avatars and usernames across the site.

- **Post Creation with Image Uploads:**  
  Create posts with rich content and optional image uploads, complete with the creator’s profile picture.

- **Dynamic Voting System:**  
  Thumbs up and thumbs down buttons with subtle white glow effects to indicate your vote.

- **Robust Commenting System:**  
  Engage in threaded discussions with nested replies, each showing the commenter’s username and timestamp.

- **Community & Category Support:**  
  Build a Reddit-like experience where posts are organized by communities, with posts displayed in a responsive grid.

- **Modern Glassmorphism & Glow Effects:**  
  Enjoy a visually striking interface featuring glassy, transparent cards with glowing gradient borders on hover.

- **Real-Time Data Updates:**  
  All interactions (posting, voting, commenting) update in real time using Supabase and React Query.

## 👌 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

Run the following commands in your terminal:

```bash
git clone https://github.com/machadop1407/social-media-vite-supabase.git
cd social-media-tutorial
```

### Installation

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a file named `.env` in the project root and add your Supabase credentials and other configuration values:

```env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🕸️ Code Snippets

Below are some key code snippets from the project.

### RPC Function with Avatar URL

```sql
CREATE OR REPLACE FUNCTION get_posts_with_counts()
RETURNS TABLE (
  id integer,
  title text,
  content text,
  created_at timestamptz,
  image_url text,
  like_count integer,
  comment_count integer,
  user_avatar_url text
)
LANGUAGE sql
AS $$
  SELECT 
    p.id,
    p.title,
    p.content,
    p.created_at,
    p.image_url,
    (SELECT COUNT(*) FROM votes v WHERE v.post_id = p.id) AS like_count,
    (SELECT COUNT(*) FROM comments c WHERE c.post_id = p.id) AS comment_count,
    p.user_avatar_url
  FROM posts p
  ORDER BY p.created_at DESC;
$$;
```

### Vote Deletion RLS Policy

```sql
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Delete own vote" ON votes
FOR DELETE
USING (auth.uid()::text = user_id);
```

## 🎨 Assets & More

- **Tutorial Video:**  
  [Watch on YouTube](https://youtu.be/_sSTzz13tVY)

- **Design Inspiration & Assets:**  
  Explore additional assets and design inspirations [here](https://drive.google.com/file/d/your-assets-link).

## 🚀 More

If you enjoyed this tutorial, check out our other projects and advanced courses to further improve your development skills.

---

Happy coding and thanks for watching!
