"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const use_service_1 = __importDefault(require("../service/use-service"));
class UserController {
    constructor() {
        this.register = async (req, res) => {
            return await use_service_1.default.addAccount(req, res);
        };
    }
}
exports.default = new UserController();
//# sourceMappingURL=user-controller.js.map