import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './Navigation';
import Banner from './Banner';
import Heading from './Heading';
import Button from './Button';
import ArticleList from './ArticalList'; // Make sure there is no local definition here
import TutorialList from './TutorialList';
import Footer from './Footer';
import EmailBanner from './signup'; // Import it directly from the source file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='Container'>
    <Navigation />
    <Banner />
    <div className='heading'>
      <Heading title="Featured Articles"/>
    </div>
    <ArticleList />
    <div className='button'>
      <Button name="See all articles" />
    </div>
    <div className='heading2'>
      <Heading title="Featured Tutorials"/>
    </div>
    <TutorialList />
    <div className='button2'>
      <Button name="See all tutorials" />
    </div>
    <EmailBanner />
    <Footer />
  </div>
);
