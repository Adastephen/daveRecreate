import { React } from "react";

function Header0() {
  return (
    <>
      <div className="w-full bg-blue-900">
        <div className="w-10/12 m-auto">
          <div className="flex justify-between py-5">
            {/* the 'contact us' and the 'have a question' in the header1 div */}
            <div className="text-gray-300 flex lg:flex-row  whitespace-nowrap">
              {/* contact us div */}
              <div className="flex m-3 ">
                <img
                  src="../../../src/assets/icon/contact.svg"
                  className="h-12 w-12 mr-3"
                  alt="contact us"
                />
                <span>
                  <p>Contact us</p>
                  <p>+1(214) 869-5511</p>
                </span>
              </div>

              {/* have a question div sec */}
              <div className="flex m-3">
                <img
                  src="../../../src/assets/icon/profile.svg"
                  className="h-12 w-12 mr-3"
                  alt="profile logo"
                />
                <span>
                  <p>Have a question?</p>
                  <p>support@dominionsystems.net</p>
                </span>
              </div>
            </div>

            {/*the second column in the header1 */}
            <div className="text-gray-300 flex flex-wrap gap-5">
              <button>
                <img
                  src="../../../src/assets/icon/career.svg"
                  alt="career logo" className="h-12 w-12 mr-3"
                />
                <p>Career</p>
              </button>
              <button>
              <img
                  src="../../../src/assets/icon/faq.svg"
                  alt="faq logo" className="h-12 w-12 mr-3"
                />
                <p>FAQ</p>
              </button>
              <button>                              
                <img
                  src="../../../src/assets/icon/priceing.svg"
                  alt="price logo" className="h-12 w-12 mr-3"
                />
                <p>Pricing</p></button>
              <button>                
                <img
                  src="../../../src/assets/icon/itblog.svg"
                  alt="itblog logo" className="h-12 w-12 mr-3"
                />
                <p>IT Blog</p></button>
                <button>               
                 <img
                  src="../../../src/assets/icon/contactus.svg"
                  alt="contactus logo" className="h-12 w-12"
                />
                <p>Contact Us</p></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header0;
