import { COLLECTIONS } from '@/constants'
import { AdBanner } from '@/model/card'
import {collection, getDocs} from 'firebase/firestore'
import { store } from './firebase'

// advertisement banner
export async function getAdBanners(){
    const adBannerSnapshot = await getDocs(collection(store, COLLECTIONS.ADBANNER))
    
    return adBannerSnapshot.docs.map((doc)=>({
        id : doc.id,
        ...(doc.data() as AdBanner),
    }))
}