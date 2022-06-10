import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
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
import { Container } from '@mui/system';


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
    <Divider />
    <List>
      {users.map((user, i) => (
        <ListItem
          divider={i < user.length - 1}
          key={user.id}
        >
          <Feed title={user.name} date={user.updatedAt} text={user.text} imageUrl={user.imageUrl} />
        </ListItem>
      ))}
    </List>
    <Divider />
  </Container>
);
