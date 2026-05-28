import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ── Liquid Glass Button ──────────────────────────────────────────────────────

const liquidbuttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[color,transform] duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 text-[var(--text)]",
        purple:  "bg-transparent hover:scale-105 text-[var(--purple-700)]",
        ghost:   "hover:bg-white/20 text-[var(--text)]",
      },
      size: {
        sm:   "h-8  px-5  text-xs",
        md:   "h-10 px-6",
        lg:   "h-11 px-8",
        xl:   "h-12 px-9  text-base",
        xlWide: "h-12 px-16 text-base",
        xxl:  "h-14 px-10 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  }
)

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidbuttonVariants> {
  asChild?: boolean
}

export function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: LiquidButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn("relative", liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* Outer glass shadow ring */}
      <div className="absolute inset-0 z-0 rounded-full
        shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]
        transition-all pointer-events-none" />
      {/* Backdrop blur distortion layer */}
      <div
        className="absolute inset-0 isolate -z-10 rounded-full overflow-hidden"
        style={{ backdropFilter: 'url("#lg-glass") blur(6px)' }}
      />
      {/* Content */}
      <span className="relative z-10 pointer-events-none">
        {children}
      </span>
      {/* Inline SVG filter (hidden) */}
      <LiquidGlassFilter />
    </Comp>
  )
}

function LiquidGlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        {/* Added filterUnits and expanded the bounding box parameters */}
        <filter 
          id="lg-glass" 
          filterUnits="userSpaceOnUse" 
          x="-20%" 
          y="-20%" 
          width="140%" 
          height="140%" 
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          {/* Lowered scale slightly from 70 to 45 to stop edge clipping on wider containers */}
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="45" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

export { liquidbuttonVariants }
