import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import classes from '../../styles/globals.module.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 95}`;
};

function IndividualImgList({ itemData }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  console.log(itemData);

  return (
    <Grid
      container
      component="div"
      justifyContent="center"
      sx={{ width: '100vw' }}
      alignItems="center"
      mt={5}
      mb={5}
    >
      <ImageList
        gap={10}
        sx={{
          width: '90vw',
        }}
        variant="masonry"
        cols={2}
        rows={1}
      >
        {itemData.map((item, i) => {
          const cols = item.isFeatured ? 2 : 1;
          const rows = item.isFeatured ? 2 : 1;
          return (
            <ImageListItem
              key={`${item.title}-${item.url}`}
              rows={rows}
              cols={cols}
            >
              <Image
                src={item.url}
                alt={item.title}
                width={item.width}
                height={item.height}
                loader={myLoader}
                layout="intrinsic"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Grid>
  );
}

export default IndividualImgList;
