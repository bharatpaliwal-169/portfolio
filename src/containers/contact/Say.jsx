import React,{useState,useEffect} from 'react'
import {Form,Button,Alert} from 'react-bootstrap'
export default function Say() {
  const [connect,setConnect] = useState({
    email : "",
    message : ""
  })
  const [viewAlert,setViewAlert] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(()=>{
      setViewAlert(false);
    },2500)
    return () => clearTimeout(timeout)

  }, [viewAlert])

  const handleChange = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    if(name === 'email'){
      setConnect(prev => ({
        ...prev,
        email:value
      }));
    }
    else if(name === 'message'){
      setConnect(prev => ({
        ...prev,
        message:value
      }))
    }
  }
  const sendMessage = async () => {
    await fetch("https://formsubmit.co/ajax/paliwalbdevop@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: connect.email,
                    message: connect.message
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
            showAlert()
            setConnect({
              email: '',
              message: '',
            })
  }
  const showAlert = () => {
    setViewAlert(true);    
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(connect);
    if(connect.email){
      sendMessage();
    }
    else{
      window.alert("Please fill the information as required")
    }
  };
  
  return (
    <div className='row'>
      <section className='col-12 text-center mt-5 mb-5 heading'>
        Want to say something?
      </section>
      <section className='col-12 col-md-10 offset-md-1 text-center card bg-transparent ctmCard'>
          {viewAlert && <Alert variant='success' className='alert mt-4'>Msg sent</Alert>}
          <Form className='mt-5'>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email"
                              placeholder="Enter email" 
                              autoFocus
                              name='email'
                              value={connect.email}
                              onChange={handleChange}
                              required />
              </Form.Group>
              <br />
              <Form.Group controlId="formBasicPassword">
                <Form.Control as="textarea" 
                              placeholder="Type your message here...."
                              autoFocus
                              name='message'
                              value={connect.message}
                              onChange={handleChange}
                              required />
              </Form.Group>
              <br />
              <Button variant='outline-success'
                      size="lg" type="submit"
                      onClick={handleSubmit}
                      className='mb-4'>
                Send 
              </Button>
            </Form>
      </section>
    </div>
  )
}
