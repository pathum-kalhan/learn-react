
import React from "react";
import Characters from "./components/charactors";
import CharactersTwo from "./components/charactorsTwo";
import "./App.css";
import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query"

const POSTS = [
  {
    id:1,
    title:"Post 1"
  },
  {
    id:2,
    title:"Post 2"
  }
]

function App() {

  const queryClient = useQueryClient()
   
console.log(POSTS)
  const postQuery = useQuery({
    queryKey:["posts"],
    queryFn:()=> wait(1000).then(()=>[...POSTS])
    

  })

  const newPost = useMutation({
    mutationFn:(title:string)=> {
      return wait(1000).then(()=>POSTS.push({
        id:Math.random(),
        title
      }))
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["posts"])
    }
  })

  const [page,setPage] = React.useState(1);
 if(postQuery.isLoading) return <h1>Loading</h1>

 if(postQuery.isError) return <h1>My error</h1>


 const setPage1 = ()=>{
setPage(1)

  }

  const setPage2 = ()=>{
    setPage(2)
    
      }


  return (
    <>
    
      {/* {postQuery && postQuery.data && postQuery.data.map(element=>(
        <div>
          {element.id}
        </div>
      ))}

      <button onClick={()=> newPost.mutate("ew post")} disabled={newPost.isPending}>
        add new
      </button> */}

      <button onClick={()=>setPage1()}>
        show page 1
      </button>
      <button onClick={()=>setPage2()}>
      show page 2
      </button>
      {
        page === 1 ? <Characters/> : <CharactersTwo/>
      }
    </>
  );
}

function wait(duration:number){
return new Promise(resolve=> setTimeout(resolve,duration))
}

export default App;
