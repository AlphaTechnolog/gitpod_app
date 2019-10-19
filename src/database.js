const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://alpha:alpha@cluster0-zlqvd.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
    .then(() => console.log('DB is connect'))
    .catch(e => console.log(e))