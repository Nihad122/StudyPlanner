# StudyPlanner
A mobile app for managing study tasks, built with React Native and Expo.

# Screenshots
https://github.com/user-attachments/assets/4e170718-8df8-43a7-8443-6dfdc47c0a4b

https://github.com/user-attachments/assets/a6da5493-f7b7-4d29-ab7a-b8be4b843f2b

https://github.com/user-attachments/assets/22f48756-a293-4fe1-9dc2-af082af3d986

# Features
 Add, complete, and delete study tasks
 Set priority levels (Low, Medium, High)
 Data persists locally with AsyncStorage
 Haptic feedback on key actions (save, delete, complete, priority select)
 Clean and responsive UI

# Tech Stack
 React Native
 Expo (SDK 54)
 Expo Router (file-based navigation)
 TypeScript
 Context API (global state management)
 AsyncStorage (local storage)
 expo-haptics (haptic feedback)

# Project Structure

https://github.com/user-attachments/assets/54b3dc02-8f7d-4975-8079-eb031d667110

# Setup Instructions
# Requirements
 Node.js 18+
 Expo Go app on your phone ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))

# Steps
1. Clone the repository:
   git clone (https://github.com/Nihad122/StudyPlanner)

3. Install dependencies:
   npm install --legacy-peer-deps

4. Start the app:
   npx expo start

5. Scan the QR code with Expo Go (Android) or Camera (iOS)

# Running Tests
command: npm test

# Architecture
The app uses Context API for global state management. All task data flows through `TaskContext`, which handles loading, adding, completing, and deleting tasks. Data is persisted to device storage via AsyncStorage.

Navigation is handled by Expo Router with a tab-based layout (Tasks + Add Task). The `useTasks` custom hook wraps the context and provides computed values like `pendingTasks` and `completedTasks`.

# Native Device Features
AsyncStorage — persists task data locally on the device
Expo Haptics — provides tactile feedback on task interactions (save, delete, complete, priority selection)
