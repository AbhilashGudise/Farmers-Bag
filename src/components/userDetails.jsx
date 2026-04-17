 import React ,{ useEffect , useState} from "react" 
 import axios from "axios"

const UserDetails = () => {
  
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 


//   const handleSubmit = () => {
//     const userData ={name, email, userId: 1};

//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(userData),
//         userId : 1,

//     })
//     .then(res => res.json())
//     .then(data => console.log("Response from server:", data))
//     .catch(error => console.error('Error submitting data:', error));
//   }
    

//   useEffect(() => {
//      fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => setData(data))
//     .catch(error => console.error('Fetch error:', error))
//   },[])

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then(res => setData(res.data))
//       .catch(error => console.error('Fetch error:', error));
//   }, [])
  
  // useEffect(() => {
  //   const loaddata = async() => {
  //     try {
  //       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //       setData(res.data);
  //     } catch (error) {
  //       console.error('Fetch error:', error);
  //     }
  //   };
  //   loaddata();
  // }, [])
  useEffect(() => {
  const loaddata = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    // Instead of .then(res => res.json())
    const data = await res.json(); 
    
    // Instead of .then(data => console.log(...))
    console.log("Response from server:", data);
    setData(data.slice(0, 5));

  } catch (error) {
    // Instead of .catch(...)
    console.error("Error submitting data:", error);
  }
};

// 2. Use the hook to "trigger" the function

    loaddata(); 
  }, []);
  return(
    <>
      {data.map((item) =>{
        return(
            <div key={item.id}>
                <h2>{item.id}</h2>
                <p>{item.title}</p>
                <p>{item.body}</p>
            </div>
        )
      })}

{/* <div>
      <div>
        <label>Name</label>
        <input type="text" placeholder="name" value={name} onChange={(e) =>setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" placeholder="email" value={email} onChange={(e) =>setEmail(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      </div> */}
    </>
    )
}
export default UserDetails