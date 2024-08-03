import dbConnect from "@/lib/connection";
import Products from "@/lib/models/Products";
import { NextResponse } from "next/server";

export async function GET(){
    await dbConnect();
    const data = await Products.find({_id: "66abde66b28ee354737f40f3"});

    return NextResponse.json(data);
}