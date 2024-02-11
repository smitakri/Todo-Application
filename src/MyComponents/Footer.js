import React from 'react'

const Footer = () => {

   let footerStyle = {
    position: "absolute",
    top: "100vh",
    width:"100%",
    backgroundColor: "red"
    }

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
        <p className='text-center'>
        Copyright &copy; MyTodoList.com
        </p>
    </footer>
  )
}

export default Footer