import { useEffect, useRef } from "react"
import "../styles/Ways2FindWork.css"
import useObserver from "../Hooks/useObserver"

const Ways2FindWork = () => {
  const createAndShareEl = useRef<HTMLDivElement | null>(null)
  const browseEl = useRef<HTMLDivElement | null>(null)
  const beFoundEl = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!createAndShareEl.current || !browseEl.current || !beFoundEl.current) return
    useObserver([createAndShareEl.current, browseEl.current, beFoundEl.current])
  })

  return (
    <section className="ways-to-find-container">
      <div ref={createAndShareEl} className="way-to-find-work">
        <p>Create And Share</p>
        <p>Create your website when you sign up and use the link to share with your social networks and even run ads to it.</p>
      </div>
      <div ref={browseEl} className="way-to-find-work">
        <p>Browse Listings</p>
        <p>Scroll job posting on our website and apply to all the ones you are a good fit for.</p>
      </div>
      <div ref={beFoundEl} className="way-to-find-work">
        <p>Found In Search</p>
        <p>Be active on your profile everyday to help boost your chances of being found in search results and invited onto the job.</p>
      </div>
    </section>
  )
}

export default Ways2FindWork