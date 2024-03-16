"use client"

import { LensLogin } from "@/components/lib/Lens"
import {
  ExploreProfilesOrderByType,
  LimitType,
  useExploreProfiles,
} from "@lens-protocol/react-web"

export default function Home() {
  const { data } = useExploreProfiles({
    orderBy: ExploreProfilesOrderByType.MostFollowers,
    limit: LimitType.TwentyFive,
  })
  console.log("data: ", data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-16">
      <div className="flex place-items-center flex-col max-w-lg my-16">
        <h1 className="mb-3 text-3xl font-semibold">Welcome to Social</h1>
        <LensLogin />
      </div>
    </main>
  )
}
