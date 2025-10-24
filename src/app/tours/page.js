"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

function Tours() {
    const router = useRouter()
    useEffect(() => {
        router.replace("/")
    }, [router])
  return (
    <div>Tours</div>
  )
}
export default Tours