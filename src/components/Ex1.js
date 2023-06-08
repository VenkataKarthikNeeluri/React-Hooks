import React , {useState}from 'react'

 // react hooks => use only in functional components
 // 1. useState
 // 2. useEffect
 // 3. useContext

function Ex1() {
     // const[state,handler]=useState(initValue) // declare react states in functional components
    const [x,setX]=useState(10)
    const [title,setTitle]=useState("Welcome to react state")
    const [isView,setIsView]=useState(true)
    const [colors,setColors]=useState(['red','green','blue']) 
    const [user,setUser]=useState({
        name:"Venkat Karthik",
        email:"nvenkatakarthik028@gmail.com"
    })
  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">useState</h3>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            <h3 className="text-warning">x = {x}</h3>
        </div>
    </div>
   </div>
  )
}

export default Ex1
