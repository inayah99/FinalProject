import Products from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getProducts = async(req, res) =>{
    try{
        let response;
        if(req.role === "admin"){
            response = await Products.findAll({
                attributes: ['uuid', 'Tittle', 'Serves', 'Cooktime', 'Ingredients', 'Steps'],
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            })
        } else{
            response = await Products.findAll({
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            })
        }
        res.status(200).json(response);

    } catch(error){
        res.status(500).json({msg: error.message})
    }
}

export const getProductById = async(req, res) =>{
    try{
        const products = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        })
        if(!products) return res.status(404).json({msg:"Not Found"})
        let response;
        if(req.role === "admin"){
            response = await Products.findOne({
                attributes: ['uuid', 'Tittle', 'Serves', 'Cooktime', 'Ingredients', 'Steps'],
                where:{
                    id: products.id
                },
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            })
        } else{
            response = await Products.findOne({
                where:{
                    [Op.and]:[{id: products.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes: ['name', 'email']
                }]
            })
        }
        res.status(200).json(response);

    } catch(error){
        res.status(500).json({msg: error.message})
    }
}

export const createProduct = async(req, res) =>{
    const {Tittle, Serves, Cooktime, Ingredients, Steps} = req.body;
    try{
        await Products.create({
            Tittle: Tittle,
            Serves: Serves,
            Cooktime: Cooktime,
            Ingredients: Ingredients,
            Steps: Steps,
            userId: req.userId
        })
        res.status(201).json({msg:"Recipe Successfull Created"});
    } catch(error){
        res.status(500).json({msg: error.message})
    }

}

export const updateProduct = async(req, res) =>{
    try{
        const products = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        })
        if(!products) return res.status(404).json({msg:"Not Found"})
        const {Tittle, Serves, Cooktime, Ingredients, Steps} = req.body;
        if(req.role === "admin"){
            await Products.update({Tittle, Serves, Cooktime, Ingredients, Steps},{
                where:{
                    id: products.id
                }
            })
        } else{
            if(req.userId !== products.userId) return res.status(403).json({msg:"Forbidden"})
            await Products.update({Tittle, Serves, Cooktime, Ingredients, Steps},{
                where:{
                    [Op.and]:[{id: products.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg:"Update Successfull"});

    } catch(error){
        res.status(500).json({msg: error.message})
    }
}

export const deleteProduct = async(req, res) =>{
    try{
        const products = await Products.findOne({
            where:{
                uuid: req.params.id
            }
        })
        if(!products) return res.status(404).json({msg:"Not Found"})
        const {Tittle, Serves, Cooktime, Ingredients, Steps} = req.body;
        if(req.role === "admin"){
            await Products.destroy({
                where:{
                    id: products.id
                }
            })
        } else{
            if(req.userId !== products.userId) return res.status(403).json({msg:"Forbidden"})
            await Products.destroy({
                where:{
                    [Op.and]:[{id: products.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg:"Delete Recipe Successfull"});

    } catch(error){
        res.status(500).json({msg: error.message})
    }
}