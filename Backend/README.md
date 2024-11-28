# User API Documentation

This documentation outlines the endpoints, validation, and structure for the **User API**, which supports user registration with validation and authentication token generation.

---

## **Table of Contents**
- [Project Overview](#project-overview)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [POST /register](#post-register)
- [Request Validation](#request-validation)
- [Services Used](#services-used)
- [Error Handling](#error-handling)

---

## **Project Overview**

The User API provides a mechanism for registering users with the following features:
- Input validation for user details (e.g., email, password, name).
- Password hashing for security.
- Token generation upon successful registration.

The API is built using the following technologies:
- **Express.js** for routing.
- **Express Validator** for request validation.
- **MongoDB** for user data storage.
- **Custom Services** for separation of concerns.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone <repository-url>
