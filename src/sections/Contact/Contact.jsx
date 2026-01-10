import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_lsype2s',
            'template_bluna5a',
            form.current,
            'GgTHXmy3bc4yBwhiZ'
        )
        .then((result) => {
            alert('Message sent successfully!');
            e.target.reset();
        }, (error) => {
            alert('Failed to send message. Please try again.');
        });
    };

    return (
        <section className="contact-section">
            <div className="contact-heading">
                <h2 className="contact-title">Let's Work Together</h2>
                <p className="contact-description">
                    Let's create something amazing together.
                </p>
            </div>
            <div className="contact-layout">    
                <div className="get-in-touch">
                    <h3>Get In Touch</h3>
                    <p>Whether you're looking to build a new product, redesign an existing one, or just want to chat about tech and design, I'd love to hear from you.</p>
                
                    <div className="info-card">
                        <Mail className="w-6 h-6 text-cyan-400 info-icon" />
                        <div className="info-details">
                            <h4>Email</h4>
                            <p>mayasahlami@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <MapPin className="w-6 h-6 text-cyan-400 info-icon" />
                        <div className="info-details">
                            <h4>Location</h4>
                            <p>Ankara, Türkiye</p>
                        </div>
                    </div>
                    <div className="availability-badge">
                            Available for new projects
                        </div>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <h4>Name</h4>
                        <input type="text" name="user_name" placeholder="Your Name" required />
                        <h4>Email</h4>
                        <input type="email" name="user_email" placeholder="Your Email" required />
                        <h4>Message</h4>
                        <textarea name="message" placeholder="Your Message" required ></textarea>
                        <button type="submit">Send Message</button>

                    </form>
                </div>
            </div>
        </section>
    );
}