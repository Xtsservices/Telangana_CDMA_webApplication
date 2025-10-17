// ULB Officer Data
export const ulbArrears = [
  { propertyId: "ULB-101", owner: "Rajesh Kumar", amount: 2500, status: "Pending", dueDate: "2025-01-15" },
  { propertyId: "ULB-102", owner: "Lakshmi Devi", amount: 3800, status: "Paid", dueDate: "2025-01-10" },
  { propertyId: "ULB-103", owner: "Venkat Reddy", amount: 4200, status: "Pending", dueDate: "2025-01-20" },
  { propertyId: "ULB-104", owner: "Priya Singh", amount: 1900, status: "Paid", dueDate: "2025-01-08" },
];

export const propertyMapping = [
  { propertyId: "ULB-201", location: "Hyderabad", type: "Residential", area: "1200 sqft", taxAmount: 2500 },
  { propertyId: "ULB-202", location: "Warangal", type: "Commercial", area: "2500 sqft", taxAmount: 5800 },
  { propertyId: "ULB-203", location: "Nizamabad", type: "Residential", area: "1800 sqft", taxAmount: 3200 },
  { propertyId: "ULB-204", location: "Karimnagar", type: "Commercial", area: "3200 sqft", taxAmount: 7500 },
];

// Revenue Inspector Data
export const demandNotices = [
  { ptin: "HYD-201", owner: "Rajesh Kumar", method: "WhatsApp", status: "Delivered", date: "2025-10-15" },
  { ptin: "HYD-202", owner: "Suresh Babu", method: "SMS", status: "Pending", date: "2025-10-14" },
  { ptin: "HYD-203", owner: "Anitha Rao", method: "WhatsApp", status: "Delivered", date: "2025-10-16" },
  { ptin: "HYD-204", owner: "Ramesh Gupta", method: "Email", status: "Failed", date: "2025-10-13" },
];

export const disputeTickets = [
  { ticketId: "T-101", propertyId: "ULB-101", issue: "Incorrect Amount", status: "Open", date: "2025-10-12" },
  { ticketId: "T-102", propertyId: "ULB-102", issue: "Missing Notice", status: "Resolved", date: "2025-10-10" },
  { ticketId: "T-103", propertyId: "ULB-103", issue: "Payment not Reflected", status: "In Progress", date: "2025-10-14" },
  { ticketId: "T-104", propertyId: "ULB-104", issue: "Wrong Property Details", status: "Open", date: "2025-10-15" },
];

// Commissioner Data
export const ulbPerformance = [
  { ulb: "Hyderabad", today: 320000, month: 8200000, target: 10000000, completion: 82 },
  { ulb: "Warangal", today: 120000, month: 4300000, target: 5000000, completion: 86 },
  { ulb: "Nizamabad", today: 95000, month: 2800000, target: 3500000, completion: 80 },
  { ulb: "Karimnagar", today: 110000, month: 3200000, target: 4000000, completion: 80 },
];

export const complaints = [
  { complaintId: "C-201", ulb: "Hyderabad", issue: "Billing Error", status: "Open", priority: "High", date: "2025-10-15" },
  { complaintId: "C-202", ulb: "Warangal", issue: "Payment Delay", status: "Closed", priority: "Medium", date: "2025-10-12" },
  { complaintId: "C-203", ulb: "Nizamabad", issue: "System Access", status: "In Progress", priority: "High", date: "2025-10-14" },
  { complaintId: "C-204", ulb: "Karimnagar", issue: "Data Mismatch", status: "Open", priority: "Low", date: "2025-10-16" },
];

// CDMA HQ Data
export const deviceMonitoring = [
  { deviceId: "POS-111", location: "Hyderabad", status: "Online", lastSync: "2 mins ago", health: 98 },
  { deviceId: "POS-112", location: "Warangal", status: "Offline", lastSync: "2 hours ago", health: 45 },
  { deviceId: "POS-113", location: "Nizamabad", status: "Online", lastSync: "5 mins ago", health: 95 },
  { deviceId: "POS-114", location: "Karimnagar", status: "Online", lastSync: "1 min ago", health: 99 },
];

export const staffLogs = [
  { staffId: "S-101", name: "Ravi Kumar", action: "Login", time: "10:00 AM", location: "Hyderabad" },
  { staffId: "S-102", name: "Meena Devi", action: "Update", time: "11:30 AM", location: "Warangal" },
  { staffId: "S-103", name: "Suresh Babu", action: "Sync Data", time: "09:45 AM", location: "Nizamabad" },
  { staffId: "S-104", name: "Priya Singh", action: "Logout", time: "05:30 PM", location: "Karimnagar" },
];

// CGG Data
export const apiHealth = [
  { service: "QRPE API", status: "Active", latencyMs: 190, uptime: 99.8, lastCheck: "1 min ago" },
  { service: "CDMA Sync", status: "Stable", latencyMs: 240, uptime: 99.5, lastCheck: "2 mins ago" },
  { service: "Payment Gateway", status: "Active", latencyMs: 150, uptime: 99.9, lastCheck: "30 secs ago" },
  { service: "SMS Service", status: "Degraded", latencyMs: 450, uptime: 97.2, lastCheck: "5 mins ago" },
];

export const feedbackReports = [
  { reportId: "F-101", user: "ULB Officer", message: "Smooth sync, great performance", status: "Reviewed", date: "2025-10-14" },
  { reportId: "F-102", user: "RI", message: "Delayed API response during peak hours", status: "Pending", date: "2025-10-15" },
  { reportId: "F-103", user: "Commissioner", message: "Dashboard loading slowly", status: "In Progress", date: "2025-10-13" },
  { reportId: "F-104", user: "CDMA Staff", message: "Excellent mobile app experience", status: "Reviewed", date: "2025-10-12" },
];

// Admin Data
export const roleManagement = [
  { role: "ULB Officer", users: 45, active: 38, pending: 7 },
  { role: "Commissioner", users: 25, active: 23, pending: 2 },
  { role: "RI", users: 50, active: 46, pending: 4 },
  { role: "CDMA Staff", users: 30, active: 28, pending: 2 },
  { role: "CGG Analyst", users: 15, active: 15, pending: 0 },
];

export const systemLogs = [
  { logId: "L-101", action: "User Login", user: "RI-01", time: "09:00 AM", status: "Success" },
  { logId: "L-102", action: "Role Update", user: "Admin", time: "10:45 AM", status: "Success" },
  { logId: "L-103", action: "Data Export", user: "Commissioner-05", time: "11:20 AM", status: "Success" },
  { logId: "L-104", action: "Failed Login", user: "Unknown", time: "02:15 PM", status: "Failed" },
];
