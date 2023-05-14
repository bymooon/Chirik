import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonShowMore from '../../components/ButtonShowMore/ButtonShowMore';
import Following from '../../components/Following/Following';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import ModalUser from '../../components/ModalUser/ModalUser';
import PostList from '../../components/PostList/PostList';
import ReplayModal from '../../components/ReplayModal/ReplayModal';
import SearchField from '../../components/SearchField/SearchField';
import { getPost } from '../../features/slices/homeSlice';

function Home() {
  const recommendation = useSelector((state) => state.home.recommendation);
  const following = useSelector((state) => state.home.following);
  const modalUserState = useSelector((state) => state.home.modalUser);

  const dispatch = useDispatch();
  const fetchPost = () => {
    fetch('./data.json')
      .then((r) => r.json())
      .then((products) => {
        dispatch(getPost(products));
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <HeaderMain />
        <ButtonShowMore />
        {recommendation && <PostList />}
        {following && <Following />}
        {modalUserState && <ModalUser />}
        <ReplayModal />{' '}
      </Grid>
      <Grid item xs={5}>
        <SearchField />
      </Grid>
    </Grid>
  );
}

export default Home;
