import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// components
import AppHead from '@/components/atoms/AppHead';
import AppHeader from '@/components/organisms/AppHeader';
import AppHero from '@/components/atoms/AppHero';
import AppSection from '@/components/atoms/AppSection';
import AppBanner from '@/components/atoms/AppBanner';
import AppFooter from '@/components/atoms/AppFooter';
import AppNearby from '@/components/atoms/AppNearby';
import { IExploreNearby, ILiveAnywhere } from 'typings';
import CostEstomator from '@/components/molecules/cost-estimator';

interface IHomeDataProps {
  exploreNearby: IExploreNearby[];
  liveAnywhere: ILiveAnywhere[];
}

const exploreNearby = [
  {
    id: '0f46bb21-7fe5-4031-a7f0-1948cf6828ac',
    img: '/assets/images/4.jpg',
    location: 'Sitting Room',
    distance: 'Comfortable living room',
  },
  {
    id: 'd436e904-f17e-48e3-bd84-f63b87d48b09',
    img: '/assets/images/k1.jpg',
    location: 'Kitchen',
    distance: 'Fully equiped kitchen',
  },
  {
    id: 'd83c78cb-9f43-48b9-b76f-c1c0ff131c33',
    img: '/assets/images/3.jpg',
    location: 'Toilet',
    distance: 'Clean toilet',
  },
  {
    id: 'ac0a496c-f6d2-4637-8fa9-59a197260b16',
    img: '/assets/images/b3.jpg',
    location: 'Bed Room',
    distance: 'Comfortable bed room',
  },
];

const liveAnywhere = [
  {
    id: '2a5c2d86-fb19-43b1-a0f2-2069c0d1a41f',
    img: '/assets/images/4.jpg',
    title: '2 Bed Room Appartment',
  },
  {
    id: '4c9d6acf-041f-4a4e-8a86-51475ccde4b0',
    img: '/assets/images/6.jpg',
    title: 'Studio Morden',
  },
  {
    id: 'e9278833-f963-4af0-9edc-fe372ded10cb',
    img: '/assets/images/k2.jpg',
    title: 'Entire homes',
  },
  {
    id: 'f588e9ce-32c4-47da-922f-b667265111d2',
    img: '/assets/live-anywhere/8ix.webp',
    title: 'Pet allowed',
  },
];

const Home: FC<IHomeDataProps> = ({ exploreNearby, liveAnywhere }) => {
  return (
    <>
      <AppHead />
      <AppHeader exploreNearby={exploreNearby} />
      <main>
        {/* hero */}
        <AppHero />
        {/* explore nearby section */}
        <AppSection
          title="Explore Nearby"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 sm:grid-cols-3 lg:grid-cols-4"
        >
          {exploreNearby.map((data, index) => (
            <AppNearby key={index} data={data} />
          ))}
        </AppSection>
        {/* live anywhere section */}
        <AppSection
          title="Live Anywhere"
          className="grid grid-cols-2 lg:gap-x-4 gap-x-1 gap-y-2 lg:grid-cols-4"
        >
          {liveAnywhere.map((data, index) => (
            <Link key={index} href="#">
              <a>
                <div className="p-2 duration-300 lg:p-3 gap-y-4 active:scale-105 active:bg-gray-200 active:bg-opacity-40 rounded-xl">
                  <div className="relative w-full h-40 mb-2 md:h-60 lg:h-72">
                    <Image
                      src={data.img}
                      alt={data.title}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={data.img}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium leading-5 text-gray-500 text-md md:text-xl">
                      {data.title}
                    </h3>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </AppSection>
        <CostEstomator />
        {/* bottom banner */}
        <AppBanner />
      </main>
      {/* footer */}
      <AppFooter />
    </>
  );
};

export const getStaticProps = async () => {
  // const exploreNearby = await getExploreNearby();
  // const liveAnywhere = await getLiveAnywhere();

  return {
    props: { exploreNearby, liveAnywhere },
  };
};

export default Home;
