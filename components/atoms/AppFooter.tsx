import Link from 'next/link';
import Image from 'next/image';

import Contact from '../organisms/AppContact';
import { GlobeAltIcon } from '@heroicons/react/outline';

const AppFooter = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container">
        <Contact />
        <div className="flex flex-col items-center justify-between py-5 text-sm text-gray-400 border-t border-gray-200 lg:py-6 lg:flex-row">
          <div className="flex flex-col items-center order-last lg:flex-row lg:order-none">
            <span className="mr-0 text-center lg:mr-4">
              © {new Date().getFullYear()} NGWA, Inc.
            </span>
            <span className="mb-2 mr-0 lg:mr-8 lg:mb-0">|</span>
            <ul className="flex space-x-6 list-disc">
              <li className="hover:underline">
                <Link href="/">
                  <a>Privacy</a>
                </Link>
              </li>
              <li className="hover:underline">
                <Link href="/">
                  <a>Terms</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mb-4 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:mb-0">
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="/">
                  <a className="flex items-center">
                    <GlobeAltIcon className="h-5 mr-1" />
                    <span className="underline">English (US)</span>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex space-x-6">
              <li className="flex items-center">
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/icons/facebook.svg"
                      alt="facebook"
                      height={16}
                      width={16}
                    />
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/icons/twitter.svg"
                      alt="facebook"
                      height={16}
                      width={16}
                    />
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/">
                  <a>
                    <Image
                      src="/assets/icons/instagram.svg"
                      alt="facebook"
                      height={16}
                      width={16}
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
