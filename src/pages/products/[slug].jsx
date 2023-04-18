import Head from 'next/head'
import Image from 'next/image'
export default function Products({data}){
  // const productdata = data;
  console.log(data);
  return (<><h1>{data.productdisplayname}</h1>

  
 </>);
}
//SERVER SIDE
export async function getStaticProps(context){
  console.log(context.params)
  const id = context.params.slug;
  
  const api = "https://kea-alt-del.dk/t7/api/products/" + id
  const res = await fetch(api)
  
  //json-fy 
 if (res.status != 200) {
  return {
    notFound: true
  }
 }
  const data = await res.json()
  console.log("data", data)
  
  return {
    props: {
      data: data
    }
  }
}

//configure and handle SSG (Static server generator)
//pre-renders page with returned props
export async function getStaticPaths(){
  const api = "https://kea-alt-del.dk/t7/api/products";
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
