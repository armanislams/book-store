import { collections, dbConnect } from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const book = await req.json();
        const result = await dbConnect(collections.BOOKS).insertOne({
          ...book,
          createdAt: new Date(),
        });
        return NextResponse.json(
          { success: true, id: result.insertedId },
          { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
          { success: false, message: error.message },
          { status: 500 }
        );
    }

}