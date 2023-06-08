import React,{useEffect,useState} from 'react'
import ReactPaginate from 'react-paginate'
const url='https://jsonplaceholder.typicode.com'

/* 

    1.Mount
        useEffect(()=> {

        },[])
    2.Update
         useEffect(()=>{

         },[dependancy])
    3. Unmount
         useEffect(()=>{
            return () =>{}
         },[])



*/

function Ex2(props) {
    // useEffect => api call, initial values
    const [posts,setPosts]=useState([])


    // pagination state

    const [currentItems,setCurrentItems]=useState([]) // current filtered data

    const [itemOffset,setItemOffset]=useState(0) // starting index

    const [pagecount,setPageCount]=useState(0)

    

    const getPosts =async () =>{
        await fetch(`${url}/posts`)
        .then(res=>res.json())
        .then(out =>{
            // console.log('Output=',out)
            setPosts(out)
        }).catch(err => console.log(err.message))
    }

    useEffect(()=>{
        getPosts();
        const endOffset=itemOffset + props.itemsPerPage
    // console.log(`init offset = ${itemOffset} - end offset = ${endOffset}`)
    const data=posts.slice(itemOffset,endOffset)
    setCurrentItems(data)
    const pCount=Math.ceil(posts.length/props.itemsPerPage)
    setPageCount(pCount)
    },[posts])

  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">useEffect</h3>
        </div>
    </div>
    <div className="row">
        {
            currentItems && currentItems.map((item,index) =>{
                return (
                    <div className="col-md-4 col-sm-12 col-lg-4" key={index}>
                        <div className="card mt-2 mb-2">
                            <div className="card-header">
                                <h5 className="card-title text-center">{item.id}  {item.title}</h5>
                            </div>
                            <div className="card-body">
                                <p className="text-success">
                                    {item.body}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    <div className="row">
        <div className="col-md-12">
            <ReactPaginate
            pageCount={pagecount}
            className='pagination'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            activeClassName='active'
            activeLinkClassName='active'
            />
        </div>
    </div>
   </div>
  )
}

export default Ex2
