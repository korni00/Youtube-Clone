import React, { useState } from 'react';
import { styled, Button } from '@mui/material';
const CategorySwipe = () => {
  const SwipeSkeleton = styled('div')`
    height: 45px;
    padding: 2rem 2rem;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    & button {
      color: white;
      background: rgba(255, 255, 255, 0.1);
      line-height: 0.9;
      padding: 0.55rem;
      font-size: 14px;
      font-weight: 200;
      text-transform: capitalize;
      margin-right: 1rem;
    }
    & button:nth-child(1) {
      color: black;
      background: white;
      line-height: 0.9;
      padding: 0.55rem;
      font-size: 14px;
      font-weight: 200;
      text-transform: capitalize;
      margin-right: 1rem;
    }
  `;

  const Categories = {
    1: 'Wszystko',
    2: 'Playlisty Youtube Mix',
    3: 'Muzyka',
    4: 'Gry',
    5: 'Na żywo',
    6: 'Programy kulinarne',
    7: 'Rapowanie',
    8: 'Przygodowe gry akcji',
    9: 'Ostatnio przesłane',
    10: 'Obejrzane',
    11: 'Nowe rekomendacje',
  };

  return (
    <SwipeSkeleton>
      {Object.keys(Categories).map((categoryId) => (
        <Button key={categoryId}>{Categories[categoryId]}</Button>
      ))}
    </SwipeSkeleton>
  );
};

export default CategorySwipe;
