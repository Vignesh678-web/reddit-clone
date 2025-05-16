# Reddit AI Clone - Next.js 15 & Sanity CMS

A Modern AI Powered Reddit CLone With Enhanced Features Providing User-friendly Enviornment. Built With Next.js,SanityCMS,Clerk.Provides Community Management And
Content Filtering.

## Features ☁️

### For Users

*  🔎  Browse Post From Communities In Home Page
*  💭  Post Comments And Replies For Interaction
*  📜  Provide Rich Text Styling
*  👍🏻  Upvote And Downvoting System For User
*  🖼️  Image Sharing Facility In The Community Pages

### For Community

* ⚠️ Accesible To Report Post From Any Specified Community
* ✨ Customizable And Manageble Community/subreddits
* 🔥 Community Specified Post

### For AI

* 🚫 Automized Filteration Of Sensitive Contents
* 🤐 Immidiate Censoring Of Abusive Comments
* ⭕ Hiding Of Private Datas

### Technical Features

* 🚀 Server Components And Server Actions With Next Js
* 🎨 Enhanced Styling Using Tailwind CSS And Radix Ui
* 📍 Authentication Using Clerk
* 🛠️ Accessible Components
* ⚙️ Responsive Across All Devices
* 💾 Data Storage And Manipulation Using Sanity CMS
* 🛡️ Protected Routes And Components
* ⚡ Turbo Pack For Fast Development

### UI/UX Features

* 🎯 Accurate Interface Of The Reddit
* ⌚ Provided Timestamps For Post And Comment
* 📱 Responsive Interface For All Devices
* 🔥 Micro Interactions For Better Engagement
* 📶 Clean Interface Design Using Radix UI
* 🔍 Intutive Search Functionality

[🔗]  ### Getting Started

[🔗]  ### Prequestion

* Node Js
* Sanity Account
* Clerk Account
* Open AI API Key (Content Moderation)

[🔗] ### Enviornment Variables

[Create a .env.local file with:]

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-read-token

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

# OpenAI (for AI moderation)
OPENAI_API_KEY=your-openai-api-key

(Installation)

[# Clone the repository]

# Install dependencies using pnpm
pnpm install

# Start the development server with Turbopack
pnpm dev

[🔗] ## Setting up Sanity CMS

[Create a Sanity account]
- Create a new project

- Install the Sanity CLI:
- npm install -g @sanity/cli
- Initialize Sanity in your project:
- sanity init
- Deploy Sanity Studio:
-  sanity deploy

[🔗] ### Setting up Clerk

- Create a Clerk application
- Configure authentication providers
- Set up redirect URLs
- Add environment variables

[🔗] ### Core Technologies

- Next.js 15
- TypeScript
- Sanity CMS
- Clerk Auth
- OpenAI API
- Tailwind CSS
- Radix UI
- Lucide Icons


