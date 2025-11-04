import React from 'react'
import Banner from '../../components/Header/Banner'
import Achievement from '../../components/Achievement/Achievement'
import TrendingApps from '../../components/TrendingApps/TrendingApps'
import { useLoaderData } from 'react-router'

export const Home = () => {
  const trendingAppdata = useLoaderData();
  console.log(trendingAppdata);
  return (
    <>
    <Banner></Banner>
    <Achievement></Achievement>
    <TrendingApps trendingAppdata={trendingAppdata}></TrendingApps>
    </>
  )
}
