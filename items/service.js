const {
    itemsModel
  } = require('./model');
  
  module.exports.create = async ({
   itemName,
   quantity,
   isSanitized,
   unit,
   expiryDate,
   category,
   location
  }) => {
    const items = await itemsModel.create({
      item_name:itemName,
      quantity,
      isSanitized,
      unit,
      expiryDate,
      category,
      location 
    });
    return {
     items
    };
  };
  
  module.exports.getAll = async () => {
    const items = await itemsModel.find();
    return items;
  };
  
  module.exports.updateById = async ({ id },{updatedObject}) => {
    const items = await itemsModel.updateMany({
      _id:id
    },
     {
         $set:updatedObject
     });
    return items;
  };
  
//   module.exports.update = async ({ lastName }, { age }) => {
//     const users = await UserModel.update({
//       last_name: lastName
//     }, {
//       age
//     }, {
//       multi: true
//     });
//     return users;
//   };
  
  module.exports.delete = async ({ id }) => {
    const response = await itemsModel.deleteOne({
      _id: id
    });
    return response;
  };