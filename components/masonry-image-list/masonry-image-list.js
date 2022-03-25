import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Link from '../link/link';
import classes from '../../styles/globals.module.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const myLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 95}`;
};

function MasonryList({ itemData }) {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box component={Container} mt={5}>
      <ImageList variant="masonry" cols={matchesSM ? 2 : 3} gap={8}>
        {itemData.map((item, i) => (
          <ImageListItem
            key={item.url}
            component={Link}
            href={`/${item.project}`}
          >
            <Image
              src={item.url}
              alt={item.title}
              loader={myLoader}
              width={400}
              height={300}
              className={classes.gimg}
            />
            <ImageListItemBar
              sx={{ textAlign: 'center', p: 1 }}
              title={item.title}
              actionIcon={<VisibilityIcon sx={{ fill: 'white' }} />}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default MasonryList;
