"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserState = exports.WebUser = void 0;
class WebUser {
    constructor(login_id, password) {
        this.login_id = login_id;
        this.password = password;
        this.state = UserState.NEW;
    }
    getLogin_id() {
        return this.login_id;
    }
    setPassword(password) {
        this.password = password;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    toString() {
        return `WebUser : ID = ${this.login_id}, state= ${this.state};`;
    }
}
exports.WebUser = WebUser;
class UserState {
}
exports.UserState = UserState;
UserState.NEW = "New";
UserState.ACTIVE = "Active";
UserState.BLOCKED = "Blocked";
UserState.BANNED = "Banned";
