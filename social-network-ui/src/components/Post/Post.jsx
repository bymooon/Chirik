import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RepeatIcon from '@mui/icons-material/Repeat';
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';

import { usePostStyle } from './PostStyle';

export default function Post(props) {
  const classes = usePostStyle();

  return (
    <Card className={props.classes}>
      <CardHeader
        className={classes.pageItem}
        avatar={<Avatar aria-label="recipe" alt={props.name} src={props.avatar}></Avatar>}
        action={
          <Tooltip title="More">
            <IconButton aria-label="settings" onClick={props.handleClick} className={classes.iconColor}>
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
        }
        title={props.name}
        subheader={
          <Typography variant="body2" color="#fff">
            {props.data}
          </Typography>
        }
      />

      {props.originalPost && (
        <Typography variant="body1" color="#fff" sx={{ p: '10px 20px' }}>
          {props.content === null && props.image === null ? 'retweet' : 'reply'}
        </Typography>
      )}
      {props.children}
      {props.content && (
        <CardContent className={classes.pageItem}>
          <Typography variant="body2" className={classes.iconColor}>
            {props.content}
          </Typography>
        </CardContent>
      )}
      {props.image && <CardMedia component="img" image={props.image} alt="Post" className={classes.iconImg} />}

      <CardActions
        disableSpacing
        className={classes.pageItem}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Tooltip title="Reply">
          <IconButton aria-label="ChatBubbleOutline" className={classes.iconColor} onClick={props.handleClickReplay}>
            <Badge badgeContent={props.reply} color="primary">
              <ChatBubbleOutlineIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Retweet">
          <IconButton aria-label="ChatBubbleOutline" className={classes.iconColor} onClick={props.handleClickRetweet}>
            <Badge badgeContent={props.retweet} color="primary">
              <RepeatIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Like">
          <IconButton aria-label="add to favorites" className={classes.iconColor} onClick={props.handleClickLike}>
            <Badge badgeContent={props.like} color="primary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
