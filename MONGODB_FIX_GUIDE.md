# MongoDB Connection Fix Guide

## The Problem
Your `footer-contact-simple.js` API endpoint was not connected to MongoDB, so form submissions weren't being saved to the database.

## What I Fixed
✅ Updated `api/footer-contact-simple.js` to connect to MongoDB and save form data
✅ Added proper error handling and logging
✅ Connected to your MongoDB Atlas cluster

## Next Steps to Deploy

### 1. Set Environment Variables in Vercel
You need to add this environment variable in your Vercel dashboard:

**MONGODB_URI**: `mongodb+srv://preonu:hiya1212@cluster0.sg0wcaf.mongodb.net/?retryWrites=true&w=majority`

**How to do it:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add the MONGODB_URI variable with the value above
5. Set it for Production, Preview, and Development environments

### 2. Redeploy Your Project
After adding the environment variable:
1. Go to Deployments in Vercel
2. Click "Redeploy" on your latest deployment
3. Wait for the deployment to complete

### 3. Test the Form
1. Go to your live website
2. Submit a test message through the footer contact form
3. You should see a success message

### 4. View Results in MongoDB Atlas
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign in with your account
3. Select your cluster (`cluster0.sg0wcaf`)
4. Click "Browse Collections"
5. Look for database: `vip-living-centers`
6. Look for collection: `footercontacts`
7. You should see your submitted forms there!

## What the Fixed API Does Now
- ✅ Connects to your MongoDB Atlas database
- ✅ Saves form submissions with name, email, phone, message
- ✅ Adds metadata (timestamp, IP address, user agent)
- ✅ Returns success/error messages
- ✅ Logs everything for debugging

## Troubleshooting
If you still get errors:
1. Check Vercel logs for error messages
2. Verify the MONGODB_URI is set correctly
3. Make sure your MongoDB Atlas cluster is accessible
4. Check if your IP is whitelisted in MongoDB Atlas (if needed)

Your form should now work on your live website and save data to MongoDB Atlas! 🎉
