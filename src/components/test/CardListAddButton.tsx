import { Button } from "@shared/Button";
import {store} from '@remote/firebase'
import {card_list} from "@/mock/data"
import {collection, doc, writeBatch} from 'firebase/firestore'
import { COLLECTIONS } from "@constants";

export default function CardListAddButton() {

    const handleButtonClick = async () => {
        console.log("아 시발 왜")
        const batch = writeBatch(store)

        console.log("아 시발 왜2")

        card_list.forEach((card)=>{
            const docRef = doc(collection(store, COLLECTIONS.CARD))
            batch.set(docRef, card)
        })
        console.log("아 시발 왜3")
        await batch.commit()
        console.log("아 시발 왜4")
        alert("카드 리스트 추가완료")
    }
  return (
    <Button onClick={handleButtonClick}>카드 리스트 추가하기</Button>
  )
}
