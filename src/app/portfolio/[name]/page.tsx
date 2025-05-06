import FishSnack from '@/components/Portfolio/Details/FishSnack'
import { notFound } from 'next/navigation'
import React from 'react'

export default function Page({ params }: any) {
  const name = params.name

  switch (name) {
    case "fishsnack":
      return <FishSnack />
    default:
      return notFound()
  }
}