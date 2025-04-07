# Phonebook Application

A full-stack contact management system built with React that allows users to:

## Features

- ✨ **Add contacts** (with name + phone number validation)
- 🔍 **Search/filter** existing contacts in real-time
- ✏️ **Edit/update** contact information
- 🗑️ **Delete entries** with confirmation
- 💾 **Persistent storage** via backend API

## Technical Features

### Frontend
✅ React with hooks (`useState`, `useEffect`)  
✅ Responsive design (mobile-first with Bootstrap flex utilities)  
✅ Interactive UI with React Icons (`FaTrashAlt`, `IoMdContact`)  
✅ Toast notifications (`React-Toastify`) for user feedback  

### Styling
🎨 Custom dark theme with accessibility-focused contrast  
⚡ CSS transitions for smooth interactions  
🧩 Component-scoped styles for maintainability  

### Backend Integration
🔗 Axios-based service layer for CRUD operations  
⚠️ Error handling for failed API requests  

## Architecture
- Single-page application (SPA) 
- Clean component structure:
  - `App` (Main container)
  - `PersonForm` (Add/edit contacts)
  - `Filter` (Search functionality)
  - Contact list components

## Purpose
Demonstrates modern React patterns, state management, and API integration in a practical utility app.

*Ideal for small businesses needing a lightweight CRM, or as a portfolio piece showcasing React skills.*