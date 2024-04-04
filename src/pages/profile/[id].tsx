import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ReactElement } from 'react'

import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'

import { NextPageWithLayout } from '../_app'
import { Container } from '../home/styles'
import { ProfileDetails } from './ProfileDetails'
import { ProfileRating, ProfileRatings } from './ProfileRatings'

export type ProfileData = {
  ratings: ProfileRating[]
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter()
  const userId = router.query.id as string

  const { data: session } = useSession()

  const isOwnProfile = session?.user?.id === userId

  const { data: profile } = useQuery<ProfileData>({
    queryKey: ['profile', userId],
    queryFn: async () => {
      const { data } = await api.get(`/profile/${userId}`)
      return data?.profile ?? {}
    },
    enabled: !!userId,
  })

  return (
    <Container>
      {profile ? (
        <>
          <ProfileRatings
            isOwnProfile={isOwnProfile}
            ratings={profile?.ratings}
          />
          <ProfileDetails profile={profile} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </Container>
  )
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Perfil">{page}</DefaultLayout>
}

export default ProfilePage
