import { siteConfig } from '../lib/site'
import { SocialIcon } from './icons'

export default function Profile() {
  const { name, bio, intro, avatar, social } = siteConfig
  const initial = (name && name.trim().charAt(0)) || '?'

  return (
    <div className="profile">
      {avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="profile-avatar" src={avatar} alt="" />
      ) : (
        <div className="profile-avatar profile-avatar-fallback" aria-hidden="true">{initial.toUpperCase()}</div>
      )}

      <h1 className="profile-name" id="profile-name">{name}</h1>
      {bio && <p className="profile-bio">{bio}</p>}
      {intro && <p className="hero-intro">{intro}</p>}

      {social?.length > 0 && (
        <div className="profile-social">
          {social.map((s) => (
            <a key={s.label} href={s.href}>
              <SocialIcon type={s.type} />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
