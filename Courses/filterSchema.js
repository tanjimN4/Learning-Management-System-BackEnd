const  mongoose = require("mongoose");

const FilterSchema = new mongoose.Schema({
    Category: {
        type: [String],
        required: true,
      },
      Level: {
        type: [String],
        required: true,
      },
      Lectures: {
        type: [String],
        required: true,
      },
      Language: {
        type: [String],
        required: true,
      },
      Rating: {
        type: [String],
        required: true,
      },
      Price: {
        type: [String],
        required: true,
      }
});
// Pre-save middleware to check for duplicates
FilterSchema.pre("save", async function(next) {
    // Check if the combination of filters already exists in the database
    const existingFilter = await mongoose.model("Filter").findOne({
      Category: { $all: this.Category },
      Level: { $all: this.Level },
      Lectures: { $all: this.Lectures },
      Language: { $all: this.Language },
      Rating: { $all: this.Rating },
      Price: { $all: this.Price },
    });
  
    if (existingFilter) {
      const error = new Error("This filter combination already exists.");
      next(error); // Pass the error to the next middleware (which will be the error handler)
    } else {
      next(); // Continue with saving the document
    }
  });

module.exports = mongoose.model("Filter", FilterSchema);
