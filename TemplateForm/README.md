# 🧾 Angular Template-Driven Form (Bootstrap UI)

## 🚀 Project Overview
This project demonstrates a Template-Driven Form in Angular with a modern UI built using Bootstrap and custom CSS.  
It includes validation, responsive design, and user-friendly feedback.

---

## ✨ Features

- Template-driven form using ngForm and ngModel
- Field validations:
  - Required fields
  - Email format validation
  - Minimum length checks
- Real-time validation messages
- Bootstrap responsive UI
- Success message on submission
- Form reset after submit
- Angular Signals for UI state management

---

## 🛠️ Tech Stack

- Angular (Standalone Components)
- TypeScript
- Bootstrap 5
- HTML5 & CSS3

---

## 🧑‍💻 How It Works

### 1. Form Setup
- Uses #userForm="ngForm"
- Each input uses ngModel with name attribute

### 2. Validation
- Required fields
- Email validation
- Minimum length validation

### 3. Error Handling
Errors are displayed only when:
- Field is touched OR
- Form is submitted

---

## ▶️ Getting Started

### Install Dependencies
npm install

### Run Application
ng serve

### Open in Browser
http://localhost:4200

---

## 📦 Bootstrap Setup

Add this in angular.json:

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]

---

## 💡 Key Learnings

- Template-driven forms in Angular
- Form validation techniques
- Bootstrap UI integration
- Angular Signals for state management

---
