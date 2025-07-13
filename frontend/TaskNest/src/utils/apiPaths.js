// utils/apiPaths.js

export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",             // Register a new user (Admin or Member)
    LOGIN: "/api/auth/login",                   // Authenticate user & return JWT token
    GET_PROFILE: "/api/auth/profile",           // Get logged-in user details
    UPLOAD_IMAGE: "/api/auth/upload-image",     // Upload user profile image
  },

  USERS: {
    GET_ALL_USERS: "/api/users",                                // Get all users (Admin only)
    GET_USER_BY_ID: (userId) => `/api/users/${userId}`,         // Get user by ID
    CREATE_USER: "/api/users",                                  // Create a new user
    UPDATE_USER: (userId) => `/api/users/${userId}`,            // Update user details
    DELETE_USER: (userId) => `/api/users/${userId}`,            // Delete a user
  },

  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data",                   // Admin dashboard metrics
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data",         // User-specific metrics
    GET_ALL_TASKS: "/api/tasks",                                       // Get all tasks
    GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`,               // Get task by ID
    CREATE_TASK: "/api/tasks",                                         // Create a new task
    UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`,                  // Update task
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`,                  // Delete task
    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`,    // Update task status
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`,   // Update checklist
  },

  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks",       // Download all tasks as Excel
    EXPORT_USERS: "/api/reports/export/users",       // Download user-task report
  },
};
