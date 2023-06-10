import React,{useRef} from 'react'

function Ex6(props) {
    const fUser = useRef()
    const fPass = useRef()

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            user: fUser.current.value,
            pass: fPass.current.value 
        };
        console.log('new user =', data) 
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useRef</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form autoComplete="off" onSubmit={submitHandler}>
                    <div className="form-group mt-2">
                        <label htmlFor="user">Username</label>
                        <input type="text" name="user" id="user" ref={fUser} className='form-control' required />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="user">Password</label>
                        <input type="password" name="pass" id="pass" ref={fPass} className='form-control' required />
                    </div>
                    <div className="form-group mt-2">
                        <input type="submit" name="" id="" value="Login" className='btn btn-success'/>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Ex6
