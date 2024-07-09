import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

const UpdateBook = () => {
  const [title,setTitle] = useState("")
  const [author,setAuthor] = useState("")
  const [published,setPublished] = useState("")
  const {id} = useParams()

  useEffect(() => {
    const fetchBook = async()=> {
      try {
        const resp = await axios.get(`http://localhost:5000/api/v1/books/${id}`)
        const data = resp.data.book
        setTitle(data.title)
        setAuthor(data.author)
        setPublished(data.published_year)
      } catch (error) {
        console.log(error);
      } 
  }
  fetchBook()
  },[id])

  const published_year = Number(published)
  const data = {
    title,
    author,
    published_year
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (!published || !title || !author){
      throw new Error("Please provide name,author and published_year")
    }
    try {
      await axios.patch(`http://localhost:5000/api/v1/books/${id}`, data)
      setAuthor("")
      setPublished("")
      setTitle("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="w-full h-lvh">
      <Header title= "Edit Book" />
      <article className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mt-32">
          <div className="flex flex-col rounded-md items-center justify-center border-2 border-blue-400 p-4">
            <div className="flex flex-col">
            <label htmlFor="title" className="text-lg font-normal">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" className="border border-solid py-1 pr-32 outline-1" />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="author" className="text-lg font-normal">Author</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} id="author" className="border border-solid py-1 pr-32 outline-1" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="published" className="text-lg font-normal">Published Year</label>
            <input type='number' value={published} onChange={(e) => setPublished(e.target.value)} id="published" className="border border-solid py-1 pr-32 outline-1" />
          </div>
          <div>
            <button type='submit' className="py-2 px-20 rounded-sm bg-blue-500 font-medium mt-4">Add Book</button>
          </div>
          </div>
        </form>
      </article>
    </section>
  )
}

export default UpdateBook
