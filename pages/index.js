import Head from 'next/head'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity Amazon</title>
        <meta
          name='description'
          content='An E-commerce website built with Next and Sanity.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Typography component='h1' variant='h1'>
        Sanity Amazon
      </Typography>
    </div>
  )
}
