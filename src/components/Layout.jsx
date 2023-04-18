import Anchor from "./Anchor"

export default function Layout({children, navData}) {
  return <>
  <nav>
    {/* doing this mapping we get the elements' url(slug/id) from the data in the navigation and it works on all pages */}
    {navData.map(obj => {
      return <Anchor href={"/products/" + obj.id}>
        {obj.productdisplayname}
      </Anchor>
    })}
  </nav>
  {children}
  <footer>Footer</footer>
  </>
}