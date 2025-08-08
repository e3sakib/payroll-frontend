# Payroll Management System - Frontend

A comprehensive payroll management system built with Angular 13, featuring employee management, salary processing, attendance tracking, and payslip generation.

## 🚀 Features

- **Employee Management**: Add, edit, and manage employee information
- **Salary Processing**: Calculate and process employee salaries
- **Attendance Tracking**: Record and monitor employee attendance
- **Payslip Generation**: Generate detailed payslips for employees
- **Product Management**: Manage company products and inventory
- **Location Management**: Track employee locations and assignments
- **User Authentication**: Secure login and signup functionality
- **Admin Dashboard**: Comprehensive admin interface for system management

## 🛠️ Tech Stack

- **Frontend**: Angular 13
- **UI Framework**: Bootstrap 5
- **Backend**: Spring Boot (separate repository)
- **Database**: MySQL
- **Testing**: Karma & Jasmine
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Angular CLI (v13)
- MySQL Database
- Spring Boot Backend (running on localhost:8080)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/payroll-frontend.git
cd payroll-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create or update `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

### 4. Start Development Server
```bash
ng serve
```

Navigate to `http://localhost:4200/` to view the application.

## 🧪 Testing

### Run Unit Tests
```bash
npm test
```

### Run End-to-End Tests
```bash
npm run e2e
```

## 🏗️ Build

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --prod
```

## 🚀 Deployment

### GitHub Pages
The application is automatically deployed to GitHub Pages via CI/CD pipeline.

### Manual Deployment
1. Build the application: `ng build --prod`
2. Deploy the contents of `dist/client/` to your web server

## 🔧 Configuration

### Environment Variables
- `apiUrl`: Backend API URL
- `production`: Environment flag

### Backend Integration
Ensure your Spring Boot backend is running and accessible at the configured API URL.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   ├── services/           # API services and business logic
│   ├── guards/             # Route guards for authentication
│   └── adminLayout/        # Admin-specific components
├── assets/                 # Static assets and plugins
└── environments/           # Environment configurations
```

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **Build & Test**: Runs on every push and pull request
- **Deploy**: Automatically deploys to GitHub Pages on main branch
- **Quality Checks**: Linting, testing, and build verification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team

## 🔗 Related Repositories

- **Backend**: [Spring Boot Payroll API](https://github.com/yourusername/payroll-backend)
- **Database**: MySQL schema and migrations

---

**Note**: This is the frontend application. Make sure to also set up the Spring Boot backend and MySQL database for full functionality.
