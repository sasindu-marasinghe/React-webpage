import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="home">
            <header className="header bg-light text-center py-3">
                <h1>Mahee Beauty</h1>
            </header>

            <section className="hero text-white text-center d-flex flex-column justify-content-center align-items-center" id="home">
                <h2>Welcome to Mahee Beauty</h2>
                <p>Your beauty, our passion.</p>
                <Link to="/contact">
                    <button className="btn btn-danger btn-lg">Book an Appointment</button>
                </Link>
            </section>

            <section className="about text-center py-5" id="about">
                <h2>About Us</h2>
                <p>Welcome to Mahee Beauty. We are dedicated to providing the best service possible. Our team of experienced professionals are here to cater to your beauty needs.</p>
            </section>

            <section className="services py-5 bg-light" id="services">
                <div className="container">
                    <h2 className="text-center">Our Services</h2>
                    <div className="row">
                        <div className="col-md-4 service-item">
                            <img src="https://lh6.googleusercontent.com/DIL-VBWpAC65rQJre94Xk-oqcfqgehMrSZLD5idZZqerpjWWgbPEhT6dxjJyBsbXOzv6hhJLfWZBiu30pYQSXwwo5g4I4FncUFe7zQWe2BuODzSiporvBjJ8_c5Alu22oVyEGmkWtDEAD3Qxh-P3NOYj5y2bQdVSGTQ7orpAnZFwW0QKJzJhk3_Np2tEEg" alt="Haircuts" className="img-fluid rounded shadow" />
                            <div className="service-info text-center mt-3">
                                <h3>Haircuts</h3>
                                <p>Experience the best haircuts from our expert stylists who understand your unique hair type and preferences.</p>
                            </div>
                        </div>
                        <div className="col-md-4 service-item">
                            <img src="https://hayleycooper.com.au/wp-content/uploads/2020/04/IMG_9987-1024x683.jpg" alt="Styling" className="img-fluid rounded shadow" />
                            <div className="service-info text-center mt-3">
                                <h3>Styling</h3>
                                <p>Our styling services will help you look your best for any occasion, whether it’s a casual day out or a special event.</p>
                            </div>
                        </div>
                        <div className="col-md-4 service-item">
                            <img src="https://www.southernliving.com/thmb/EGCWhcgPlew9CXS-afT5rgLjahU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/auburn-be634fae9893425a8974fb2fc7f8b91a.jpg" alt="Coloring" className="img-fluid rounded shadow" />
                            <div className="service-info text-center mt-3">
                                <h3>Coloring</h3>
                                <p>Get the perfect color with our range of coloring services, from highlights to full color transformations.</p>
                            </div>
                        </div>
                        <div className="col-md-4 service-item">
                            <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images-stage/growth/blog/1718118774697-1efcda.jpeg" alt="Manicure & Pedicure" className="img-fluid rounded shadow" />
                            <div className="service-info text-center mt-3">
                                <h3>Manicure & Pedicure</h3>
                                <p>Relax and rejuvenate with our luxurious manicure and pedicure services, tailored to your needs.</p>
                            </div>
                        </div>
                        <div className="col-md-4 service-item">
                            <img src="https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1.jpg" alt="Facials" className="img-fluid rounded shadow" />
                            <div className="service-info text-center mt-3">
                                <h3>Facials</h3>
                                <p>Pamper your skin with our range of facials designed to refresh and revitalize your complexion.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact text-center py-5" id="contact">
                <h2>Contact Us</h2>
                <p>Email: info@salonname.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Beauty St, Glamour City</p>
            </section>

            <footer className="footer bg-dark text-white text-center py-3">
                <p>&copy; 2024 Salon Name. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
