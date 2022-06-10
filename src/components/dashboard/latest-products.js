import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Feed } from './../feed'


const users = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: 'B',
    updatedAt: subHours(Date.now(), 2).toISOString(),
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.'

  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: 'R',
    updatedAt: subHours(Date.now(), 2).toISOString(),
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.'
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: 'M',
    updatedAt: subHours(Date.now(), 3).toISOString(),
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.'

  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: 'P',
    updatedAt: subHours(Date.now(), 5).toISOString(),
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.'

  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: 'G',
    updatedAt: subHours(Date.now(), 9).toISOString(),
    text: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.'

  }
];

export const LatestProducts = (props) => (
  <Container {...props}>
    {/* <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Products"
    /> */}
    {/* <Divider /> */}
    <List>
      {users.map((user, i) => (
        <ListItem
          divider={i < user.length - 1}
          key={user.id}
        >

          {/* <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar> */}
          {/* <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton> */}
          <Feed title={user.name} date={user.updatedAt} text={user.text} imageUrl={user.imageUrl} />
        </ListItem>
      ))}
    </List>
    <Divider />
    {/* <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box> */}
  </Container>
);
