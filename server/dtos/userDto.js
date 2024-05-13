module.exports = class UserDto {
    id;
    name;
    surname;
    email;
    isAdmin;

    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
        this.isAdmin = model.isAdmin;
    }
}