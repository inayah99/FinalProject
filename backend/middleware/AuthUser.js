// import Users from "../models/UserModel.js";

// export const verifyUser = async(req, res, next) =>{
//     try{
//         if(!req.session.userId){
//             return res.status(401).json({msg:"Mohon login kembali"})
//         }
//         const user = await Users.findOne({
//             where:{
//                 uuid: req.session.userId
//             }
//         });
//         if(!user) return res.status(404).json({msg: "User Tidak Ditemukan"})
//         req.userId = user.id;
//         req.role = user.role;
//         next();
//     } catch(e) {
//         console.log(e);
//     }
    
// }

// export const adminOnly = async(req, res, next) =>{
//     const user = await Users.findOne({
//         where:{
//             uuid: req.session.userId
//         }
//     });
//     if(!user) return res.status(404).json({msg: "User Tidak Ditemukan"})
//     if(user.role !== "admin") return res.status(403).json({msg:"Tidak Memiliki Akses"})
//     next();
// }