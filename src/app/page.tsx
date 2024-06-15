'use client'
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import MainProfile from "@/components/MainProfile";

export default function Home() {
  const [logged, setLogged] = useState(false)
  const router = useRouter();

  const handleRedirect = () => {
    const logged = JSON.parse(localStorage?.getItem('userLogged')!)
    const avatar = JSON.parse(localStorage?.getItem('avatar')!)
    if (!logged) {
      if (avatar) {
        return router.push(`/login?avatar=${avatar}`)
      }      
      return router.push('/login')
    }
    setLogged(true)

    console.log(window.location.pathname);

    if (window.location.href.includes('avatar') === false) {
      return router.push(`?avatar=${avatar}`);
    }
    return router.push(window.location.href)
  }

  useEffect(() => {
    handleRedirect()
    
  }, []);

  return (
     logged && (
      <main>
        <Header />
        <MainProfile />
      </main>
    )
  );
}
