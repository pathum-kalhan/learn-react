import React from 'react'
import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query"

// list of  friends characters with a favorite quote
const characters = [
    {
        name:"Joey",
        quote:"How you doin?"

    },{
        name:"Chandler",
        quote:"Could I be wearing any more clothes?"
    },
    {
        name:"Ross",
        quote:"We were on a break!"
    },
    {
        name:"Rachel",
        quote:"I got off the plane"
    },
    {
        name:"Monica",
        quote:"I know!"
    },
    {
        name:"Phoebe",
        quote:"Smelly Cat"
    }
    ]


function wait(duration:number){
    return new Promise(resolve=> setTimeout(resolve,duration))
    }

 // function to randomly select a character from the list
function getRandomCharacter(){
    return characters[Math.floor(Math.random() * characters.length)]
}   

export default function CharactersTwo() {

    const getCharQuery = useQuery({
        queryKey:["character"],
        queryFn:()=> wait(5000).then(()=>getRandomCharacter())
    });

    if(getCharQuery.isLoading) return <h1>Loading</h1>

    if(getCharQuery.isError) return <h1>My error</h1>



  return (
    <div>Page 2
        <h1>{getCharQuery?.data?.name}</h1>
        <h2>{getCharQuery?.data?.quote}</h2>
    </div>
  )
}
