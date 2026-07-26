import mongoose, { Schema, model, models } from 'mongoose'

export interface ILead {
  name: string
  company?: string
  email: string
  phone?: string
  inquiryType?: string
  message: string
  createdAt: Date
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    company: { type: String, trim: true, maxlength: 160 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    phone: { type: String, trim: true, maxlength: 40 },
    inquiryType: { type: String, trim: true, maxlength: 80 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

const Lead = (models.Lead as mongoose.Model<ILead>) || model<ILead>('Lead', LeadSchema)
export default Lead