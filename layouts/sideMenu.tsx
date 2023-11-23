import Image from "next/image";
import Link from "next/link";

export function SideMenu () {
  return (
    <div className="hidden md:block bg-gradient-radial p-2 h-screen md:fixed w-[200px]">
      <div className="logo mb-[50px] p-4">
     <Link href="/" className="">
          <Image width={300} height={50} src="/assets/logos/logo.svg" alt="" />
      </Link>
      </div>
      <div className="menu-list ">
        <div className="menu-item text-white">
          <div className="item-header">
            <h1 className="item-title uppercase">Blogs</h1>
          </div>
          <div className="item-body">
            <Link className="hover:text-yellow" href="/add-blog">
              <h2 className="menu-item ">Add a Blog </h2>
            </Link>
            <Link className="hover:text-yellow" href="/blog-list">
              <h2>List of blog</h2>
            </Link> 
          </div>
        </div>
        <div className="menu-item text-white">
          <div className="item-header">
            <h1 className="item-title uppercase">Products</h1>
          </div>
          <div className="item-body">
            <Link className="hover:text-yellow" href="/add-product">
              <h2 className="menu-item">Add a Product </h2>
            </Link>
            <Link className="hover:text-yellow" href="/product-list">
              <h2>List of Product</h2>
            </Link> 
          </div>
        </div>
        <div className="menu-item text-white">
        <div className="item-header">
            <h1 className="item-title uppercase">Orders</h1>
          </div>
            <Link className="hover:text-yellow" href="/">
              <h2 className="menu-item">All of Orders </h2>
            </Link>
            
        </div>
      </div>

    </div>
  )
}