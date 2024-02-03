const useObserver = (element: HTMLElement) => {
  const observer = new IntersectionObserver((entry) => {
    entry.forEach(entry => {
      if (!entry.isIntersecting) return
      element.style.animation = "slideIn ease-in 0.2s forwards"
      observer.unobserve(element)
    })
  }, {threshold: 0.15})
  observer.observe(element)
}

export default useObserver