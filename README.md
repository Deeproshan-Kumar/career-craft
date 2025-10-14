# 🧑‍💼 Job Board Platform

A modern, full-stack job application platform, built with bleeding-edge web technologies. The platform supports job listings, resume uploads, advanced filtering, and user management for both applicants and employers.

---

## ✨ Features

- ✅ **Applicants**: Search, filter, and apply for jobs. Manage resumes and saved jobs.
- ✅ **Employers**: Post job listings, manage applications, and view analytics.
- ✅ **Authentication**: Secure login/signup for both user types.
- ✅ **Responsive UI**: Built with ShadCN + TailwindCSS for a clean and accessible user experience.
- ✅ **Database**: Robust relational data using MySQL + Drizzle ORM.
- ✅ **Server-Side Rendering**: Powered by Next.js App Router for performance and SEO.

---

## 🧱 Tech Stack

| Technology     | Purpose                                       |
|----------------|-----------------------------------------------|
| **Next.js**    | React framework for SSR, routing, and API     |
| **TypeScript** | Type safety across the codebase               |
| **TailwindCSS**| Utility-first CSS framework                   |
| **ShadCN UI**  | UI components using Radix + Tailwind          |
| **MySQL**      | Relational database for persistent storage    |
| **Drizzle ORM**| Type-safe ORM for schema & DB interaction     |

---

## 📁 Project Structure

| folder/files              | Description                                   |
|---------------------------|-----------------------------------------------|
| **public/**               | Static assets                                 |
| **app/**                  | Application routes (Next.js App Router)       |
| **components/**           | Reusable UI components                        |
| **db/**                   | UI DB configuration, Drizzle schemas          |
| **drizzle/migrations/**   | Drizzle migrations                            |
| **lib/**                  | Utilities and helper functions                |
| **.env**                  | Environment variables                         |
| **drizzle.config.ts**     | Drizzle configuration                         |
| **tailwind.config.ts**    | Tailwind configuration                        |
| **next.config.js**        | Next.js configuration                         |

## 📦 Installation

1. Clone the Repository
git clone https://github.com/Deeproshan-Kumar/career-craft.git
cd career-craft

2. Install Dependencies
npm install

3. Set up Environment
.env then edit .env with your values

4. Set up the Database
Create the database manually or via CLI, then run:
npm run db:generate   # Generates schema types
npm run db:migrate    # Runs pending migrations
npm run db:studio     # Open drizzle studio

## 🧪 Available Scripts

| Scripts                           | Purpose                                       |
|-----------------------------------|-----------------------------------------------|
| **npm run dev**                   | Start the development server                  |
| **npm run build**                 | Build the project for production              |
| **npm run start**                 | Start the production build                    |
| **npm run db:generate**           | Generate Drizzle client and schema types      |
| **npm run db:drizzle:migrate**    | Run pending migrations                        |
| **npm run db:studio**             | Open drizzle studio                           |

## 🚧 Roadmap

Here's a high-level roadmap of features and milestones:

## 🎯 MVP Goals

✅ Job listings CRUD (employer-side)  
✅ Job search with filters (user-side)  
✅ User roles and basic auth  
✅ UI with ShadCN and Tailwind
 
 
## ℹ️ Upcoming

✅ Profile and resume management  
✅ Application submission tracking  
✅ Advanced filtering & job alerts  
✅ Email notifications  
✅ Employer dashboards  
✅ Admin panel  
✅ SEO optimization

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch: git checkout -b feature/your-feature-name
3. Make your changes and commit
4. Push to your fork and submit a PR
5. Please follow conventional commit messages and format your code using the existing ESLint/Tailwind config

## 📝 License

This project has no any official license right now.

## 🙋‍♂️ Author

**Deeproshan Kumar** | Software Engineer | Sr. Front End Developer  
📧 deeproshankumar123@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/deeproshan-kumar/)  
📂 [Portfolio](https://portfolio-in-nine.vercel.app/)