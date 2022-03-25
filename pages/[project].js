import { useRouter } from 'next/router';
import * as contentful from 'contentful';
import IndividualImgList from '../components/individual-project-image-list/individual-image-list';
import Grid from '@mui/material/Grid';

function Project({ projectArr: { items } }) {
  const router = useRouter();
  const { project } = router.query;
  const desiredProject = items.filter(
    (item, index) => item.fields.picTitle === project
  );
  const photos = desiredProject[0].fields.allPic;
  const preparedImages = photos.map((item, index) => ({
    url: item.fields.file.url,
    title: item.fields.title,
    width: item.fields.file.details.image.width,
    height: item.fields.file.details.image.height,
    project: item.fields.title,
    isFeatured: index % 3 === 0 ? true : false,
  }));

  return (
    <Grid container>
      <Grid item container justifyContent="center">
        <IndividualImgList itemData={preparedImages} />
      </Grid>
    </Grid>
  );
}

export async function getStaticPaths() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntries({
    content_type: 'portfolioPresentation',
  });

  return {
    paths: data.items.map((item) => ({
      params: { project: item.fields.picTitle },
    })),
    fallback: false,
  };
}

export async function getStaticProps() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntries({
    content_type: 'portfolioPresentation',
  });
  return { props: { projectArr: data } };
}

export default Project;
