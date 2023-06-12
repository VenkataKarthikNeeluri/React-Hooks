import React, { useLayoutEffect,useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com'

function Ex7(props) {
    const [users,setUsers] = useState([])

    const getUsers = async () => {
        await fetch(`${url}/users`)
        .then(res => res.json())
        .then(out => {
            console.log('out =', out)
            setUsers(out)
        }).catch(err => console.log(err.message))
    }

    useLayoutEffect(() => {
        getUsers()
    },[])

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useLayoutEffect</h3>
            </div>
        </div>
        <div className="row">
            {
                users && users.map((item,index) => {
                    return(
                        <div className="col-md-3 mt-2 mb-2" key={index}>
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="text-center text-success"> {item.name} </h5>
                                </div>
                                <div className="card-body">
                                <h5 className="text-center text-primary"> email= {item.email} </h5>
                                <h5 className="text-center text-warning"> phone={item.phone} </h5>
                                <h5 className="text-center text-danger"> website={item.website} </h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>    
    </div>
  )
}

export default Ex7
