import mongoose from "mongoose";

const prerequisiteSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["math", "programming", "theory", "tools"],
    required: true,
  },
  skills: [
    {
      name: String,
      level: {
        type: String,
        enum: ["basic", "intermediate", "advanced"],
        required: true,
      },
    },
  ],
});

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["article", "video", "course", "book", "use_case"],
    required: true,
    default: "article",
  },
  duration: {
    type: Number,
    required: true,
  },
});

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  duration: {
    type: Number,
    required: true,
  },
  skills: [
    {
      name: String,
      level: {
        type: String,
        enum: ["basic", "intermediate", "advanced"],
      },
    },
  ],
  resources: [resourceSchema],
  validationCriteria: [String],
});

const goalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "ml",
        "dl",
        "data_science",
        "mlops",
        "computer_vision",
        "nlp",
        "robotics",
        "quantum_ml",
        "programming",
        "math",
      ],
    },
    level: {
      type: String,
      required: true,
      enum: ["beginner", "intermediate", "advanced"],
    },
    estimatedDuration: {
      type: Number,
      required: true,
      min: 1,
    },
    prerequisites: [prerequisiteSchema],
    modules: [moduleSchema],
    careerOpportunities: [
      {
        title: String,
        description: String,
        averageSalary: String,
        companies: [String],
      },
    ],
    certification: {
      available: {
        type: Boolean,
        default: false,
      },
      name: String,
      provider: String,
      url: String,
    },
    requiredConcepts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Concept",
      },
    ],
    recommendedFor: [
      {
        profile: String,
        reason: String,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

goalSchema.index({ category: 1, level: 1 });
goalSchema.index({ "prerequisites.skills.name": 1 });
goalSchema.index({ "modules.skills.name": 1 });

export const Goal = mongoose.model("Goal", goalSchema);
