import Link from 'next/link'
import EscapeLab from './EscapeLab'
import styles from './lab.module.css'

export const metadata = {
  title: 'Go 逃逸分析实验',
  description: '对照三段 Go 代码及实际编译器诊断，观察指针的去向如何影响堆分配。'
}

export default function LabPage() {
  return (
    <div className="container">
      <header className={styles.heading}>
        <h1 className="page-title">Go 逃逸分析实验</h1>
        <p>都是取地址，变量会留在栈上，还是移到堆上？切换场景，观察编译器的判断。</p>
      </header>

      <EscapeLab />

      <div className={styles.notes}>
        <p>将代码保存为 <code>example.go</code>，运行 <code>go build -gcflags=-m example.go</code> 即可复现。这里展示 Go 1.27.0（windows/amd64）的诊断节选。内联和其他优化可能改变分配结果。</p>
        <Link className="text-link" href="/posts/go-escape-analysis">阅读 Go 逃逸分析原文 <span aria-hidden="true">→</span></Link>
      </div>
    </div>
  )
}
