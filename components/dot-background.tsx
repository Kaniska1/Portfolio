import { cn } from '@/lib/utils'

export function DotBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:radial-gradient(#262626_1px,transparent_1px)]'
        )}
      />

      {/* Fade the dot pattern around the center */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black_85%)]" />

      {/* Very subtle red ambience */}
      <div className="absolute left-1/2 top-[-12rem] h-[36rem] w-[50rem] -translate-x-1/2 rounded-full bg-red-600/[0.045] blur-[130px]" />

      <div className="absolute bottom-[-14rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-red-700/[0.025] blur-[120px]" />
    </div>
  )
}