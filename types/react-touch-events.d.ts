declare module 'react-touch-events' {
  import { ComponentType, HTMLAttributes } from 'react'

  interface TouchEventsProps extends HTMLAttributes<HTMLElement> {
    onTap?: (event: React.TouchEvent) => void
    onSwipe?: (direction: string, event: React.TouchEvent) => void
    onSwipeLeft?: (event: React.TouchEvent) => void
    onSwipeRight?: (event: React.TouchEvent) => void
    onSwipeUp?: (event: React.TouchEvent) => void
    onSwipeDown?: (event: React.TouchEvent) => void
  }

  const TouchEvents: ComponentType<TouchEventsProps>

  export default TouchEvents
}
