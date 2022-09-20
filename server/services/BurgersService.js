import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { fakeMenuDb } from "../db/FakeMenuDB.js";

class BurgersService {
  async removeBurger(burgerId) {
    const burger = await this.getBurgerById(burgerId);
    fakeMenuDb.burgers.splice(fakeMenuDb.burgers.indexOf(burger), 1);
  }
  createBurger(formData) {
    throw new Error("Method not implemented.");
  }
  async getBurgerById(burgerId) {
    const burger = fakeMenuDb.burgers.find((b) => b.id == burgerId);
    if (!burger) {
      throw new BadRequest("Invalid Id");
    }
    return burger;
  }
  async getAllBurgers() {
    const res = fakeMenuDb;
    return res.burgers;
  }
  //
}
export const burgersService = new BurgersService();
