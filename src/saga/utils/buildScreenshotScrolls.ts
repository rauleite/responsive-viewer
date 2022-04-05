import { clamp } from '../../utils/clamp'

type Box = {
  width: number
  height: number
}
export const buildScreenshotScrolls = (box: Box, parent: Box) => {
  const result = []

  for (let y = 0; y < box.height; y += parent.height) {
    let captureHeight = box.height

    if (box.height > parent.height) {
      captureHeight = box.height - y
    }

    captureHeight = clamp(captureHeight, 0, parent.height)

    for (let x = 0; x < box.width; x += parent.width) {
      let captureWidth = box.width
      if (box.width > parent.width) {
        captureWidth = box.width - x
      }

      captureWidth = clamp(captureWidth, 0, parent.width)

      result.push({
        x,
        y,
        width: captureWidth,
        height: captureHeight,
      })
    }
  }

  return result
}
