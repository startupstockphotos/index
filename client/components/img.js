import { component } from 'picoapp'
import vsbl from 'vsbl'

export const img = component((node, ctx) => {
  const [image] = node.querySelectorAll('img')

  let listener

  if (image.src && image.complete) {
    console.log('loaded')
    image.style.opacity = 1
  } else {
    listener = vsbl(node)(() => {
      const i = document.createElement('img')

      i.onload = () => {
        image.src = i.src
        image.style.opacity = 1
      }

      i.src = image.dataset.src
    })

    listener.update()
  }

  return () => {
    listener && listener.destroy()
  }
})
