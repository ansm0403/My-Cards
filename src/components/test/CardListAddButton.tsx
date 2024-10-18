
import {store} from '@remote/firebase'
import {card_list} from "@/mock/data"
import {collection, doc, writeBatch} from 'firebase/firestore'
import { COLLECTIONS } from "@constants";
import Button from '../shared/Button';

export default function CardListAddButton() {

    const handleButtonClick = async () => {
        const batch = writeBatch(store)

        card_list.forEach((card)=>{
            const docRef = doc(collection(store, COLLECTIONS.CARD))
            batch.set(docRef, card)
        })
        await batch.commit()

        alert("카드 리스트 추가완료")
    }
  return (
    <Button onClick={handleButtonClick}>카드 리스트 추가하기</Button>
  )
}
