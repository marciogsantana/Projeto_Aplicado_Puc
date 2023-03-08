const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
  
    image: String,
    title: String,
    likes: Array,
    comments: Array,
    userId: mongoose.ObjectId,
    userName: String,
  },
  {
    timestamps: true,
  }
  );

  const MyModel = mongoose.model('MyModel', mySchema);

  

  MyModel.findOne(myDocumentId, (err, doc) => {
    if (err) {
      console.error(err);
    } else {
      console.log(doc);
    }
  });

  module.exports = MyModel;