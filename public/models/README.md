# 3D 模型目录

把 3D 模型文件放到这个目录里。

默认加载 `model.glb`，所以最简单的方式是：把你的模型文件重命名为 `model.glb` 放到这里，无需改任何代码。

如果你想用别的文件名（比如 `robot.glb`），改 `lib/site.js` 里的 `model3d.src` 即可：

```js
model3d: {
  src: '/models/robot.glb',
  ...
}
```

支持的格式：`.glb`（推荐）、`.gltf`。
