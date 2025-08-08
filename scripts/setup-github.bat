@echo off
REM GitHub Repository Setup Script for Payroll Frontend (Windows)
REM This script helps set up the GitHub repository and CI/CD pipeline

echo 🚀 Setting up GitHub repository for Payroll Frontend...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
)

REM Add all files to git
echo 📝 Adding files to Git...
git add .

REM Create initial commit
echo 💾 Creating initial commit...
git commit -m "Initial commit: Payroll Management System Frontend

- Angular 13 application with Bootstrap 5
- Employee management and salary processing
- Attendance tracking and payslip generation
- CI/CD pipeline with GitHub Actions
- Comprehensive documentation"

REM Ask for GitHub repository URL
echo.
echo 🔗 Please provide your GitHub repository URL:
echo Example: https://github.com/yourusername/payroll-frontend.git
set /p github_url="GitHub URL: "

if not "%github_url%"=="" (
    echo 🔗 Adding remote origin...
    git remote add origin "%github_url%"
    
    echo 📤 Pushing to GitHub...
    git branch -M main
    git push -u origin main
    
    echo.
    echo ✅ Setup complete! Your repository has been pushed to GitHub.
    echo.
    echo 🔧 Next steps:
    echo 1. Enable GitHub Pages in your repository settings
    echo 2. Go to Settings ^> Pages ^> Source: Deploy from a branch
    echo 3. Select 'gh-pages' branch and save
    echo 4. The CI/CD pipeline will automatically deploy your app
    echo.
    echo 📋 Repository URL: %github_url%
    echo 🌐 GitHub Pages URL: https://yourusername.github.io/payroll-frontend
) else (
    echo ⚠️  No GitHub URL provided. You can add it later with:
    echo git remote add origin YOUR_GITHUB_URL
)

echo.
echo 🎉 Setup script completed!
pause
