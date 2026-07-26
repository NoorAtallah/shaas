import mongoose, { Schema, model, models } from 'mongoose'

export interface IAdminUser {
  email: string
  name: string
  passwordHash: string
  createdAt: Date
}

const AdminUserSchema = new Schema<IAdminUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, default: 'Admin', trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

const AdminUser = (models.AdminUser as mongoose.Model<IAdminUser>) || model<IAdminUser>('AdminUser', AdminUserSchema)
export default AdminUser
