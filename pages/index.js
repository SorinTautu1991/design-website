import Grid from '@mui/material/Grid';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as contentful from 'contentful';
import LineAnimation from '../components/line-animation/line-animation';
import { useInView } from 'react-intersection-observer';
import Box from '@mui/material/Box';
import HomeScreen from '../components/home-screen/home-screen';
import Portfolio from '../components/portfolio/portfolio';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Servicii from '../components/servicii/servicii';

function Home({
  homepage: { items },
  despre: { items: despreData },
  servicii: { items: serviciiData },
}) {
  const { ref: homeRefRouter, inView: inViewHome } = useInView();
  const router = useRouter();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);

  function handleScroll(url) {
    switch (url) {
      case '/despre':
        aboutRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
        return;
      case '/contact':
        contactRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
        return;
      case '/portofoliu':
        portfolioRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
        return;
      case '/servicii':
        servicesRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
        return;
      default:
        scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      handleScroll(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Grid container mt={10}>
        <Grid
          item
          container
          ref={homeRef}
          justifyContent="center"
          alignItems="center"
        >
          <Box ref={homeRefRouter}>
            <HomeScreen />
          </Box>
        </Grid>

        <Grid item container ref={portfolioRef}>
          <Grid item container justifyContent="center">
            <LineAnimation />
          </Grid>
          <Grid item container justifyContent="center">
            <Portfolio items={items} />
          </Grid>
        </Grid>
        <Grid item container ref={aboutRef}>
          <Grid item container justifyContent="center">
            <LineAnimation />
          </Grid>
          <Grid item container>
            <About data={despreData} />
          </Grid>
        </Grid>
        <Grid item container ref={servicesRef}>
          <Grid item container justifyContent="center">
            <LineAnimation />
          </Grid>
          <Grid item container>
            <Servicii data={serviciiData} />
          </Grid>
        </Grid>
        <Grid item container ref={contactRef}>
          <Grid item container justifyContent="center">
            <LineAnimation />
          </Grid>
          <Grid item container>
            <Contact />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntries({
    content_type: 'portfolioPresentation',
  });

  const despreData = await client.getEntries({
    content_type: 'desprePage',
  });

  const serviciiData = await client.getEntries({
    content_type: 'serviciiPage',
  });
  return {
    props: { homepage: data, despre: despreData, servicii: serviciiData },
  };
}

export default Home;
