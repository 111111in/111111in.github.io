'use client'

import { Fragment, useRef, useState } from 'react'
import { examples } from './examples'
import styles from './lab.module.css'

export default function EscapeLab() {
  const [active, setActive] = useState(examples[0])
  const [copyMessage, setCopyMessage] = useState('')
  const copyRequest = useRef(0)

  function selectExample(example) {
    copyRequest.current++
    setCopyMessage('')
    setActive(example)
  }

  async function copySource() {
    const request = ++copyRequest.current
    try {
      await navigator.clipboard.writeText(active.source)
      if (request === copyRequest.current) setCopyMessage('已复制')
    } catch {
      if (request === copyRequest.current) setCopyMessage('请选中代码复制')
    }
  }

  return (
    <section className={styles.lab} aria-label="逃逸分析交互演示">
      <div className={styles.controls} role="group" aria-label="选择代码场景">
        {examples.map((example) => (
          <button
            type="button"
            key={example.id}
            aria-pressed={active === example}
            onClick={() => selectExample(example)}
          >
            {example.label}
          </button>
        ))}
      </div>

      <div className={styles.board}>
        <div className={styles.editor}>
          <div className={styles.editorBar}>
            <span>example.go</span>
            <span className={styles.copyMessage} role="status">{copyMessage}</span>
            <button type="button" onClick={copySource}>复制代码</button>
          </div>
          <pre tabIndex={0} aria-label="Go 示例代码">
            <code>
              {active.source.split('\n').map((line, index) => (
                <Fragment key={index}>
                  {index > 0 && '\n'}
                  <span className={line === active.highlight ? styles.highlight : undefined}>{line}</span>
                </Fragment>
              ))}
            </code>
          </pre>
        </div>

        <div className={styles.result} aria-live="polite">
          <h2>变量 <code>n</code> 的分配示意</h2>
          <div className={styles.memory} aria-hidden="true">
            <div className={styles.memorySlot} data-active={!active.escapes}>
              <span>函数栈帧</span>
              {!active.escapes && <code>n</code>}
            </div>
            <span className={styles.flow} data-escapes={active.escapes}>⟶</span>
            <div className={styles.memorySlot} data-active={active.escapes}>
              <span>堆</span>
              {active.escapes && <code>n</code>}
            </div>
          </div>
          <p className={styles.resultSummary}>{active.destination} <span>·</span> {active.escapes ? '分配到堆' : '留在栈上'}</p>
          <div className={styles.diagnostic}>
            <h3>编译器诊断</h3>
            <code>{active.output}</code>
          </div>
          <p className={styles.explanation}>{active.explanation}</p>
        </div>
      </div>
    </section>
  )
}
