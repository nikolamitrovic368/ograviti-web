import useRawMedia from 'use-media'

const useMedia = () => ({
  isSm: useRawMedia({ minWidth: '640px' }),
  isMd: useRawMedia({ minWidth: '768px' }),
  isLg: useRawMedia({ minWidth: '1024px' }),
  isXl: useRawMedia({ minWidth: '1280px' }),
  is2xl: useRawMedia({ minWidth: '1536px' }),
})

export default useMedia
