import mongoose from 'mongoose'

const mongodbUrl = 'mongodb+srv://vinicius:2mlwO6wApUbwrIzm@cluster0.iwj8h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

  const connect = () => 
    mongoose.connect(mongodbUrl, {
        useNewUrlParser: true,
        serverSelectionTimeoutMS: 5000
        }).catch(err => console.log(err.reason))

export default connect 