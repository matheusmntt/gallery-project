import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'

type ImageProps = {
  id: number
  src: string
}

type ArrayImages = {
  images: ImageProps[]
}

export const GridModel2 = ({ images }: ArrayImages) => {
  const classes = [
    {
      container:
        'appear relative group row-span-1 cursor-pointer overflow-hidden rounded-md border-2 border-zinc-50',
      image:
        'aspect-square size-full object-cover group-hover:scale-110 duration-500',
    },
    {
      container:
        'appear relative group row-span-1 cursor-pointer overflow-hidden rounded-md border-2 border-zinc-50',
      image:
        'aspect-square size-full object-cover group-hover:scale-110 duration-500',
    },
    {
      container:
        'appear relative group col-start-2 row-span-2 flex cursor-pointer overflow-hidden rounded-md border-2 border-zinc-50',
      image:
        'aspect-[9/16] size-full object-cover group-hover:scale-110 duration-500',
    },
    {
      container:
        'appear relative group col-span-2 cursor-pointer overflow-hidden rounded-md border-2 border-zinc-50',
      image:
        'aspect-video size-full object-cover group-hover:scale-110 duration-500',
    },
  ]

  return (
    <section className="appear my-5 grid max-h-[1100px] grid-flow-col grid-cols-2 grid-rows-3 gap-5">
      {images?.map((image, index) => {
        const control = index

        return (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <button className={classes[control].container}>
                <img
                  className={classes[control].image}
                  loading="lazy"
                  src={image.src}
                  alt="Random"
                />
                <span className="absolute bottom-3 left-3 text-2xl font-semibold text-zinc-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Legenda da foto
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="flex h-[30rem] w-[20rem] flex-col items-center justify-center bg-zinc-50 px-8 md:size-[40rem]">
              <img
                className="h-[26rem] w-[16rem] overflow-hidden rounded-md object-cover md:size-[30rem]"
                loading="lazy"
                src={image.src}
                alt="Random"
              />
              <DialogFooter className="mr-2 self-end text-2xl font-semibold text-[#121214]">
                Legenda da foto
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )
      })}
    </section>
  )
}
