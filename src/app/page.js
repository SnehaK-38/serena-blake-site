'use client';

import Image from 'next/image';
import { FaLeaf } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function HeroAbout() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'This field is required';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'This field is required';
    if (!formData.agree) newErrors.agree = 'You must agree to be contacted';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Form submitted successfully!');
      // Integrate backend/Formspree/EmailJS here
    }
  };

  return (
    <main className="bg-frost-700">

      {/* Hero Section */}
      <section className="relative bg-gray-300">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/your-background-image.jpg')" }}
        />
        <div className="relative z-10 max-w-4xl px-6 py-20 text-left ml-2 md:ml-6">
          <div className="flex items-center space-x-4 mb-6">
            <FaLeaf className="text-green-700 text-4xl md:text-5xl" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold uppercase">Dr. Serena Blake, PsyD</h1>
              <h2 className="text-2xl md:text-3xl uppercase">Clinical Psychologist</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Banner Section */}
      <section
        className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: "url('https://media.giphy.com/media/vSd9qsK9UA0Cc/giphy.gif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-2xl p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Compassionate Psychological Care for Healing and Growth
          </h1>
          <p className="text-lg md:text-2xl text-black mb-8 drop-shadow-md">
            Providing individual psychotherapy for adults seeking meaningful change, deeper insight, and emotional well-being.
            <br /><br />
            Sessions are available via telehealth for clients across India and globally, ensuring accessible, confidential care from the comfort of your home.
          </p>
          <Link href="https://docs.google.com/forms/d/1jrSm3mcicFxZs3lEkFl6yt13pqRcmibRyMefBuMSQ4Q/edit" target="_blank">
            <button className="mt-4 bg-blue-700 text-white px-8 py-4 rounded-full text-lg md:text-xl hover:bg-pink-800 transition">
              Get Appointment
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center bg-white">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Dr. Serena Blake</h2>
          <p className="mb-6 text-lg md:text-xl">
            Therapy can be a space where you invest in yourself—one of the highest forms of self-care. You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships.
          </p>
          <p className="text-lg md:text-xl">
            I bring years of experience supporting individuals through life’s challenges, helping them find resilience, clarity, and a renewed sense of purpose in a safe and compassionate environment.
          </p>
        </div>
        <div>
          <Image
            src="https://quilted-libra-91f.notion.site/image/attachment%3Afcdeffc3-7fce-4ca7-a4ea-a0888f182399%3Aimage.png?table=block&id=21f4db5d-d615-8076-8a1c-fd184ea4e5df&spaceId=e434db5d-d615-814a-b090-0003034cd63a&width=290&userId=&cache=v2"
            alt="Dr. Serena Blake"
            width={500}
            height={500}
            className="rounded-xl shadow-lg w-full"
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{`"Healing doesn't mean the damage never existed. It means it no longer controls your life."`}</h2>

        <p className="text-lg md:text-xl">
          Therapy can help you process what happened while reclaiming your strength and peace, allowing you to move forward with hope and self-compassion.
        </p>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center bg-white">
        {[
          { title: 'Anxiety & Stress Management', desc: 'Anxiety and stress can often make everyday life feel overwhelming. You might experience a racing heart, constant worry, or feel easily triggered by small things. Through therapy, you can learn to understand these emotions and develop effective tools to manage them, such as deep breathing, relaxation exercises, and building healthier thought patterns. This helps you feel calmer and more in control in your daily life.', img: '/service1.jpg' },
          { title: 'Relationship Counseling', desc: 'Relationships are a source of love and support, but misunderstandings and conflicts can create challenges. Relationship counseling offers a safe space for you and your partner to openly share your feelings and needs without fear of judgment. During this process, you learn healthy communication skills, ways to understand and resolve conflicts, and steps to rebuild trust. It can help strengthen your connection and bring more understanding and closeness to your relationship.', img: '/service-2.png' },
          { title: 'Trauma Recovery', desc: 'The effects of trauma do not end in a moment; they can leave you with ongoing negative thoughts, nightmares, and emotional pain. Trauma recovery therapy provides a safe environment where you can process painful memories at your own pace. Through this journey, you can focus on healing, develop self-compassion, and gradually reclaim your life with a sense of strength and wholeness.', img: '/service-3.png' },
        ].map((service, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-4">
            <Image src={service.img} alt={service.title} width={400} height={300} className="rounded-md w-full mb-4" />
            <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
            <p className="text-base md:text-lg">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Session Fees Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Session Fees</h2>
        <p className="text-lg md:text-xl mb-2">1. $200 / individual session</p>
        <p className="text-lg md:text-xl mb-2">2. $240 / couples session</p>
        <p className="text-lg md:text-xl mb-4">I accept both private pay and insurance. I am in-network with BCBS and Aetna.</p>
        <p className="text-lg md:text-xl">For out-of-network plans, I’ve partnered with Mentaya to help check your eligibility for reimbursement.</p>
      </section>

      {/* Quote with BG */}
      <section
        className="relative w-full py-20 text-center text-white"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/1933330.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{`"Healing doesn't mean the damage never existed. It means it no longer controls your life."`}</h2>

          <p className="text-lg md:text-xl">— Akshay Dubey</p>
        </div>
      </section>

      {/* Contact Section with BG */}
      <section
        className="relative w-full py-20 text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dr. Serena Blake, PsyD (Clinical Psychologist)</h2>
          <p className="text-lg md:text-xl mb-2"><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p className="text-lg md:text-xl mb-2"><strong>Contact:</strong> (323) 555-0192 | <a href="mailto:serena@blakepsychology.com" className="underline">serena@blakepsychology.com</a></p>
          <p className="text-lg md:text-xl mb-2"><strong>Office Hours:</strong> Tue & Thu (10 AM–6 PM), Virtual: Mon, Wed & Fri (1 PM–5 PM)</p>
          <p className="text-lg md:text-xl mt-4"><strong>Experience:</strong> 8 years of practice, 500+ sessions</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">FAQ</h3>
        {[
          { question: 'Do you accept insurance?', answer: 'No, but a superbill is provided for self-submission.' },
          { question: 'Are online sessions available?', answer: 'Yes—all virtual sessions via Zoom.' },
          { question: 'What is your cancellation policy?', answer: '24-hour notice required.' },
        ].map((faq, idx) => (
          <div key={idx} className="border-b border-gray-300 py-4">
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center text-lg md:text-xl font-semibold"
            >
              {faq.question}
              <span>{openIndex === idx ? '-' : '+'}</span>
            </button>
            {openIndex === idx && (
              <p className="mt-2 text-base md:text-lg text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h3>
        <form
          onSubmit={handleSubmit}
          className="bg-[#f9f9f6] border border-black rounded-xl p-6 space-y-4"
        >
          {['name', 'phone', 'email', 'preferredTime'].map((field) => (
            <div key={field}>
              <label className="block mb-1 font-medium capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
              {errors[field] && <p className="text-red-600 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}
          <div>
            <label className="block mb-1 font-medium">What brings you here?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded p-2"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-5 w-5"
            />
            <label className="font-medium">I agree to be contacted</label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
      </section>     
       {/* Footer */}
      <footer className="text-center text-gray-600 text-sm py-6">
        © 2025 Dr. Serena Blake, PsyD Psychological Services, PLLC. All rights reserved.
      </footer>


    </main>
  );
}
      