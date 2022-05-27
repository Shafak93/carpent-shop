import React from 'react';
import contact from '../../../banner/contactus.jpg'

const ContactUs = () => {
    return (
        <div className='flex justify-around items-center py-12'>
            <div className='lg:w-96 md:w-40'>
                <img className=' rounded' src={contact} alt="" />
            </div>
            <div>
                <form>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 pb-10'>
                    <input type="text" placeholder="First Name" class="input input-bordered input-primary lg:w-full max-w-xs" />
                    <input type="text" placeholder="Last Name" class="input input-bordered input-primary lg:w-full max-w-xs" />
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 pb-10'>
                    <input type="text" placeholder="Your Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Your Email" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <textarea class="textarea textarea-primary w-full h-40" placeholder="Your Message"></textarea>
                <button class="btn btn-outline btn-primary">Contact Us</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;