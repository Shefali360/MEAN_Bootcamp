const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema(
    {
      item_name:  {
        type: String,
         required: true,
         unique:true
      },
      quantity:{
          type: Number,
          required: true
      },
      isSanitized:{
          type: Boolean
      },
      unit:{
          type:String,
          required:true
      },
      expiryDate: {
        type: Date,
        min:Date.now
      },
      createdAt:{
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default:Date.now
      },
      category:{
          type:String,
          enum:["grocery","medical", "fruits","veg", "beverages","babycare","cleaning"],
          default:"grocery"
      },
      location:{
          type:String,
          enum:["store","kitchen"],
          default:"store"
      }
});
  
itemsSchema.pre('findByIdAndUpdate',()=> {
  this.set({ updatedAt: Date.now() });
});

const itemsModel = mongoose.model('Items', itemsSchema);

module.exports = {
  itemsModel
};