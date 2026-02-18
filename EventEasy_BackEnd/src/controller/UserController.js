const UserDbHandler = require("../dbHandler/UserDbHandler");
const { hashPassword, comparePassword } = require("../utils/HashUtil");

class UserController {

    userDbHandler = new UserDbHandler();

    saveNewUser = async (reqBody) => {
        const hashPass = await hashPassword(reqBody.password);
        const user = {
            username: reqBody.username,
            password: hashPass
        }
        const result = await this.userDbHandler.saveUserDb(user);
        return result;
    }

    verifyUser = async (reqBody) => {
        let result = {}
        const user = await this.userDbHandler.findUserByUsername(reqBody.username);
        const isMatch = await comparePassword(reqBody.password, user.password)

        if (isMatch) {
            result = {
                status: 200,
                body: user
            }
        } else {
            result = {
                status: 404,
                error: "User Not Found"
            }
        }

        return result;
    }
}

module.exports = UserController;