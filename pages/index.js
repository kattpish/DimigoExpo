import React, { useState, useEffect } from 'react'

import WithLayout from '../components/MyLayout'
import Anime from '../components/Anime'
import Form from '../components/Form'

const Modal = ({ handleClose, show, post}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="closeButtonWrapper">
          <button className="modal-close" onClick={handleClose}>X</button>
        </div>
        <p className="modal-title">{post.title}</p>
        <div className="modal-info">
          <p className="modalContent">{post.number}</p>
          <p className="modalContent">{post.name}</p>
          <p className="modalContent">{post.published_date}</p>
        </div>
        <img className="modalContent"src={post.imgURL}></img>
        <p className="modalContent modalDescription">{post.description}</p>
      </section>
    </div>
  )
}

const Index = () => {
  const [state, setState] = useState({ posts: [] })
  const [show, setShow] = useState(show ? true : false)
  const [item, setItem] = useState({})

  useEffect(() => {
    getPostAsync()
  }, [])

  const showModal = (post) => {
    setShow(true)
    setItem(post)
  }

  const hideModal = () => {
    setShow(false)
  }

  async function getPostAsync() {
    let response = await fetch('http://149.28.19.101:3000/api/posts')
    let data = await response.json()
    setState({ posts: data })
  }

  return (
    <WithLayout>
    <div className="jumbotron">
      <Anime />
      <div className="jumboContent">
        <p className="title">DIMIGO EXPO</p>
      </div>
      <Form />
    </div>
    <Modal show={show} handleClose={hideModal} post={item}></Modal>
    <div className="postWrapper">
      {state.posts.map(post =>
        <div className="postItem" key={post.id} onClick={() => showModal(post)}>
          <img className="contentImage" src={post.imgURL}></img>
          <div className="contentWrapper">
            <p className="contentTitle">{post.title}</p>
            <p className="artist">{post.name}</p>
            <p className="description">{post.description}</p>
          </div>
        </div>
      )}
    </div>
    <style jsx global>{`
        .animation-wrapper {
          width: 100%;
          padding-bottom: 40%;
        }
        
        /** Layered Animation **/
        
        .layered-animations {
          z-index: -1;
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1200px;
          height: 550px;
          margin: -275px 0 0 -550px;
        }
        
        .layered-animations .shape {
          position: absolute;
          top: 50%;
          overflow: visible;
          width: 280px;
          height: 280px;
          margin-top: -140px;
          stroke: transparent;
          stroke-width: 1px;
          fill: url(#shapesGradient);
        }
        
        @media (min-width: 740px) {
          .layered-animations .shape {
            stroke-width: .5px;
          }
        }
        
        .layered-animations .small.shape {
          width: 64px;
          height: 64px;
          margin-top: -32px;
          stroke: red;
          fill: red;
        }
        
        .layered-animations .x-small.shape {
          width: 32px;
          height: 32px;
          margin-top: -16px;
          stroke: white;
          fill: white;
        }

        .title {
          color: white;
          font-size: 11rem;
          font-weight: 700; 
          position: relative;
          top: -5rem;
          font-family: 'Righteous', cursive;
        }

        .galleryWrapper {
          position: relative;
          top: 15rem;
          display: grid;
          grid-template-columns: auto auto auto auto auto;
          grid-gap: 1rem;
          justify-content: center;
        }
        
        .jumboContent {
          margin-top: 25rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .postWrapper {
          display: grid;
          grid-template-columns: auto auto auto auto;
          padding: 150px;
          justify-items: center;
        }

        .postItem {
          border-radius: 1rem;
          box-shadow: 6px 8px 16px -15px rgba(255,255,255,0.5);
          margin: 1.5rem;
          width: 360px;
        }

        .postItem:hover {
          box-shadow: 15px 17px 25px -15px rgba(255,255,255,0.5);
          transition: 0.3s;
        } 

        .contentImage {
          width: 360px;
          height: 220px;
          border-radius: 1rem 1rem 0 0;
        }

        .contentWrapper {
          margin: 0.5rem;
        }

        .contentTitle {
          font-size: 1rem;
          color: #fff;
          font-weight: 500;
          margin: 0.5rem;
        }

        .artist {
          font-size: 0.8rem;  
          color: #ff9800;
          font-weight: 500;
          margin: 0.5rem;
        }

        .description {
          color: #fff;
          font-size: 0.8rem;
          font-weight: 400;
          width: 16rem;
          margin: 0.5rem 0.5rem 1rem 0.5rem;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width:100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
        }
        
        .modal-main {
          position: fixed;
          background: #252423;
          width: 80%;
          height: auto;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
          padding: 1rem;
          color: #fff;
          border-radius: 1rem;
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        
        .display-block {
          display: block;
        }
        
        .display-none {
          display: none;
        }

        .modal-title {
          font-size: 3rem;
          font-weight: 800;
          margin: 15px 0;
        }

        .modal-info {
          display: flex;
        }

        .modal-info p {
          padding-right: 1rem;
        }

        .modal-close {
          background-color: #fff;
          color: #000;
          padding: 0.5rem;
          border-radius; 1rem;
          border: 0px;
          float: right;
        }

        .closeButtonWrapper {
          width: 100%;
        }

        .modalContent {
          padding: 0.5rem 0;
        }

        .modalDescription {
          width: 70%;
        }

        img.modalContent {
          width: 600px;
        }
    `}</style>
  </WithLayout>
  )
}
export default Index