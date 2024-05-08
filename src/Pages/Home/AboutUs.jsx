import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h1 className="text-5xl font-bold text-orange-700">About Us</h1>
                    <h3 className='text-5xl font-bold'>We are qualified & of experience in this field</h3>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br />
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error text-xl text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;