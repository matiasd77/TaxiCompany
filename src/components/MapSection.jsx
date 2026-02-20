function MapSection() {
  // Exact pickup/location coordinates for Taxi Klodi Zguri near the stadium.
  const latitude = 41.115268
  const longitude = 20.089991

  // Use API key when available; otherwise fallback to a no-key embed so map still renders.
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_EMBED_API_KEY
  const mapEmbedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}&zoom=16`
    : `https://www.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`

  return (
    // Section wrapper keeps consistent spacing and theme with the rest of the site.
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="space-y-6 rounded-2xl bg-zinc-900/80 p-6 md:p-8">
        {/* Section heading and business details above the map. */}
        <div className="space-y-2 text-zinc-300">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Find Us in Elbasan</h2>
          <p className="font-semibold text-yellow-400">Taxi Klodi Zguri</p>
          <p>Bulevardi Qemal Stafa</p>
          <p>Elbasan, Albania</p>
          <p>
            Phone:{' '}
            <a href="tel:+355674908618" className="font-semibold text-yellow-300 hover:text-yellow-200">
              +355674908618
            </a>
          </p>
        </div>

        {/* Responsive Google Maps Embed API iframe pinned to exact coordinates. */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="Taxi Klodi Zguri map location"
            src={mapEmbedUrl}
            className="h-[320px] w-full border-0 sm:h-[380px] md:h-[450px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default MapSection
