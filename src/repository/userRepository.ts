import { User } from "../model/userModel.js";

export class UserRepository {
  async create(user:any) {
    return await User.create(user);
  }

  async findByEmail(email:string) {
    return await User.findOne({ where: { email } });
  }

  async findById(id:number) {
    return await User.findByPk(id);
  }
   async save(user: any) {
        return user.save();
    }
}