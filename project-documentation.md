# Project Documentation

## Project Overview

This is a modern full-stack web application built using **Next.js (App Router)** with **TypeScript**, integrating tools like **React Hook Form**, **Zod**, **ShadCN UI**, **Prisma**, **SQLite**, and more for a clean, scalable, and responsive user experience.

---

## 📁 Project Structure

```
/
├── .next/                  # Next.js build output
├── public/                 # Static files
├── prisma/                 # Prisma schema and migrations
├── scripts/                # Custom scripts
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── (home)/         # Home page components
│   │   ├── lets-talk/      # Contact form page
│   │   ├── contact/        # Contact-related pages
│   │   ├── api/            # API route handlers
│   │   ├── layout.tsx      # Root layout and structure
│   │   └── globals.css     # Global CSS
│   ├── components/
│   │   ├── custom/         # Custom reusable components
│   │   └── ui/             # ShadCN UI-based components
│   ├── lib/                # Utilities and configuration
│   ├── types/              # TypeScript types
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project metadata and dependencies
├── postcss.config.mjs      # PostCSS configuration
└── components.json         # ShadCN UI component configuration
```

---

## 🛠️ Tools & Libraries Used

### Framework & Language

* **Next.js (v15.3.3)** – React-based web framework using the App Router.
* **React (v19.0.0)** – Core UI library.
* **TypeScript** – Type-safe JavaScript development.

### Styling & UI

* **Tailwind CSS** – Utility-first CSS for responsive styling.
* **ShadCN UI** – Component library built on top of Radix, pre-styled using Tailwind (used via `components/ui`).
* **Lucide React** – Icon set for modern UI.
* **Framer Motion** – Animation library for React.

### Forms & Validation

* **React Hook Form (v7.57.0)** – Lightweight form handling.
* **Zod (v3.25.51)** – Type-safe schema validation.
* **@hookform/resolvers** – Integration of Zod with React Hook Form.

### Backend & API

* **Prisma (v6.9.0)** – Type-safe ORM for database interaction.
* **SQLite** – Development database.
* **Axios** – HTTP client for API interaction.

### Notifications

* **Sonner** – Toast notification system with beautiful default styles.

### Dev Tools

* **ESLint** – JavaScript/TypeScript linter.
* **PostCSS** – CSS preprocessor.
* **Turbopack** – High-speed development bundler.

---

## ⚙️ Implementation & Features

### 1. **Contact Form System**

* Location: `src/app/lets-talk/`
* Built using:

  * **React Hook Form** for managing input state.
  * **Zod** schemas to validate fields (name, email, message, etc.).
  * **ShadCN UI** components like input, textarea, button.
* Submission handled through API route `src/app/api/contact/route.ts`.
* Data is persisted to the SQLite database via **Prisma**.

### 2. **API Routes**

* Located in: `src/app/api/`
* Built with Next.js `route.ts` files (App Router).
* Handles:

  * POST requests from contact forms.
  * Validates payload using Zod before saving to the database.

### 3. **Database Schema**

Defined in `prisma/schema.prisma`:

```prisma
model Inquiry {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  phone     String
  message   String
  createdAt DateTime @default(now())
}
```

* **Prisma Client** is generated and configured in `lib/db.ts`.

### 4. **Component Design**

* **Reusable UI components** are organized in `components/ui/` (ShadCN).
* **Custom components** (non-generic) live in `components/custom/`.
* Consistent styling using **Tailwind CSS**.
* Form inputs and layout elements all use ShadCN's opinionated components with accessibility in mind.

### 5. **Axios Integration**

* Centralized Axios configuration in `lib/axiosInstance.ts`.
* Used for API communication with built-in error handling and interceptors (if defined).

---

## ⬆️ Patterns & Best Practices

### Form Handling

```ts
const form = useForm<ZodSchemaType>({
  resolver: zodResolver(schema),
  defaultValues: { name: "", email: "", message: "" },
});
```

* All form components integrate with `form.register`.
* Error messages are rendered per-field using `formState.errors`.

### API Integration

```ts
await axios.post('/api/contact', formData);
```

* Form submissions are async.
* Uses Toast notifications (Sonner) to notify success or failure.

### Styling

* All UI components follow Tailwind's responsive and utility-first approach.
* Animations (e.g., fade-in, slide-up) use **Framer Motion** where applicable.

---

## ✅ Error Handling

* Zod validation gives immediate client-side feedback.
* Server-side API validation catches unvalidated inputs.
* Axios handles API errors with feedback to users via toast messages.

---

## 🚀 Performance Notes

* **Turbopack** speeds up development builds.
* **Next.js App Router** allows for optimized routing and layouts.
* **TypeScript** improves DX and reduces runtime bugs.

---
