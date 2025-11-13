# Deployment Guide

## GitHub Setup

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `dream-home-investments`
   - Choose Public or Private
   - **Do NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. After creating, run these commands:
   ```bash
   git remote set-url origin https://github.com/Jhonin-DHC/YOUR-REPO-NAME.git
   git push -u origin main
   ```

## Vercel Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new?teamSlug=jhonin-ongs-projects-ede5385c
2. Click "Import Git Repository"
3. Select your GitHub repository (`dream-home-investments`)
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need to add environment variables later:
- Go to your Vercel project settings
- Navigate to "Environment Variables"
- Add any required variables

## Custom Domain

After deployment, you can add a custom domain:
1. Go to your Vercel project
2. Navigate to "Settings" > "Domains"
3. Add your custom domain

## Build Settings

Vercel will automatically detect:
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

No additional configuration needed!

