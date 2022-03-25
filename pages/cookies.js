import * as contentful from 'contentful';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { StyledSpan } from '../components/styled-components/styled-components';
import classes from '../styles/globals.module.css';

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 95}`;
};

const StyledParagraph = styled('p')({});

function CookiesPage({ cookies: { items } }) {
  const {
    title,
    content: { content },
    images,
  } = items[0].fields;
  const hero = images[0].fields.file.url;
  const Text = ({ children }) => <StyledParagraph>{children}</StyledParagraph>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };
  return (
    <Grid container mb={10}>
      <Grid item container justifyContent="center" mt={5} mb={5}>
        <Typography variant="h2">
          {title}
          <StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
          <StyledSpan>.</StyledSpan>
        </Typography>
      </Grid>
      <Grid
        item
        container
        sx={{ display: 'block', width: '100vw' }}
        justifyContent="center"
        p={4}
      >
        <Image
          src={hero}
          alt="hero"
          width={400}
          height={300}
          layout="responsive"
          className={classes.gimg}
          loader={myLoader}
          priority
        />
      </Grid>
      <Grid item container p={4}>
        {content.map((c, i) => {
          return (
            <div key={`${c}-${i}`}>{documentToReactComponents(c, options)}</div>
          );
        })}
      </Grid>
    </Grid>
  );
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntries({ content_type: 'cookiesPage' });
  return { props: { cookies: data } };
}

export default CookiesPage;
