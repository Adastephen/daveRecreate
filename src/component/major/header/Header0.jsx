import { React } from "react";

function Header0() {
  return (
    <>
      <div className="w-full bg-indigo-950">
        <div className="w-11/12 m-auto">
          <div className="flex justify-between py-3">
            {/* the 'contact us' and the 'have a question' in the header1 div */}
            <div className="text-gray-300 flex m-3 lg:flex-row md:flex-col whitespace-nowrap">
              {/* contact us div */}
              <div className="flex mt-3 ">
                <img
                  src="../../../public/icon/contact.svg"
                  className="h-8 w-8 mr-3"
                  alt="contact us"
                />
                <span className="text-sm text-gray-400">
                  <p>Contact us</p>
                  <p className="text-lg ">+1(214) 869-5511</p>
                </span>
              </div>

              {/* have a question div sec */}
              <div className="flex ">
                <img
                  src="../../../public/icon/profile.svg"
                  className="h-8 w-8 mr-3"
                  alt="profile logo"
                />
                <span className="text-sm text-gray-400">
                  <p>Have a question?</p>
                  <p className="text-lg">support@dominionsystems.net</p>
                </span>
              </div>
            </div>

            {/*the second column in the header1 */}
            <div className="text-gray-300 flex flex-wrap gap-5">
              <button>
                <img
                  src="../../../public/icon/career.svg"
                  alt="career logo"
                  className="h-8 w-8 mr-3"
                />
                <p className="text-sm text-gray-400">Career</p>
              </button>
              <button>
                <img
                  src="../../../public/icon/faq.svg"
                  alt="faq logo"
                  className="h-8 w-8 mr-3"
                />
                <p className="text-sm text-gray-400">FAQ</p>
              </button>
              <button>
                <img
                  src="../../../public/icon/priceing.svg"
                  alt="price logo"
                  className="h-8 w-8 mr-3"
                />
                <p className="text-sm text-gray-400">Pricing</p>
              </button>
              <button>
                <img
                  src="../../../public/icon/itblog.svg"
                  alt="itblog logo"
                  className="h-8 w-8 mr-3"
                />
                <p className="text-sm text-gray-400">IT Blog</p>
              </button>
              <button>
                <img
                  src="../../../public/icon/contactus.svg"
                  alt="contactus logo"
                  className="h-8 w-8"
                />
                <p className="text-sm text-gray-400">Contact Us</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header0;
