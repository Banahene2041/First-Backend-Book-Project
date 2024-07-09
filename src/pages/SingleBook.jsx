import { useEffect, useState } from "react"
import Header from "../components/Header"
import { useParams } from "react-router-dom"
import axios from "axios"

const SingleBook = () => {
  const [detail, setDetail] = useState([])
  const [loading,setLoading] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    const fetchBook = async() => {
    setLoading(true)
    try {
      const resp = await axios.get(`http://localhost:5000/api/v1/books/${id}`)
      const data = resp.data.book
      setDetail(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

    fetchBook()
  },[id])

   if(loading){
    return <div className="flex items-center justify-center w-full h-lvh">
      <div className="btn loading"></div>
    </div>
  }

  return (
    <section>
      <Header title="Show Book" />
      <div className="flex items-start pl-2">
        <div className="rounded-md border-2 border-blue-400 mt-4 p-4">
          <h3 className="text-xl font-medium">Id <span className="text-lg ml-3 font-normal">{detail._id}</span></h3>
          <h3 className="my-4 text-xl font-medium">Title <span className="text-lg ml-3 font-normal">{detail.title}</span></h3>
          <h3 className="text-xl font-medium">Author <span className="text-lg ml-3 font-normal">{detail.author}</span></h3>
          <h3 className="my-2 text-xl font-medium">Published Year <span className="text-lg ml-3 font-normal">{detail.published_year}</span></h3>
          <h3 className="mt-4 text-xl font-medium">Created Time <span className="text-lg ml-3 font-normal">{detail.createdAt}</span></h3>
          <h3 className="mt-4 text-xl font-medium">Last Updated Time <span className="text-lg ml-3 font-normal">{detail.updatedAt}</span></h3>
        </div>
      </div>
    </section>
  )
}

export default SingleBook