# KeenKeeper

A modern friendship management web application built with React and Vite that helps users maintain meaningful relationships through organized friend profiles, quick interaction logging, timeline tracking, and visual analytics.

## Live Demo

- **Live Site:** [Add your live link here]
- **GitHub Repository:** [KeenKeeper Repository](https://github.com/shahrierbiddut/KeenKeeper-Assi-7-Hero)

---

## Project Overview

KeenKeeper is designed to help users stay intentional about their personal relationships. The application allows users to browse friend profiles, monitor relationship status, view contact goals, log interactions such as calls, texts, and video chats, and analyze communication patterns from a dedicated statistics page.

The project includes a responsive multi-page interface with the following core sections:

- **Home Page** with navbar, banner, summary cards, and friend cards
- **Friend Details Page** with profile information, stats, goal tracking, and quick check-in actions
- **Timeline Page** for viewing interaction history with filtering support
- **Stats Page** for friendship analytics using chart visualization
- **404 Page** for invalid routes

---

## Features

### 1. Responsive Multi-Page Layout
The application is fully responsive and optimized for mobile, tablet, and desktop devices.

### 2. Friend Directory with Detailed Profiles
Users can browse friend cards on the home page and open a dedicated details page for each friend.

### 3. Quick Check-In Actions
Users can instantly log a **Call**, **Text**, or **Video** interaction from the friend details page.

### 4. Timeline Tracking
All logged interactions are displayed on the timeline page with date, title, and action-specific icons.

### 5. Timeline Filtering
Users can filter timeline entries by interaction type:

- Call
- Text
- Video

### 6. Friendship Analytics
A dedicated stats page visualizes interaction data using a pie chart for clearer insight into communication habits.

### 7. Toast Notifications
Interactive actions such as quick check-ins trigger toast notifications for better user feedback.

### 8. Route Safety and Better UX
The project includes a loading state while data is fetched and a custom 404 page for unknown routes.

---

## Technologies Used

- **React**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **React Icons**
- **Recharts**
- **JSON Data Source**

---

## Project Structure

```bash
src/
├── assets/
│   ├── Component/
│   │   ├── Footer.jsx
│   │   ├── FriendCard.jsx
│   │   ├── FriendsList.jsx
│   │   ├── Toast.jsx
│   │   ├── FriendDetails/
│   │   │   ├── ActionButtons.jsx
│   │   │   ├── FriendDetailsCard.jsx
│   │   │   ├── FriendInfoCard.jsx
│   │   │   ├── QuickCheckIn.jsx
│   │   │   ├── RelationshipGoal.jsx
│   │   │   └── StatsCards.jsx
│   │   ├── Homepage/
│   │   │   ├── Banner.jsx
│   │   │   └── Navbar.jsx
│   │   └── Link/
│   │       └── Navlink.jsx
│   ├── Pages/
│   │   └── Navlink.js
│   ├── hero.png
│   └── vite.svg
│
├── pages/
│   ├── FriendDetail.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   ├── Stats.jsx
│   └── Timeline.jsx
│
├── App.jsx
├── main.jsx
└── index.css

public/
├── friends.json
├── favicon.svg
└── icons.svg


## Key Functionalities

# Home Page
i. Displays a branded navbar with active route highlighting
ii. Includes a banner section with a call-to-action button
iii. Shows summary statistic cards
iv. Renders all friend profiles from friends.json

# Friend Details Page
i. Shows profile image, name, status, tags, bio, and email
ii. Includes action buttons such as Snooze, Archive, and Delete
iii. Displays friendship statistics like:
    . Days since contact
    . Goal in days
    . Next due date

iv. Allows quick interaction logging through:
    . Call
    . Text
    . Video

v. Timeline Page
    . Displays logged interactions in a clean list layout
    . Supports filtering by interaction type

vi. Stats Page
    . Visualizes interaction data using a pie chart
    . Helps users understand communication distribution across call, text, and video

vii. Data Model

Friend data is stored in a local JSON file and includes the following fields:

    . id
    . name
    . picture
    . email
    . days_since_contact
    . status
    . tags
    . bio
    . goal
    . next_due_date

*Supported status values:

    . overdue
    . almost due
    . on-track


##  Installation and Setup

## Installation and Setup

    git clone https://github.com/shahrierbiddut/KeenKeeper-Assi-7-Hero.git
    cd KeenKeeper-Assi-7-Hero
    npm install
    npm run dev 

##  Available Scripts

    npm run dev
    npm run build
    npm run preview



## Why This Project Stands Out
    i. Clean and structured component-based architecture
    ii. Realistic friendship tracking concept
    iii. User-friendly interaction logging workflow
    iv. Practical analytics with visual chart representation
    v. Responsive design with polished layout and navigation

## Future Improvements
    i. Add persistent storage with localStorage or backend integration
    ii. Add search and sorting on the timeline page
    iii. Add edit functionality for relationship goals
    iv. Add friend creation and update forms
    v. Add authentication and user-specific dashboards

## Author

    * Shahrier Biddut

    * GitHub: shahrierbiddut

## Additional Notes / Others
   
   # What to write in this section

* This section is for extra project details that do not fit perfectly into earlier sections.

* You can include things like:

    . the app is fully responsive
    . friend data is loaded from a local JSON file
    . toast notifications improve user feedback
    . invalid routes are handled with a 404 page
    . the UI follows a clean card-based design
    . the project uses reusable components
    . page reload support should be configured properly on deployment

# 
Your project brief specifically calls for a responsive app with a navbar, banner, friend cards, friend details page, quick check-in actions that add timeline entries, timeline filtering, a Recharts-based analytics page, loading state, toast notifications, and a 404 page, so I reflected those points in the README. :contentReference[oaicite:1]{index=1}

Send me your **live link**, and I will give you the **final polished README version** with that inserted and tightened for direct GitHub upload.