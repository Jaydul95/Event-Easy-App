const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


class UserDbHandler {

    saveUserDb = async (user) => {
        let result = {};
        try {
            const isUserNameUnique = await this.findUserByUsername(user.username);
            console.log(isUserNameUnique);
            if (isUserNameUnique) {
                result = {
                    status: 400,
                    error: "Username Already Exist"
                }
            } else {
                const res = await prisma.user.create({
                    data: user
                });
                result = {
                    status: 200,
                    data: res
                }
            }

        } catch(error) {
            console.error("error: ", error);
        }
        console.log("result: ", result);
        return result;
    }

    findUserByUsername = async (username) => {
        let result;
        try {
            result = await prisma.user.findUnique({
                where: {username: username}
            });
        } catch (error) {
            console.error("error: ", error);
        }
        return result;
    }
}

module.exports = UserDbHandler;