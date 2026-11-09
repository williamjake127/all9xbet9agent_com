import mongoose from 'mongoose';

const AgentSchema = new mongoose.Schema(
  {
    serial: {
      type: String,
      default: '01'
    },
    name: {
      type: String,
      required: [true, 'Agent name is required'],
      trim: true
    },
    agentId: {
      type: String,
      required: [true, 'Agent ID is required'],
      trim: true
    },
    area: {
      type: String,
      default: '',
      trim: true
    },
    whatsapp: {
      type: String,
      required: [true, 'WhatsApp number is required'],
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: ['Admin', 'Sub Admin', 'Super', 'Master'],
      default: 'Master'
    },
    role: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['verified', 'unverified'],
      default: 'verified'
    },
    order: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.models.Agent || mongoose.model('Agent', AgentSchema);
