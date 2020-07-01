export default function parseJsonClasses (classes) {
  const result = {}
  Object.keys(classes).forEach((key) => {
    try {
      const parsed = JSON.parse(classes[key])
      result[key] = parsed
    } catch (e) {
      result[key] = classes[key]
    }
  })

  return result
}
