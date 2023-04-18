import Head from 'next/head'
import Image from 'next/image'
export default function Products({data}){


  return (<>
  <Head>
    <title>{data.productdisplayname}</title>
  </Head>
  <h1>{data.productdisplayname}</h1>
   <p>{data.productyear}</p>
   <p>{data.gender}</p>
   <p>{data.basecolour}</p>
   <p>{data.brand}</p>
   <p>{data.price}</p>
   <p>{data.agegroup}</p>
 


 </>);
}
//SERVER SIDE - specific have getStaticProps and getStaticPaths fir 
export async function getStaticProps(context){

  const id = context.params.slug;
  const category = context.params;
  console.log(category, "context");
  const api = "https://kea-alt-del.dk/t7/api/products/" + id
  const res = await fetch(api)
  
  //json-fy 
 if (res.status != 200) {
  return {
    notFound: true
  }
 }
  const data = await res.json()

  
  return {
    props: {
      data: data
    }
  }
}

//configure and handle SSG (Static server generator)
//pre-renders page with returned props
export async function getStaticPaths(){
  const api = "https://kea-alt-del.dk/t7/api/products/";
  const res = await fetch(api);
  const data = await res.json();
  const paths = data.map((object) => {
 
    return {params: {slug: String(object.id)}};
  });
  // // Return the data inside props
  return {
    paths,
    fallback: false,
  }
  };
