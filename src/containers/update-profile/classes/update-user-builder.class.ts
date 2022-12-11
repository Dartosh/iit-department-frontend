import { UpdateUserInterface } from "../../../models/interfaces/users/update-user.interface";

class UpdateUserBuilder implements UpdateUserInterface{
    public readonly phone: string;
    public readonly technology: number[];
    public readonly username: string;

    public first_name?: string;
    public last_name?: string;
    public date_joined?: Date;
    public middle_name?: string;
    public first_login?: Date;
    public bio?: string;
    public github?: string;
    public birthday?: Date | null;
    public gender?: string | null;

    constructor(phone: string, technology: number[], username: string) {
        this.phone = phone;
        this.technology = technology;
        this.username = username;
    }

    set firstName(first_name: string) {
        this.first_name = first_name;
    }
    set lastName(last_name: string) {
        this.last_name = last_name;
    }
    set dateJoined(date_joined: Date) {
        this.date_joined = date_joined;
    }
    set middleName(middle_name: string) {
        this.middle_name = middle_name;
    }
    set firstLogin(first_login: Date) {
        this.first_login = first_login;
    }
    set biography(bio: string) {
        this.bio = bio;
    }
    set githubLink(github: string) {
        this.github = github;
    }
    set birthdayDate(birthday: Date){
        this.birthday = birthday;
    }
    set usergender(gender: string){
        this.gender = gender;
    }
}