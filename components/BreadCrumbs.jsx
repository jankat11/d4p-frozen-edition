import Link from "next/link";

const BreadCrumbs = ({ page }) => {
  return (
    <header className="breadcrumbs-container px-2 font-medium  uppercase">
      <div className="navbar lg:py-10 py-6 mt-16">
        <div className="flex-1">
          <div className=" breadcrumbs text-xs w-full px-0">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {page ? (
                <li>
                  <Link href="/collections">Collections</Link>
                </li>
              ) : (
                <li>Collections</li>
              )}
              {page && <li>{page}</li>}
            </ul>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered  text-primary border-primary placeholder:font-light placeholder:text-sm placeholder:text-dallas-600 focus:outline-none focus:border-dallas-700 focus:shadow-md w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default BreadCrumbs;
