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
      },
      category:{
          type:String,
          required:true
      },
      location:{
          type:String,
          required:true
      }
});
  
itemsSchema.pre('update',()=> {
  this.set({ updatedAt: Date.now() });
});

const itemsModel = mongoose.model('Items', itemsSchema);

module.exports = {
  itemsModel
};