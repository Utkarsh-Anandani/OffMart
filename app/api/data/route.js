import dbConnect from "@/lib/connection";
import Products from "@/lib/models/Products";
import { NextResponse } from "next/server";

export async function GET(){
    await dbConnect();
    const data = await Products.find({});

    return NextResponse.json(data);
}

