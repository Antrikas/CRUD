import { getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"

export async function getServerSideProps(context) {
    const id = context.query.id
    const docSnap = await getDoc(doc(db, "todos",id))
    const data = docSnap.data()

    return {
        props: {
            todo: {
                title: data.title, 
                datail: data.detail
            }
        }
    }
}




export default function Todo (){
    return(
        <div className="container">
            <h1> Todo title: {todo.title} </h1>
            <h3>Detail: {todo.detail} </h3>
        </div>
    )
} 