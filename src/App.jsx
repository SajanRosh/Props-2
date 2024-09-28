import Users from './components/Users'
const users = [
    {
      name: "Arjun Sharma",
      profession: "Software Engineer",
      image: "https://plus.unsplash.com/premium_photo-1675129779582-d84b954f2397?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
      name: "Priya Patel",
      profession: "Graphic Designer",
      image: "https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=gLYLLRv5GX8mz5haKp_yhqa_kAMopZ_0a9nEMDD--xo="
    },
    {
      name: "Rohit Kumar",
      profession: "Data Scientist",
      image: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfDB8MHx8fDA%3D"
    },
    {
      name: "Ananya Singh",
      profession: "Project Manager",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBnaXJsfGVufDB8MHwwfHx8MA%3D%3D"
    },
    {
      name: "Vikram Gupta",
      profession: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1592827095305-68f21edefb82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfDB8MHx8fDA%3Dg"
    },
    {
      name: "Sneha Iyer",
      profession: "Content Writer",
      image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Amit Verma",
      profession: "Marketing Specialist",
      image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MHwwfHx8MA%3D%3D"
    }
  ];
  

function App(){
    return (
        <>
           {
            users.map(user => {return <Users name={user.name} img={user.image} profession={user.profession}></Users>})
           }
           {/* <Users></Users> */}
        </>
    )
}

export default App;