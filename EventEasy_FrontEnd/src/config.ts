// API Configuration
// Uses environment variable in production, falls back to localhost for development
export const config = {
    baseUrl: process.env.REACT_APP_API_URL || "http://localhost:8080/",
    endPoint: {
        addNewUser: "add-new-user",
        verifyUser: "verify-user",
        saveBooking: "save-booking",
        fetchBookings: "fetch-bookings"
    }
};

export default config;
