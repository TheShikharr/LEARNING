import Section1 from './components/Section1/Section1'

function App() {

  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmslMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem totam architecto reprehenderit. Laboriosam.",
      tag: "Satisfied",
    },  
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29yayUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, pariatur!",
      tag: "Underserved",
    }, 
    {
      img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29yayUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, dignissimos voluptatibus. Eum perspiciatis repudiandae deleniti aliquid!",
      tag: "Underbanked",
    }
  ]


  return (
    <>
      <Section1 users={users} />
    </>
  )
}

export default App
 