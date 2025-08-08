# GitHub Repository Setup Guide

This guide will help you set up your Angular payroll application on GitHub with CI/CD pipeline.

## 🚀 Quick Setup (Recommended)

### Option 1: Using Setup Scripts

#### For Windows Users:
```bash
# Run the Windows batch script
scripts/setup-github.bat
```

#### For Linux/Mac Users:
```bash
# Make the script executable
chmod +x scripts/setup-github.sh

# Run the setup script
./scripts/setup-github.sh
```

### Option 2: Manual Setup

## 📋 Step-by-Step Manual Setup

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `payroll-frontend`
4. Make it **Public** (for GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 2. Initialize Local Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Payroll Management System Frontend"

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/payroll-frontend.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Click **Save**

### 4. Configure CI/CD Pipeline

The CI/CD pipeline is already configured in `.github/workflows/ci-cd.yml`. It will:

- ✅ Build the application
- ✅ Run tests
- ✅ Deploy to GitHub Pages
- ✅ Run on every push to main branch

### 5. Test the Pipeline

Make a small change and push to trigger the pipeline:

```bash
# Make a change to any file
echo "# Test" >> README.md

# Commit and push
git add .
git commit -m "Test CI/CD pipeline"
git push
```

## 🔧 Configuration

### Environment Variables

Update `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api' // Your backend URL
};
```

### Backend Integration

Make sure your Spring Boot backend is:
- Running on the configured URL
- Has CORS enabled for your frontend domain
- Accessible from the deployment environment

## 🌐 Deployment URLs

After setup, your application will be available at:

- **Development**: `http://localhost:4200`
- **Production**: `https://YOUR_USERNAME.github.io/payroll-frontend`

## 📊 Monitoring

### GitHub Actions
- Go to **Actions** tab in your repository
- Monitor build and deployment status
- View logs for any issues

### GitHub Pages
- Go to **Settings > Pages**
- Check deployment status
- View deployment logs

## 🔄 Continuous Deployment

The pipeline automatically:
1. **Builds** the application
2. **Tests** the code
3. **Deploys** to GitHub Pages
4. **Notifies** on success/failure

## 🛠️ Troubleshooting

### Common Issues

#### 1. Build Failures
- Check Node.js version (should be 16+)
- Verify all dependencies are installed
- Check for TypeScript errors

#### 2. Deployment Issues
- Ensure repository is public (for GitHub Pages)
- Check GitHub Pages settings
- Verify gh-pages branch exists

#### 3. API Connection Issues
- Update environment.ts with correct backend URL
- Ensure backend is running and accessible
- Check CORS configuration

### Debug Commands

```bash
# Test build locally
npm run build

# Test production build
npm run build --prod

# Run tests
npm test

# Check git status
git status

# Check remote configuration
git remote -v
```

## 📈 Next Steps

### 1. Custom Domain (Optional)
- Go to repository **Settings > Pages**
- Add your custom domain
- Configure DNS settings

### 2. Additional Deployment Options
- **Firebase Hosting**: Update CI/CD workflow
- **Netlify**: Add Netlify deployment step
- **AWS S3**: Configure S3 deployment

### 3. Advanced CI/CD
- Add code quality checks
- Implement automated testing
- Set up staging environment

## 🆘 Support

If you encounter issues:

1. Check the **Actions** tab for build logs
2. Review the **Issues** section
3. Check GitHub Pages settings
4. Verify environment configuration

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Angular Deployment Guide](https://angular.io/guide/deployment)
- [Bootstrap Documentation](https://getbootstrap.com/docs)

---

**🎉 Congratulations!** Your Angular payroll application is now set up with GitHub and CI/CD pipeline.
