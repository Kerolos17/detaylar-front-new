import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="mt-[10em]">
        <h1>test</h1>
        <Image src="/assets/images/img-1.png" width={100} height={100} alt="Description of image"/>
        <Image src="/path/to/image.jpg" alt="Description of image" width={500} height={300} />
        <Image src="/path/to/another-image.jpg" alt="Description of another image" width={500} height={300} />
        <p>It&apos;s important to escape single quotes in JSX.</p>
    </div>
  )
}

export default page