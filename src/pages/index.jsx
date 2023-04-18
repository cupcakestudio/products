import Head from 'next/head'

import Anchor from '@/components/Anchor'
import {Products} from './products/[slug]'


export default function Home({productdata}) {
console.log("hi product ", productdata);
  return (
    <>
      {/* only metatags - it will not be rendered */}
      <Head>
        <title>Welcome to Products overview page</title>
      </Head>
      <h1>Hello from Home</h1>
      <section className='productgrid'>
        {productdata.map((object) => {
          return (
            <Anchor href={"/products/" + object.category + "/" +  object.id}Products>
              <article>
              <h2>{object.productdisplayname}</h2>
              <p>{object.category}</p>
              </article>
            </Anchor>
            )
        })}  
        </section>
      </>
      )
}

//Server side
export async function getStaticProps() {
  const api = "https://kea-alt-del.dk/t7/api/products/";
  const res = await fetch(api);
  const data = await res.json();
 

  return {
    props: {
      productdata: data,
    
    },
  }
}