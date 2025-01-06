import AdBanners from "@/components/home/AdBanners";
import CardList from "@/components/home/CardList";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import Top from "@/components/shared/Top";
import { getAdBanners } from "@/remote/adBanner";
import { getCards } from "@/remote/card";
import { Suspense, useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    getCards().then((res)=>{
    })
    getAdBanners().then((res)=>{
    })
  },[])

  return (
    <div>
        <Top title = "혜택 좋은 카드" subTitle = "혜택 좋은 카드를 모아놨음" />
        <AdBanners />
        <Suspense fallback = {<LoadingSpinner />}>
          <CardList />
        </Suspense>
    </div>
  )
}
