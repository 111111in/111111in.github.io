import Profile from '../../components/Profile'

export const metadata = {
  title: '关于 · llllllin'
}

export default function AboutPage() {
  return (
    <div className="container">
      <div className="about-head">
        <Profile />
      </div>
      <div className="about-text">
        <p>这里是「关于」页面，可以在这里更详细地介绍自己。</p>
        <p>
          直接编辑 <code>app/about/page.js</code> 修改这段文字；头像、简介、社交链接在{' '}
          <code>lib/site.js</code> 里改。
        </p>
      </div>
    </div>
  )
}
