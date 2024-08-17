import React from "react";
import Link from "next/link";
import { TextLogo } from "./ui/Logo";
import { Input } from "./ui/input";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-12 border-t-2">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <TextLogo />
            <h3 className="mt-8 text-lg font-semibold">STAY UP TO DATE</h3>
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#1E1E1E] border-[0.5px] border-gray-500 text-xs rounded-lg w-30"
            />
            <p className="mt-2 text-xs text-gray-400">
              Unsubscribe at any time.
            </p>
            <Link href="#" className="text-gray-400 text-xs block mt-6">
              Sign up ➔
            </Link>
          </div>

          <div>
            <h3 className="font-bold mb-4">PRODUCTS</h3>
            <ul className="text-xs text-gray-400 space-y-3">
              <li className="mb-2">
                <Link href="#">OpenBB Terminal Pro</Link>
              </li>
              <li className="mb-2">
                <Link href="#">OpenBB Add-in for Excel</Link>
              </li>
              <li className="mb-2">
                <Link href="#">OpenBB Copilot</Link>
              </li>
              <li className="mb-2">
                <Link href="#">OpenBB Platform</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">SOLUTIONS</h3>
            <ul className="text-xs text-gray-400 space-y-3">
              <li className="mb-2">
                <Link href="#">Corporate Investors</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Corporate Development</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Asset Managers</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Financial Advisors</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Hedge Funds</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Family Offices</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Private Equity</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Data Providers</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Developers</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Academia</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Community</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="text-xs text-gray-400 space-y-3">
              <li className="mb-2">
                <Link href="#">Open Startup</Link>
              </li>
              <li className="mb-2">
                <Link href="#">About us</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Partners</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">OTHER</h3>
            <ul className="text-xs text-gray-400 space-y-3">
              <li className="mb-2">
                <Link href="#">OpenBB Bot</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Support</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Contact</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Sitemap</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Brand book</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between border-t border-gray-700 pt-8">
          <div className="mt-4 lg:mt-0 flex space-x-4">
            <Link href="#" className="text-gray-400">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="#" className="text-gray-400">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="text-gray-400">
              <i className="fab fa-x-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-400">
              <i className="fab fa-discord"></i>
            </Link>
            <Link href="#" className="text-gray-400">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
