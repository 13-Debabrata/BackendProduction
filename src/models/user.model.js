const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index: true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    fullname : {
        type : String,
        required : true,
        trim : true,
        index: true
    },
    avatar : {
        type : String,
        required: true
    },
    coverImage :{
        type : String
    },
    watchHistory : [{
        type : Schema.types.objectId,
        ref : 'video'
    }],
    password : {
        type : String,
        required : [true ,'password is required']
    },
    refreshToken:{
        type : String
    }},
    {
    timestamps : true
    }
 )

userSchema.pre('save' , async function (next){
    if(!this.isModified('password')) return next()
    
    this.password = bcrypt.hash(this.password , 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,
        fullname : this.fullname
    },
    process.env.ACCESSS_TOKEN_SECRET,
    {
        expiresIn : process.env.ACCESSS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken = function() {
    return jwt.sign({
        _id : this._id,
        email : this.email,
        username : this.username,
        fullname : this.fullname
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn : process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}


const userModel = mongoose.model ('user', userSchema)

module.exports = userModel