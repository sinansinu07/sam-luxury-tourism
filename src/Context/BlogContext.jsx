import React, { createContext, useContext, useState } from 'react';
import image1 from '../Assets/Blogs/1.webp'; 
import image2 from '../Assets/Blogs/2.webp'; 
import image3 from '../Assets/Blogs/3.webp'; 
import image4 from '../Assets/Blogs/4.png';  
import image5 from '../Assets/Blogs/5.webp'; 
import image6 from '../Assets/Blogs/6.webp'; 
import image7 from '../Assets/Blogs/7.webp'; 
import image8 from '../Assets/Blogs/8.webp'; 
import image9 from '../Assets/Blogs/9.webp'; 
import image10 from '../Assets/Blogs/10.webp'; 
import authorAvatar from '../Assets/Blogs/author.png'; 


const BlogContext = createContext(undefined);

const mockPosts = [
  {
    id: '1',
    slug: 'private-luxury-tours-exclusive-destinations',
    title: 'Discover the Best Private Luxury Tours to the Most Exclusive Luxury Vacation Destinations',
    excerpt: 'When it comes to crafting the perfect vacation, luxury travelers seek more than just a getaway — they crave unique and unforgettable experiences. At Sam Luxury Tours, we specialize in offering bespoke private luxury tours that cater to your every need.',
    content: `
      <p>When it comes to crafting the perfect vacation, luxury travelers seek more than just a getaway — they crave unique and unforgettable experiences. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in offering bespoke private luxury tours that cater to your every need. Whether you’re looking for a peaceful retreat or an adventure in some of the world’s most luxury vacation destinations, we provide a tailored experience that matches your desires.</p>
      <h2>Why Choose Private Luxury Tours?</h2>
      <p>A private luxury tour provides an unparalleled level of service and customization. Unlike traditional tours, private tours ensure that your itinerary is completely tailored to your interests, preferences, and pace. With a dedicated guide and a seamless itinerary, you can explore the most exclusive destinations without worrying about the usual tourist crowds.</p>
      <p>Whether you want to explore secluded beaches, dine at Michelin-starred restaurants, or visit cultural landmarks with an expert guide, a private tour offers a level of flexibility that standard packages simply can’t match. This means you can truly immerse yourself in the destinations you visit and make lasting memories.</p>
      <h2>Explore Exclusive Travel Experiences Around the Globe</h2>
      <p>Traveling isn’t just about visiting a place; it’s about creating memories and experiences that stay with you long after the trip ends. That’s why our exclusive travel experiences are designed to elevate your journey. Imagine a private wine-tasting tour in the vineyards of Tuscany, a helicopter ride over the Grand Canyon, or an after-hours private museum tour in Paris. These unique experiences not only offer a deeper understanding of the destination but also provide a rare and unforgettable perspective.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we partner with exclusive hotels, private estates, and luxury service providers to ensure that every moment of your journey is extraordinary. From private yachts in the Caribbean to private safaris in Africa, we can craft an experience that matches your interests and dreams.</p>
      <h2>Top Luxury Vacation Destinations You Won’t Want to Miss</h2>
      <p>Luxury travel isn’t just about where you stay, but also where you go. The world is full of breathtaking destinations that offer both indulgence and adventure. Some of the most sought-after luxury vacation destinations include:</p>
      <ul>
        <li><strong>The Maldives</strong>: Known for its overwater bungalows and crystal-clear waters, the Maldives is the epitome of relaxation and natural beauty.</li>
        <li><strong>Switzerland</strong>: A paradise for winter sports lovers, Switzerland boasts the Alps, world-class ski resorts, and stunning views.</li>
        <li><strong>Italy</strong>: From the romance of Venice to the charm of Tuscany, Italy offers a combination of culture, history, and culinary delights.</li>
        <li><strong>Japan</strong>: A perfect blend of traditional culture and modern luxury, Japan offers travelers a unique mix of historical sites and high-end amenities.</li>
      </ul>
      <p>Whether you want to unwind in the serene landscapes of the Maldives or experience the sophistication of Paris, there are endless options for a luxury vacation destination that suits your preferences.</p>
      <h2>Plan Your Journey with Sam Luxury Tours</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we make it easy to plan your next exclusive getaway. Our team of experts is dedicated to providing exceptional service and creating itineraries that exceed expectations. We’re here to help you craft the perfect private luxury tour that is tailored just for you.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to begin planning your dream vacation today. If you want to explore more luxury destinations and get tips on travel, we recommend checking out this <a href="/luxury-travel-guide">luxury travel guide</a> for additional inspiration.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in luxury tours.' },
    category: 'Luxury Travel',
    tags: ['Private luxury tours', 'Exclusive travel experiences', 'Luxury vacation destinations'],
    publishedAt: '2024-01-15',
    readTime: 8,
    featured: true,
    image: image1 // 'https://images.pexels.com/photos/358191/pexels-photo-358191.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    slug: 'luxury-tours-for-couples-tailored-vacations',
    title: 'Experience the Perfect Luxury Tours for Couples with Tailored Luxury Vacations',
    excerpt: 'When it comes to creating unforgettable memories, there’s nothing quite like a luxury tour for couples. At Sam Luxury Tours, we specialize in crafting tailored luxury vacations that are designed around your specific desires and preferences.',
    content: `
      <p>When it comes to creating unforgettable memories, there’s nothing quite like a luxury tour for couples. Whether you're celebrating a milestone or simply enjoying a romantic escape, a tailored experience allows you to immerse yourself in the luxury and serenity that you both deserve. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in crafting tailored luxury vacations that are designed around your specific desires and preferences, ensuring a truly personal and romantic getaway.</p>
      <h2>Why Choose Luxury Tours for Couples?</h2>
      <p>Couples who seek intimate, exclusive experiences will find that luxury tours for couples offer an unparalleled escape from the ordinary. Unlike typical tours, these are designed to create an atmosphere of privacy and luxury. You’ll experience the finest accommodations, gourmet dining, and exclusive activities that enhance your time together.</p>
      <p>From private beachfront dinners to champagne-filled helicopter tours over stunning landscapes, luxury tours for couples offer once-in-a-lifetime experiences that go beyond the ordinary. These personalized tours allow you to bond in a serene environment without the distractions of large tourist crowds.</p>
      <h2>Crafting Your Dream Tailored Luxury Vacation</h2>
      <p>One of the key benefits of choosing <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> is the ability to create a tailored luxury vacation that fits your unique preferences. Rather than selecting from a list of pre-packaged experiences, you and your partner can have complete control over your itinerary, from selecting the destinations to choosing the activities you want to pursue.</p>
      <p>Whether you dream of a romantic escape in the Maldives, a cultural experience in Italy, or an adventurous retreat in Africa, we work closely with you to design a personalized itinerary that ensures every moment is special. With private transfers, luxurious accommodations, and experiences tailored to your desires, a tailored luxury vacation offers flexibility and comfort that standard vacations cannot match.</p>
      <h2>The Benefit of Private Guided Tours for Couples</h2>
      <p>One of the highlights of a tailored luxury vacation is the opportunity to enjoy private guided tours. Instead of being part of a large group, you and your partner will have a dedicated guide to show you around, ensuring that your journey is both informative and intimate.</p>
      <p>Imagine a private tour through the romantic streets of Venice or a personalized wine-tasting experience in Bordeaux, all with a knowledgeable guide who can share insights that you wouldn’t get on a standard tour. Private guided tours offer an exclusive experience, ensuring that you have the undivided attention of your guide, making the tour more personalized and engaging.</p>
      <p>These tours also offer flexibility, so if you find a particular place or experience captivating, your guide can adjust the schedule to accommodate your interests. This level of customization ensures that your private guided tour is as unique as your relationship.</p>
      <h2>Plan Your Perfect Romantic Getaway with Sam Luxury Tours</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we believe that every couple deserves the perfect escape. Our expert team is dedicated to designing luxury tours for couples that are completely personalized, offering you a vacation that’s as unique as your relationship.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to start planning your dream getaway. For more inspiration and luxury travel ideas, we also recommend reading this <a href="/couples-travel-guide">couples’ travel guide</a> for expert advice on planning the perfect romantic vacation.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in guided tours.' },
    category: 'Couples Travel',
    tags: ['Luxury tours for couples', 'Tailored luxury vacations', 'Private guided tours'],
    publishedAt: '2024-01-20',
    readTime: 9,
    featured: false,
    image: image2 //'https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    slug: 'luxury-adventure-tours-escorted-custom',
    title: 'Embark on Unforgettable Luxury Adventure Tours and Luxury Escorted Tours',
    excerpt: 'For those who seek to combine the thrill of adventure with the comfort and sophistication of luxury, luxury adventure tours offer an unparalleled experience. At Sam Luxury Tours, we specialize in curating extraordinary itineraries.',
    content: `
      <p>For those who seek to combine the thrill of adventure with the comfort and sophistication of luxury, luxury adventure tours offer an unparalleled experience. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in curating extraordinary itineraries that cater to both your sense of adventure and your desire for high-end luxury. Whether you’re exploring rugged terrains or discovering cultural treasures, our luxury escorted tours and custom luxury tours promise to deliver an unforgettable journey.</p>
      <h2>Experience the Best of Both Worlds with Luxury Adventure Tours</h2>
      <p>Luxury adventure tours are perfect for those who crave the excitement of exploration, but refuse to compromise on comfort and style. These tours are designed to take you off the beaten path, from remote safaris in Africa to trekking through the majestic landscapes of Patagonia, all while ensuring you enjoy the finest accommodations and personalized service.</p>
      <p>Imagine zip-lining through the rainforests of Costa Rica, kayaking in the pristine waters of New Zealand, or embarking on a private guided expedition to the top of Machu Picchu — all with the convenience of luxury hotels, private chefs, and seamless transfers. Luxury adventure tours let you experience the thrill of adventure, while indulging in the comforts and exclusivity that luxury travel provides.</p>
      <h2>Why Choose Luxury Escorted Tours for Your Next Vacation?</h2>
      <p>For travelers who prefer a more structured yet personalized experience, luxury escorted tours offer a perfect blend of adventure, culture, and luxury. These tours are led by expert guides who provide insights into the history, culture, and unique characteristics of each destination, ensuring that your vacation is not only exciting but also enriching.</p>
      <p>From private tours of Europe’s most iconic cities to personalized expeditions through the temples of Southeast Asia, luxury escorted tours offer the perfect balance of guided exploration and relaxation. You’ll have access to exclusive venues, skip-the-line entry to major attractions, and behind-the-scenes experiences that would be unavailable on a typical tour. The luxury aspect is evident throughout, from first-class transportation to five-star accommodations, making your journey as comfortable as it is memorable.</p>
      <h2>Craft Your Perfect Getaway with Custom Luxury Tours</h2>
      <p>One of the best ways to ensure a unique and personalized vacation is through custom luxury tours. Unlike typical group tours, custom luxury tours are tailored specifically to your preferences, allowing you to choose the destinations, experiences, and activities that best match your interests. Whether you’re looking to enjoy a relaxing beach retreat in the Maldives or a cultural exploration of Japan, we can design an itinerary that caters to your exact needs.</p>
      <p>The beauty of custom luxury tours lies in their flexibility. You can choose to spend more time in a particular city, add unique activities like private cooking classes or VIP access to cultural events, or even combine multiple destinations into one incredible trip. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we work closely with you to design a bespoke itinerary that brings your dream vacation to life, ensuring that every detail is meticulously planned and executed.</p>
      <h2>Why Choose Sam Luxury Tours for Your Luxury Adventure Tours?</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we pride ourselves on offering not just luxury, but also unforgettable experiences. Our team of expert travel designers is dedicated to creating personalized itineraries that blend adventure, culture, and relaxation. Whether you’re interested in luxury adventure tours, luxury escorted tours, or custom luxury tours, we ensure that every moment of your trip is seamless, comfortable, and extraordinary.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to begin planning your next bespoke journey. For further insights and tips on luxury travel, we recommend exploring this <a href="/luxury-travel-blog">luxury travel blog</a> for ideas and inspiration.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in adventure tours.' },
    category: 'Adventure Travel',
    tags: ['Luxury adventure tours', 'Luxury escorted tours', 'Custom luxury tours'],
    publishedAt: '2024-01-25',
    readTime: 12,
    featured: true,
    image: image3 //'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    slug: 'luxury-travel-packages-holiday-vip',
    title: 'Discover the Ultimate in Comfort with Luxury Travel Packages and Luxury Holiday Tours',
    excerpt: 'When it comes to planning a getaway that combines both relaxation and adventure, nothing beats luxury travel packages. At Sam Luxury Tours, we specialize in curating luxury travel packages that are designed to meet your every need.',
    content: `
      <p>When it comes to planning a getaway that combines both relaxation and adventure, nothing beats luxury travel packages. Whether you’re looking for a serene beach retreat, a cultural exploration, or an adrenaline-filled vacation, these packages offer the perfect balance of opulence and experience. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in curating luxury travel packages that are designed to meet your every need, ensuring your journey is seamless and unforgettable.</p>
      <h2>Why Choose Luxury Travel Packages?</h2>
      <p>A luxury travel package takes the stress out of vacation planning. Instead of worrying about flights, accommodations, transfers, and activities, a package brings everything together into one easy-to-manage experience. These packages often include luxury accommodations, exclusive experiences, personalized itineraries, and VIP treatment every step of the way.</p>
      <p>Whether you dream of a private safari in Africa, a romantic getaway in the French Riviera, or a customized tour through the cultural landmarks of Japan, luxury travel packages offer a tailor-made solution to make your trip as relaxing as it is exciting. The beauty of these packages lies in the convenience and peace of mind they offer, ensuring that every moment of your vacation is curated to perfection.</p>
      <h2>Explore the Best of the World with Luxury Holiday Tours</h2>
      <p>When it comes to a memorable vacation, there’s no better way to experience the world than through luxury holiday tours. These tours are designed to offer you a comprehensive experience of a destination while indulging in the finest luxury. From private guided tours to exquisite gourmet meals, a luxury holiday tour ensures that you see the best that a region has to offer — without compromising on comfort or style.</p>
      <p>Imagine spending your days lounging on private beaches, enjoying exclusive experiences, and discovering hidden gems with the help of a local guide. Whether you choose a cultural holiday in Europe, an exotic retreat in Asia, or a relaxing escape in the Caribbean, luxury holiday tours give you the opportunity to explore the world in the utmost comfort.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we offer a variety of luxury holiday tours that cater to every interest, from adventurous explorations to romantic escapes. You’ll be treated to personalized itineraries that highlight the best sights and experiences of your chosen destination, making sure you get the most out of your luxury vacation.</p>
      <h2>VIP Tours: Elevating Your Travel Experience</h2>
      <p>For those who want the absolute best in luxury travel, VIP tours provide an experience unlike any other. These tours are designed to provide exclusive access to the world’s most prestigious and sought-after attractions, offering you an unrivaled level of service and comfort. From private yacht tours to behind-the-scenes access at famous museums, VIP tours ensure that you experience a destination in a way that is truly unique.</p>
      <p>Whether you’re enjoying VIP entry to the Louvre, taking a private tour of the Colosseum in Rome, or enjoying a helicopter ride over the Grand Canyon, VIP tours provide unparalleled luxury and access. These tours are perfect for travelers who want a truly exclusive and memorable vacation.</p>
      <h2>Why Choose Sam Luxury Tours for Your Luxury Travel Packages?</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we are dedicated to providing our clients with the highest level of luxury and personalized service. Whether you’re booking a luxury travel package, a luxury holiday tour, or a VIP tour, we ensure that your vacation is everything you’ve dreamed of and more.</p>
      <p>We take the time to understand your preferences and create customized itineraries that make the most of your travel experience. From private guides to first-class accommodations, our team works tirelessly to create seamless and memorable experiences.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to explore our range of luxury travel packages and start planning your dream vacation today. For more information on luxury travel experiences, check out this <a href="/luxury-travel-blog">luxury travel blog</a> for expert advice and travel tips.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in holiday tours.' },
    category: 'Luxury Packages',
    tags: ['Luxury travel packages', 'Luxury holiday tours', 'VIP tours'],
    publishedAt: '2024-02-01',
    readTime: 10,
    featured: true,
    image: image4 //'https://images.pexels.com/photos/5708375/pexels-photo-5708375.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    slug: 'explore-world-luxury-tours-experiences',
    title: 'Explore the World with Exclusive Luxury Tours and Unforgettable Luxury Travel Experiences',
    excerpt: 'When it comes to the ultimate getaway, luxury tours offer a blend of comfort, adventure, and exclusivity that will elevate your travel experience. At Sam Luxury Tours, we curate luxury travel experiences that allow you to explore the world in unparalleled style.',
    content: `
      <p>When it comes to the ultimate getaway, luxury tours offer a blend of comfort, adventure, and exclusivity that will elevate your travel experience. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we curate luxury travel experiences that allow you to explore the world in unparalleled style. Whether you’re seeking relaxation, adventure, or cultural immersion, our carefully crafted tours ensure that every moment is designed to exceed your expectations.</p>
      <p>Discover the world’s most luxury vacation destinations, all while enjoying the best accommodations, service, and activities that each place has to offer.</p>
      <h2>What Makes Luxury Tours So Special?</h2>
      <p>Luxury tours are all about exclusivity and personalization. They’re designed to cater to your specific preferences, ensuring you experience the destinations of your dreams while enjoying the finest comforts. Unlike typical tours, luxury tours offer curated itineraries that allow you to explore new places at your own pace, whether it’s a private beach in the Maldives or a guided city tour of Paris’ hidden gems.</p>
      <p>Every detail of a luxury tour is taken care of — from seamless transfers and private transportation to exquisite accommodations at five-star resorts and boutique hotels. These tours are designed for those who appreciate the finer things in life and wish to travel without the usual stress of planning.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in creating bespoke experiences that fit your unique tastes. Our goal is to offer you the best in luxury, whether that’s an intimate getaway or a grand adventure with your closest companions.</p>
      <h2>Unveil the Most Exclusive Luxury Travel Experiences</h2>
      <p>A luxury travel experience is more than just a vacation —it’s a carefully planned journey designed to offer you unforgettable moments. Imagine a private wine tasting at a world-renowned vineyard, a personal chef preparing your meals in a private villa, or a helicopter tour of the Grand Canyon. These are just a few examples of the luxury travel experiences we offer at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>.</p>
      <p>We believe that luxury travel experiences should be as unique as the travelers themselves. Our team of experts works with you to curate experiences that match your interests, whether you’re an art enthusiast, an adventure seeker, or someone simply looking for the ultimate relaxation. From private guided tours to once-in-a-lifetime experiences, we ensure every moment of your journey is as extraordinary as the destination itself.</p>
      <h2>Discover Luxury Vacation Destinations You’ll Never Forget</h2>
      <p>One of the best aspects of booking a luxury tour is the chance to visit some of the world’s most iconic luxury vacation destinations. Whether you’re dreaming of a lavish getaway to the Mediterranean, a serene retreat in the Maldives, or an exotic adventure in the African wilderness, we can make your dream vacation a reality.</p>
      <p>Some of the top luxury vacation destinations include:</p>
      <ul>
        <li><strong>The Maldives</strong>: Known for its crystal-clear waters and overwater bungalows, the Maldives is the ultimate escape for those seeking privacy and relaxation.</li>
        <li><strong>Paris, France</strong>: Experience romance in the air, with private tours of world-famous landmarks like the Eiffel Tower and exclusive access to the Louvre.</li>
        <li><strong>Santorini, Greece</strong>: A stunning blend of history, culture, and natural beauty, Santorini offers breathtaking views, luxury villas, and unforgettable sunsets.</li>
        <li><strong>Safari in South Africa</strong>: Embark on a luxury safari to witness the beauty of Africa’s wildlife in the most exclusive game reserves.</li>
      </ul>
      <p>No matter where you choose to go, our luxury vacation destinations offer the perfect setting for creating cherished memories that will last a lifetime.</p>
      <h2>Plan Your Next Luxury Tour with Sam Luxury Tours</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we are committed to providing you with the best possible luxury experience. Whether you’re interested in a luxury tour that takes you through the culture-rich streets of Italy or a luxury travel experience that introduces you to remote, untouched destinations, we ensure every detail is taken care of for you.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to explore our curated itineraries and begin planning your next bespoke journey. For more inspiration, check out this <a href="/luxury-travel-guide">luxury travel guide</a> to get expert advice and learn more about the world’s most exclusive destinations.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in Luxury tours.' },
    category: 'Luxury Travel',
    tags: ['Luxury tours', 'Luxury travel experiences', 'Luxury vacation destinations'],
    publishedAt: '2024-02-05',
    readTime: 11,
    featured: true,
    image: image5 //'https://images.pexels.com/photos/161956/santorini-oia-greece-travel-161956.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    slug: 'unforgettable-luxury-tours-for-couples-exclusive-experiences',
    title: 'Unforgettable Luxury Tours for Couples and Exclusive Travel Experiences',
    excerpt: 'When it comes to planning the ultimate romantic getaway, nothing compares to a luxury tour for couples. At Sam Luxury Tours, we specialize in creating tailor-made itineraries that cater to couples who crave both intimacy and adventure.',
    content: `
      <p>When it comes to planning the ultimate romantic getaway, nothing compares to a luxury tour for couples. Whether you’re celebrating an anniversary, honeymoon, or simply looking to escape the everyday, these exclusive tours offer the perfect blend of romance, luxury, and unforgettable experiences. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in creating tailor-made itineraries that cater to couples who crave both intimacy and adventure.</p>
      <h2>Why Choose Luxury Tours for Couples?</h2>
      <p>A luxury tour for couples offers more than just an escape —it’s about creating lasting memories together. From private villas overlooking crystal-clear waters to candlelit dinners in the heart of a city, our luxury tours offer experiences that go beyond the ordinary. Each detail is meticulously crafted to ensure you both enjoy the finest comforts and unique moments during your journey.</p>
      <p>Whether you dream of a private sunset cruise in the Mediterranean, a romantic getaway in the Swiss Alps, or a vineyard tour in Tuscany, luxury tours for couples provide the ultimate escape. These bespoke tours are designed to cater to your desires, ensuring you have the time of your life in a serene and exclusive environment.</p>
      <h2>Elevate Your Travel with Exclusive Travel Experiences</h2>
      <p>For those looking to make their getaway even more extraordinary, exclusive travel experiences are the perfect option. These experiences are crafted to offer one-of-a-kind adventures that you simply won’t find on a typical tour. Imagine enjoying a private helicopter ride over the Grand Canyon, attending an exclusive opera performance in Vienna, or embarking on a private guided tour through ancient temples in Egypt.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we offer exclusive travel experiences that cater to every couple’s interests. Whether you’re passionate about art, history, nature, or adventure, our team will work with you to create an experience that suits your taste. Enjoy the best seats at world-class events, indulge in fine dining experiences, or visit hidden gems that only the most exclusive tours can access.</p>
      <h2>Discover New Destinations with Luxury Escorted Tours</h2>
      <p>For couples who prefer the guidance of an expert but still want to enjoy a luxurious experience, luxury escorted tours are an excellent option. These tours provide a structured yet intimate experience, where you’ll have access to private guides and exclusive sites. Our professional tour guides will share local knowledge, taking you to the most iconic landmarks and hidden treasures that make your journey even more memorable.</p>
      <p>From private tours of the Louvre in Paris to exclusive trips to the Swiss countryside, luxury escorted tours allow you to explore destinations with the convenience of personalized service. You’ll never have to worry about logistics or waiting in line — everything is arranged for you, leaving you free to enjoy the beauty of each destination in comfort.</p>
      <h2>Why Choose Sam Luxury Tours for Your Luxury Tours for Couples?</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we understand that every couple has unique preferences and dreams for their getaway. Our team specializes in creating bespoke itineraries that cater specifically to your needs, ensuring your experience is as romantic and luxurious as possible.</p>
      <p>Whether you’re interested in a luxury tour for couples, seeking exclusive travel experiences, or embarking on one of our luxury escorted tours, we guarantee that your trip will exceed your expectations.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to start planning your dream getaway. For more inspiration and insights into luxury travel, check out this <a href="/luxury-travel-blog">luxury travel blog</a> for expert tips and destination ideas.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in travel experiences.' },
    category: 'Couples Travel',
    tags: ['Luxury tours for couples', 'Exclusive travel experiences', 'Luxury escorted tours'],
    publishedAt: '2024-02-10',
    readTime: 10,
    featured: false,
    image: image6 //'https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    slug: 'explore-world-private-luxury-adventure-tours',
    title: 'Explore the World with Private Luxury Tours and Luxury Adventure Tours',
    excerpt: 'When it comes to traveling in style, private luxury tours offer a level of exclusivity and comfort that transforms an ordinary vacation into an extraordinary adventure. Sam Luxury Tours specializes in providing unforgettable journeys through luxury adventure tours and beyond.',
    content: `
      <p>When it comes to traveling in style, private luxury tours offer a level of exclusivity and comfort that transforms an ordinary vacation into an extraordinary adventure. Whether you're seeking to explore remote corners of the world or enjoy tailored experiences in the world's most luxurious destinations, <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> specializes in providing unforgettable journeys through luxury adventure tours and beyond.</p>
      <h2>Why Choose Private Luxury Tours?</h2>
      <p>Private luxury tours are the ultimate way to explore new destinations at your own pace, with personalized itineraries designed around your preferences. From private transfers to handpicked accommodations, every detail is curated to provide you with a seamless travel experience. These tours are perfect for travelers who desire privacy, flexibility, and exclusivity without the stress of navigating crowded tourist spots.</p>
      <p>Imagine a guided tour through the stunning landscapes of New Zealand, a private wine tasting in the vineyards of Bordeaux, or a bespoke journey through the cultural heart of Japan — each private luxury tour ensures that you can explore the world's most breathtaking locations while enjoying first-class service and luxury.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in creating customized experiences that cater to your specific desires. Whether you’re looking for a relaxing retreat or a unique adventure, our expert team is dedicated to designing a trip that exceeds your expectations.</p>
      <h2>Discover Unique Luxury Adventure Tours</h2>
      <p>For travelers who crave excitement along with luxury, luxury adventure tours offer the perfect blend of thrill and comfort. These tours are designed for those who want to explore remote or rugged locations without sacrificing the comforts of high-end travel. From private safaris in Africa to trekking the Himalayan foothills, luxury adventure tours offer a once-in-a-lifetime experience, allowing you to engage with nature while enjoying exclusive amenities.</p>
      <p>Imagine experiencing the wild beauty of Patagonia from the comfort of a luxury lodge, or sailing through the Caribbean on a private yacht, all while surrounded by stunning views and personalized service. Luxury adventure tours are perfect for those who want to combine adrenaline with indulgence. Whether you're looking for an adrenaline rush or a peaceful nature retreat, these tours cater to a wide range of interests, all while ensuring top-tier luxury and comfort.</p>
      <h2>Choosing the Right Luxury Travel Company</h2>
      <p>With so many luxury travel companies available today, it can be challenging to find the right one to meet your needs. What sets <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> apart from other luxury travel companies is our dedication to creating personalized, stress-free travel experiences that cater to the individual needs of our clients.</p>
      <p>We work closely with you to understand your interests and goals for the trip, tailoring every detail to ensure that your vacation is not only luxurious but also unforgettable. Whether you’re planning a private luxury tour or a luxury adventure tour, our team is committed to providing the highest level of service, ensuring your journey is flawless from start to finish.</p>
      <p>We only partner with the finest service providers in the industry, ensuring that your accommodations, activities, and transfers are of the highest standard. With our expertise and knowledge of the luxury travel industry, we guarantee that your trip will be a seamless, once-in-a-lifetime experience.</p>
      <h2>Plan Your Next Private Luxury Tour with Sam Luxury Tours</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we offer the finest in private luxury tours, luxury adventure tours, and bespoke travel experiences that cater to every interest and desire. Whether you want to explore hidden gems, embark on thrilling adventures, or simply relax in luxury, we are here to turn your travel dreams into reality.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to explore our luxury offerings and start planning your next dream vacation. For more inspiration on luxury travel experiences, check out this <a href="/luxury-travel-guide">luxury travel guide</a> for expert tips and ideas.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in adventure tours.' },
    category: 'Luxury Travel',
    tags: ['Private luxury tours', 'Luxury travel companies', 'Luxury adventure tours'],
    publishedAt: '2024-02-15',
    readTime: 12,
    featured: false,
    image: image7 //'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    slug: 'perfect-getaway-custom-luxury-tours-packages',
    title: 'Discover the Perfect Getaway with Custom Luxury Tours and Luxury Travel Packages',
    excerpt: 'When it comes to planning the perfect vacation, nothing compares to the flexibility and exclusivity of custom luxury tours. Sam Luxury Tours specializes in offering luxury travel packages that cater to your specific needs and desires.',
    content: `
      <p>When it comes to planning the perfect vacation, nothing compares to the flexibility and exclusivity of custom luxury tours. Whether you're looking for a relaxing retreat, an adventurous escape, or a cultural exploration, <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, specializes in offering luxury travel packages that cater to your specific needs and desires. These tailor-made journeys ensure that every moment is filled with comfort, excitement, and unforgettable memories.</p>
      <h2>Why Choose Custom Luxury Tours?</h2>
      <p>A custom luxury tour allows you to craft the vacation of your dreams, entirely designed around your preferences. Unlike conventional tours, which follow a rigid schedule, custom luxury tours offer the freedom to choose your destinations, accommodations, activities, and experiences. This level of personalization ensures that your trip will be unique, with every detail taken care of to meet your specific needs.</p>
      <p>Imagine enjoying a private yacht cruise in the Mediterranean, a guided expedition through the Swiss Alps, or a private cooking class in the heart of Tuscany — all while staying in luxurious hotels and indulging in exquisite dining. With custom luxury tours, you can design a trip that offers the perfect balance of relaxation, exploration, and indulgence.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, our team of travel experts works with you to build an itinerary that reflects your personal interests, whether you're an art lover, adventure seeker, or a foodie. Our goal is to provide you with an unparalleled travel experience that feels exclusive and tailored just for you.</p>
      <h2>Explore the World with Luxury Holiday Tours</h2>
      <p>For those who prefer a more curated experience, luxury holiday tours offer a perfect blend of relaxation and discovery. These tours are designed to provide you with a stress-free way to explore the world's most beautiful destinations, all while enjoying the finest luxuries available.</p>
      <p>Whether you're dreaming of a holiday in the Maldives, a cultural journey through Europe, or an adventure in the African savannah, luxury holiday tours are an excellent way to experience it all. With private transfers, VIP access to attractions, and premium accommodations, these tours offer the best of both worlds — comfort and adventure.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we understand that every traveler is unique, and that's why our luxury holiday tours are flexible and customizable to ensure that your holiday is everything you’ve imagined and more. With expertly designed itineraries, you’ll visit iconic landmarks and hidden gems, all while enjoying unparalleled luxury and personal service.</p>
      <h2>The Best of Both Worlds: Luxury Travel Packages</h2>
      <p>Luxury travel packages combine the best of custom itineraries with the convenience of a pre-designed trip. These packages are ideal for travelers who want the ease of a structured itinerary, but with all the luxurious touches that make your journey special. From private jet charters to exclusive resort stays, luxury travel packages are all about indulgence, without the stress of planning.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, our luxury travel packages are designed to make every moment of your vacation extraordinary. Whether you're looking to explore the vibrant cities of Europe, unwind on a beach in the Caribbean, or embark on a cultural journey through Asia, our packages are tailored to deliver exceptional experiences.</p>
      <p>Each luxury travel package is crafted to suit your preferences, ensuring that your vacation is filled with unforgettable memories. You can opt for a package that focuses on adventure, culture, or pure relaxation — whatever suits your style.</p>
      <h2>Start Your Journey with Sam Luxury Tours</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we are dedicated to offering exceptional travel experiences, from custom luxury tours to luxury holiday tours and luxury travel packages. Our team works closely with you to design a personalized itinerary that fulfills your dream vacation, ensuring every detail is taken care of.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to explore our range of luxury travel packages and begin planning your next bespoke journey. For more travel inspiration, check out this <a href="/luxury-travel-guide">luxury travel guide</a> to help you choose the perfect destination.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in holiday tours.' },
    category: 'Luxury Packages',
    tags: ['Custom luxury tours', 'Luxury holiday tours', 'Luxury travel packages'],
    publishedAt: '2024-02-20',
    readTime: 11,
    featured: false,
    image: image8 //'https://images.pexels.com/photos/5708375/pexels-photo-5708375.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    slug: 'ultimate-getaway-tailored-luxury-vip-tours',
    title: 'Experience the Ultimate Getaway with Tailored Luxury Vacations and VIP Tours',
    excerpt: 'For travelers who demand more than just a vacation, tailored luxury vacations offer an unparalleled way to explore the world. At Sam Luxury Tours, we specialize in curating extraordinary journeys designed just for you.',
    content: `
      <p>For travelers who demand more than just a vacation, tailored luxury vacations offer an unparalleled way to explore the world. Imagine crafting a bespoke itinerary that caters exclusively to your preferences, with the finest accommodations, personalized experiences, and seamless service. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in curating extraordinary journeys designed just for you. Whether you’re seeking a relaxing escape or an adventurous retreat, VIP tours and private guided tours ensure that every moment of your trip is filled with comfort, exclusivity, and adventure.</p>
      <h2>Why Choose Tailored Luxury Vacations?</h2>
      <p>A tailored luxury vacation is the epitome of personalized travel. Unlike traditional tours, which follow a fixed itinerary, a tailored luxury vacation gives you the flexibility to design every aspect of your trip. From handpicking your destinations to choosing your accommodations and activities, every detail is customized to ensure the experience is uniquely yours.</p>
      <p>Whether you’re looking for a romantic getaway in a secluded destination, a family vacation with exclusive access to attractions, or a cultural exploration with private guides, tailored luxury vacations allow you to create a trip that suits your individual style. Imagine staying in a private villa on the Amalfi Coast, enjoying a gourmet dinner in the heart of Paris, or taking a private tour of the pyramids in Egypt — tailored luxury vacations offer the ultimate in exclusive experiences.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, our team of travel experts works with you to create the perfect itinerary, making sure your vacation is as unique and unforgettable as you are.</p>
      <h2>Enhance Your Journey with VIP Tours</h2>
      <p>For those who desire the ultimate in exclusivity, VIP tours provide a level of luxury that is second to none. Whether you’re visiting the cultural landmarks of Rome, exploring the temples of Angkor Wat, or experiencing the high life in New York City, VIP tours ensure that you have access to the most exclusive attractions and experiences. Skip the lines, enjoy private access, and indulge in the most luxurious services available.</p>
      <p>With VIP tours, you’ll receive personalized attention, first-class accommodations, private transportation, and expert guides who will share their insider knowledge of the destination. Whether you prefer a private boat ride along the Seine River in Paris or a behind-the-scenes tour of a world-renowned museum, VIP tours give you a level of access and luxury that few others can match.</p>
      <h2>The Advantage of Private Guided Tours</h2>
      <p>One of the highlights of tailored luxury vacations and VIP tours is the opportunity to enjoy private guided tours. These tours provide you with the expertise of a local guide who tailors the experience to your interests, ensuring you don’t miss out on the hidden gems of the destination. From historical insights to cultural recommendations, private guided tours offer a deeper understanding of the place you’re visiting.</p>
      <p>Imagine walking through the ancient ruins of Petra with a private archaeologist, or exploring the Louvre with a knowledgeable art historian. Private guided tours allow you to dive deeper into the destination and experience it in a more intimate and personal way. You’ll have the undivided attention of your guide, who will cater to your specific interests and needs, making your experience truly one-of-a-kind.</p>
      <h2>Start Your Journey with Sam Luxury Tours</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we are passionate about providing exceptional, customized travel experiences. Whether you’re booking a tailored luxury vacation, a VIP tour, or a private guided tour, we ensure that your journey is seamless, luxurious, and memorable. Our team of experts will work with you to craft the perfect itinerary, so you can experience the world in the best possible way.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to start planning your next bespoke getaway today. For more ideas and inspiration, check out this <a href="/luxury-travel-blog">luxury travel blog</a> to discover new destinations and exclusive experiences.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in VIP tours.' },
    category: 'Tailored Vacations',
    tags: ['Tailored luxury vacations', 'VIP tours', 'Private guided tours'],
    publishedAt: '2024-02-25',
    readTime: 12,
    featured: true,
    image: image9 //'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '10',
    slug: 'unveil-world-luxury-travel-experiences-escorted-tours',
    title: 'Unveil the World with Luxury Travel Experiences and Luxury Escorted Tours',
    excerpt: 'When it comes to creating unforgettable memories, nothing beats luxury travel experiences. At Sam Luxury Tours, we specialize in curating exclusive travel experiences that go beyond the ordinary, offering the highest level of luxury, comfort, and personalized service.',
    content: `
      <p>When it comes to creating unforgettable memories, nothing beats luxury travel experiences. Whether you're looking to indulge in the finest accommodations, explore hidden gems, or embark on a unique adventure, the world of luxury travel offers something for every kind of traveler. At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in curating exclusive travel experiences that go beyond the ordinary, offering the highest level of luxury, comfort, and personalized service. From luxury escorted tours to handpicked destinations, we’re here to make your dream vacation a reality.</p>
      <h2>Why Opt for Luxury Travel Experiences?</h2>
      <p>Luxury travel experiences are designed to offer travelers the best of the best. These experiences go beyond typical tourist attractions and immerse you in the beauty and culture of your chosen destination, all while providing the highest level of service. Whether you're exploring the beaches of the Maldives, enjoying a private wine tasting in Tuscany, or exploring ancient ruins with an expert archaeologist, luxury travel experiences offer something truly exceptional.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we ensure that every trip is uniquely tailored to your interests, whether you prefer to relax in a luxury spa, embark on a thrilling adventure, or dive into the heart of a city’s culture. From private tours to exclusive experiences, we offer the perfect balance of relaxation, exploration, and indulgence.</p>
      <h2>Discover Exclusive Travel Experiences Like Never Before</h2>
      <p>For travelers who desire a truly one-of-a-kind adventure, exclusive travel experiences are the ultimate way to elevate your journey. These experiences are curated to provide rare, bespoke opportunities that are not available to the general public. Think of private yacht charters in the Caribbean, after-hours access to museums, or helicopter tours over iconic landmarks like the Grand Canyon.</p>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, our exclusive travel experiences are crafted to match your desires and provide you with access to the most extraordinary destinations and events. Whether you're enjoying a private sunset cruise along the Amalfi Coast or attending a VIP event in Monaco, these experiences are designed to be unforgettable, offering luxury and exclusivity at every turn.</p>
      <h2>The Comfort of Luxury Escorted Tours</h2>
      <p>If you’re looking for a mix of exploration and comfort, luxury escorted tours offer the perfect solution. These tours allow you to enjoy the finest experiences while being guided by experts in the field. From intimate group tours to private, personalized excursions, luxury escorted tours ensure that every detail of your journey is taken care of, allowing you to focus on what matters most — enjoying your vacation.</p>
      <p>Luxury escorted tours offer the benefit of expert guides who share their local knowledge, helping you gain deeper insights into the culture, history, and beauty of your destination. You’ll travel in style, whether you’re exploring the art museums of Paris, the ancient ruins of Rome, or the natural wonders of Costa Rica. These tours often include VIP access to attractions, private transfers, and luxury accommodations, ensuring a seamless and enriching experience.</p>
      <h2>Why Choose Sam Luxury Tours for Your Next Luxury Travel Experience?</h2>
      <p>At <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a>, we specialize in providing bespoke itineraries that cater to your unique tastes and preferences. Whether you’re looking for luxury travel experiences, exclusive travel experiences, or luxury escorted tours, we are committed to delivering a travel experience that exceeds your expectations.</p>
      <p>Our team works with you every step of the way to craft a personalized journey that is as luxurious as it is unforgettable. From selecting the perfect destinations to arranging VIP access and private tours, we ensure that every detail is carefully planned for you. Your satisfaction is our top priority, and we strive to make each trip an exceptional experience.</p>
      <p>Visit our website at <a href="https://www.samluxurytours.com" target="_blank" rel="noopener noreferrer">Sam Luxury Tours</a> to explore our curated luxury travel options and start planning your dream getaway. For more travel inspiration, check out this <a href="/luxury-travel-guide">luxury travel guide</a> to help you choose the perfect destination.</p>
    `,
    author: { name: 'Sam Luxury Tours Team', avatar: authorAvatar, bio: 'Experts in escorted tours.' },
    category: 'Luxury Travel',
    tags: ['Luxury travel experiences', 'Exclusive travel experiences', 'Luxury escorted tours'],
    publishedAt: '2024-03-01',
    readTime: 12,
    featured: false,
    image: image10 
  }
];

export function BlogProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <BlogContext.Provider value={{
      posts: mockPosts,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      filteredPosts
    }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
}