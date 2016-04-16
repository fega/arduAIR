//MODELO DE MONGOSE
module.exports =mongoose.model('device',{
    name: String,
    macAddress:String,
    password: String,
    description:String,
    parameters:[String],

    lastRegister: {type: Date, default: Date.now},
    data:[{
    	location:String,
    	name: String,
    	date: Date,
    	humidity: Number,
    	temp: Number,
    	pressure:Number,
    	nox: Number,
    	sox: Number,
    	o3: Number,
    	vocs:Number,
    	ch4:Number,
    }]
});