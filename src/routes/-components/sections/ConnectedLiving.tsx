import { useState } from 'react'
import {
  Compass,
  Train,
  ShoppingBag,
  Landmark as ArtsIcon,
  Eye,
  MapPin,
  Navigation,
} from 'lucide-react'
import { LANDMARKS_DATA } from '#/data'
import type { Landmark } from '#/types'
import { CONTACT_DETAILS } from '#/constants'

export function ConnectedLiving() {
  const [filterType, setFilterType] = useState<
    'all' | 'transit' | 'retail' | 'arts'
  >('all')
  const [hoveredLandmark, setHoveredLandmark] = useState<Landmark | null>(null)
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(
    LANDMARKS_DATA[0],
  )

  const filteredLandmarks = LANDMARKS_DATA.filter((l) => {
    if (filterType === 'all') return true
    return l.type === filterType
  })

  const getCategoryIcon = (type: 'transit' | 'retail' | 'arts') => {
    switch (type) {
      case 'transit':
        return Train
      case 'retail':
        return ShoppingBag
      case 'arts':
        return ArtsIcon
      default:
        return Compass
    }
  }

  const getCategoryColor = (type: 'transit' | 'retail' | 'arts') => {
    switch (type) {
      case 'transit':
        return 'text-black bg-stone-50 border-stone-200'
      case 'retail':
        return 'text-stone-800 bg-stone-50 border-stone-200'
      case 'arts':
        return 'text-neutral-700 bg-neutral-100 border-neutral-200'
      default:
        return 'text-black bg-white border-gray-200'
    }
  }

  return (
    <section
      id="connected-living"
      className="max-w-7xl mx-auto px-6 md:px-20 py-24 select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Description and Category Selector */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Location Excellence
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-tight">
            Connected Living
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
            Situated in a prime locale, MRM Unique Homes offers seamless access
            to the city's finest hubs while maintaining its peaceful,
            sanctuary-like atmosphere.
          </p>

          <div className="inline-flex items-center gap-3 rounded-3xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <p className="font-sans text-sm text-foreground leading-relaxed">
              {CONTACT_DETAILS.address}
            </p>
          </div>

          {/* Quick List Blocks */}
          <div className="space-y-4">
            {[
              {
                id: 'transit',
                icon: Train,
                title: 'Transit Hub',
                desc: '5 minutes walking distance to key metropolitan bullet-shuttles',
              },
              {
                id: 'retail',
                icon: ShoppingBag,
                title: 'Retail District',
                desc: '10 minutes by car to premium fashion outlets and food halls',
              },
              {
                id: 'arts',
                icon: ArtsIcon,
                title: 'Culinary & Arts',
                desc: 'Tucked within the vibrant historic art alleys and coffee roasteries',
              },
            ].map((cat) => {
              const isActive = filterType === cat.id
              return (
                <div
                  key={cat.id}
                  id={`proximity-item-${cat.id}`}
                  onClick={() =>
                    setFilterType(isActive ? 'all' : (cat.id as any))
                  }
                  className={`flex gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'border-black bg-white shadow-sm'
                      : 'border-gray-100 bg-transparent hover:border-gray-300 hover:bg-white'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${
                      isActive
                        ? 'bg-black text-white'
                        : 'bg-gray-50 text-gray-400 border border-gray-100 shadow-sm'
                    }`}
                  >
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-black flex items-center gap-2">
                      {cat.title}
                      {isActive && (
                        <span className="text-[8px] uppercase tracking-widest bg-black text-white px-1.5 py-0.5 rounded font-bold">
                          Active Filter
                        </span>
                      )}
                    </h4>
                    <p className="font-sans text-xs text-muted-foreground mt-1 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Virtual Topographical Map */}
        <div className="lg:col-span-7">
          <div className="flex flex-col space-y-4">
            {/* Map Filters Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-gray-400 mr-2">
                Filter Pins:
              </span>
              <button
                id="filter-map-all"
                onClick={() => {
                  setFilterType('all')
                  setSelectedLandmark(LANDMARKS_DATA[0])
                }}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer font-sans text-xs ${
                  filterType === 'all'
                    ? 'bg-black text-white border-black font-semibold shadow-sm'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-black hover:text-black'
                }`}
              >
                All Locations
              </button>
              {(['transit', 'retail', 'arts'] as const).map((type) => (
                <button
                  key={type}
                  id={`filter-map-${type}`}
                  onClick={() => {
                    setFilterType(type)
                    const firstOfCategory = LANDMARKS_DATA.find(
                      (l) => l.type === type,
                    )
                    if (firstOfCategory) setSelectedLandmark(firstOfCategory)
                  }}
                  className={`px-3 py-1.5 rounded-xl border uppercase tracking-wider font-semibold transition-all cursor-pointer font-sans text-[10px] ${
                    filterType === type
                      ? 'bg-black text-white border-black shadow-sm'
                      : 'bg-white border-gray-200 text-gray-500 hover:border-black hover:text-black'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Simulated Vector Graph Map */}
            <div
              className="w-full h-[400px] sm:h-[480px] bg-secondary rounded-3xl overflow-hidden relative border border-border/30 flex items-center justify-center cursor-crosshair group shadow-inner"
              id="dynamic-vector-map"
            >
              {/* Map Layout Lines (Topographic elements) */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwdk0xMCAwaHY0ME0wIDIwaDQwdk0yMCAwaHY0ME0wIDMwaDQwdk0yOSAwIHY0MCIgc3Ryb2tlPSJyZ2JhKDEyMiwgMTQ1LCAxMjgsIDAuMDcpIiHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-60 pointer-events-none" />

              {/* Geographic Ring Paths for modern blueprint appearance */}
              <div
                className="absolute border border-muted-foreground/5 rounded-full w-[150px] h-[150px] animate-pulse pointer-events-none"
                style={{ animationDuration: '8s' }}
              />
              <div className="absolute border border-muted-foreground/10 rounded-full w-[350px] h-[350px] pointer-events-none" />
              <div className="absolute border border-muted-foreground/5 rounded-full w-[550px] h-[550px] pointer-events-none" />

              {/* Grid axes labels */}
              <div className="absolute left-4 top-4 font-mono text-[9px] text-muted-foreground/40">
                LAT: 40°44'21" N
              </div>
              <div className="absolute right-4 bottom-4 font-mono text-[9px] text-muted-foreground/40">
                LNG: 74°00'12" W
              </div>

              {/* Central Marker representing MRM Unique Homes sanctuary */}
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 pointer-events-none"
                style={{ left: '50%', top: '50%' }}
              >
                <div
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-ping absolute"
                  style={{ animationDuration: '3s' }}
                />
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center border-2 border-background shadow-lg relative">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="bg-primary text-primary-foreground text-[8px] uppercase tracking-widest px-2 py-0.5 rounded mt-1 shadow-sm font-semibold whitespace-nowrap">
                  Residency Location
                </span>
              </div>

              {/* Landmark Point Beacons */}
              {filteredLandmarks.map((landmark) => {
                const Icon = getIconCategory(landmark.type)
                const isSelected = selectedLandmark?.id === landmark.id
                const isHovered = hoveredLandmark?.id === landmark.id

                return (
                  <button
                    key={landmark.id}
                    id={`map-pin-${landmark.id}`}
                    onClick={() => setSelectedLandmark(landmark)}
                    onMouseEnter={() => setHoveredLandmark(landmark)}
                    onMouseLeave={() => setHoveredLandmark(null)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 transition-transform hover:scale-110 active:scale-95 cursor-pointer outline-none"
                    style={{
                      left: `${landmark.pxX}%`,
                      top: `${landmark.pxY}%`,
                    }}
                  >
                    {/* Ring highlight */}
                    <div
                      className={`p-2 rounded-full border-2 transition-all shadow-md ${
                        isSelected
                          ? 'bg-primary text-primary-foreground border-background scale-105 z-20'
                          : isHovered
                            ? 'bg-secondary text-primary border-muted-foreground'
                            : 'bg-background text-muted-foreground border-border/30'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                  </button>
                )
              })}

              {/* Floating detail Card info when a pin or hovering */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-border/20 z-20 flex gap-4 items-start select-none">
                {selectedLandmark ? (
                  <>
                    <div
                      className={`p-2.5 rounded-lg border shrink-0 ${getCategoryColor(selectedLandmark.type)}`}
                    >
                      {(() => {
                        const Icon = getCategoryIcon(selectedLandmark.type)
                        return <Icon className="h-5 w-5" />
                      })()}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-serif text-sm font-bold text-primary">
                          {selectedLandmark.name}
                        </h4>
                        <span className="shrink-0 flex items-center gap-1 font-sans text-[10px] font-semibold text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full uppercase">
                          <Navigation className="h-2.5 w-2.5 uppercase text-primary transform rotate-45" />{' '}
                          {selectedLandmark.distance}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-muted-foreground leading-normal">
                        {selectedLandmark.desc}
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-center w-full font-sans text-xs text-muted-foreground/70 italic py-2">
                    Click any point beacon on the map grid to view locality
                    details.
                  </p>
                )}
              </div>
            </div>

            {/* Helpful indicator caption */}
            <p className="text-center font-sans text-[11px] text-muted-foreground/60 flex items-center justify-center gap-1">
              <Eye className="h-3 w-3" /> Selected beacon represents distance
              relative to <strong>MRM Unique Homes</strong> sanctuary.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function getIconCategory(type: 'transit' | 'retail' | 'arts') {
  switch (type) {
    case 'transit':
      return Train
    case 'retail':
      return ShoppingBag
    case 'arts':
      return ArtsIcon
    default:
      return Compass
  }
}
