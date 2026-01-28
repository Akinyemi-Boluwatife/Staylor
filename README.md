# Staylor

Staylor is a modern, responsive accommodation and rental management dashboard built with React and Supabase. It allows users to manage rentals, parking slots, and view key metrics through an intuitive user interface.

## 🚀 Features

- **Dashboard Overview**: Visualize key metrics and statistics.
- **Rental Management**:
  - View a list of all rentals.
  - Create new rental entries.
  - View detailed information for specific rentals.
- **Parking Slot Management**: Monitor and manage parking slot availability.
- **Authentication**: Secure login and account creation utilizing Supabase Auth.
- **Profile Settings**: Manage user profile and preferences.
- **Contact Support**: Integrated contact form using EmailJS.
- **Dark Mode**: Fully supported dark/light theme toggle.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Technology Stack

- **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (foundation for accessible components)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **State Management & Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation
- **Backend & Database**: [Supabase](https://supabase.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Utilities**: `date-fns` for date manipulation.

## ⚙️ Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/Akinyemi-Boluwatife/staylor.git
    cd staylor
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Environment Configuration**

    Create a `.env.local` file in the root directory and add your specific environment variables. You will need credentials from Supabase and EmailJS.

    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
    VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
    ```

4.  **Run the development server**

    ```bash
    npm run dev
    ```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## 📄 License

This project is licensed under the MIT License.
