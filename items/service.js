const {
    itemsModel
  } = require('./model');
  
  module.exports.create = async (data) => {
      for(let item of data){
    await itemsModel.findOneAndUpdate({name:item.item_name},{
      $set:item
    },{upsert:true});
    console.log(items);
    return {
    success:true
    };
  }
};
  
  module.exports.getAll = async () => {
    const items = await itemsModel.find();
    return items;
  };
  
  module.exports.updateById = async ({ id },updatedobj) => {
    const items = await itemsModel.findByIdAndUpdate({
      _id:id
    },
    {
        $set:updatedobj
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