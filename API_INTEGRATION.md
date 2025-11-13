# API Integration Guide

This document describes the API integration between the frontend and backend projects.

## Backend Analysis

### Technology Stack
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose 8.18.2
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **File Upload**: Multer 2.0.2 (stored on Dropbox)
- **CORS**: Enabled for cross-origin requests

### API Endpoints

#### Authentication
- `POST /login` - Login and receive JWT token
  - Request: `{ username, password }`
  - Response: `{ accessToken }`
  - **Note**: Uses environment variables `USER` and `PASSWORD` for authentication

#### News Endpoints

1. **GET /news** - Get all news (public, no auth required)
   - Returns: Array of news items sorted by createdAt descending

2. **GET /news/:id** - Get single news by ID (public, no auth required)
   - Returns: Single news item

3. **POST /news** - Create news (requires authentication)
   - Headers: `Authorization: Bearer <token>`
   - Body: FormData with `image`, `title`, `text`, `place`
   - File size limit: 70MB
   - Returns: Created news object

4. **PUT /news/:id** - Update news (requires authentication)
   - Headers: `Authorization: Bearer <token>`
   - Body: FormData with `image` (optional), `title`, `text`, `place`
   - **Note**: Image is optional - only include if you want to update the image
   - Returns: Updated news object

5. **DELETE /news/:id** - Delete news (requires authentication)
   - Headers: `Authorization: Bearer <token>`
   - Returns: Success message

### Backend Environment Variables Required

Create a `.env` file in the backend project root with:

```env
PORT=8000
DBURI=your_mongodb_connection_string
USER=your_admin_username
PASSWORD=your_admin_password
SECRET_KEY=your_jwt_secret_key
DROPBOX_ACCESS_TOKEN=your_dropbox_access_token
```

## Frontend Integration

### Service Layer Architecture

The frontend uses a service layer pattern for API calls:

1. **`src/services/api.js`** - Axios instance with interceptors
   - Automatically adds JWT token to authenticated requests
   - Handles token expiration (401/403) by redirecting to login
   - Base URL from environment variable

2. **`src/services/authService.js`** - Authentication service
   - `login(username, password)` - Login and store token
   - `logout()` - Clear token and user data
   - `isAuthenticated()` - Check if user has valid token

3. **`src/services/newsService.js`** - News CRUD operations
   - All methods return `{ success: boolean, data/error }`
   - Automatically handles authentication for protected endpoints

### Environment Configuration

Create a `.env` file in the frontend project root:

```env
REACT_APP_API_URL=https://basantagbackend.onrender.com
```

For local development:
```env
REACT_APP_API_URL=http://localhost:8000
```

### Updated Components

All components have been updated to use the service layer:

1. **AuthContext** - Uses `authService.login()` instead of hardcoded credentials
2. **Login** - Handles async login with proper error messages
3. **Admin** - Uses `newsService` for all CRUD operations
4. **EditNews** - Uses `newsService.updateNews()` with authentication
5. **NewsComponent** - Uses `newsService.getAllNews()`
6. **NewsPage** - Uses `newsService.getNewsById()`

## Security Improvements

### Before
- Hardcoded credentials in frontend
- No token-based authentication
- API endpoints unprotected

### After
- JWT token-based authentication
- Tokens stored securely in localStorage
- Automatic token injection via axios interceptors
- Token expiration handling
- Protected routes require valid tokens

## Known Issues & Recommendations

### Backend Issues
1. ✅ **PUT /news/:id file requirement**: Fixed - Image is now optional for updates.

2. **Error Messages**: Some error responses could be more descriptive.

### Frontend Improvements Made
1. ✅ Removed hardcoded API URLs (now uses environment variables)
2. ✅ Fixed loading state initialization bugs
3. ✅ Removed invalid `value` prop from file inputs
4. ✅ Added proper error handling throughout
5. ✅ Improved user feedback with alerts and confirmations
6. ✅ Added delete confirmation dialog
7. ✅ Clear form after successful submission

## Testing the Integration

1. **Start Backend**:
   ```bash
   cd D:\Projects\basantagbackend
   npm install
   # Create .env file with required variables
   npm start
   ```

2. **Start Frontend**:
   ```bash
   cd D:\Projects\basantagrawalportfolio
   npm install
   # Create .env file with REACT_APP_API_URL
   npm start
   ```

3. **Test Flow**:
   - Visit `/login` and login with credentials from backend `.env`
   - Access `/admin` to manage news
   - Create, edit, and delete news items
   - Verify news displays on homepage and individual news pages

## Token Management

- Tokens are stored in `localStorage` as `token`
- Token expires after 1 hour (as configured in backend)
- When token expires, user is automatically redirected to login
- Logout clears both `token` and `user` from localStorage

