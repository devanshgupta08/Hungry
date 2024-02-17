import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {Food} from "../models/food.model.js"
import {User} from "../models/user.model.js"
import {cloudinaryUpload} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const generateTokens = async(userId) =>{
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken,refreshToken};
    }
    catch{
        throw new ApiError(500,"Could not Generate Access and Refresh Token");
    }
}
const options ={
    httpOnly: true,
    secure: true
}
const home = asyncHandler(async (req, res) => {
    return res
    .status(200)
    .json(new ApiResponse(200,{"home" :"Home route"}, "Successfully opened /"));
});

const postFood = asyncHandler(async(req,res)=>{
    //get user details
    const {address,pincode,state,city,organization,descriptions} = req.body
    //validation - not empty
    if([address,pincode,state,city].some((field)=>{
        field?.trim() ===""
    }))
    {
        throw new ApiError(400,"Some fields are Empty")
    }
    //check if user already exits
    
    //check for images
    let photoLocalPath ="";
    if(req.files && Array.isArray(req.files.photo) && req.files.photo.length>0)
    {
        photoLocalPath = req.files.photo[0].path
    }
    console.log(photoLocalPath);
    //upload to cloudinary,avatar
    const photo = await cloudinaryUpload(photoLocalPath)
    const owner = req.user;
    //create user obj 
    const food = await Food.create({
        address,
        pincode,
        state,
        city,
        organization,
        photo:photo.url,
        owner: owner, // Assign the complete user object
        descriptions
    })
    //populate owner field to get the full user object
    
    //remove pwd and refresh token 
    const createdFood = await Food.findById(food._id)
    //check for user creation
    if(!createdFood) {
        throw new ApiError(500,"Food addition failed")
    }
    // return res
    return res.status(201).json(new ApiResponse(200,createdFood, "Food added Successfully"));
});
const getFood = asyncHandler(async(req,res)=>{
    
    const allFoods = await Food.find({});
    if(!allFoods)
    {
        return new ApiError(500,"Error Fetching Foods")
    }
    // return res
    return res.status(200).json(new ApiResponse(200,allFoods, "Food added Successfully"));
});

export {
    postFood,
    getFood
}