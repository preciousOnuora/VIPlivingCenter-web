# Vercel Environment Variables Setup

To fix your MongoDB connection in production, you need to set these environment variables in your Vercel dashboard:

## Required Environment Variables

1. **MONGODB_URI**: `mongodb+srv://preonu:hiya1212@cluster0.sg0wcaf.mongodb.net/?retryWrites=true&w=majority`
2. **NODE_ENV**: `production`

## How to Set Environment Variables in Vercel:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the following variables:

### MONGODB_URI
- **Name**: `MONGODB_URI`
- **Value**: `mongodb+srv://preonu:hiya1212@cluster0.sg0wcaf.mongodb.net/?retryWrites=true&w=majority`
- **Environment**: Production, Preview, Development

### NODE_ENV
- **Name**: `NODE_ENV`
- **Value**: `production`
- **Environment**: Production, Preview, Development

## After Setting Variables:

1. Redeploy your project in Vercel
2. Test the contact form on your live website
3. Check your MongoDB Atlas dashboard to see the submitted forms

## MongoDB Atlas Dashboard:

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign in with your account
3. Select your cluster
4. Click "Browse Collections"
5. Look for the `vip-living-centers` database
6. Check the `footercontacts` collection for submitted forms
