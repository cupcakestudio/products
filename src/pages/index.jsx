import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Anchor from '@/components/Anchor'
import Products from './products/[slug]'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* only metatags - it will not be rendered */}
      <Head>
        <title>Welcome to Products overview page</title>
      </Head>
      <h1>Hello from Home</h1>
      <Anchor href="/products/{id}">Products</Anchor>
      <Products/>
    </>
  );
}
