import Link from 'next/link'
import { siteConfig } from '../lib/site'
import styles from './Showcase.module.css'

export default function Showcase() {
  return (
    <>
      <section className={styles.section} aria-labelledby="home-lab">
        <h2 className="section-title" id="home-lab">实验室</h2>
        <Link className={styles.experiment} href="/lab">
          <div className={styles.experimentCopy}>
            <h3>Go 逃逸分析实验</h3>
            <p>同样是取地址，为什么一个变量留在栈上，另一个却去了堆上？切换三种代码场景，看看编译器怎么判断。</p>
            <span className="text-link">打开实验 <span aria-hidden="true">→</span></span>
          </div>
          <div className={styles.terminal} aria-hidden="true">
            <div><span className={styles.prompt}>$</span> go build -gcflags=-m example.go</div>
            <div><span>local</span><strong>p does not escape</strong></div>
            <div><span>result</span><strong>moved to heap: n</strong></div>
          </div>
        </Link>
      </section>

      <section className={styles.section} aria-labelledby="home-projects">
        <h2 className="section-title" id="home-projects">项目与作品</h2>
        <article className={styles.project}>
          <div className={styles.projectCopy}>
            <h3>个人技术博客</h3>
            <p>用 Markdown 写作，通过 GitHub Actions 构建和发布静态页面。</p>
            <a href={siteConfig.repository} className="text-link">查看源码 <span aria-hidden="true">↗</span></a>
          </div>
          <div className={styles.pipeline} role="img" aria-label="Markdown 经 Next.js 构建后部署到 GitHub Pages">
            <span>Markdown</span><span aria-hidden="true">→</span>
            <span>Next.js</span><span aria-hidden="true">→</span>
            <span>GitHub Pages</span>
          </div>
        </article>
      </section>
    </>
  )
}
