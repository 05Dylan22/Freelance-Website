const useObserver = (elements: Array<HTMLElement>) => {
  const observer = new IntersectionObserver((entry) => {
    entry.forEach(entry => {
      if (!entry.isIntersecting) return
      const observedEl = entry.target as HTMLElement
      observedEl.style.animation = "ease-in slideIn 0.25s forwards"
      observer.unobserve(entry.target)
    })
  }, {threshold: 0.25})

  elements.forEach(element => {
    observer.observe(element)
  })
}

export default useObserver