const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class BookingDbHandler {

    saveBooking = async (booking) => {
        let result = {};
        try {
            const res = await prisma.booking.create({
                data: booking
            });

            result = {
                status: 200,
                data: res
            }
        } catch (error) {
            console.error("error: ", error);
        }
        return result;
    }

    findBooking = async (userId) => {
        let result;
        try {
            result = await prisma.booking.findMany({
                where: {userId: userId}
            });
        } catch (error) {
            console.error("error: ", error);
        }
        return result;
    }
}

module.exports = BookingDbHandler;