import React,{useEffect,useState} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import { MdOutlineDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegPlusSquare } from "react-icons/fa";

const Home = () => {
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(false)

  const getBook = async () => {
    setLoading(true)
    try {
      const response = await axios('http://localhost:5000/api/v1/books')
      const data = response.data
      const books = data.book
      setBook(books)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }    
  }

  useEffect(() =>{
    getBook()
  },[])

  if(loading){
    return <div className="flex items-center justify-center w-full h-lvh">
      <div className="btn loading"></div>
    </div>
  }

  return (
    <section className="px-10">
      <div className="flex justify-between px-4 pt-40">
        <h3 className="font-medium text-3xl">Book List</h3>
        <Link to={"/createbook"}><span className="text-green-700 text-xl"><FaRegPlusSquare/></span></Link>
      </div>
      <div>
        <table className="w-full mt-8">
          <thead>
            <tr className="border border-solid border-red-600">
              <th className="border border-solid border-y-black">No</th>
                <th className="border border-solid border-y-black">Title</th>
                  <th className="border border-solid border-y-black">Author</th>
                  <th className="border border-solid border-y-black">Published Year</th>
                  <th className="border border-solid border-y-black">Opeartions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    book.map((item, index) => {
                      const {_id,title,author,published_year} = item
                      return <tr key={_id}>
                        <td className="border text-center border-solid border-y-black">{index}</td>
                        <td className="border text-center border-solid border-y-black">{title}</td>
                        <td className="border text-center border-solid border-y-black">{author}</td>
                        <td className="border text-center border-solid border-y-black">{published_year}</td>
                        <td className="border border-solid border-y-black">
                          <span className="flex items-center justify-center gap-4">
                            <Link to={`/singlebook/${_id}`} className="font-bold text-lg text-green-500" ><BsInfoCircle/></Link>
                          <Link to={`/updatebook/${_id}`} className="font-bold text-lg text-yellow-500" ><CiEdit/></Link>
                          <Link to={`/deletebook/${_id}`} className="font-bold text-lg text-red-500"><MdOutlineDeleteForever/></Link>
                          </span>
                          </td>
                      </tr>
                    })
                  }
                </tbody>
        </table>
      </div>
    </section>
  )
}

export default Home