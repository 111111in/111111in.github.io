import { siteConfig } from '../lib/site'
import { SocialIcon } from './icons'

export default function Profile() {
  const { name, bio, avatar, social } = siteConfig
  const initial = (name && name.trim().charAt(0)) || '?'

  return (
    <section className="profile">
      {avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="profile-avatar" src={avatar} alt={name} />
      ) : (
        <div className="profile-avatar profile-avatar-fallback">{initial}</div>
      )}

      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
        {bio && <p className="profile-bio">{bio}</p>}

        {social && social.length > 0 && (
          <div className="profile-social">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href && s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <SocialIcon type={s.type} />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
