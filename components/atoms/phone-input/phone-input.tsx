'use client'

import 'react-international-phone/style.css'

import { PhoneInput as ReactInternationalPhone } from 'react-international-phone'

export default function PhoneInput({
  label,
  value,
  onChange,
  errorMessage,
}: {
  label?: string
  errorMessage?: string
  onChange: (v: string) => any
  value: string
}) {
  return (
    <div className="flex w-full flex-col gap-2 2xl:gap-4">
      {label && <label>{label}</label>}
      <ReactInternationalPhone
        placeholder="Enter Phone Number"
        value={value}
        onChange={v => onChange(v)}
        inputClassName="!px-5 !py-3.5 2xl:!py-5 !rounded-full !w-[calc(100%-52px)] !outline-none focus:!outline focus:!outline-primary !transition-all !w-full !h-auto !border-none !ml-4 !bg-card !text-card-foreground !text-base"
        countrySelectorStyleProps={{
          className: '',
          buttonClassName:
            '!px-5 !py-3.5 2xl:!py-5 !rounded-full !w-[calc(100%-52px)] !outline-none focus:!outline focus:!outline-primary !transition-all !w-full !h-auto !border-none !bg-card !text-card-foreground',
          buttonContentWrapperClassName: '',
          dropdownStyleProps: {
            className: '!bg-card !text-white',
            listItemClassName: 'hover:!bg-primary',
          },
        }}
      />
      {errorMessage && <div className="pl-3 text-red-600">{errorMessage}</div>}
    </div>
  )
}
