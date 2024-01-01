import React from 'react'
import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query"

// list of simpson and friends characters with a favorite quote
const characters = [
    {
        name:"Homer Simpson",
        quote:"D'oh!"

    },
    {
        name:"Marge Simpson",
        quote:"Hmmmmmmmmmm"
    },
    {
        name:"Bart Simpson",
        quote:"Eat my shorts"
    },{
        name:"Lisa Simpson",
        quote:"I'm going to become a vegetarian"
    },{
        name:"Maggie Simpson",
        quote:"..."
    }]

 // function to randomly select a character from the list
function getRandomCharacter(){
    // wait 1000 mile seconds before returning a random character

   
        return characters[Math.floor(Math.random() * characters.length)]

    


}   

function wait(duration:number){
    return new Promise(resolve=> setTimeout(resolve,duration))
    }

export default function Characters() {

    const getCharQuery = useQuery({
        queryKey:["character"],
        queryFn:()=> wait(5000).then(()=>getRandomCharacter())
    });

    if(getCharQuery.isLoading) return <h1>Loading</h1>

    if(getCharQuery.isError) return <h1>My error</h1>



  return (
    <div>Page 1
        <h1>{getCharQuery?.data?.name}</h1>
        <h2>{getCharQuery?.data?.quote}</h2>
    </div>
  )
}
