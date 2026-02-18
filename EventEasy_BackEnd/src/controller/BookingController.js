const BookingDbHandler = require("../dbHandler/BookingDbHandler");

class BooingController {

    dbHandler = new BookingDbHandler();

    saveBooking = async (booking) => {
        const modifyBooking = {
            ...booking,
            date: new Date(booking?.date)
        }
        return await this.dbHandler.saveBooking(modifyBooking);
    }

    fetchBookingByUserId = async (userDetails) => {
        return await this.dbHandler.findBooking(userDetails?.userId);
    }
}

module.exports = BooingController;