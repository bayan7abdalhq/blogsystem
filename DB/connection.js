import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('blogsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


export const connectDB =async()=>{
    try{
           return await sequelize.sync({alter:false,force:false});
    }
    catch(error){
        console.log("error to connect to database");
        console.log(error);
    }

  }