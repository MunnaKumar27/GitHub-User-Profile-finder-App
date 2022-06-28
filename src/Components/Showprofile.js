import React, { useState } from 'react'
import '../App.css';

function Showprofile() {
    const [userName, setUserName] = useState("");
    const [data, setData] = useState({});

    const onChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    // fetching api
    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.github.com/users/${userName}`)
            .then((response) => {
                return response.json();
            }).then((originalData) => {
                if (originalData) {
                    setData(originalData);
                }
            })
    }

    return (
        <>
            <div className="container  bg-color" >
                <div className="row  mt-auto ">
                    <div className="col-lg-8 col-sm-12 text-center mx-auto">
                        <h1 className="display-5  mb-3 heading"><i class="bi bi-github"></i>&nbsp;GitHub User Profile finder App</h1>
                        <div className="centre">
                            <h2>
                                <a className="social" href="https://munnaportfolio.ml/">Munna Kumar</a>
                                <a className="social" href="https://www.facebook.com/Munnakumar27" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
                                <a className="social" href="https://www.linkedin.com/in/munnakumar27/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                                <a className="social" href="https://www.instagram.com/munnakumar_27/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
                                <a className="social" href="https://github.com/MunnaKumar27"><i class="bi bi-github" target="_blank"></i></a>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-6 mx-auto text-center">
                        <div className="row mb-5 justify-content-center">
                            <form id="myform" autoComplete='off' onSubmit={onSubmitHandler}>
                                <div className="col-lg-8 col-sm-12 my-2 form-group">
                                    <input className="form-control form-control-lg " placeholder="Github username" type={userName} id="w" onChange={onChangeHandler} />
                                </div>
                                <div className="col-lg-3 col-sm-12 my-2 form-group">
                                    <button className="btn btn-primary mt-auto btn-block w-100 btn-lg button">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center my-5 des'><i class="bi bi-pen-fill"></i> <i class="bi bi-github"></i> Searched Profile Details will appear here -<i class="bi bi-arrow-down-circle-fill"></i></h1>
            <div className='container my-5 bg-color1'>
                <div className="card p-3  w-100">
                    <div className="d-flex align-items-center">
                        <div className="image">
                            <img src={data.avatar_url} className="rounded" width="155" alt='user-img' />
                        </div>
                        <div className="ml-3 w-100">
                            <h4 className="mb-0 mt-0 d-flex">{data.login}  </h4> <a href="{$data.html_url}">{data.html_url}</a><br /><span>{data.bio}</span>
                            <div className="p-2 mt-2 bg-dark d-flex flex-row justify-content-between rounded text-white stats">
                                <div className="d-flex flex-column"> <span className="articles">Repository</span> <span className="number1">{data.public_repos}</span> </div>
                                <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">{data.followers}</span> </div>
                                <div className="d-flex flex-column"> <span className="rating">following</span> <span className="number3">{data.following}</span> </div>
                            </div>
                        </div>
                    </div>  
                </div>                
            </div>
            <h6 className='text-center'>© Copyright 2022, All Rights Reserved @<a className="social" href="https://munnaportfolio.ml/">Munna Kumar</a>
                                <a className="social" href="https://www.facebook.com/Munnakumar27" target="_blank" rel="noreferrer"><i class="bi bi-facebook"></i></a>
                                <a className="social" href="https://www.linkedin.com/in/munnakumar27/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                                <a className="social" href="https://www.instagram.com/munnakumar_27/" target="_blank" rel="noreferrer"><i class="bi bi-instagram"></i></a>
                                <a className="social" href="https://github.com/MunnaKumar27"><i class="bi bi-github" target="_blank"></i></a></h6>
        </>
    )
}

export default Showprofile;
