import Image from '@/app/components/Image/Image'
import styles from './page.module.css'

import { getImageExifProperties } from '@/app/lib/data'

interface Props {
  params: { category: string; id: string }
}

export default async function CategoryDetailPage({
  params: { category, id: image },
}: Props) {
  const exif = await getImageExifProperties(category, image, [
    'ExifImageWidth',
    'ExifImageHeight',
  ])

  const width = exif.ExifImageWidth ?? 0
  const height = exif.ExifImageHeight ?? 0

  return (
    <section className={styles.container}>
      <Image
        src={`/images/${category}/${image}`}
        alt={image}
        width={width}
        height={height}
        className={styles.image}
      />
    </section>
  )
}
