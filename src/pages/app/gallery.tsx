import { GridModel1 } from '@/components/grid-model-1'
import { GridModel2 } from '@/components/grid-model-2'

export function Gallery() {
  const images = [
    { id: 1, src: 'https://source.unsplash.com/random?a=1' },
    { id: 2, src: 'https://source.unsplash.com/random?b=1' },
    { id: 3, src: 'https://source.unsplash.com/random?c=1' },
    { id: 4, src: 'https://source.unsplash.com/random?d=1' },
    { id: 5, src: 'https://source.unsplash.com/random?e=1' },
    { id: 6, src: 'https://source.unsplash.com/random?f=1' },
    { id: 7, src: 'https://source.unsplash.com/random?g=1' },
    { id: 8, src: 'https://source.unsplash.com/random?h=1' },
    { id: 9, src: 'https://source.unsplash.com/random?i=1' },
    { id: 10, src: 'https://source.unsplash.com/random?j=1' },
    { id: 11, src: 'https://source.unsplash.com/random?k=1' },
    { id: 12, src: 'https://source.unsplash.com/random?l=1' },
    { id: 13, src: 'https://source.unsplash.com/random?m=1' },
    { id: 14, src: 'https://source.unsplash.com/random?n=1' },
    { id: 15, src: 'https://source.unsplash.com/random?o=1' },
    { id: 16, src: 'https://source.unsplash.com/random?p=1' },
    { id: 17, src: 'https://source.unsplash.com/random?q=1' },
    { id: 18, src: 'https://source.unsplash.com/random?r=1' },
    { id: 19, src: 'https://source.unsplash.com/random?s=1' },
    { id: 20, src: 'https://source.unsplash.com/random?t=1' },
  ]

  const gridItemCount = 4
  const grids = []

  for (let i = 0; i < images.length; i += gridItemCount) {
    const grid = images.slice(i, i + gridItemCount)
    grids.push(grid)
  }

  return (
    <main className="antialised flex min-h-screen items-center justify-center bg-[#121214] py-10 sm:py-32">
      <div className="flex w-[90rem] flex-col sm:flex-row">
        <div className="w-full px-4 sm:py-20">
          <div className="animate-fade-in flex w-96 flex-col gap-5 sm:fixed">
            <div className="flex items-center gap-5">
              <img
                src="https://github.com/matheusmntt.png"
                alt="Profile Photo"
                className="size-24 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-semibold text-zinc-50">
                  Olá Matheus
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-zinc-50/40">
                  <span className="block size-2 rounded-full border border-green-600 bg-green-600"></span>
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in mb-10 max-w-[800px] p-4">
          {grids.map((grid, index) => {
            if (index % 2 === 0) return <GridModel1 key={index} images={grid} />
            if (index % 2 !== 0) return <GridModel2 key={index} images={grid} />
            return null
          })}
        </div>
      </div>
    </main>
  )
}
