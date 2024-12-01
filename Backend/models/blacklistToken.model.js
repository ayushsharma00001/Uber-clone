const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true, // To prevent duplicate entries
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 24 * 60 * 60, // TTL: 24 hours (in seconds)
    },
  }
);

const BlacklistedToken = mongoose.model(
  "BlacklistToken",
  blacklistTokenSchema
);

module.exports = BlacklistedToken;
