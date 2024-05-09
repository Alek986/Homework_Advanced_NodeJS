"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetController = void 0;
const common_1 = require("@nestjs/common");
const budget_service_1 = require("./budget.service");
const budget_dto_1 = require("./dto/budget.dto");
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    listBudgets() {
        return this.budgetService.readBudgets();
    }
    ;
    createBudget(requestbody) {
        const mappedBudget = {
            title: requestbody.title,
            balance: requestbody.balance,
            currency: requestbody.currency,
            expenses: requestbody.expenses,
            incomes: requestbody.incomes
        };
        return this.budgetService.createBudget(mappedBudget);
    }
    ;
    getBudgetByID(id) {
        return this.budgetService.getBudgetByID(id);
    }
    ;
    deleteBudgetByID(id) {
        return this.budgetService.removeBudget(id);
    }
    ;
    updateBudget(id, requestBody) {
        return this.budgetService.updateBudget(id, requestBody);
    }
    ;
};
exports.BudgetController = BudgetController;
__decorate([
    (0, common_1.Get)(`/budgets`),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "listBudgets", null);
__decorate([
    (0, common_1.Post)(`/budgets`),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [budget_dto_1.BudgetDTO]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "createBudget", null);
__decorate([
    (0, common_1.Get)(`/budgets/:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "getBudgetByID", null);
__decorate([
    (0, common_1.Delete)(`/budgets/:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "deleteBudgetByID", null);
__decorate([
    (0, common_1.Put)(`/budgets/:id`),
    __param(0, (0, common_1.Param)(`id`)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, budget_dto_1.UpdatedBudgetDTO]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "updateBudget", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [budget_service_1.BudgetService])
], BudgetController);
//# sourceMappingURL=budget.controller.js.map