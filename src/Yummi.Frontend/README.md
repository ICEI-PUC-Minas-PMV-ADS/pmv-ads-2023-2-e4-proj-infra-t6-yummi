## 📝 Yummi.Frontend

## 🚀 Technologies Used

- [React.js](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Highcharts (Graphics)](https://www.highcharts.com/)
- [Ant Design](https://ant.design/docs/react/introduce/)
- [React Query](https://tanstack.com/query/latest/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [i18next](https://www.i18next.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)

## 🛠️ Installation

### Configuration of Environment Variables

1. Make a copy of the `.env.example` file and rename it to `.env.local`.

### Installing Dependencies

2. Run the following command to install the necessary dependencies:

```bash
npm install
```

### Running the Application

3. Start the application with the following command:

```bash
npx vite --port 3000
```

Access [http://localhost:3000](http://localhost:3000) in your browser to see the project in action.

## 🧱 Project Structure

The project has been organized for scalability, following this structure:

### **Assets** (`./assets`)

This folder contains image files used in the application.

### **Components** (`./components`)

Here you'll find reusable components used throughout the application, organized by categories.

### **Config** (`./config`)

Contains important configurations such as themes, routes, and integrations with third-party libraries.

### **Features** (`./features`)

Contains the business rules of the application, divided by context/feature. Each feature includes its own components, containers (usually pages), entities, services (API calls), hooks, and routes.

### **Hooks** (`./hooks`)

In this folder, you'll find some [hooks](https://react.dev/reference/react) used throughout the application.

### **Translations** (`./translations`)

Here you'll find JSON files with translations of the application in Portuguese and English.

### **Utils** (`./utils`)

This folder includes common functions used throughout the application, such as validations, formatters, and more.
