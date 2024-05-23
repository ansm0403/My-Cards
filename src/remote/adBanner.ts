import { COLLECTIONS } from '@/constants'
import { AdBanner, Card } from '@/model/card'
import {collection, getDocs} from 'firebase/firestore'
import { store } from './firebase'

export async function getAdBanners(){
    const adBannerSnapshot = await getDocs(collection(store, COLLECTIONS.ADBANNER))
    
    return adBannerSnapshot.docs.map((doc)=>({
        id : doc.id,
        ...(doc.data() as AdBanner),
    }))
}