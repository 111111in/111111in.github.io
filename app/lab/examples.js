export const examples = [
  {
    id: 'local',
    label: '函数内使用',
    source: `package example

//go:noinline
func read(p *int) int {
	return *p
}

func local() int {
	n := 42
	return read(&n)
}`,
    highlight: '\treturn read(&n)',
    output: 'example.go:4:11: p does not escape',
    escapes: false,
    destination: '传给 read',
    explanation: 'read 只读取指针指向的值。编译器确认参数 p 没有逃逸，并在这次编译中把 n 放在 local 的栈帧里。'
  },
  {
    id: 'return',
    label: '返回指针',
    source: `package example

//go:noinline
func result() *int {
	n := 42
	return &n
}`,
    highlight: '\treturn &n',
    output: 'example.go:5:2: moved to heap: n',
    escapes: true,
    destination: '返回给调用方',
    explanation: '调用方可以在 result 返回后继续解引用这个指针。编译器把 n 移到堆上，使它能在函数返回后继续存活。'
  },
  {
    id: 'global',
    label: '写入全局变量',
    source: `package example

var saved *int

func store() {
	n := 42
	saved = &n
}`,
    highlight: '\tsaved = &n',
    output: 'example.go:6:2: moved to heap: n',
    escapes: true,
    destination: '保存到 saved',
    explanation: '包级变量 saved 可以在 store 返回后继续持有 &n。即使函数没有返回值，n 也会逃逸到堆上。'
  }
]
