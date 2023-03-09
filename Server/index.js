    import mongoose from "mongoose";
    
    import userroutes from  './Routes/user.js'
    import cors from 'cors'       
    import  express  from "express";
    import property from "./Routes/Properties.js";

    import payment  from "./Routes/stripe.js"

    import Forgotpass from "./Routes/Forgotpass.js";
    import Custom from  './Routes/Customize.js'
    import Contactus from './Routes/Contactus.js'

    
    mongoose.connect("mongodb+srv://Owc:1234@owc.asxhomx.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("connected")}).catch(e=>{console.log(e)})

    const app=express()
    app.set('view engine','ejs');

    app.use(express.json())
    app.use(express.urlencoded())
    app.use(cors())
    app.use('/User',userroutes)
    app.use('/Property', property)

    app.use("/Payment",payment)

    app.use('/Reset',Forgotpass);

    app.use("/Custom", Custom)

    app.use("/Contactus", Contactus)

    app.listen(5000,console.log("listeninig oon 5000"))
      
   



