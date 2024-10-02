import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/error.js";
import Item from "../models/ItemSchema.js";
import { sendToken } from "../utils/jwtToken.js";

export const addItem = catchAsyncError(async (req, res, next) => {
    const { Item_Number, Item_Name, HSN_SAC, Price, GST } = req.body;

    if (!Item_Number || !Item_Name || !HSN_SAC || !Price || !GST) {
        return next (new ErrorHandler('Please Add All Item Details....'));
    }

    const isItem_Name = await Item.findOne({Item_Name});
    if (isItem_Name) {
        return next (new ErrorHandler('Cannot add same item again, Item with this name already Exist...'))
    }

    const item = await Item.create({
        Item_Number,
        Item_Name,
        HSN_SAC,
        Price,
        GST
    });
    sendToken(item,200,res,"New Item Added Successfully...")
})

export const getItems = catchAsyncError(async(req,res,next)=>{
    const items = await Item.find();
    
    res.status(200).json({
        success: true,
        items
    })
}) 