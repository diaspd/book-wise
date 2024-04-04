import {
  BookmarkSimple,
  BookOpen,
  Books,
  UserList,
} from '@phosphor-icons/react'

import { Avatar } from '@/components/Avatar'
import { ProfileData } from '@/pages/profile/[id]'

import { ProfileDetailsItem } from './ProfileDetailsItem'
import { Container, ProfileDetailsWrapper, UserInfo } from './styles'

type ProfileDetailsProps = {
  profile: ProfileData
}

export function ProfileDetails({ profile }: ProfileDetailsProps) {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear()

  return (
    <Container>
      <UserInfo>
        <Avatar
          size="lg"
          alt={profile.user.name}
          src={profile.user.avatar_url!}
        />
        <span>{profile.user.name}</span>
        <span>membro desde {memberSinceYear}</span>
      </UserInfo>

      <ProfileDetailsWrapper>
        <ProfileDetailsItem
          icon={<BookOpen />}
          info={profile.readPages}
          label="Páginas lidas"
        />
        <ProfileDetailsItem
          icon={<Books />}
          info={profile.ratedBooks}
          label="Livros avaliados"
        />
        <ProfileDetailsItem
          icon={<UserList />}
          info={profile.readAuthors}
          label="Autores lidos"
        />
        {profile?.mostReadCategory && (
          <ProfileDetailsItem
            icon={<BookmarkSimple />}
            info={profile.mostReadCategory}
            label="Categoria mais lida"
          />
        )}
      </ProfileDetailsWrapper>
    </Container>
  )
}
