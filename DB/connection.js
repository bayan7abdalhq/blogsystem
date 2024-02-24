import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('freedb_blogsystem3', 'freedb_bayan', 'wUCeQ%Re6UVCEw9', {
    host: 'sql.freedb.tech',
    port:3306,
    dialect: 'mysql'
  });


export const connectDB =async()=>{
    try{
           return await sequelize.sync({alter:true,force:true});
    }
    catch(error){
        console.log("error to connect to database");
        console.log(error);
    }

  }