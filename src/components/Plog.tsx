import { useEffect, useState, type ReactNode } from "react"
import { plogPosts, type PlogPost } from "../config/site"
import FadeIn from "./FadeIn"

function readLiked(postId: string) {
  try {
    return localStorage.getItem(`plog-like-${postId}`) === "true"
  } catch {
    return false
  }
}

function readLikeCount(postId: string, seed = 0) {
  try {
    const stored = localStorage.getItem(`plog-like-count-${postId}`)
    if (stored !== null) return Math.max(0, Number.parseInt(stored, 10) || 0)
  } catch {
    // ignore storage errors
  }
  return seed
}

function writeLikeState(postId: string, liked: boolean, count: number) {
  try {
    localStorage.setItem(`plog-like-${postId}`, String(liked))
    localStorage.setItem(`plog-like-count-${postId}`, String(count))
  } catch {
    // ignore storage errors
  }
}

function LikeButton({ postId, seed = 0 }: { postId: string; seed?: number }) {
  const [liked, setLiked] = useState(() => readLiked(postId))
  const [count, setCount] = useState(() => readLikeCount(postId, seed))

  return (
    <button
      type="button"
      onClick={() => {
        const nextLiked = !liked
        const nextCount = nextLiked ? count + 1 : Math.max(0, count - 1)
        setLiked(nextLiked)
        setCount(nextCount)
        writeLikeState(postId, nextLiked, nextCount)
      }}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        liked
          ? "border-rose-200 bg-rose-50 text-rose-600"
          : "border-border text-muted hover:border-border-strong hover:bg-gray-50 hover:text-foreground"
      }`}
      aria-pressed={liked}
      aria-label={liked ? `${count} likes, liked` : `${count} likes, like this post`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" />
      </svg>
      <span>{count}</span>
    </button>
  )
}

const mediaFitClass = "h-full w-full object-contain object-center"

function MediaFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-full aspect-[3/4] items-center justify-center overflow-hidden rounded-xl bg-gray-100">
      {children}
    </div>
  )
}

function CarouselDots({
  count,
  activeIndex,
}: {
  count: number
  activeIndex: number
}) {
  if (count <= 1) return null

  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all ${
            i === activeIndex ? "w-4 bg-foreground/70" : "w-1.5 bg-foreground/25"
          }`}
        />
      ))}
    </>
  )
}

function PostMedia({ post }: { post: PlogPost }) {
  const images = post.images ?? []
  const isCarousel = images.length > 1
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!isCarousel) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, 3500)
    return () => window.clearInterval(id)
  }, [images.length, isCarousel])

  return (
    <div className="shrink-0">
      <MediaFrame>
        {post.video && (
          <video
            src={post.video}
            className={mediaFitClass}
            controls
            playsInline
            muted
            loop
            autoPlay
          />
        )}
        {isCarousel &&
          images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 ${mediaFitClass} transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        {post.image && !post.video && !isCarousel && (
          <img src={post.image} alt="" className={mediaFitClass} />
        )}
      </MediaFrame>
      <div className="mt-2 flex h-4 items-center justify-center gap-1.5">
        <CarouselDots count={images.length} activeIndex={index} />
      </div>
    </div>
  )
}

function PlogCard({ post, index }: { post: PlogPost; index: number }) {
  return (
    <FadeIn delay={index * 0.08} className="h-full">
      <article className="flex h-full flex-col rounded-xl border border-border bg-white p-4 transition-colors hover:border-border-strong sm:p-5">
        <PostMedia post={post} />
        <div className="mt-4 flex min-h-[6.5rem] flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <time className="text-xs font-medium uppercase tracking-wider text-subtle">
              {post.date}
            </time>
            <LikeButton postId={post.id} seed={post.likes ?? 0} />
          </div>
          <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted">
            {post.text}
          </p>
        </div>
      </article>
    </FadeIn>
  )
}

export default function Plog() {
  return (
    <section id="plog" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <FadeIn>
          <h2 className="text-sm font-medium uppercase tracking-widest text-subtle">
            Plog
          </h2>
          <p className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Life gallery
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Daily photos and short notes — a running snapshot of what I&apos;m up
            to.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-stretch">
          {plogPosts.map((post, i) => (
            <PlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
