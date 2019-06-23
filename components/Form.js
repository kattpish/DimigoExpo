import Popup from 'reactjs-popup'

const style = {
  padding: '0',
  border: 'none',
  borderRadius: '3rem'
}

const Form = () => {
  const submitForm = e => {
    e.preventDefault()
    
    const formData = new FormData(e.target)

    fetch('api/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(() => window.location.reload())
  }

  return (
      <div>
          <Popup trigger={<div className="buttonWrapper">
                            <button className="contribute">Contribute!</button>
                          </div>} 
                  modal
                  contentStyle={style}>
        {close => (
          <div className="modal-form">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header"> Share your creativity. </div>
            <form ref="test" onSubmit={submitForm}>
              <div className="inputWrapper">
                  <label for="num">학번: </label>
                  <input className="input" type="number" id="number" name="number"/>
              </div>
              <div className="inputWrapper">
                  <label for="name">이름: </label>
                  <input className="input" type="text" id="name" name="name"/>
              </div>
              <div className="inputWrapper">
                  <label for="img">사진 선택 </label>
                  <input type="file" id="image" name="image"/>
              </div>
              <div className="inputWrapper">
                  <label for="title">제목: </label>
                  <input className="input" type="text" id="title" name="title"/>
              </div>
              <div className="inputWrapper">
                  <label for="description">설명: </label>
                  <textarea className="input" id="description" name="description"
                            rows="15" cols="33">
                  </textarea>
              </div>
              <div className="submitButtonWrapper">
                <button type="submit">보내자</button>
              </div>
            </form>
          </div>
        )}
      </Popup>
      <style jsx>
          {`
          .modal-form {
              font-size: 20px;
              background-color: #252423;
              color: #fff;
              padding: 3rem;
              border-radius: 2rem;
            }

            .modal-form > .header {
              width: 100%;
              font-size: 35px;
              text-align: center;
              padding: 5px;
              font-family: 'Righteous', cursive;
            }

            .modal-form > .close {
              cursor: pointer;
              position: absolute;
              display: block;
              padding: 2px 5px;
              line-height: 20px;
              right: -10px;
              top: -10px;
              font-size: 24px;
              background: #ffffff;
            }
            
            .contribute {
              background-color: red;
              color: #fff;
              border: none;
              padding: 1rem;
              font-size: 25px;
              border-radius: 3rem;
              font-family: 'Righteous', cursive; 
            }

            .buttonWrapper {
              display: flex;
              justify-content: center;
            }

            .input {
              border-radius: 1rem;
              padding: 0.5rem;
            }

            .submitButtonWrapper {
              display: flex;
              justify-content: right;
            }

            .inputWrapper {
              padding: 0.5rem;
            }
          `}
      </style>
      </div>
    )
}

export default Form