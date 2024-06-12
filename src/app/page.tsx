'use client'
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [logged, setLogged] = useState(false)
  const router = useRouter();

  const handleRedirect = () => {
    const logged = localStorage.getItem('userLogged')
    if (!logged) {
      console.log('Não logado!');
      return router.push('/login')
    }
    return setLogged(true)
  }

  useEffect(() => {
    handleRedirect()
  }, []);

  return (
     logged && (
      <main>
        <Header />
      </main>
    )
  );
}
