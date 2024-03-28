const mongoose = require('mongoose')
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate-v2')

const videoSchema =  new mongoose.Schema(
    {
        videoFile : {
            type : String,
            required : true
        },
        thumbnile : {
            type : String,
            required : true
        },
        tittle : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        duration :{
            type : Number,
            required : true
        },
        view : {
            type : Number,
            default : 0
        },
        isPublished :{
            type :Boolean,
            default : true
        },
        owner : {
            type : Schema.types.ObjectId,
            ref : "userModel"
        }

    },{
        timestamps : true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)


const videoModel = mongoose.model('video' , videoSchema)
module.exports = videoModel