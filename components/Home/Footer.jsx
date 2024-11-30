import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <Link href='/' className='text-3xl font-bold'>
              <Image
                src='/lws-kitchen.png'
                alt='LWS Kitchen'
                width={100}
                height={40}
                className='h-10'
              />
            </Link>
            <p className='text-gray-600 mt-2 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>LWS Kitchen</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/About'
                  className='text-gray-600 hover:text-orange-500'
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href='/Careers'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href='/Contact'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href='/Feedback'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/Terms'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href='/Conditions'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Conditions
                </Link>
              </li>
              <li>
                <Link
                  href='/Cookies'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  href='/Copyright'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Copyright
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Follow</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/Facebook'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href='/Twitter'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href='/Instagram'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href='/Youtube'
                  className='text-gray-600 hover:text-orange-500'
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
