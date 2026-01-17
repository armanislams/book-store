'use server'

import { collections, dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

export const getBooks = async () => {
    const books = await dbConnect(collections.BOOKS).find().toArray()
  return books
}
export const getBookDetails = async (id) => {
  const query = {_id: new ObjectId(id)}
  const result = await dbConnect(collections.BOOKS).findOne(query)
  return { ...result, _id: result._id.toString() }
}

export const PostBooks = async (payload) => {
   const result = await dbConnect(collections.BOOKS).insertOne(payload);
   return {
     ...result,
     insertedId: result.insertedId?.toString(),
   };
}