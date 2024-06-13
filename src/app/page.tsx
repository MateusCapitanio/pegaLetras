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
    const logged = localStorage?.getItem('userLogged')
    const avatar = localStorage?.getItem('avatar')
    if (!logged) {
      console.log('Não logado!');
      return router.push('/login')
    }
    setLogged(true)
    return router.push(`?avatar=${avatar}`);
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
