import { useEffect } from 'react'

const DEFAULT_DESCRIPTION =
  'Taxi Klodi Zguri provides professional taxi, airport, intercity, and international transfer services.'
const DEFAULT_KEYWORDS =
  'Taxi in Elbasan, Elbasan Taxi Service, Albania Taxi, Taxi to Greece, Airport Transfer Albania'

function setMeta(name, content, property = false) {
  const attr = property ? 'property' : 'name'
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

function Seo({ title, description = DEFAULT_DESCRIPTION, keywords = DEFAULT_KEYWORDS }) {
  useEffect(() => {
    document.title = title
    const currentUrl = window.location.href
    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:url', currentUrl, true)
    setLink('canonical', currentUrl)
  }, [title, description, keywords])

  return null
}

export default Seo
