import React from 'react';
import Header from '../Components/Header';
import Button from '../Components/Button';
import ButtonWhite from '../Components/ButtonWhite';
import Card from '../Components/Card';
import ImageCard from '../Components/ImageCard';
import { BeakerIcon ,GlobeAltIcon ,BookOpenIcon ,CodeBracketIcon ,ArrowLongLeftIcon,ArrowLongRightIcon} from '@heroicons/react/24/solid'
import IconCard from '../Components/IconeCard';
import Footer from '../Components/Footer';



type LandingPageProps = {
  title: string;
};

const LandingPage: React.FC<LandingPageProps> = ({ title }) => {

  return (
    <div className='text-white bg-gradient-to-b from-dark-blue to-light-blue space-y-10 '>
      
        <Header title=''/>
        <main className="py-12 space-y-10 ">
            <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-12 ">
              <div className='flex justify-start'>
              <div className='max-w-md p-2'>
                <h2 className="text-4xl font-bold mb-6">
                    Adding the <span className='text-blue-600'>"E"</span> <br/> solution to your commerce needs.
                </h2>
                <p className="mb-4">
                  Ollkom is activally providing support to empower the upcoming generation of ent Ollkom is activally providing support to empower the upcoming generation of element Ollkom is 
                </p>
                <div className='flex gap-5 w-2/3'>
                  <Button title={"Start Free Trial"}/>
                  <ButtonWhite title={"Get in Touch"}/>
                </div>
              </div>
              </div>
              <div className=" ">
                IMage Setion
              </div>
            </div>
            <div className='border-b border-[#8899A8] max-w-5xl mx-auto '>
              <div className='p-3 flex gap-3 justify-around mb-7'>
                <div className='text-3xl font-bold'>LOGO </div>
                <div className='text-3xl font-bold'>LOGO </div>
                <div className='text-3xl font-bold'>LOGO </div>
                <div className='text-3xl font-bold'>LOGO </div>
                <div className='text-3xl font-bold'>LOGO </div>
                <div className='text-3xl font-bold'>LOGO </div>
                <div className='text-3xl font-bold'>LOGO </div>
              </div>
            </div>
            <div className='m-5 max-w-5xl mx-auto mt-9 border-b border-[#8899A8] space-y-8'>
              <div className='text-4xl font-bold  '>
                  What We Offer
              </div>
              <div>
                There is many variations of pasages of lorem ipsum available <br/>
                but the majority have suffered alternation in some form.
              </div>
              <div className='grid grid-cols-3 gap-4 justify-items-center pb-16'>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<BookOpenIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<CodeBracketIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-12 ">
              
              <div className=" ">
                IMage Setion
              </div>
              <div className='flex justify-start'>
              <div className='max-w-md p-2 space-y-7'>
                
                <h2 className="text-4xl font-bold ">
                    From First touch to <br/>full funnel
                </h2>
                <IconCard icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Reach New Leads'} description={'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.'}/>
                <IconCard icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Reach New Leads'} description={'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.'}/>
                <IconCard icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Reach New Leads'} description={'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.'}/>

              </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-12 ">
              <div className='flex justify-start'>
              <div className='max-w-md p-2 space-y-7'>    
                <h2 className="text-4xl font-bold ">
                    Streamline Your  <br/>Back Office
                </h2>
                <IconCard icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Reach New Leads'} description={'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.'}/>
                <IconCard icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Reach New Leads'} description={'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.'}/>
                <IconCard icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Reach New Leads'} description={'Find new shoppers with the SEO, social media, and content marketing tools that help you reach customers where they are.'}/>

              </div>
              </div>
              <div className=" ">
                IMage Setion
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-12 ">
              
              <div className=" ">
                IMage Setion
              </div>
              <div className='flex justify-start'>
              <div className='max-w-md p-2 space-y-7'>
                
                <h2 className="text-4xl font-bold ">
                    Discover Why Millions  <br/>of enterpreneurs chose <br/> Ollkom to Build their <br/>business - <br/>from hello world to IPO.
                </h2>
                <div className='text-sm'>
                    It is a long established fact that a reader will be distracted by<br/> the readable content of a page when looking at its layout. The <br/> point of using Lorem Ipsum is that it has a more-or-less.
                </div>
                <div className='space-y-12'>
                <div className='flex justify-between'>
                <div className='flex space-x-5'>
                    <div className='h-20 w-1 rounded-full bg-gradient-to-b from-light-blue to-white'></div>
                    <div className='space-y-3'>
                        <div className='text-xl font-bold'>Millions</div>
                        <div className='text-sm'>of Merchant<br/> World wild</div>
                    </div>
                </div>
                <div className='flex space-x-5'>
                    <div className='h-20 w-1 rounded-full bg-gradient-to-b from-light-blue to-white'></div>
                    <div className=' flex-row space-y-3 ' >
                        <div className='text-xl font-bold'>170+</div>
                        <div className='text-sm'>Country represented</div>
                    </div>
                </div>
                </div>
                <div className='flex justify-between'>
                <div className='flex space-x-5'>
                    <div className='h-20 w-1 rounded-full bg-gradient-to-b from-light-blue to-white'></div>
                    <div className='space-y-3'>
                        <div className='text-xl font-bold'>10%</div>
                        <div className='text-sm'>of total GCC <br/>ecommerce</div>
                    </div>
                </div>
                <div className='flex space-x-5'>
                    <div className='h-20 w-1 rounded-full bg-gradient-to-b from-light-blue to-white'></div>
                    <div className=' flex-row space-y-3 ' >
                        <div className='text-xl font-bold'>$144B</div>
                        <div className='text-sm'>global economic act</div>
                    </div>
                </div>
                </div>
                <div className='w-1/2'>
                    <Button title={"Get Started"}/>
                </div>
                </div>
                
                

              </div>
              </div>
            </div>
            <div className="flex flex-col  items-center justify-around space-y-12  md:space-x-12 ">
              <div className='space-y-14'>
                <h2 className="text-4xl font-bold mb-4 ml-8 text-center">
                    Here What other Companies Have to <br/>Say About to OLLkom
                </h2>
                <video width="850" height="500" className='rounded-xl' controls >
                  <source src="..Videos/video1.mp4" type="video/mp4"/>
                </video>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0  ">
              
              <div className=" ">
                IMage Setion
              </div>
              <div className='flex justify-start'>
              <div className='max-w-md p-2 space-y-7'>
                
                <h2 className="text-3xl font-bold ">
                    RetKom
                </h2>
                <div className=' italic '>File storage made easy - including powerful <br/> features you won't find anyways else.<br/> Whether you're</div>
                <div className='space-y-2'>
                  <div className='font-bold text-md'> Larry Diamond</div>
                  <div className='text-sm'>Chif exective Office</div>
                </div>
                <div className='flex space-x-3'>
                  <div className='w-10 h-10 rounded-full bg-white'><ArrowLongLeftIcon className="h-[40px] w-[25px] p-1 text-[#111928] ml-2" /></div>
                  <div className='w-10 h-10 rounded-full bg-white'><ArrowLongRightIcon className="h-[40px] w-[25px] p-1 text-[#111928] ml-2" /></div>
                </div>

              </div>
              </div>
            </div>

            <div className="flex flex-col  items-center justify-around space-y-12  md:space-x-12 ">
              <div className='space-y-14'>
                <h2 className="text-4xl font-bold mb-4 ml-8">
                    Our Popular Themes
                </h2>
                <span>There are many variations of passages of Lorem Ipsum available <br/> but the majority have suffered alteration in some form.</span>

                <div className='flex gap-8 font-bold cursor-pointer'>
                  <div className='rounded-md py-1 px-6 bg-blue-600 '>All</div>
                  <div>Fashion</div>
                  <div>Hardware</div>
                  <div>Utils</div>
                  <div>CMS</div>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-4 justify-items-center pb-16 max-w-5xl mx-auto '>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<BookOpenIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<CodeBracketIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '}/>
              </div>
              
            </div>




        </main>
        <Footer title='' />
    </div>
  )
};

export default LandingPage;