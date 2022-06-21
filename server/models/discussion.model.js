const mongoose = require("mongoose");

    const discussion = 
        new mongoose.Schema(
            {
               discussionText: String,
               createdAt: Date,
               userId: String,
            },
            { timestamps: true }
        )
module.exports=  mongoose.model("discussion",discussion)
