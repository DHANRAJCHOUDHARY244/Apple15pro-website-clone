import { footerLinks } from '../constants'
const Footer = () => {
    return (
        <footer className='py-5 sm:px-10 px-5'>
            <div className="screen-max-width">
                <div>
                    <p className='font-semibold text-gray text-xs'>More ways to shop:{' '}
                        <span className='underline text-blue'>Find an Apple Store</span>{'  '}
                        or{' '}
                        <span className='underline text-blue'>Other retailers{' '}</span>
                        near you.
                    </p>
                    <p className='font-semibold text-gray text-xs'>More ways to shop:{' '}
                        Or call 000800-040-1966
                    </p>
                </div>
                <div className=' bg-neutral-700 my-5 h-[1px]' />
                <div className="flex md:flex-row flex-col">
                    <p className='font-semibold text-gray text-xs'>
                        Copyright @ 2024 Apple Inc. All righgts Reserved
                    </p>
                    <div className='flex'>
                        {footerLinks.map((link, i) => (
                            <p key={link} className='font-semibold text-gray text-xs'>
                                {link}{' '}
                                {i !== footerLinks.length - 1 && (
                                    <span className='mx-2'> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                    <div className=' bg-neutral-700 my-5 h-[1px]' />
                    <div className='flex justify-center'>
                        <p className='font-semibold text-gray text-xs'>
                            <span className='mx-2'> Made with 💞 By <a href="https://portfoli2.vercel.app/" >Dhanraj</a>  </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
