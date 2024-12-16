# Frontend Project

This document provides instructions for setting up and running the frontend project.

## Project Structure

The frontend project is structured as follows:

- `frontend2/`
  - `README.md`: This file, containing setup and usage instructions.
  - `package.json`: Project metadata and dependencies.
  - `tsconfig.json`: TypeScript configuration.
  - `tailwind.config.ts`: Tailwind CSS configuration.
  - `postcss.config.mjs`: PostCSS configuration.
  - `src/`: Source code for the frontend project.
    - `styles/`: Global styles for the project.
    - `app/`: Application components.
  - `prisma/`: Prisma configuration and schema.
  - `docker-compose.yml`: Docker configuration for PostgreSQL.
  - `.env`: Environment variables for the project.
  - `.gitignore`: Files and directories to ignore in version control.

## Dependencies

The frontend project relies on the following dependencies:

- `next`: React framework for server-rendered applications.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point to the DOM and server renderers for React.
- `tailwindcss`: Utility-first CSS framework.
- `postcss`: Tool for transforming CSS with JavaScript plugins.
- `autoprefixer`: PostCSS plugin to parse CSS and add vendor prefixes.
- `prisma`: Next-generation ORM for Node.js and TypeScript.
- `@prisma/client`: Prisma client for database access.

## Setup Instructions

Follow these steps to set up and run the frontend project:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd frontend2
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up Tailwind CSS:**

   - Initialize Tailwind:

     ```bash
     pnpm dlx tailwindcss init -p
     ```

   - Replace `tailwind.config.ts` content:

     ```typescript
     import type { Config } from "tailwindcss";

     export default {
       content: [
         "./pages/**/*.{js,ts,jsx,tsx,mdx}",
         "./components/**/*.{js,ts,jsx,tsx,mdx}",
         "./app/**/*.{js,ts,jsx,tsx,mdx}",
       ],
       theme: {
         extend: {
           colors: {
             background: "var(--background)",
             foreground: "var(--foreground)",
           },
         },
       },
       plugins: [],
     } satisfies Config;
     ```

   - Create `src/styles/globals.css` with the Tailwind directives:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Configure Prisma:**

   - Initialize Prisma:

     ```bash
     pnpm dlx prisma init
     ```

   - Update `prisma/schema.prisma` to include a basic `User` model:

     ```prisma
     datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
     }

     generator client {
       provider = "prisma-client-js"
     }

     model User {
       id        Int      @id @default(autoincrement())
       email     String   @unique
       name      String?
       createdAt DateTime @default(now())
     }
     ```

5. **Set up Docker for PostgreSQL:**

   - Create a `docker-compose.yml`:

     ```yaml
     version: '3.8'
     services:
       db:
         image: postgres:15
         environment:
           POSTGRES_USER: postgres
           POSTGRES_PASSWORD: password
           POSTGRES_DB: myapp
         ports:
           - "5432:5432"
     ```

6. **Test Setup:**

   - Run Docker:

     ```bash
     docker-compose up -d
     ```

   - Apply Prisma migrations:

     ```bash
     pnpm dlx prisma migrate dev --name init
     ```

7. **Add the `start` and `dev` scripts to `package.json`:**

   ```json
   "scripts": {
     "dev": "next dev",
     "build": "next build",
     "start": "next start"
   }
   ```

## Testing

- Verify the Tailwind setup by creating a sample component in `src/app/page.tsx`.
- Confirm Prisma setup by querying the database using `Prisma Studio`:

  ```bash
  pnpm dlx prisma studio
  ```

## Additional Notes

- Ensure that you have Docker installed and running on your machine.
- Update the `.env` file with the appropriate environment variables for your PostgreSQL database connection.
