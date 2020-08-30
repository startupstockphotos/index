import { component } from "picoapp";
import vsbl from 'vsbl'

export const img = component((node, ctx) => {
  const [image] = node.querySelectorAll('img')

  let listener

  if (image.complete) {
    image.style.opacity = 1
  } else {
    listener = vsbl(node)(() => {
      const i = document.createElement('img')

      i.onload = () => {
        image.style.opacity = 1
      }

      i.src = image.src
    })

    listener.update()
  }

  return () => {
    listener && listener.destroy()
  }
});
