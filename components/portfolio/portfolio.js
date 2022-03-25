import MasonryList from '../masonry-image-list/masonry-image-list';
import Typography from '@mui/material/Typography';
import { StyledSpan } from '../styled-components/styled-components';

function Portfolio({ items }) {
  const presentationPics = items.map((item) => ({
    url: item.fields.presentationPic.fields.file.url,
    title: item.fields.picTitle.split(' ')[0],
    width: item.fields.presentationPic.fields.file.details.image.width,
    height: item.fields.presentationPic.fields.file.details.image.height,
    project: item.fields.picTitle,
  }));

  return (
    <>
      <Typography variant="h2" align="center">
        Portofoliu<StyledSpan>.</StyledSpan>
        <StyledSpan>.</StyledSpan>
        <StyledSpan>.</StyledSpan>
      </Typography>
      <MasonryList itemData={presentationPics} />
    </>
  );
}

export default Portfolio;
