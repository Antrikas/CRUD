"use client"
import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Link from "next/link";


export default function TodoList (){

    const [todos, setTodos] = useState ([])

    useEffect(() => {


        const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) =>{
        console.log(snapshot)
        setTodos(snapshot.docs.map(doc => {
            
            return{
                id: doc.id,
                title:doc.data().title,
                detail:doc.data().detail
            }
        }))
    })

    return unsubscribe


    }, [])
    return (
        <>
        <div>
            <h1>Todos</h1>
            <ul className="todoList">
                {todos.map(todo => {
                   return (
                   <Link key={todo.id} href={"/" + todo.id} >
                     <li className="listItem">
                        {todo.title}
                        </li>
                    </Link>
                   )
                })}
               
                <li className="listItem">Todo 2</li>
                <li className="listItem">Todo 3</li>
            </ul>
        </div>
        </>
    )
     
}