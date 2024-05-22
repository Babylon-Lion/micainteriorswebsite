import Image from 'next/image'
import React from 'react'

function Partners() {
  return (
    <div className='flex p-10'>
<div className="flex overflow-hidden space-x-16">
  <div className="flex space-x-16 animate-loop-scroll">
    <Image loading="lazy" height={100} width={170} src="/Scotiabank_Logo.png" alt="Scotia Bank" className="max-w-none"/>
    <Image loading="lazy" height={100} width={190} src="/Rbc-logo.png" alt="RBC - Royal Bank of Canada" className="max-w-none"/>
    <Image loading="lazy" height={100} width={200} src="/bmo-logo.png" alt="BMO - Bank of Montreal" className="max-w-none"/>
    <Image loading="lazy" height={100} width={240} src="/purelife-logo.png" alt="Purelife Physiotherapy" className="max-w-none"/>
    <Image loading="lazy" height={100} width={200} src="/wrm-logo.png" alt="WRM Strata Management" className="max-w-none"/>
    <Image loading="lazy" height={100} width={190} src="/onni-logo.png" alt="Onni Group" className="max-w-none"/>
    <Image loading="lazy" height={100} width={180} src="/onSite-logo.png" alt="OnSite Construction" className="max-w-none"/>
  </div>
  <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
    <Image loading="lazy" height={100} width={170} src="/Scotiabank_Logo.png" alt="Scotia Bank" className="max-w-none"/>
    <Image loading="lazy" height={100} width={190} src="/Rbc-logo.png" alt="RBC - Royal Bank of Canada" className="max-w-none"/>
    <Image loading="lazy" height={100} width={200} src="/bmo-logo.png" alt="BMO - Bank of Montreal" className="max-w-none"/>
    <Image loading="lazy" height={100} width={240} src="/purelife-logo.png" alt="Purelife Physiotherapy" className="max-w-none"/>
    <Image loading="lazy" height={100} width={200} src="/wrm-logo.png" alt="WRM Strata Management" className="max-w-none"/>
    <Image loading="lazy" height={100} width={190} src="/onni-logo.png" alt="Onni Group" className="max-w-none"/>
    <Image loading="lazy" height={100} width={180} src="/onSite-logo.png" alt="OnSite Construction" className="max-w-none"/>
  </div>
</div>
</div>
  )
}

export default Partners