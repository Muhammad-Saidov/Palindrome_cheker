class User {
    name;
    #password;
    constructor(name, password) {
        this.name = name;
        this.#password = password;
    }

    checkPassword(input) {
        return input === this.#password;
    }

    changePassword(oldPassword, newPassword) {
        if (this.checkPassword(oldPassword)) {
            this.#password = newPassword;
            console.log("Пароль успешно изменен");
        }

        else {
            console.log("Старый пароль не верный, ввидте заново");
        }
    }

    getInfo() {
        return "Информация о владелце:" + this.name;
    }

}

const user = new User("Sodikov Dilshod, 24 year city Tajikistan", "84848484")

console.log(user.getInfo());

console.log(user.checkPassword("21321312"));
console.log(user.checkPassword("84848484"));

user.changePassword("21321312", "11111111");
user.changePassword("84848484", "11111111");

console.log(user.checkPassword("11111111"));