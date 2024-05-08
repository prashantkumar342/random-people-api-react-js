/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import './App.css'
import useapi from './hooks/useapi'
function App() {
  const { detail, getdetails } = useapi()

  useEffect(() => {
    getdetails()
  }, [])
  // console.log(detail.name.first)

  return (
    <div className="bg-gray-600 outline outline-dashed outline-white flex px-10 py-5 rounded-lg m-auto mt-7" style={{ width: "60vw" }}>
      <div>
        <h1 style={{ fontSize: '3vh' }} className="font-sans text-white">{detail ? `${detail.name.title} ${detail.name.first} ${detail.name.last}` : ''}</h1>
        <pre className=" text-white"><p>gender: {detail ? `${detail.gender}    ${detail.dob.date}` : ''}</p></pre>
        <p className=" text-white">Age: {detail ? `${detail.dob.age}` : ''}</p>
        <p className=" text-white mt-2" >i'd: {detail ? `${detail.login.username}` : ''}</p>
        <p className=" text-white" >password: {detail ? `${detail.login.password}` : ''}</p>
        <br />
        <h2 className="text-white " style={{ fontSize: '3vh' }}>Address: </h2>
        <p className="text-white ">{detail ? `${detail.location.city} ${detail.location.state} ${detail.location.country}  ${detail.location.postcode}` : ''}</p>
        <pre className=" text-white"><p>Phone: {detail ? `${detail.phone}` : ''}    email: {detail ? `${detail.email}` : ''}</p></pre><br />
        <button className="bg-blue-700 text-white px-10 py-1.5 rounded-lg outline outline-white " onClick={getdetails}>get</button>
      </div>
      <div>
        <img className="w-40 h-60 mt-10 ml-20" src={detail ? `${detail.picture.medium}` : ''} alt="" />
      </div>


      {/* <button className="bg-red-700" onClick={getdetails}>fetch</button> */}
      {/* <h1>{detail ? `${detail.name.first} ${detail.name.last}` : ''}</h1> */}
    </div >
  );
}

export default App
