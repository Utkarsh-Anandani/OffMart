import dbConnect from "../../../lib/connection"
import Products from "../../../lib/models/Products";
import { NextResponse } from "next/server";

export async function POST(req){
    const {_id} = await req.json();

    console.log(_id);

    if(!_id){
        return NextResponse.json("id is required")
    }

    try{
    await dbConnect();
    const data = await Products.find({_id});

    return NextResponse.json(data);
    } catch(error){
        return NextResponse.json("connection error")
    }
}