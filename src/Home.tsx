import React from 'react';
import Header from './Components/Header';
import Button from './Components/Button';
import ButtonWhite from './Components/ButtonWhite';
import Card from './Components/Card';
import ImageCard from './Components/ImageCard';
import { BeakerIcon ,GlobeAltIcon ,BookOpenIcon ,CodeBracketIcon} from '@heroicons/react/24/solid'



type HomeProps = {
  title: string;
};

const Home: React.FC<HomeProps> = ({ title }) => {

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
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<BookOpenIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<CodeBracketIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-12 ">
              
              <div className=" ">
                IMage Setion
              </div>
              <div className='flex justify-start'>
              <div className='max-w-md p-2 space-y-4'>
                <span className='font-semibold '>Why choose us</span>
                <h2 className="text-4xl font-bold ">
                    Make Your Customers <br/>happy by giving <br/>Service.
                </h2>
                <p className="">
                It is a long established fact that a reader will be distracted by the readable content of a page when locking at its layout. The point of using Lorem Ipsum is that it has a more-pr-less.
                </p>
                <p>A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.</p>
                <div className='flex gap-5 w-2/3'>
                  <Button title={"Get started"}/> 
                </div>
              </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 md:space-x-12 ">
              <div className='flex justify-start'>
              <div className='max-w-md p-2 space-y-8'>
                <h2 className="text-4xl font-bold ">
                    Discover the Companies <br/>Who selected Ollkom
                </h2>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam fringilla, scelerisque nisi in, accumsan diam. Quisque sollicitudin risus eu tortor euismod imperdiet.
                </p>
                <div className=' w-2/3'>
                  <button className='bg-transparant border border-white rounded-full py-2 px-4'>Know More</button>
                </div>
              </div>
              </div>
              <div className=" ">
                IMage Setion
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

              <div className='grid grid-cols-3 gap-4 justify-items-center pb-16'>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<GlobeAltIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<BookOpenIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<CodeBracketIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
                <Card icon={<BeakerIcon className="h-[50px] w-[50px] p-1 " />} heading={'Refreshing Design'} description={'We dejoy working with disignig for whom ,We dejoy working with disignig for whom disignig for whom ,We dejoy working with disignig for whom  '} backGround={"#111928"}/>
              </div>
              
            </div>




        </main>
    </div>
  )
};

export default Home;